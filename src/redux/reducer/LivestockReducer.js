const initialState = {
  dataLivestock: {},
  dataLivestockID: {},
  dataLivestockCat: {},
  dataInvestment: {},
  dataInvestmentID: {},
  isLoading: false,
  modalDetail: false,
  modalCategory: false,
  modalInvestment: false,
  modalBilling: false,
  modalPayment: false,
  hasNextPage: false,
  nextPage: 0,
};

export const LivestockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATA_LIVESTOCK':
      return {...state, dataLivestock: action.payload};
    case 'MORE_DATA_LIVESTOCK':
      return {
        ...state,
        dataLivestock: [...state.dataLivestock, ...action.payload],
      };
    case 'MORE_DATA_LIVESTOCKID':
      return {
        ...state,
        dataLivestockID: [...state.dataLivestock, ...action.payload],
      };
    case 'MORE_DATA_LIVESTOCKCAT':
      return {
        ...state,
        dataLivestockCat: [...state.dataLivestock, ...action.payload],
      };
    case 'CHECK_NEXT_PAGE':
      return {...state, hasNextPage: action.payload};
    case 'ADD_NEXT_PAGE':
      return {...state, nextPage: action.payload};
    case 'SAVE_DATA_LIVESTOCKID':
      return {...state, dataLivestockID: action.payload};
    case 'SAVE_DATA_LIVESTOCKCAT':
      return {...state, dataLivestockCat: action.payload};
    case 'ISLOADING':
      return {...state, isLoading: action.payload};
    case 'SHOW_DETAIL':
      return {...state, modalDetail: action.payload};
    case 'SHOW_CATEGORY':
      return {...state, modalCategory: action.payload};
    case 'SHOW_INVESTMENT':
      return {...state, modalInvestment: action.payload};
    case 'SHOW_BILLING':
      return {...state, modalBilling: action.payload};
    case 'SHOW_PAYMENT':
      return {...state, modalPayment: action.payload};
    case 'SAVE_DATA_INVESTMENT':
      return {...state, dataInvestment: action.payload};
    case 'SAVE_DATA_INVESTMENTID':
      return {...state, dataInvestmentID: action.payload};
    default:
      return state;
  }
};
