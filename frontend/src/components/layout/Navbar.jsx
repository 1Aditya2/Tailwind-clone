import React, { useEffect, useState } from 'react'
import tailwindsvg from '../../assets/tailwind.svg';
import VersionDropdown from '../ui/VersionDropdown';
import { listDetailsLivePreview, Navitems } from '../../data/Navdata';
import HoverDropdown from '../ui/HoverDropDown';
import Github from '../../assets/Github';
import Button from '../ui/Button';
import Queen from '../../assets/Queen';
import { Menu, X } from 'lucide-react';

function Navbar({ setShow, show }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const livePreviewDropDown = listDetailsLivePreview.map(({ icon, paragraph }) => {
        return (
            <div className='flex items-center gap-3'>
                {icon}
                <span className='text-sm font-medium'>{paragraph}</span>
            </div>
        );
    })

    return (

        <header className={`fixed bg-white left-0 top-0 z-[99999] w-full text-title ${scrolled ? 'shadow transition-shadow' : ''}`}>
            <div className='relative items-center justify-between px-4 py-4 sm:px-8 flex xl:gap-7 xl:px-[3.125rem] xl:py-0 2xl:gap-0'>
                <div className='flex items-center xl:w-1/4 gap-1'>
                    <img src={tailwindsvg} alt='tailwindsvg' />
                    <VersionDropdown />
                </div>
                <div className='xl:hidden'>
                    {!show && <Menu className='text-text' size={24} onClick={() => setShow(true)} />}
                    {show && <X className='text-text' size={24} onClick={() => setShow(false)} />}
                </div>
                <div className='w-3/4 flex visible max-xl:hidden justify-between items-center'>
                    <nav>
                        <ul className='flex flex-col gap-5 xl:flex-row xl:items-center 2xl:gap-8'>
                            {Navitems.map(({ type, label, items, children }) => {
                                return (
                                    <li className='py-7 hover:text-primary'>
                                        {type === 'text' ? <a href='/'>{label}</a> : <HoverDropdown label={label} items={items} children={children} />}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 cursor-pointer flex h-8 items-center rounded-full gap-[5px] bg-gray-100 hover:bg-gray-200'>
                            <Github />
                            <span class="text-sm text-text">1.9k+</span>
                        </div>
                        <div className='flex flex-col gap-3.5 xl:flex-row xl:items-center'>
                            <HoverDropdown
                                labelClassName='text-white text-sm'
                                parentClassName='!bg-text !hover:bg-title !gap-2 !py-3 !px-4 !rounded-md'
                                label={'Live Preview'} items={livePreviewDropDown}
                            />
                            <Button className='!px-5 !py-3'>
                                <div className='flex items-center gap-2'>
                                    <Queen />
                                    <span className='text-sm'>Pricing & FAQ</span>
                                </div>
                            </Button>
                            <Button variant='secondary' className='!px-4 !py-3'>
                                <span className='text-sm'>Login</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar