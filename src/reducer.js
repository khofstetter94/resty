export const initialState = { apiHistory: [], requestParams: {}, data: null };

export const reducer = (state, action) => {
  switch(action.type){
    case 'HISTORY_ADD':
      return { ...state, apiHistory: [...state.apiHistory, action.payload]};
    case 'HISTORY_REMOVE':
      return {...state, apiHistory: state.apiHistory.filter(call => call !== action.payload)};
    case 'REQ_PARAMS_ADD':
      return { ...state, requestParams: action.payload};
    case 'DATA_ADD':
      return { ...state, data: action.payload};
    default:
      return state;
  }
}
