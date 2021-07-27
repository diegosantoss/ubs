import React, { useEffect, useState, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts, searchProducts } from '../../store/Products/actions';

import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './card';

import './index.css';

const Products = () => {
  const [listProducts, setListProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [fields, setFields] = useState({
    product: '',
    origin: ''
  });

  const {products} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.list.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  useEffect(() => {
      dispatch(searchProducts(fields));
      setListProducts([]);
  },[fields])

  function moreProducts(){
    setTimeout( () => {
      let start = 0;
      let end;

      if (products.list.length > 50){
        start = listProducts.length;
        end = start + 50;
        setHasMore(true)
      } else {
        end = start + 50;
        if (end >= products.list.length) {
          end = products.list.length;
        }

        setHasMore(false)
      }

      setListProducts(listProducts.concat(products.list.slice(start, end)));
    }, 1000)
  }

  //render
  if (products.loading) {
    return (
      <div>Loading Products ...</div>
    )
  } else {
    if(listProducts.length === 0){
      moreProducts();
    }

    return (
      <React.Fragment>
        <section className="search-container">
          <section className="search-content">
            <section className="search-item">
              <p>Product: <input value={fields.product} onChange={text => setFields({ ...fields, product: text.target.value }) }/></p>
            </section>
            <section className="search-item">
              <p>Origin: <input value={fields.origin} onChange={text => setFields({ ...fields, origin: text.target.value }) } /></p>
            </section>
          </section>
        </section>

        {!!products.message ? (
          <h3 className="message">{products.message}</h3>
        ) : ''}

        <section className="cards-container">
        <InfiniteScroll
          dataLength={ listProducts.length}
          next={moreProducts}
          hasMore={hasMore}
        >
          {listProducts.map((product, index) => (
            <Card key={index} card={product}/>
          ))}
        </InfiniteScroll>
      </section>
      </React.Fragment>
    );

  }
}

export default Products