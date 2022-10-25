import s from './Post.module.css';

const Post = (props) => {
	return (
<div className={s.item}> 

	<div className={s.postHeader}>
		<img src='userAvatar.jpeg'/> 
		<div className={s.postInfo}>
			<div className={s.postName}>{props.postName}</div>
			<div className={s.postDate}>{props.postDate}</div>
		</div>
	</div>

	<div className={s.postMessage}>
		{props.message}
	</div>

	<div className={s.postLikes}>
		<span>{props.postWatches}</span>
		<span>{props.postLikes}</span>
	</div> 

</div>
	)
}

export default Post;