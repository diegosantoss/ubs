const INITIAL_STATE = {
  list: [],
  allProducts: [],
  loading: true,
  message: ''
};

export function productsReducers(state = INITIAL_STATE, action){
  switch(action.type){
    case 'GET_PRODUCTS':
      state = { ...state, list: action.payload.products, allProducts: action.payload.allProducts, loading: false }
    
    case 'SEARCH_PRODUCTS':
      state = { ...state, list: action.payload.products, message: action.payload.message }
  } 

  return state;
}
