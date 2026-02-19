import React from 'react'
import Card from '../ui/Card'
import { ChevronRight, Plus } from 'lucide-react';
import Alpine from '../../assets/Hero/Alpine';
import Figma from '../../assets/Hero/Figma';

const Features = () => {
    return (
        <section className='pt-16 md:pt-24 lg:pt-30'>
            <div className='mx-auto mb-12 w-full max-w-[810px] text-center lg:mb-[3.75rem]'>
                <p className='mb-3 text-lg text-primary'>Ready to use with your favourite front-end tools</p>
                <h2 className='text-3xl font-bold !leading-[1.2] text-title md:text-[40px]'>
                    TailAdmin is now available for HTML, React, Next.js, Laravel, Vue Angular and Laravel
                </h2>
            </div>
            <div className='px-4 xl:px-10 2xl:px-16 min-[1800px]:px-[113px]'>
                <div className='grid gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-3'>
                    {new Array(6).fill('').map((e, i) => {
                        return (
                            <Card key={i}>
                                <div className='flex justify-between items-center gap-4 flex-col'>
                                    <h2 className='mb-7.5 text-xl text-title font-medium'>
                                        HTML + Tailwind
                                    </h2>
                                    <div className='flex cursor-pointer items-center justify-center rounded-full border-[14px] border-gray-25 bg-gray-25'>
                                        <div className='flex items-center justify-center gap-3 rounded-full border-[6px] border-gray-100 bg-white p-2.5'>
                                            <div className='w-10 h-10 flex items-center bg-white justify-center shadow-[0px_8px_13px_rgba(166,175,195,0.12)] rounded-full'>
                                                <Alpine />
                                            </div>
                                            <Plus className='text-text-tertiary w-6 h-6' />
                                            <div className='w-10 h-10 flex items-center bg-white justify-center shadow-[0px_8px_13px_rgba(166,175,195,0.12)] rounded-full'>
                                                <Figma />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mb-[1.875rem] text-center text-base text-text-secondary'>
                                    TailAdmin HTML: Built-with Tailwind CSS, HTML and Alpine.js
                                    </p>
                                    <p className='flex cursor-pointer h-12 w-full items-center justify-center gap-1.5 rounded-lg bg-primary-25 text-sm text-primary duration-200 group-hover:bg-primary group-hover:text-white hover:!bg-primary-600'>
                                        Explore Now
                                        <ChevronRight/>
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features