import ACTION from 'actions/actionTypes';

const initialState = {
  isFetching: true,
  error: null,
  transactionData: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_USER_TX_HISTORY_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      }
    }

    case ACTION.GET_USER_TX_HISTORY_ERROR: {
      const {payload: {error}} = action;
      return {
        ...state,
        isFetching: false,
        error
      }
    }

    case ACTION.GET_USER_TX_HISTORY_SUCCESS: {
      const {payload: {data}} = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        transactionData: data
      }
    }
  
    default:{
      return state;
    }
  }
}