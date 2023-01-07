console.log("WELCOME TO SPOTIFY");
let audioElement=new Audio ('Tu-Maan-Meri-jaan PaglaSongs.mp3')
let play= document.getElementById("play");
let ankit= document.getElementById("ankit");

let songs=[
    {songname:"let me love you" , songpath:""},
    {songname:"let me love you" , songpath:""},
    {songname:"let me love you" , songpath:""},
    {songname:"let me love you" , songpath:""}
]

play.addEventListener('click', ()=>{
   if( audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
}
else{
    audioElement.play();
    play.classList.remove('fa-circle-pause');
    play.classList.add('fa-circle-play');
}
}

)
