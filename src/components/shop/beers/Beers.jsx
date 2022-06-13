import { NavLink } from 'react-router-dom';
import s from './beers.module.css';

const Beers = ({ items, isLoaded, error }) => {
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
    return(
			<div>
				{items.map(item => ( 
					<p key={items.id} className={s.block}>
						<div>
							<p> {item.name}  : "{item.tagline}" </p>
							<div>
								{item.abv} 
							</div>
							<NavLink to={"/beer/" + item.id} className={s.nav}  >
								<img src={item.image_url}  className={s.img} alt={item.name} ></img>
							</NavLink>
						</div>
					</p>
					))}
			</div>
    )
}}
export default Beers