import React from 'react'
import { Navitems } from '../../data/Navdata';
import HoverDropdown from '../ui/HoverDropDown';
import Button from '../ui/Button';
import Queen from '../../assets/Queen';

const MobileNavbar = ({ show = false }) => {
    return (
        <div className={`${show ? 'visible' : 'invisible'} fixed inset-0 z-[9999999] top-[65px] h-[calc(100vh-65px)] w-full overflow-hidden duration-200 xl:hidden`}>
            <div className='relative h-full bg-white'>
                <div className='p-5 pt-0'>
                    <ul className='flex flex-col gap-5 px-4 py-4 sm:px-8 xl:px-12 xl:py-0'>
                        {Navitems.map(({ type, label, items, children }, i) => {
                            return (
                                <li className={`py-1 hover:text-primary text-text-secondary ${i !== Navitems.length - 1 ? 'border-b border-stroke' : ''}`}>
                                    {type === 'text' ? <a href='/'>{label}</a> : <HoverDropdown parentClassName='justify-between' labelClassName={'text-text-secondary'} label={label} items={items} children={children} />}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='absolute bottom-0 w-full bg-white p-5'>
                    <div className='flex items-center gap-2 max-sm:flex-col'>
                        <Button className='w-1/2 !rounded-full max-sm:w-full'>
                            <div className='flex items-center gap-2'>
                                <Queen />
                                <span className='text-sm'>Pricing & FAQ</span>
                            </div>
                        </Button>
                        <Button variant='secondary' className='w-1/2 !rounded-full max-sm:w-full'>
                            <span className='text-sm'>Login</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar