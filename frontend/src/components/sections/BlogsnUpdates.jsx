import React from 'react'
import cardImage from '../../assets/Blogs/cardImage.webp'
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import { blogsData } from '../../data/pluginsData';

const BlogsnUpdates = () => {
    return (
        <section className='py-16 md:py-24 lg:pt-30'>
            <div className='container'>
                <div className='mx-auto mb-12 w-full max-w-[880px] text-center lg:mb-[3.75rem]'>
                    <p class="mb-5 text-lg text-primary">Blogs and Updates</p>
                    <p class="text-3xl font-bold !leading-[1.2] text-title md:text-[40px]">Our Latest Blogs</p>
                </div>
            </div>
            <div className='container'>
                <div className='grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-3'>
                    {blogsData.map(({ date, title, content }) => {
                        return (
                            <div className='group flex flex-col rounded-3xl border border-stroke bg-white p-2'>
                                <div className='block cursor-pointer aspect-[443/224] overflow-hidden rounded-2xl'>
                                    <img src={cardImage} alt='cardImage' />
                                </div>
                                <div className='flex h-full items-start flex-1 flex-col justify-between p-5'>
                                    <div className='mb-4 inline-flex gap-2 text-sm font-medium text-text-tertiary'>
                                        <Calendar size={16} />
                                        <p>{date}</p>
                                    </div>
                                    <p className='mb-2 cursor-pointer line-clamp-2 text-xl font-medium text-title duration-200 hover:text-primary'>
                                        {title}
                                    </p>
                                    <p className='mb-5 line-clamp-4 text-base text-text-secondary font-light'>{content}</p>
                                    <Button className='!px-5 !text-sm'>
                                        Read More
                                        <ArrowRight size={18} />
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogsnUpdates