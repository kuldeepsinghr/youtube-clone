import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SuggestionVideo from '../components/SuggestionVideo';
import { useParams } from 'react-router-dom';
import { useYoutube } from '../context/youtubeContext';

const Video = () => {

  const {options, setIsLoading} = useYoutube()
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState([])
  const [relatedVideo, setRelatedVideo] = useState([])

  const videoDetailUrl = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`
  const reletedVideoUrl = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`

  // Detail video
  const detailVideo = async (url)=>{
    setIsLoading(true)
    try{
        const res = await fetch(url, options)
        const result = await res.json()
        setVideoDetail(result)
        setIsLoading(false)
    }catch(e){
        console.log(e)
    }
  }

  // related videos
  const related = async (url)=>{
    setIsLoading(true)
    try{
      const res = await fetch(url, options)
      const result = await res.json()
      setRelatedVideo(result.contents)
    }catch(e){
      console.log(e)
    }
  }
  
  useEffect(()=>{
    detailVideo(videoDetailUrl)
  },[])

  useEffect(()=>{
    related(reletedVideoUrl)
  },[])

  // console.log(videoDetail)
  console.log(relatedVideo)

  return (
    <>
      <div className='flex justify-center flex-row h-[calc(100%-56px)]'>
        <div className='w-full max-w-[1280px] flex flex-col lg:flex-row'>
          <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto'>
            <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
              <ReactPlayer
               url={`https://www.youtube.com/watch?v=${id}`}
               controls
               width="100%"
               height="100%"
               playing={true}
               style={{backgroundColor: "#000000"}}
               />
            </div>

            <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>{videoDetail?.title}</div>

            <div className='flex justify-between flex-col md:flex-row mt-4'>
              <div className='flex'>
                <div className='flex items-start'>
                  <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                    <img src={videoDetail?.author?.avatar[0]?.url} className='w-full h-full object-cover' alt="logo" />
                  </div>
                </div>
                <div className='flex flex-col ml-3'>
                  <div className='text-white text-md font-semibold flex items-center'>
                    {videoDetail?.author?.title}
                  {/* {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
                  )} */}
                    </div>
                    <div className='text-white/[0.7] text-sm'>{videoDetail?.author?.stats?.subscribersText}</div>
                </div>
              </div>

              <div className='flex text-white mt-4 md:mt-0 gap-4'>
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                  <ThumbUpOutlinedIcon className='text-xl text-white mr-2'/>
                  <span>{`${videoDetail?.stats?.likes} Likes`}</span>
                </div>
                
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                  <p>{`${videoDetail?.stats?.views} Views`}</p>
                </div>
              </div>

            </div>
          </div>

          <div className='flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]'>
            {
              relatedVideo.map((elem)=>{
                return (                  
                  <SuggestionVideo
                    key={elem?.video?.videoId}
                    data={elem}
                  />
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default Video
