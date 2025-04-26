console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Accha Ji Main Haari", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ahista-Ahista - Eent ka jawab patthar se", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chand Chupa Badal Mein", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Chandi Jaisa Rang", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Chitthi Aai Hai", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kitaben Bahut Si", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Kya khoob lagti ho", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Likhe Jo Khat Tujhe", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Mitwa", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Moter's day Mashup", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Mujhse Naaraj Hoto - Papa Kehte Hain", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Na Kajare ki Dhar", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "O Mere Dil Ke Chain", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Pehle Pyaar Ka Pehla - Papa Kehte Hain ", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Pyar Mein Hota Hai Kya - Papa Kehte Hain", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Radha Kaise Na Jale", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Tum Itna Jo Muskura Rahe Ho", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Yeh-Raatein-Yeh-Mausam", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Aaj din Chadeya", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Ab Rota Nhi Ye Dil", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Banke tera Saya Mai Tujhko", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Dil To Pagal Hai", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Gali Main Aaj Chand Nikla", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Kal Ho Na HO", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "Ladki Badi Anjani Hai", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Main Yaad Aaunga", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "Nit Khair Manga", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "O Palan Hare", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Janam Deti Hai Jo Maa Jise", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "Kisi Se Tum Pyar Kro", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "Ghar Se Nikalte - Papa Kehte Hain", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})