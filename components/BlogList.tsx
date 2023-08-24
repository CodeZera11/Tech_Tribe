import React from 'react'
import BlogCard from './BlogCard'

interface BlogListProps {
    posts: Post[]
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {

    return (
        <div>
            <div className='bg-red-500 h-[2px] rounded-full w-full mb-10' />

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
                {posts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                ))}
            </div>

        </div>
    )
}

export default BlogList