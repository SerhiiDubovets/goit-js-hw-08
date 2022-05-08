import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
