import instance from './isntance';

export const fetchAllProducts = async () => {
  const res = await instance.get('/products');
  return res.data;
};
