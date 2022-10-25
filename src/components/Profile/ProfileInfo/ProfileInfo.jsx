import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div className={s.infoWrapper}>
			<div className={s.background}></div>
				<div className={s.user}>
					<img src='userAvatar.jpeg' alt='#noPhoto' />
						<div className={s.userInfo}>
						<div className={s.userName}>
							Jeremy Dombrovskiy
						</div>
						<div className={s.userDescription}>
							Minsk, Belarus
						</div>
				</div>	
			</div>
		</div>
	)
}

export default ProfileInfo;