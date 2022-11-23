import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const saveTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

const restartVideo = ({ duration, percent, seconds }) => {
  player.setCurrentTime(0.0);
};

player.on('timeupdate', throttle(saveTime, 1000));
player.on('ended', restartVideo);

const playFromTheLastMoment = () => {
  const lastTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(lastTime);
};

playFromTheLastMoment();
