import React, { useState } from 'react'
import LeftNav from '../components/LeftNav'
import VideoCard from '../components/VideoCard'
import { useYoutube } from '../context/youtubeContext'
import Loading from '../extra/Loading'

const Home = () => {

  const { data, isLoading } = useYoutube()

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <div className='sticky'>
          <LeftNav />
        </div>
        {
          isLoading ? <Loading /> :
            <>
              <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
                  {
                    data.map((elem) => {
                      return elem.type === "video" &&
                      (
                        <VideoCard
                          key={elem?.video?.videoId}
                          data={elem}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </>
        }
        </div>
    </>
  )
}

export default Home
