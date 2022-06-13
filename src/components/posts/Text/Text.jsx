import s from "./text.module.css"

const Posts = ({ posts }) => {
    return (
      <div>
        {posts.map(({ id, value}, idx) => (
          <div
            key={id}
            className={s.block}
        >
            <div>
              <img src = "https://image-cdn.neatoshop.com/styleimg/32074/none/black/default/243597-20.jpg" className={s.photo} alt="" />
              {value}
            </div>
          </div>
        ))}
      </div>
    );
  };
export default Posts