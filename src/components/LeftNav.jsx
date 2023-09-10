import React from 'react'
import LeftNavItem from './LeftNavItem';
import { categories } from '../utils/catigory';

const LeftNav = () => {
    return (
        <>
            <div className='md:block w-[240px] overflow-y-auto h-full py-4 absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all'>
                <div className="flex flex-col px-5">

                    {
                        categories.map((item)=>{
                            return (
                                <React.Fragment key={item.name}>
                                    <LeftNavItem 
                                        text={item.name}
                                        icon={item.icon}
                                    />
                                </React.Fragment>
                            )
                        })
                    }

                    <hr className='my-5 border-white/[0.2]' />
                    <div className='text-white/[0.5] text-[12px]'>KSR</div>
                </div>
            </div>
        </>
    )
}

export default LeftNav
