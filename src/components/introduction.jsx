import introductionItems from './introduction.js';
import { Icon } from '@iconify/react';

function Introduction() {
    return (
        <div>
            {introductionItems.map((item, index) => (
                <div className='bg-[#FFFFFF] rounded-[24px] max-w-[500px] shadow-[0_14px_31px_0px_rgba(0,0,0,0.05)] px-[23px] py-[52px]' key={index}>
                    <div className='flex flex-row justify-between mb-[10px]'>
                        {/* Heading and job title */}
                        <div>
                            <h1 className='text-4xl'>{item.name}</h1>
                            <h2 className='text-xl'>{item.title}</h2>
                        </div>

                        <div>
                            {/* Picture */}
                            <img className='w-16 h-16 rounded-full' src={item.image} alt={item.name} />
                        </div>
                    </div>

                    <div className='text-left mb-[15px]'>
                        {/* About me description */}
                        <p className='mx-w-[106px]'>{item.description}</p>
                    </div>
                    
                    <div className='flex flex-row my-[20px]'>
                        {/* Social links */}
                        {item.socialLinks.map((link, linkIndex) => (
                            <div className='p-[16px] bg-[##F9F9F9] w-[36px]' key={linkIndex}>
                                <a href={link.url}>
                                    <Icon icon={link.name} className='w-[24px] h-[24px] border-[1px] border-color-[#EBEBEB] rounded-[9px]' />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-row text-[16px]'>
                        {/* Main links */}
                        {item.mainLinks.map((link, linkIndex) => (
                            <div className='bg-[#000000] px-[10px] py-[5px] rounded-[64px] mr-[27.5px]' key={linkIndex}>
                                <a className='inline-flex flex-row items-center text-[#FFFFFF] justify-between gap-[8px]' href={link.url}>
                                    {link.name}<Icon icon="eva:diagonal-arrow-right-up-fill" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Introduction;