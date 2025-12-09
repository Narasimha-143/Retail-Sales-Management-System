export const mapOptionsFromDataset = (sales) => {
  const regions = new Set();
  const genders = new Set();
  const categories = new Set();
  const tags = new Set();
  const paymentMethods = new Set();

  sales.forEach(s => {
    if (s.customer?.region) regions.add(s.customer.region);
    if (s.customer?.gender) genders.add(s.customer.gender);
    if (s.product?.category) categories.add(s.product.category);
    if (Array.isArray(s.product?.tags)) s.product.tags.forEach(t => tags.add(t));
    if (s.paymentMethod) paymentMethods.add(s.paymentMethod);
  });

  return {
    regions: [...regions],
    genders: [...genders],
    categories: [...categories],
    tags: [...tags],
    paymentMethods: [...paymentMethods]
  };
};
