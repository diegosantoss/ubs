import products from '../../data/data_full.json';
import store from '../index'

export function getProducts() {
  return {
    type: 'GET_PRODUCTS',
    payload: { products: products.data, allProducts: products.data }
  }
}

export function searchProducts(query) {
  let newQuery = {};
  let message = '';
  
  Object.keys(query).map( key => {
    if(!!query[key]){
      newQuery[key] = query[key];
    }
  })

  let search = store.getState().products.allProducts.filter(findItems, newQuery);

  function findItems(type) {
    return Object.keys(this).every((key) => type[key].toLowerCase().indexOf(this[key].toLowerCase()) !== -1);
  }

  if(search.length === 0){
    search = store.getState().products.allProducts;
    message = "No products was found.";
  } else {
    message = '';
  }

  return {
    type: 'SEARCH_PRODUCTS',
    payload: { products: search, message }
  }
}