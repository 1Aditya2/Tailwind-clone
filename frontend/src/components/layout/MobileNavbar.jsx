import React from 'react'
import { mobileNavData } from '../../data/Navdata';
import Button from '../ui/Button';
import Queen from '../../assets/Queen';
import Accordion from '../ui/Accordion';

const MobileNavbar = ({ show = false }) => {
    return (
        
        <div className={`${show ? 'visible opacity-100' : 'invisible opacity-0'} fixed z-[9999] h-screen w-full overflow-hidden duration-200 xl:hidden`}>
            <div className='relative h-full bg-white pb-[7.5rem] pt-20'>
                <div className='p-5 pt-0 overflow-y-auto max-h-full'>
                    <ul>
                        {mobileNavData.map(({ type, label, content }, i) => {
                            return (
                                type === 'text' ?
                                    <li key={i} className={`flex items-center font-light justify-between gap-2 p-3 text-base text-text duration-200 hover:text-primary border-b border-stroke`}>
                                        <a href='/'>{label}</a>
                                    </li>
                                    : <Accordion content={content} key={i} title={label} />
                            );
                        })}
                    </ul>
                </div>
                <div className='absolute bottom-0 w-full bg-white p-5'>
                    <div className='flex items-center gap-2 max-sm:flex-col'>
                        <Button className='w-1/2 !px-5 !rounded-full max-sm:w-full !h-[3.25rem]'>
                            <div className='flex items-center gap-2'>
                                <Queen />
                                <span className='text-sm'>Pricing & FAQ</span>
                            </div>
                        </Button>
                        <Button variant='secondary' className='w-1/2 !rounded-full max-sm:w-full !h-[3.25rem]'>
                            <span className='text-sm'>Login</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar