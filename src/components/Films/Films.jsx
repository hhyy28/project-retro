import s from './Films.module.css'
import Liker from './liker/Liker'

const Films = () =>{
    return <div className={s.content}>
        <div className={s.block}>
            <img src="https://www.denofgeek.com/wp-content/uploads/2011/09/292524.jpg?resize=640%2C432" className={s.img} alt=""></img>
            <p>Великолепный гонщик — при свете дня он выполняет каскадерские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт — и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего — виртуозно уходить от погони…</p>
            <Liker/>
        </div>
        <div className={s.block}>
            <img src="https://upload.wikimedia.org/wikipedia/uk/e/e1/%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4_%D1%83_%D0%BC%D0%B0%D0%B9%D0%B1%D1%83%D1%82%D0%BD%D1%94.jpg" className={s.img} alt=""></img>
            <p>Подросток Марти с помощью машины времени, сооруженной его другом профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, еще подростками, и другом-профессором, совсем молодым.</p>
            <Liker/>
        </div>
        <div className={s.block}>
            <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/5/53/Blade_Runner_poster.jpg/200px-Blade_Runner_poster.jpg" className={s.img} alt=""></img>
            <p>Отставной детектив Рик Декард вновь восстановлен в полиции Лос-Анджелеса для поиска возглавляемой Роем Батти группы киборгов, совершившей побег из космической колонии на Землю.</p>
            <Liker/>
        </div>
        <div className={s.block}>
            <img src="https://lh3.googleusercontent.com/proxy/9Wd9i3Gde0YQSJNVZQk1DpUSC8tLXT7NVFxp6tSGpNJ-_pCc0J1hl7nkFV9I3oiEeVMgkDDIdXO82gg_NEhVTDZvwtqXPDnWdyOoJyfVSJQiIB4Tt3AAAw" className={s.img} alt=""></img>
            <p>«Кунг Фьюри 2» — предстоящий фантастический боевик режиссёра Дэвида Сандберга. Сиквел короткометражного фильма Кунг Фьюри. В главных ролях: Майкл Фассбендер и Арнольд Шварценеггер</p>
            <Liker/>
        </div>
    </div>
}
export default Films