console.log("welcome to spotify");
//initialising the variables
let songIndex = 0;


let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname:" salam-e-ishq",filepath:"songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname:" tunekya kiya",filepath:"songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname:" bhula dena ",filepath:"songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname:" bang bang",filepath:"songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname:" salam-e-ishq",filepath:"songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname:" salam-e-ishq",filepath:"songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname:" salam-e-ishq",filepath:"songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname:" salam-e-ishq",filepath:"songs/8.mp3", coverpath: "covers/8.jpg"},
    {songname:" salam-e-ishq",filepath:"songs/9.mp3", coverpath: "covers/9.jpg"},
    {songname:" na jana",filepath:"songs/10.mp3", coverpath: "covers/10.jpg"},
   


]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
})


//handle play pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
  
})
//listen to elements
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;





});

myprogressbar.addEventListener('change',()=>{

    audioElement.currentTime= myprogressbar.value*audioElement.duration/100;
}



)