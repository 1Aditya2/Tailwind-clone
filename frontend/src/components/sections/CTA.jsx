import React from 'react'
import Marquee from 'react-fast-marquee'
import marquee2 from '../../assets/Components/componentImage-1.webp'
import image7 from '../../assets/Components/image-7.webp'

const CTA = () => {
    return (
        <section className='overflow-hidden bg-gray-50 lg:py-[3.75rem]'>
            <Marquee
                speed={80}
                autoFill
            >
                <div className='p-5'>
                    {[1].map((item, i) => (
                        <div
                            key={`${item}-${i}`}
                            className="aspect-[604/340] w-full max-w-[270px] sm:max-w-[400px] lg:max-w-[604px]"
                        >
                            <img src={image7} alt='tailAdmin' className='rounded-lg' />
                        </div>
                    ))}
                </div>
            </Marquee>
            <Marquee
                speed={80}
                direction='right'
                autoFill
            >
                <div className='p-5'>
                    {[1].map((item, i) => (
                        <div
                            key={`${item}-${i}`}
                            className="aspect-[604/340] w-full max-w-[270px] sm:max-w-[400px] lg:max-w-[604px]"
                        >
                            <img src={marquee2} alt='tailAdmin' />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    )
}

export default CTA