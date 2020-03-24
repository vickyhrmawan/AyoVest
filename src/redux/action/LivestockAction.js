import axios from 'axios';

const baseUrl = 'https://ayo-vest.herokuapp.com/api/v1';

export const setModalDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_DETAIL', payload: false});
  };
};

export const setModalCategory = () => {
  return dispatch => {
    dispatch({type: 'SHOW_CATEGORY', payload: false});
  };
};

export const getLivestock = () => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(`${baseUrl}/livestocks/getall`);
      // console.log(this.state.persons);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_LIVESTOCK', payload: res.data.data.docs});
      if (res.data.data.hasNextPage !== false) {
        dispatch({type: 'CHECK_NEXT_PAGE', payload: res.data.data.hasNextPage});
        dispatch({type: 'ADD_NEXT_PAGE', payload: res.data.data.nextPage});
      }
      console.log('all data', res.data.data);
    } catch (error) {
      dispatch({type: 'ISLOADING', payload: false});
      console.log('error persons ', error);
    }
  };
};

export const moreLivestock = page => {
  return async dispatch => {
    // dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(`${baseUrl}/livestocks/getall?page=${page}`);
      // console.log(this.state.persons);
      // dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'MORE_DATA_LIVESTOCK', payload: res.data.data.docs});
      if (res.data.data.hasNextPage !== false) {
        dispatch({type: 'CHECK_NEXT_PAGE', payload: res.data.data.hasNextPage});
        dispatch({type: 'ADD_NEXT_PAGE', payload: res.data.data.nextPage});
      } else {
        dispatch({type: 'CHECK_NEXT_PAGE', payload: res.data.data.hasNextPage});
      }
      console.log('pageselanjutnya', res.data.data);
    } catch (error) {
      // dispatch({type: 'ISLOADING', payload: false});
      console.log('error persons ', error);
    }
  };
};

export const getLivestockId = id => {
  console.log(id);
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(`${baseUrl}/livestocks/getone?id=${id}`);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_LIVESTOCKID', payload: res.data.data});
      dispatch({type: 'SHOW_DETAIL', payload: true});
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
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(`${baseUrl}/livestocks/getall?kind=${kind}`);
      console.log('buatmasuk', res.data.data.docs);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_LIVESTOCKCAT', payload: res.data.data.docs});
      dispatch({type: 'SHOW_CATEGORY', payload: true});
    } catch (error) {
      console.log('error persons ', error);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};
