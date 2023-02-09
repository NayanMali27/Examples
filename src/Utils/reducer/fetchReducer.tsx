import { fetchReducerTypes } from "./fetchReducerTypes";


interface stateType {
    loading:Boolean,
    payload:String[],
    error:Boolean,
}
export const fetchReducer = (state: stateType, action: any) => {
    switch (action.type) {
      case fetchReducerTypes.FECTCH_START:
        return {
          loading: true,
          payload: [],
          error: false,
        };
      case fetchReducerTypes.FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          payload: action.payload,
        };
      case fetchReducerTypes.FECTCH_ERROR:
        return {
          loading: false,
          payload: [],
          error: true,  
        };

      default:
        return state;
    }
  };