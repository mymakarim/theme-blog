import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalVariantBig({ blogs, classes }) {
  function decodeHTMLEntities(str) {
    var txt = document.createElement('textarea')
    txt.innerHTML = str
    return txt.value
  }
  const First = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='col-span-12 lg:col-span-9'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={
                  blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.large
                    ? blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.large
                        .source_url
                    : blog_pack.blog._embedded['wp:featuredmedia'][0].source_url
                }
                classes='h-52 lg:h-96'
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`h-52 lg:h-96 w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='max-w-screen-lg mx-auto mt-3 text-center rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className='max-w-screen-md mx-auto'>
            {blog_pack.cats.map((cat) => {
              return (
                <div className='ml-1 text-center' key={cat.id}>
                  <Link href={`/category/${cat.slug}`}>
                    <a
                      aria-label='category'
                      className='text-xs text-indigo-600 uppercase font-medium mb-1 hover:text-gray-900 dark:hover:text-gray-100 transition duration-500 ease-in-out'
                    >
                      {cat.name}
                    </a>
                  </Link>
                </div>
              )
            })}
            <Link href={`/blog/${blog_pack.blog.slug}`}>
              <a aria-label='link'>
                <h1 className='block text-gray-900 dark:text-gray-200 font-bold text-2xl lg:text-4xl mb-4 hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-500 ease-in-out' dangerouslySetInnerHTML={{ __html: blog_pack.blog.title.rendered }} />
              </a>
            </Link>
            <div
              className='text-gray-600 text-sm mt-2 mx-5 line-clamp-4'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }

  const Default = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='mb-2 grid-cols-12'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={
                  blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                    ? blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                        .source_url
                    : blog_pack.blog._embedded['wp:featuredmedia'][0].source_url
                }
                classes={classes.imageClasses}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${classes.imageClasses} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a
            aria-label='link'
          >
            <h1 className='line-clamp-2 text-gray-900 dark:text-gray-100 inline-block font-semibold text-md my-2 hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-500 ease-in-out' dangerouslySetInnerHTML={{ __html: blog_pack.blog.title.rendered }} />
          </a>
        </Link>
      </div>
    )
  }

  const middleBlogs = blogs.slice(1)

  return (
    <>
      {
        <First
          key={blogs[0].blog.id + Math.random().toString(36).substring(7)}
          blog_pack={blogs[0]}
        />
      }
      {
        <div
          key={blogs[1].blog.id + Math.random().toString(36).substring(7)}
          className='col-span-12 lg:col-span-3 sm:flex sm:flex-row lg:flex-col justify-between gap-5 lg:gap-0'
        >
          {middleBlogs.map((blog_pack) => {
            return (
              <Default
                key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
                blog_pack={blog_pack}
              />
            )
          })}
        </div>
      }
    </>
  )
}
