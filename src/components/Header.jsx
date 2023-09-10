import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ytLogo from "../images/yt-logo.png"
import ytLogoMobile from "../images/yt-logo-mobile.png"
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useYoutube } from '../context/youtubeContext';

const Header = () => {

  const navigate = useNavigate()
  const {setQuery} = useYoutube()
  const [search, setSearch] = useState('')
  // setQuery()
  const handleOnSearch = ()=>{
    if(search.length !== 0){
      setQuery(search)
      navigate(`search/${search}`)
    }else{
      alert("enter your favourite search")
    }
  }

  return (
    <>
      <div className='sticky top-0 z-10 flex flex-row justify-between items-center h-14 px-4 md:px-5 bg-[#0f0f0f]'>
        <div className='flex h-5 items-center'>
          {/* {pageName !== "video" && (<div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={mobileMenuToggle}>
            {mobileMenu ?
              (<CgClose className="text-white text-xl" />) :
              (<SlMenu className="text-white text-xl" />)}
          </div>
          )} */}

              <Link to="/" className='flex h-5 items-center bg-[#0f0f0f]'>
                <img className='h-full md:block hidden bg-[#0f0f0f]' src={ytLogo} alt="Youtube"/>
                <img className='h-full md:hidden block bg-[#0f0f0f]' src={ytLogoMobile} alt="Youtube"/>
              </Link>


        </div>
              <div className='group flex items-center text-white'>
                <div className='flex h-5 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
                  <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
                    <SearchIcon className='text-white text-xl'/>
                  </div>
                  <input
                    type="text"
                    className='bg-transparent placeholder:text-gray-400 outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
                    placeholder='search'
                    onChange={(e)=> setSearch(e.target.value)}
                    // onKeyUp={searchQueryHandler}
                    value={search}
                  />
                </div>
                  <button onClick={handleOnSearch} className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
                  <SearchIcon fontSize='20' className='text-white text-base md:text-xl'/>
                  </button>
              </div>


              <div className='flex items-center'>
                <div className='hidden md:flex text-white items-center'>
                  {/* <button>Login</button> */}
                  <div className='flex w-8 h-8 overflow-hidden rounded-full md:ml-4 items-center'><AccountCircleOutlinedIcon className='text-white'/></div>
                </div>
              </div>

      </div>
    </>
  )
}

export default Header
