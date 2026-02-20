import React from 'react'
import Card from '../ui/Card';
import { Code } from 'lucide-react';
import { dashboardData, dashboardData2 } from '../../data/featuresData';

const Dashboard = () => {
    return (
        <section className='py-16 md:py-24 lg:py-30 bg-[linear-gradient(180deg,rgba(242,244,247,0.00)_53.55%,#F2F4F7_101.85%)]'>
            <div className='container'>
                <div className='mx-auto mb-12 w-full max-w-[880px] text-center lg:mb-15'>
                    <span class="mb-5 inline-block text-lg text-primary">Core Features</span>
                    <h2 className='text-3xl font-bold !leading-[1.2] text-title-color md:text-[40px]'>
                        Ultimate Tailwind Dashboard – Crafted for your favourite Tech Stack
                    </h2>
                </div>
            </div>
            <div className='container'>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[1.875rem]'>
                    {dashboardData.map(({ title, content }) => {
                        return (
                            <Card>
                                <div className='flex items-start justify-start flex-col gap-1'>
                                    <div className='w-10 mb-[1.875rem] h-10 flex items-center bg-white justify-center rounded-full'>
                                    <Code className='text-primary w-full h-full'/>
                                    </div>
                                    <p className='mb-4 font-medium text-xl text-title md:text-2xl lg:text-xl xl:text-2xl'>
                                        {title}
                                    </p>
                                    <p className='text-base font-light !leading-normal text-text-secondary'>
                                       {content}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
                <div className='mt-[3.125rem] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[1.875rem] xl:gap-y-6'>
                    {dashboardData2.map((e) => {
                        return (
                            <div className='flex items-center gap-4 rounded-3xl border border-stroke-secondary bg-white px-4 py-3 duration-200 hover:border-primary-200 md:px-[1.875rem] md:py-6'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-9 h-9 flex items-center bg-white justify-center rounded-full'>
                                    <Code className='text-primary w-full h-full'/>
                                    </div>
                                    <p className='text-lg font-medium text-text md:text-xl lg:text-lg xl:text-xl'>
                                        {e}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Dashboard