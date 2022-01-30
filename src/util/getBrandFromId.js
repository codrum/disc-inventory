export const getBrandFromId = (brands, brandId) => {
	return brands.find(brand => brand.id === brandId).name
}
