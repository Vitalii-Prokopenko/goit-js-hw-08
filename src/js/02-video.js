import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeStorageKey = 'videoplayer-current-time';

// Sets start time for play session

let playSessionStartTime = 0;
if (localStorage.getItem(currentTimeStorageKey)) {
  playSessionStartTime = localStorage.getItem(currentTimeStorageKey);
}
player.setCurrentTime(playSessionStartTime);

// Adds listener for play event

player.on('play', function () {
  console.log('played the video!');
});

// Adds listener for timeupdate event and gets current time of play session

player.on(
  'timeupdate',
  throttle(playSession => {
    localStorage.setItem(currentTimeStorageKey, playSession.seconds);
  }, 1000)
);

// gets video title

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
