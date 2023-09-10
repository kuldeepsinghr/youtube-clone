import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-full m-auto h-[100vh]'>
            <TailSpin
                height="80"
                width="80"
                color="#535252"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading
