import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css"

const Sidebar =()=>{
    return(
        <nav className={s.nav}>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/main' activeClassName={s.activeLink} >main</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/music' activeClassName={s.activeLink} >music</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/films' activeClassName={s.activeLink} >films</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/users' activeClassName={s.activeLink} >Users</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/posts' activeClassName={s.activeLink} >Posts</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/shop' activeClassName={s.activeLink} >Beer store</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/maps' activeClassName={s.activeLink} >Maps</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink to='/camera' activeClassName={s.activeLink} >Camera</NavLink>
            </div>
        </nav>
    )
}
export default Sidebar