import React from 'react'
import LeftPart from '../../assets/Hero/LeftPart'
import TotalLeft from '../../assets/Hero/TotalLeft'
import RightPart from '../../assets/Hero/RightPart'
import WholePart from '../../assets/Hero/WholePart'
import Starbadge from '../../assets/Hero/Starbadge'
import { herolistItems } from '../../data/HeroData'
import Button from '../ui/Button'
import mainImageWebP from '../../assets/Hero/main-image.webp';
import image3 from '../../assets/Hero/image-3.webp'

const Hero = () => {
    return (
        <section className='overflow-hidden px-4 pt-20 sm:px-8 xl:px-12.5'>
            <div className="relative z-10 overflow-hidden rounded-3xl bg-gray-50 pt-12 md:pt-14 lg:pt-20">
                <div className='relative z-10 mx-auto px-4 sm:px-8 xl:px-0'>
                    <div className='text-center'>
                        <div className='mb-[1.125rem] px-4 py-2 bg-primary-50 w-fit text-primary gap-2 inline-flex items-center rounded-[30px] text-center'>
                            <span className='flex items-center justify-center'>
                                <Starbadge />
                            </span>
                            <p className='text-sm'>Industry-leading Tailwind CSS Dashboard Kit with Multi-Framework Support
                            </p>
                        </div>
                        <h1 class="mx-auto mb-4 w-full max-w-[810px] text-3xl font-bold text-title-color sm:text-4xl lg:text-5xl">Open-Source Tailwind CSS Admin Dashboard Template</h1>
                        <p class="mx-auto mb-9 w-full max-w-[1090px] text-text-secondary">TailAdmin is a Tailwind CSS-based Admin Dashboard Template that provides developers with everything they need to create feature-rich back-ends, dashboards, and admin panels for web projects. Empowering developers with essential UI components, elements, and pages required to build a complete Dashboard or Admin panel – Now available for HTML, React, Next.js, Vue, Angular and Laravel!</p>
                        <ul className='flex flex-wrap items-center justify-center gap-4'>
                            {herolistItems.map(({ icon, label }) => {
                                return (
                                    <li className='flex flex-col items-center justify-center gap-1.5 text-center'>
                                        <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0px_12px_20px_rgba(166,175,195,0.12)] max-md:p-2 md:h-12 md:w-12'>{icon}</div>
                                        <span class="text-xs font-medium text-text-secondary">{label}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='mt-9 flex flex-wrap justify-center gap-3.5'>
                            <Button className='!shadow-xs'>Download Now</Button>
                            <Button variant='secondary'>Live Preview</Button>
                        </div>
                        <div className='mt-[60px]'>
                            <div className='relative mx-auto w-full max-w-[745px] max-lg:px-10'>
                                <div className='mx-auto overflow-hidden rounded-t-xl border-[8px] border-white bg-white shadow-[0px_0px_0px_1px_#E4E7EC,0px_18.824px_100px_0px_rgba(16,24,40,0.12)]'>
                                    <img src={mainImageWebP} alt='main-image' />
                                </div>
                                <div className='absolute -bottom-2 -right-[120px] aspect-[204/277] w-full max-w-[204px] overflow-hidden rounded-t-[10px] border-[.6px] border-b-0 border-stroke bg-white shadow-[-30.119px_0px_87.847px_0px_rgba(16,24,40,0.10)] max-xl:-right-16 max-xl:max-w-[190px] max-lg:-right-12 max-lg:max-w-[150px] max-md:right-0 max-md:max-w-[100px]'>
                                    <img src={image3} alt='image3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-32 left-0 max-sm:hidden'>
                    <LeftPart />
                </div>
                <div className='absolute bottom-0 left-0 max-sm:hidden'>
                    <TotalLeft />
                </div>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                    <TotalLeft />
                </div>
                <div className='absolute bottom-0 right-0 max-sm:hidden'>
                    <RightPart />
                </div>
                <div className='absolute bottom-0 right-0 max-sm:hidden'>
                    <WholePart />
                </div>
            </div>
        </section>
    )
}

export default Hero