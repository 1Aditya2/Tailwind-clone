import React from 'react'
import Marquee from "react-fast-marquee";
import Github from '../../assets/Github'
import tailAdmin from '../../assets/tailwind.svg'
import avatar from '../../assets/avatar-3.webp'
const TrustedBy = () => {
    return (
        <section className='pt-[4.375rem]'>
            <div className='container mx-auto w-full px-16'>
                <div>
                    <h2 class="mb-8 text-center text-lg text-text">Trusted by over 80,000 individuals and companies worldwide.</h2>
                    <div className='relative mb-[3.25rem]'>
                        <div className="w-full overflow-hidden">
                            <Marquee
                                speed={80}
                                gradient={true}
                                autoFill
                            >
                                {[1, 2, 3].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-center px-6"
                                    >
                                        <img src={tailAdmin} alt='tailAdmin' />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='inline-flex items-center justify-between rounded-xl bg-gray-50 p-5 max-md:flex-wrap max-md:justify-center max-md:gap-8'>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center -space-x-[14px]'>
                            {new Array(3).fill('').map((e, i) => {
                                return (
                                    <img className={`w-7 h-7 object-cover border-[3px] border-gray-50 rounded-full`} src={avatar} key={`${e}-${i}`} alt='avatar' />
                                );
                            })}
                        </div>
                        <div>
                            <h3 class="text-base text-text">
                                <strong class="font-bold">80k+</strong> Happy Users!</h3>
                            <p class="text-sm font-light text-gray-500">#1 Tailwind CSS Admin Dashboard</p>
                        </div>
                    </div>
                    <div class="mx-12 h-full w-px bg-gray-200 max-md:hidden">
                    </div>
                    <div className='flex items-center gap-4 cursor-pointer group'>
                        <div className='flex items-center'>
                            <Github className='w-10 h-10' />
                        </div>
                        <div><h3 class="flex items-center gap-1 text-base text-text">
                            <strong class="font-bold">1.9k+</strong>Stars on Github
                            <span class="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                                <svg class="absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ease-in-out group-hover:-translate-y-5 group-hover:translate-x-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4694 3.41946C12.3405 3.31486 12.1761 3.25216 11.9972 3.2521L6.00027 3.25C5.58596 3.24985 5.24999 3.58545 5.24984 3.99958C5.2497 4.4137 5.58544 4.74954 5.99974 4.74968L10.1898 4.75115L3.47065 11.4703C3.17775 11.7632 3.17775 12.2381 3.47065 12.531C3.76354 12.8239 4.23841 12.8239 4.53131 12.531L11.2473 5.81493L11.2487 9.99635C11.2488 10.4105 11.5848 10.7461 11.9991 10.746C12.4134 10.7458 12.7491 10.41 12.749 9.99587L12.7471 4.04738C12.7592 3.841 12.6864 3.63057 12.5287 3.47289C12.5097 3.45384 12.4898 3.43603 12.4694 3.41946Z" fill="currentColor"></path></svg>
                                <svg class="absolute inset-0 m-auto h-4 w-4 -translate-x-5 translate-y-5 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4694 3.41946C12.3405 3.31486 12.1761 3.25216 11.9972 3.2521L6.00027 3.25C5.58596 3.24985 5.24999 3.58545 5.24984 3.99958C5.2497 4.4137 5.58544 4.74954 5.99974 4.74968L10.1898 4.75115L3.47065 11.4703C3.17775 11.7632 3.17775 12.2381 3.47065 12.531C3.76354 12.8239 4.23841 12.8239 4.53131 12.531L11.2473 5.81493L11.2487 9.99635C11.2488 10.4105 11.5848 10.7461 11.9991 10.746C12.4134 10.7458 12.7491 10.41 12.749 9.99587L12.7471 4.04738C12.7592 3.841 12.6864 3.63057 12.5287 3.47289C12.5097 3.45384 12.4898 3.43603 12.4694 3.41946Z" fill="currentColor"></path></svg>
                            </span>
                        </h3>
                            <p class="text-sm font-light text-gray-500">Show your support by giving us a star! 🌟</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedBy