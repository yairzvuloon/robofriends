
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';


export const setSearchField = text => ({ type: CHANGE_SEARCH_FIELD, payload: text })

export const requestRobots = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const payload = await res.json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload })
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
}