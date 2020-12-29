import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../reducers/Product';
import useRquest from './useRequest';

export default function useProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product.product);

  const inputProduct = (product) => {
    dispatch(setProduct(product));
  };

  return [{ product }, { inputProduct }];
}
