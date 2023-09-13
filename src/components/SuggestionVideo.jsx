import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';


const SuggestionVideo = ({ data }) => {
    return (
        <>
            <Link to={`/video/${data?.video?.videoId}`}>
                <div className='flex mb-3'>
                    <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px rounded-xl bg-slate-800]'>
                        <div className='flex text-white flex-row mt-3'>
                            <img className='h-full w-full object-cover' src={data?.video?.thumbnails[0]?.url} alt="img" />

                            {/* <div className='flex items-start'>
                            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
                                <img className='h-full w-full object-cover' src={data?.video?.author?.avatar[0]?.url} alt="logo" />
                            </div>
                        </div> */}

                            <div className='flex flex-col ml-3'>
                                <span className='text-sm font-bold line-clamp-2'>{data?.video?.title}</span>
                                <span className='text-[12px] font-semibold mt-2 flex items-center text-gray-400'>
                                    {data?.video?.author?.title}
                                    {data?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                        <VerifiedIcon className='text-white/[0.5] text-[10px] ml-1' />
                                    )}
                                </span>
                                <div className='flex text-[12px] font-semibold truncate overflow-hidden text-gray-400'>
                                    <span>{`${data?.video?.stats?.views} views`}</span>
                                    <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'>.</span>
                                    <span className='truncate'>{data?.video?.publishedTimeText}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SuggestionVideo
