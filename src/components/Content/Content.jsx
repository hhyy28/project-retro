import s from './content.module.css'
const Content =()=>{
    return <div className={s.content}>
            <img className={s.img} src="https://i.ytimg.com/vi/3yOCk4Kn-Ss/maxresdefault.jpg" alt=""></img>
            <div className={s.title}>
                <h1>Welcome</h1>
                <h1 className={s.h1}>to outrun</h1>
            </div>
            <div className={s.block}>
                <h1>Приветствуем тебя, путник</h1>
                <div>
                    На нашем сайте ты  сможешь найти все связаненое с ретровейв темой.
                    Игры, музыка, кино - все тут.
                    Просто нажми на нужную тебе категорию  
                </div>
                <iframe width="500" height="315" src="https://www.youtube.com/embed/rDBbaGCCIhk" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
            </div>
    </div>
    
}
export default Content