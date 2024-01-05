import CreatePost from './components/CreatePost'
import PostItem from './components/PostItem'
import PostList from './components/PostList'

export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
      {/* <PostItem /> */}
    </div>
  )
}
