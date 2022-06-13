import s from './header.module.css'
import Login from "./login/login";
const Header =()=>{
   return <header className={s.wrapper}>
        <div className={s.flex_container}>
            <img src="https://external-preview.redd.it/enHKLM8QJxch3kKPD0_tG6oBR5tqKCEF0FS2SlVmcms.jpg?auto=webp&s=4abe74fb6810a729f92447f15467f5a120baaf6f" alt="" className={s.img}/>
            <div className={s.name}>
                <h1>OUTRUN</h1>
            </div>
            <Login/>
        </div>
   </header>
}
export default Header