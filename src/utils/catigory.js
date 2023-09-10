import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

export const categories = [
    { name: "New", icon: <HomeIcon />, type: "home" },
    { name: "Trending", icon: <WhatshotOutlinedIcon />, type: "category" },
    { name: "Music", icon: <MusicNoteOutlinedIcon />, type: "category" },
    { name: "Films", icon: <MovieCreationOutlinedIcon />, type: "category" },
    // { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <SportsEsportsOutlinedIcon />, type: "category" },
    { name: "News", icon: <NewspaperOutlinedIcon />, type: "category" },
    { name: "Sports", icon: <EmojiEventsOutlinedIcon />, type: "category" },
    { name: "Learning", icon: <LightbulbOutlinedIcon />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <CheckroomOutlinedIcon />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <SettingsOutlinedIcon />, type: "menu" },
    { name: "History", icon: <HistoryOutlinedIcon />, type: "menu" },
    { name: "Help", icon: <HelpOutlineOutlinedIcon />, type: "menu" },
    { name: "Send feedback", icon: <FeedbackOutlinedIcon />, type: "menu" },]