import { RichTextComponent } from "@/components/RichTextComponent"
import { client } from "@/lib/sanity.client"
import { urlFor } from "@/lib/urlFor"
import { PortableText } from '@portabletext/react'
import Image from "next/image"

interface PostPageProps {
    params: {
        slug: string
    }
}

export const revalidate = 60;

export async function generateStaticParams() {
    const slugs = await client.fetch(`
    *[_type == 'post']
    {
        slug
    }
    `)

    const slugRoutes = slugs.map((slug: any) => slug.slug.current)

    return slugRoutes.map((slug: string) => ({
        slug,
    }))
}

const PostPage = async ({ params: { slug } }: PostPageProps) => {

    const post: Post = await client.fetch(`
    *[_type == 'post' && slug.current == $slug][0]
    {
        ...,
        author ->,
        categories[]->
    }
`, { slug })



    return (
        <article className="px-10 pb-28 mt-10">
            <section className="space-y-2 border border-red-500 text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image
                            className="object-cover object-center mx-auto"
                            alt={post.author.name}
                            src={urlFor(post.author.image).url()}
                            fill
                        />
                    </div>
                    <section className="p-5 bg-red-300 w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">
                                    {post.title}
                                </h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleString(
                                        "en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image
                                    className="rounded-full"
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                />
                                <div className="w-26">
                                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                                    <div>
                                        {/* TODO: AUTHOR BIO */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                        </div>
                    </section>
                </div>
            </section>

            <PortableText
                value={post.body}
                components={RichTextComponent}
            />
        </article>
    )
}

export default PostPage