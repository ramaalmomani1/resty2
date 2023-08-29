export const initState = {
  data: { headers: null, results: null },
  requestParams: {},
  loading: false,
  history: [],
  renderHis: false,
};

export const actionType = {
  LOADING: "LOADING",
  REQUEST_PARAMS: "REQUEST_PARAMS",
  DATA: "DATA",
  HISTORY: "HISTORY",
  RENDERHIS: "RENDERHIS"
};

/////////////////////// FORM

export const formInitState = {
  method: "GET",
  url: " ",
};

export const formActionType = {
  METHOD: "METHOD",
  URL: "URL",
};

/////////////////////

export function reducer(state, action) {
  switch (action.type) {
    case actionType.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actionType.REQUEST_PARAMS:
      return {
        ...state,
        requestParams: action.payload,
      };
    case actionType.DATA:
      return {
        ...state,
        data: action.payload,
      };
    case actionType.HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
      case actionType.RENDERHIS:
        return {
          ...state,
          renderHis: action.payload,
        };

    //////////FORM
    case formActionType.METHOD:
      return {
        ...state,
        method: action.payload,
      };
    case formActionType.URL:
      return {
        ...state,
        url: action.payload,
      };

    default:
      return state;
  }
}
