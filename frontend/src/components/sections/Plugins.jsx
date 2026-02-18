import React from 'react'
import Card from '../ui/Card';
import Alpine from '../../assets/Hero/Alpine';

const Plugins = () => {
  return (
    <section className='bg-white pt-16 md:pt-24 lg:pt-[7.5rem]'>
        <div className='container px-4 w-full mx-auto'>
            <div className='mx-auto mb-12 w-full max-w-[770px] text-center lg:mb-[3.75rem]'>
                <p className='mb-5 inline-block text-lg text-primary'>
                Powerful Toolkit
                </p>
                <p className='text-3xl font-bold !leading-[1.2] text-title md:text-[40px]'>
                Customized Plugins and Add-ons
                </p>
            </div>
        </div>
        <div className='container w-full px-4 mx-auto'>
            <div className='grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-3'>
                {new Array(6).fill('').map((e,i) => {
                    return (
                        <Card key={i}>
                            <div className='flex items-start justify-start flex-col'>
                                    <div className='w-10 mb-[1.25rem] h-10 flex items-center bg-white justify-center rounded-full'>
                                        <Alpine/>
                                    </div>
                                    <p className='mb-3 font-medium text-xl text-title md:text-2xl lg:text-xl xl:text-2xl'>
                                        Apex Charts
                                    </p>
                                    <p className='text-base !leading-normal text-text-secondary'>
                                    High-quality, Modern & Interactive Charts for Data visualization
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

export default Plugins