import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
<div>
	<div className={s.posts}>
		
		<Post postName="Jeremy Dombrovskiy" 
				postDate="22 sep 2022" 
				postWatches='1832 watches'
				message='Свойство justify-content определяет, как браузер распределяет пространство вокруг флекс-элементов вдоль главной оси контейнера. Это делается после того, как применяются размеры и автоматические отступы, за исключением ситуации, когда по крайней мере у одного элемента flex-grow больше нуля. При этом не остаётся никакого свободного пространства для манипулирования.'
				postLikes='431 likes'
				/>

		<Post postName="Jeremy Dombrovskiy" 
				postDate="22 sep 2022" 
				postWatches='1832 watches'
				message='Свойство justify-content определяет, как браузер распределяет пространство вокруг флекс-элементов вдоль главной оси контейнера. Это делается после того, как применяются размеры и автоматические отступы, за исключением ситуации, когда по крайней мере у одного элемента flex-grow больше нуля. При этом не остаётся никакого свободного пространства для манипулирования.'
				postLikes='431 likes'
				/>
	</div>
</div>
	)
}

export default MyPosts; 