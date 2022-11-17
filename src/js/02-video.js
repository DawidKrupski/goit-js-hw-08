import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const saveTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(saveTime, 1000));

const playFromTheLastMoment = () => {
  const lastTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(lastTime);
};

playFromTheLastMoment();
