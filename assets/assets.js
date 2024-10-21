import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import ekdinapimg from './Ek-Din-Aap-img.jpg'
import Bewafaimg from './Bewafa-thumbnail.jpg'
import kyokisikoimg from './kyo-kisi-ko-thumb.jpg'
import hameradilimg from './haye-mera-dil-thumb.jpg'
import dilneyekhadilseimg from './Dil-Ne-Yeh-Kaha-Hain-Dil-Se-thumb.jpg'
import dekhnewaloimg from './dekhne-walo-thumb.jpg'
import wafanebewafaithumb from './Wafa-Ne-Bewafai-thumb.jpg'
import pardesithumb from './pardesi-pardesi-thumb.jpg'
import kyahuavada from './kya-hua-vada-thumb.jpg'
import ajaythumb from './ajay-album.jpg'
import gadgad from './gad-gad-thumb.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import ekdinap from './Ek-Din-Aap.mp3'
import Bewafasong from './Bewafa.mp3'
import kyokisikosong from './Kyo-Kisi-Ko.mp3'
import hameradilsong from './Ha-Mera-Dil.mp3'
import dilneyekhadilse from './Dil-Ne-Yeh-Kaha-Hain-Dil-Se.mp3'
import dekhnewalosong from './dekhne-walo.mp3'
import wafanebewafai from './Wafa-Ne-Bewafai.mp3'
import pardesisong from './pardesi-pardesi.mp3'
import kyahuavadasong from './kya-hua-vada.mp3';


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: ajaythumb,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image:gadgad,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Pardesi Pardesi",
        image: pardesithumb,
        file:pardesisong,
        desc:"Put a smile on your face with these happy tunes",
        duration:"7:28"
    },
    {
        id:1,
        name: "Kya Hua Wada",
        image: kyahuavada,
        file:kyahuavadasong,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:18"
    },
    {
        id:2,
        name: "Dekhne Walon Ne",
        image: dekhnewaloimg,
        file:dekhnewalosong,
        desc:"Dekhne Walon Ne - From 'Chori Chori Chupke Chupke",
        duration:"6:13"
    },
    {
        id:3,
        name: "Ek-Din-Aap",
        // image: img4,
        image : ekdinapimg,
        file: ekdinap,
        desc:"Put a smile on your face with these happy tunes",
        duration:"4:26"
    },
    {
        id:4,
        name: "Bewafa",
        // image: img5,
        image : Bewafaimg ,
        file: Bewafasong,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:44",
    },
    {
        id:5,
        name: "Kyo kisi ko",
        // image: img14    ,
        image : kyokisikoimg ,
        file: kyokisikosong,
        desc:"Put a smile on your face with these happy tunes",
        duration:"5:34",
    },
    {
        id:6,
        name: "Ha Mera Dil",
        // image: img7,
        image : hameradilimg ,
        file: hameradilsong,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:31",
    },
    {
        id:7,
        name: "Dhadkan",
        // image: img12,
        image: dilneyekhadilseimg,
        file: dilneyekhadilse,
        desc:"Put a smile on your face with these happy tunes",
        duration:"7:06"
    }
]