import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';

const VideoCard = ({data}) => {
  // console.log(data)
  return (
    <>
    <Link to={`video/${data?.video?.videoId}`}>
      <div className='flex flex-col mb-8'>
          <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={data?.video?.thumbnails[0]?.url} alt="img" />
            {/* {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds}/>
            )} */}
          </div>

          <div className='flex text-white mt-3'>

            <div className='flex items-start'>
              <div className='flex h-9 w-9 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover' src={data?.video?.author?.avatar[0]?.url} alt="logo" />
              </div>
            </div>

              <div className='flex flex-col ml-3 overflow-hidden'>
                <span className='text-sm font-bold line-clamp-2'>{data?.video?.title}</span>
                <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                  {data?.video?.author?.title}
                  {data?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && (
                    <VerifiedIcon fontSize='30' className='text-white/[0.5] text-[12px] ml-1'/>
                  )}
                  </span>
                  <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
                    <span>{`${data?.video?.stats?.views} views`}</span>
                    <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>.</span>
                    <span className='truncate'>{data?.video?.publishedTimeText}</span>
                  </div>
              </div>

          </div>
        </div>
        </Link>
    </>
  )
}

export default VideoCard
