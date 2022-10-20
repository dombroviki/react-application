import s from './Navbar.module.css';

// let c1 = "nav__item";
// let c2 = "active";
// "item active"
// let classes = c1 + " " + c2;
// let classesNew = `${s.nav__item} ${s.active}`;

const Navbar = () => {
	return <nav className={s.nav}>
	<div className={`${s.nav__item} ${s.active}`}>
	  <a href='#'>Profile</a>
	</div>
	<div className={s.nav__item}>
	 <a href='#'>Messages</a>
	</div>
	<div className={s.nav__item}>
	 <a href='#'>News</a>
	</div>
	<div className={s.nav__item}>
	  <a href='#'>Music</a>
	</div>
	<div className={s.nav__item}>
	  <a href='#'>Settings</a>
	</div>
 </nav>
}

export default Navbar;