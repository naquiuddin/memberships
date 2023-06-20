import { Mdx } from "@/components/mdx-components"
import { MDX } from 'contentlayer/core';

type PostProps = {
  title: string;
  description: string | undefined;
  paid: boolean,
  isLoggedIn: boolean,
  body: MDX;
}


const Post = function({ title = "", description = "", body, isLoggedIn=false, paid=false}: PostProps) {
  return (
      <article className="w-full px-6 mx-auto prose-lg sm:py-6 sm:w-9/12 max-w-none dark:prose-invert prose-headings:text-green-800 prose-headings:dark:text-green-400 prose-a:no-underline hover:prose-a:text-green-500 prose-h1:font-bold">
        <h1 className="mt-4 mb-4 text-4xl">{title}</h1>
        {description && (
          <p className="mt-0 text-2xl leading-normal">
            {description}
          </p>
        )}
        <hr className="my-4" />
        {paid && !isLoggedIn ? (         
            <div className="mt-4 mb-4 text-2xl leading-normal">
              <p>Sorry, this post is for members only.</p>  
            </div>
          ) : (
            <Mdx code={body.code} />
          )
        }
      </article>
  );
}

export default Post