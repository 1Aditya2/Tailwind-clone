import glowEffect from '../assets/glow-effect.webp'
import HTML from '../assets/html'
import ReactSVG from '../assets/React';
import Next from '../assets/Next';
import Vercel from '../assets/Vercel';
import Angular from '../assets/Angular';
import Laravel from '../assets/Laravel';
export const listDetails = [
    {
        icon: <HTML />,
        label: 'HTML',
        title: 'TailAdmin for HTML',
        paragraph: 'TailwindCSS admin dashboard for HTML'
    },
    {
        icon: <ReactSVG />,
        title: 'TailAdmin for HTML',
        label: 'React',
        paragraph: 'TailwindCSS admin dashboard for HTML'
    },
    {
        icon: <Next />,
        label: 'Next',
        title: 'TailAdmin for HTML',
        paragraph: 'TailwindCSS admin dashboard for HTML'
    },
    {
        icon: <Vercel />,
        label: 'Vercel',
        title: 'TailAdmin for HTML',
        paragraph: 'TailwindCSS admin dashboard for HTML'
    },
    {
        icon: <Angular />,
        label: 'Angular',
        title: 'TailAdmin for HTML',
        paragraph: 'TailwindCSS admin dashboard for HTML'
    },
    {
        icon: <Laravel />,
        label: 'Laravel',
        title: 'TailAdmin for HTML',
        paragraph: 'TailwindCSS admin dashboard for HTML'
    }
]
export const Navitems = [
    {
        type: 'text',
        label: 'Components'
    },
    {
        type: 'text',
        label: 'Download'
    },
    {
        type: 'text',
        label: 'Docs'
    },
    {
        type: 'dropdown',
        label: 'Products',
        children:
            <div className="gap-7 absolute right-[0%] translate-x-1/2 grid grid-cols-3 w-[1200px] rounded-xl bg-white border border-gray-200 shadow-lg p-3">
                <div className='col-span-2'>
                    <div className="grid grid-cols-2 gap-1">
                        <div className='flex flex-col'>
                            {listDetails.slice(0, 3).map(({ icon, title, paragraph }) => {
                                return (
                                    <li className='flex gap-5 p-3 rounded-xl w-full items-center hover:bg-gray-100 duration-200'>
                                        <div className='w-12 aspect-square bg-white flex items-center justify-center border border-stroke-secondary rounded-lg'>
                                            {icon}
                                        </div>
                                        <div><p class="text-base text-text">{title}</p><span class="text-sm text-text-secondary">{paragraph}</span></div>
                                    </li>
                                );
                            })}
                        </div>
                        <div className='flex flex-col'>
                        {listDetails.slice(3, 6).map(({ icon, title, paragraph }) => {
                                return (
                                    <li className='flex gap-5 p-3 rounded-xl w-full items-center hover:bg-gray-100 duration-200'>
                                        <div className='w-12 aspect-square bg-white flex items-center justify-center border border-stroke-secondary rounded-lg'>
                                            {icon}
                                        </div>
                                        <div><p class="text-base text-text">{title} <span class="ml-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-600">New</span></p><span class="text-sm text-text-secondary">{paragraph}</span></div>
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='relative pt-[2.375rem] pr-5 pl-[1.625rem] pb-9 rounded-lg border-[0.5px] group cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='mb-9 text-center text-text'>
                                <p className='group-hover:text-primary text-xl font-semibold'>Get All Together - Bundle</p>
                                <p class="text-sm text-text-secondary font-normal">Get All Packages Together with - HTML, React.js, Next.js, Vue.js, Angular and Laravel</p>
                            </div>
                            <div className="flex items-center justify-center gap-1.5">
                                {[<HTML />, <ReactSVG />, <Next />, <Vercel />, <Angular />, <Laravel />].map((e, i) => {
                                    return (
                                        <div className='w-10 h-10 flex items-center bg-white justify-center shadow-[0px_8px_13px_rgba(166,175,195,0.12)] rounded-full'>
                                            {e}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='absolute left-0 right-0 bottom-0 z-[-9]'>
                            <img src={glowEffect} alt='glow-effect' className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
    },
    {
        type: 'dropdown',
        label: 'Resources',
        items: ["Documentation", "Support", "Blog", "Roadmap"]
    }
]