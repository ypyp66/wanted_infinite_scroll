const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const loadingStart = () => ({ type: LOADING });
export const success = ({ data }) => ({ type: SUCCESS, data });
export const getError = error => ({ type: ERROR, error });

const initialState = {
  loading: true,
  data: null,
  error: null,
};

export const reducer = (state = initialState, { type, data, error }) => {
  switch (type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        data,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        data: null,
        error,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
