import axios from 'axios';

const baseUrl = 'https://ayo-vest.herokuapp.com/api/v1';
// const baseUrl = process.env.REACT_APP_BASE_URL;

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

export const setModalInvestment = () => {
  return dispatch => {
    dispatch({type: 'SHOW_INVESTMENT', payload: true});
  };
};

export const setModalPayment = () => {
  return dispatch => {
    dispatch({type: 'SHOW_PAYMENT', payload: true});
  };
};

export const closeModalInvestment = () => {
  return dispatch => {
    dispatch({type: 'SHOW_INVESTMENT', payload: false});
  };
};

export const closeModalPayment = () => {
  return dispatch => {
    dispatch({type: 'SHOW_PAYMENT', payload: false});
  };
};

export const setModalBilling = () => {
  return dispatch => {
    dispatch({type: 'SHOW_BILLING', payload: true});
  };
};

export const closeModalBilling = () => {
  return dispatch => {
    dispatch({type: 'SHOW_BILLING', payload: false});
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
      dispatch({type: 'SHOW_INVESTMENT', payload: false});
    } catch (error) {
      dispatch({type: 'ISLOADING', payload: false});
      console.log('error persons ', error);
    }
  };
};

export const getLivestockCategory = kind => {
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

//Payment Function

export const getInvestment = myToken => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(`${baseUrl}/investments/getall`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: myToken,
        },
      });
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_INVESTMENT', payload: res.data.data});
      // dispatch({type: 'SHOW_INVESTMENT', payload: true});
      console.log('getInvestment', res.data.data);
    } catch (error) {
      console.log('error persons ', error);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

export const getInvestmentID = (myToken, investmentID) => {
  console.log('get investmen by id', myToken, investmentID);
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.get(
        `${baseUrl}/investments/getone?id=${investmentID}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: myToken,
          },
        },
      );
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SAVE_DATA_INVESTMENTID', payload: res.data.data});
      dispatch({type: 'SHOW_BILLING', payload: true});
      console.log('getInvestmentbyiD', res.data.data);
    } catch (error) {
      console.log('error persons ', error);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

export const createInvestment = (myToken, livestockID, unit) => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      let res = await axios.post(
        `${baseUrl}/investments`,
        {livestockId: livestockID, unit: unit},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: myToken,
          },
        },
      );
      // dispatch({type: 'ISLOADING', payload: false});
      console.log('create Investment', res.data.data);
      let response = await axios.get(
        `${baseUrl}/investments/getone?id=${res.data.data.data._id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: myToken,
          },
        },
      );
      dispatch({type: 'SAVE_DATA_INVESTMENTID', payload: response.data.data});
      dispatch(getInvestment(myToken));
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SHOW_BILLING', payload: true});
    } catch (error) {
      console.log('error persons ', error);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

export const createPayment = (token, id, response) => {
  console.log(
    'tokenimage',
    token,
    'id nya si payment',
    id,
    'respon si image',
    response,
  );
  return async dispatch => {
    try {
      dispatch({type: 'ISLOADING', payload: true});
      const dataForm = new FormData();
      dataForm.append('image', {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      });
      const uploadPayment = await axios.post(
        `${baseUrl}/payments?investmentId=${id}`,
        dataForm,
        {
          headers: {
            accept: 'image/png',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          },
        },
      );
      console.log('proses upload payment', uploadPayment.data);
      dispatch(getInvestment(token));
      dispatch({type: 'SHOW_BILLING', payload: false});
      dispatch({type: 'SHOW_PAYMENT', payload: false});
      dispatch({type: 'ISLOADING', payload: false});
      alert('Thank you for your payment!');
    } catch (e) {
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'SHOW_PAYMENT', payload: false});
      console.log('error upload image', e);
      alert('Please input the correct image!');
    }
  };
};
