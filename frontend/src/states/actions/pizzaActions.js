import axios from 'axios';

const getAllPizzas = () => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_PIZZAS_REQUEST',
    });

    try {
      const response = await axios.get('/api/pizzas/getpizzas');
      console.log(response);
      dispatch({
        type: 'GET_PIZZAS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_PIZZAS_FAILURE',
        payload: error,
      });
    }
  };
};

export default getAllPizzas;
