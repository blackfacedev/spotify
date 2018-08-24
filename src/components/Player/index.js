import React from 'react';
import Slider from 'rc-slider';
import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="http://www.metalmusicarchives.com/images/covers/malmsteen-yngwie-j-rising-force-20161206000514.jpg"
        alt="Cover"
      />
      <div>
        <span>Rising Force</span>
        <small>Yngwie J Malmsteen</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="ShuffleIcon" />
        </button>
        <button>
          <img src={BackwardIcon} alt="BackwardIcon" />
        </button>
        <button>
          <img src={PlayIcon} alt="PlayIcon" />
        </button>
        <button>
          <img src={ForwardIcon} alt="ForwardIcon" />
        </button>
        <button>
          <img src={RepeatIcon} alt="RepeatIcon" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
            value={50}
          />
        </ProgressSlider>
        <span>4:45</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume Icon" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={50}
      />
    </Volume>
  </Container>
);

export default Player;
