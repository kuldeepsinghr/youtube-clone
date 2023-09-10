import React from 'react'

const LeftNavItem = ({text, icon}) => {
    return (
        <>
            <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]"}>
                <span className='text-xl mr-5'>{icon}</span><p>{text}</p>
            </div>
        </>
    )
}

export default LeftNavItem
