import React, { Fragment } from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import Sound from 'react-sound';
import { connect } from 'react-redux';
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

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}
    <Current>
      {!!player.currentSong && (
        <Fragment>
          <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>
    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="ShuffleIcon" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="BackwardIcon" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="PlayIcon" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="ForwardIcon" />
        </button>
        <button type="button">
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
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
