import React from 'react'
import Button from '../ui/Button';
import { ChevronRight, MoveUpRight } from 'lucide-react';
import image3 from '../../assets/Components/componentImage-1.webp'

const DashboardVariations = () => {
    return (
        <section className='bg-gray-50 py-16 md:py-24 lg:py-[110px]'>
            <div className='container'>
                <div className='mx-auto mb-12 w-full max-w-[870px] text-center lg:mb-[3.75rem]'>
                    <p className='mb-5 inline-block text-lg text-primary'>
                        7 Dashboard Variations
                    </p>
                    <h2 className='text-3xl font-bold !leading-[1.2] text-title md:text-[40px]'>
                        E-Commerce, Analytics, Marketing, CRM, Analytics, Stocks, SaaS, Logistics and More!
                    </h2>
                </div>
            </div>
            <div className='container'>
                <div className='mb-20 grid gap-5 sm:grid-cols-2 sm:gap-[1.875rem] xl:gap-[3.125rem]'>
                    {new Array(7).fill('').map((e, i) => {
                        return (
                            <div key={i} className='group cursor-pointer relative rounded-3xl border border-stroke-secondary bg-white p-2 pb-4 text-center md:p-4 md:pb-6'>
                                <div className='rounded-xl relative'>
                                    <div className='w-full border border-stroke-secondary rounded-xl overflow-hidden'>
                                        <img src={image3} alt='image-3' />
                                    </div>
                                    <div className='invisible absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl border border-stroke-secondary bg-[rgba(152,162,179,0.32)] opacity-0 backdrop-blur-[15px] duration-200 group-hover:visible group-hover:opacity-100'>
                                        <Button className='!text-sm !px-10 !gap-1 !py-3.5'>
                                            Preview
                                            <MoveUpRight size={16} />
                                        </Button>
                                    </div>
                                </div>
                                <h2 className='mt-6 flex items-center justify-center gap-2 text-lg font-medium text-text duration-200 group-hover:text-primary'>Analytics</h2>
                            </div>
                        );
                    })}
                </div>
                <div className='mx-auto w-full max-w-[570px] text-center'>
                    <p className='mb-5 font-light text-center text-base text-text-secondary'>
                    Discover the full range of available pages and components, designed to meet your needs and enhance your project effortlessly.
                    </p>
                    <Button variant='secondary'>
                        Explore All Components
                        <ChevronRight size={20}/>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default DashboardVariations