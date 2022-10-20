import s from './Post.module.css';

const Post = (props) => {
	return (
<div className={s.item}> 
	<img src='avatar_01.jpeg'/> 
	{props.message}
	<div>
		<span>{props.likes}</span>
	</div> 
</div>
	)
}

export default Post;