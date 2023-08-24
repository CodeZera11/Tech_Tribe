import { urlFor } from '@/lib/urlFor'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import ClientSideRoute from './ClientSideRoute'

interface BlogCardProps {
    post: Post
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {

    return (
        <ClientSideRoute href={`/post/${post.slug.current}`}>
            <div className='flex flex-col group cursor-pointer'>
                <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out'>
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                        <div>
                            <p className='font-bold'>{post.title}</p>
                            <p className='text-gray-300'>
                                {new Date(post._createdAt).toLocaleString(
                                    "en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                                )}
                            </p>
                        </div>
                        <div className='flex items-center font-bold text-lg'>
                            <p>{post.author.name}</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 mt-5'>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p className='text-gray-500 line-clamp-2'>{post.metaDesc}</p>
                </div>
                <p className='flex items-center mt-5 font-bold group-hover:underline'>
                    Read Post
                    <ArrowUpRightIcon className='h-4 w-4 ml-2' />
                </p>
            </div>
        </ClientSideRoute>
    )
}

export default BlogCard