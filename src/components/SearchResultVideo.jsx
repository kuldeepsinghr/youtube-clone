import React from 'react'
import { useNavigate } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';

const SearchResultVideo = ({ data }) => {
  const navigate = useNavigate()
  return (
    <>
        <div onClick={()=>navigate(`/video/${data?.video?.videoId}`)} className='flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4 cursor-pointer'>
          <div className='relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden'>
            <img className='h-full w-full object-cover' src={data?.video?.thumbnails[0]?.url} alt="img" />
            {/* {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds}/>
            )} */}
          </div>
          <div className='flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden'>
            <span className='text-lg md:text-2xl font-semibold line-clamp-2 text-white'>
              {data?.video?.title}
            </span>
            <span className='empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4'>
              {data?.video?.descriptionSnippet}
            </span>
            <div className='hidden md:flex items-center'>
              <div className='flex items-start mr-3'>
                <div className='flex h-9 w-9 rounded-full overflow-hidden'>
                  <img src={data?.video?.author?.avatar[0]?.url} alt="logo" className='w-full h-full object-cover' />
                </div>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm font-semibold mt-2 text-white/[0.7] flex items-center '>
                  {data?.video?.author?.title}
                  {data?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && (
                    <VerifiedIcon className='text-white/[0.5] text-[12px] ml-1'/>
                  )}
                </span>
                <div className='flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden'>
                  <span>{`${data?.video?.stats?.views} views`}</span>
                  <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>.</span>
                  <span className='truncate'>{data?.video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SearchResultVideo
