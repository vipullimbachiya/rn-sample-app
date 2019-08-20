import * as actionTypes from './actionType';

const initialState = {
  isLoading: false,
  isSubmitted: false,
};

const submitFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_FORM_LOADING:
      console.log('SUBMIT_FORM_LOADING>>>>');
      return {
        ...state,
        isLoading: true,
        isSubmitted: false,
      };
    case actionTypes.SUBMIT_FORM_SUCCESS:
      console.log('SUBMIT_FORM_SUCCESS>>>>', action.payload);
      const isSubmitted = action.payload === 'success' ? true : false;
      return {
        ...state,
        isLoading: false,
        isSubmitted,
      };
    case actionTypes.SUBMIT_FORM_ERROR:
      console.log('SUBMIT_FORM_ERROR>>>>');
      return {
        ...state,
        isLoading: false,
        isSubmitted: false,
      };
    default:
      return state;
  }
};

export default submitFormReducer;
