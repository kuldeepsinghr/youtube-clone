import React, { useEffect, useState } from 'react'
import LeftNav from '../components/LeftNav'
import SearchResultVideo from '../components/SearchResultVideo'
import { useYoutube } from '../context/youtubeContext'
import Loading from '../extra/Loading'

const SearchResult = () => {

  const { query, setIsLoading, options, isLoading } = useYoutube()
  const [allSearch, setAllSearch] = useState([])
  const searchQueryUrl = `https://youtube138.p.rapidapi.com/search/?q=${query}&hl=en&gl=US`;
  console.log(query)

  const searchData = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url, options)
      const result = await res.json()
      setAllSearch(result.contents)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    searchData(searchQueryUrl)
  }, [query])

  // console.log(allSearch)

  return (
    <>
      <div className='flex flex-row h-[calc(100%-56px)]'>
        <LeftNav />
        <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
          {
            isLoading ? <Loading /> :
              <>
                <div className='grid grid-cols-1 gap-2 p-5'>
                  {
                    allSearch.map((elem) => {
                      return elem.type === "video" &&
                       (
                        <SearchResultVideo
                          key={elem?.video?.videoId}
                          data={elem}
                        />
                      )
                    })
                  }
                </div>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default SearchResult
