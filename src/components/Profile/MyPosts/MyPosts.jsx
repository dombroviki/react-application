import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
<div>
	<div>
		<textarea>n</textarea>
		<button>Add post</button>
	</div>
	<div className={s.posts}>	
		<Post likes='1 like' message='Hi, how are you?'/>
		<Post likes='2 likes' message="This is my first post!" />
	</div>
</div>
	)
}

export default MyPosts;