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

                    <div className='text-left mb-[20px]'>
                        {/* About me description */}
                        <p>{item.description}</p>
                    </div>
                    
                    <div className='flex flex-row'>
                        {/* Social links */}
                        {item.socialLinks.map((link, linkIndex) => (
                            <div className='p-[6px] bg-[##F9F9F9] w-[36px]' key={linkIndex}><a href={link.url}><Icon icon={link.name} className='w-[24px] h-[24px] border-[1px] border-color-[#EBEBEB]' /></a></div>
                        ))}
                    </div>

                    <div className='flex flex-row'>
                        {/* Main links */}
                        {item.mainLinks.map((link, linkIndex) => (
                            <div key={linkIndex}><a href={link.url}>{link.name}</a></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Introduction;