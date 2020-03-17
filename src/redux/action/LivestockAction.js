import axios from 'axios';

export const setModalDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_DETAIL', paylaod: false});
  };
};

export const setModalCategory = () => {
  return dispatch => {
    dispatch({type: 'SHOW_CATEGORY', paylaod: false});
  };
};

export const getLivestock = () => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(
        `http://ayo-vest.herokuapp.com/api/v1/livestocks/getall`,
      );
      // console.log(this.state.persons);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_LIVESTOCK', payload: res.data.data.docs});
    } catch (error) {
      dispatch({type: 'ISLOADING', payload: false});
      console.log('error persons ', error);
    }
  };
};

export const getLivestockId = id => {
  console.log(id);
  return async dispatch => {
    dispatch({type: 'SHOW_DETAIL', payload: true});
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(
        `http://ayo-vest.herokuapp.com/api/v1/livestocks/getone?id=${id}`,
      );
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_LIVESTOCKID', payload: res.data.data});
    } catch (error) {
      dispatch({type: 'ISLOADING', payload: false});
      console.log('error persons ', error);
    }
  };
};

export const getLivestockCategory = kind => {
  console.log('ini namanya ', kind);
  return async dispatch => {
    // dispatch({type: 'SHOW_CATEGORY', payload: true});
    // dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(
        `http://ayo-vest.herokuapp.com/api/v1/livestocks/getall?kind=${kind}`,
      );
      console.log('buatmasuk', res.data.data.docs);
      //   dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_LIVESTOCKCAT', payload: res.data.data.docs});
      dispatch({type: 'SHOW_CATEGORY', payload: true});
    } catch (error) {
      // dispatch({type: 'ISLOADING', payload: false});
      console.log('error persons ', error);
    }
  };
};
