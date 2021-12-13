const musicContainer1 = document.querySelector('#mini_player');
const playBtn1 = document.getElementById('play1');
const prevBtn1 = document.getElementById('prev1');
const nextBtn1 = document.getElementById('next1');
const playBtnImg = document.querySelector('#play1 img')
const audio1 = document.getElementById('audio1');
const progress1 = document.getElementById('progress1');
const progressContainer1 = document.getElementById('progress-container1');
const title1 = document.getElementById('title1');
const cover1 = document.getElementById('cover1');
// const currTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');

// Song titles
const songs1 = ['gengetone1', 'reggae', 'naija', 'bongo', 'mugithi'];

// Keep track of song
let songIndex1 = 2;

// Initially load song details into DOM
loadSong1(songs[songIndex]);

// Update song details
function loadSong1(song) {
  title1.innerText = song;
//   audio.src = `./music/${song}.mp3`;
  audio1.src = `/audio/${song}`;
  cover1.src = `../img/${song}.jpg`;
}
// Play song
function playSong1() {
  musicContainer1.classList.add('play');
 	audio1.play();
	playBtnImg.src = "img/pause.png"

}

// Pause song
function pauseSong1() {
  musicContainer1.classList.remove('play');
  playBtnImg.src = "img/play-button.png";


  audio1.pause();
}

// Previous song
function prevSong1() {
  songIndex1--;

  if (songIndex1 < 0) {
    songIndex1 = songs1.length - 1;
  }

  loadSong1(songs1[songIndex1]);

  playSong1();
}

// Next song
function nextSong1() {
  songIndex1++;

  if (songIndex1 > songs1.length - 1) {
    songIndex1 = 0;
  }

  loadSong1(songs1[songIndex1]);

  playSong1();
}

// Update progress bar
function updateProgress1(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress1.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress1(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio1.duration;
  audio1.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime1 (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn1.addEventListener('click', () => {
  const isPlaying = musicContainer1.classList.contains('play');

  if (isPlaying) {
    pauseSong1();
  } else {
    playSong1();
  }
});

// Change song
prevBtn1.addEventListener('click', prevSong1);
nextBtn1.addEventListener('click', nextSong1);

// Time/song update
audio1.addEventListener('timeupdate', updateProgress1);

// Click on progress bar
progressContainer1.addEventListener('click', setProgress1);

// Song ends
audio1.addEventListener('ended', nextSong1);

// Time of song
audio1.addEventListener('timeupdate',DurTime1);