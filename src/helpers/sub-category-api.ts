export const getProductsEndPoint = (url = '', pattern = '', id) => {
  const productAPIEndPoint = url.replace(pattern, id)
  return productAPIEndPoint
}