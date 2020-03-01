import {SET_CURRENT_SONG_ID, CHANGE_REPEAT} from '../actions/types';

const initialState = {
  currentSongId: 0,
  repeat: 'ALL',
};

const player = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_CURRENT_SONG_ID:
      console.log('dispatched');
      return {
        repeat: state.repeat,
        currentSongId: payload,
      };

    case CHANGE_REPEAT:
      return {
        repeat: payload,
      };

    default:
      return state;
  }
};

export default player;
