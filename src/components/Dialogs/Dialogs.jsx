import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={`${s.dialog} ${s.active}`}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.dialog}>{props.message}</div>
	)
}


const Dialogs = (props) => {
	return (
			<div className={s.dialogs}> 
				<div className={s.dialogsItems}>
					<DialogItem name="Eugene D" id="1" />
					<DialogItem name="Misha"  id="2" />
					<DialogItem name="Max"    id="3" />
					<DialogItem name="Sergay" id="4" />
				</div>
				<div className={s.messages}>
					<Message message="Hi" />
					<Message message="How ya?" />
					<Message message="Can we met at wednesday?" />
					<Message message="I'm gay" />
				</div>
			</div>
	)
}

export default Dialogs;