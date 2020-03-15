import axios from 'axios';

export const setModalDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_DETAIL', paylaod: false});
  };
};

export const getLivestock = () => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(
        `http://ayo-vest.herokuapp.com/api/v1/livestocks/getall`,
      );
      //   console.log(res.data.data.docs);
      // this.setState({persons: res.data.data.docs});
      // this.setState({title: 'cok'});
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
    try {
      // let res = await axios.get(
      //   `http://ayo-vest.herokuapp.com/api/v1/livestocks/getall`,
      // );
      //   console.log(res.data.data.docs);
      // this.setState({persons: res.data.data.docs});
      // this.setState({title: 'cok'});
      // console.log(this.state.persons);
      // dispatch({type: 'SAVE_DATA_LIVESTOCK', payload: res.data.data.docs});
    } catch (error) {
      console.log('error persons ', error);
    }
  };
};
