import React from 'react'
import Button from '../ui/Button'
import avatar from '../../assets/avatar-3.webp'
import cover from '../../assets/image-3-3.webp'
import RightPart from '../../assets/DashboardAd/RightPart'
import Leftpart from '../../assets/DashboardAd/Leftpart'
import MiddlePart from '../../assets/DashboardAd/MiddlePart'

const DashboardAd = () => {
    return (
        <section className='overflow-hidden bg-white pt-16 md:pt-14 lg:pt-[7.5rem]'>
            <div className='container px-16 mx-auto w-full'>
                <div className='relative z-10 w-full justify-between overflow-hidden rounded-3xl bg-gray-800 px-8 pt-20 md:pl-[3.75rem] md:pr-10 lg:flex'>
                    <div className='flex flex-col gap-1 items-start pb-[3.25rem] lg:max-w-[470px]'>
                        <p className='text-gray-400 mb-3'>What are you waiting for?</p>
                        <p className='mb-9 text-2xl font-semibold text-white md:text-3xl'>
                            Join thousands using the
                            #1 Tailwind CSS Admin Dashboard on the market!
                        </p>
                        <div className='mb-[4.375rem] flex flex-wrap gap-3 max-sm:!w-full'>
                            <Button className='max-sm:!w-full'>
                                Download Now
                            </Button>
                            <Button className='!bg-transparent !text-white !border-gray-600 hover:!border-gray-400 max-sm:!w-full' variant='secondary'>
                                Live Preview
                            </Button>
                        </div>
                        <div className='flex gap-4 max-sm:flex-col sm:items-center'>
                            <div className='flex items-center -space-x-[14px]'>
                                {new Array(3).fill('').map((e, i) => {
                                    return (
                                        <img className={`w-7 h-7 object-cover border-[3px] border-gray-800 rounded-full`} src={avatar} key={`${e}-${i}`} alt='avatar' />
                                    );
                                })}
                            </div>
                            <div>
                                <h3 class="text-base text-gray-200"><span class="font-bold">80k+</span> Happy Users!</h3>
                                <p class="text-sm text-gray-400">#1 Tailwind CSS Admin Dashboard</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-5 max-w-[720px] rounded-t-lg lg:ml-auto'>
                        <img src={cover} alt='cover'/>
                        
                    </div>
                    <div className='absolute right-0 top-0'>
                        <Leftpart/>
                    </div>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                        <RightPart/>
                        </div>
                        <div className='absolute z-[-10] right-0 bottom-0'>
                            <MiddlePart/>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardAd