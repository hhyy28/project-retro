const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
let store = {
    state: {
        postPage:{
            post: [
                {id: 1, nickname: "papita", text:"papa"},
                {id: 2, nickname: "papita", text:"papa"}
            ],
            newPostText: ""
        }
    },
    getState() {
        return this.state
    },
    _callSubscriber(){
        console.log('state changed');
        
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id:3,
                nickname: "papita",
                text: this.state.postPage.newPostText
            };
            this.state.postPage.post.push(newPost)
            this.state.postPage.newPostText = ''
            this._callSubscriber(this.state)
            console.log("yes", this.state.postPage.post);
        }
        else if(action.type === UPDATE_POST){
            this.state.postPage.newPostText = action.newText
            this._callSubscriber(this.state)
            console.log("no",action.newText );
                 
        }
    }
}
                                                                 
export const addPostCreator = ()=> { return{type:  ADD_POST}}
export const updatePostCreator = (text)=> {return {type:  UPDATE_POST, newText: text}}
export default store
window.store = store