export const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Fetch failed');
  return await res.json();
};
