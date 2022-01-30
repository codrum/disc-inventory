import axios from 'axios'

const baseURL = 'http://localhost:8080/inventory/disc'

export const createNewDisc = disc => {
	axios
		.post(baseURL, {
			brandId: disc.brand,
			typeId: disc.discType,
			statusId: disc.forSale ? 1 : 3, //FOR_SALE or UNAVAILABLE
			title: disc.title,
			description: disc.description,
			mold: disc.mold,
			plastic: disc.plastic,
			weight: disc.weight,
			color: disc.color,
			stampColor: disc.stampColor,
			price: disc.price,
			flatness: disc.flatness,
			stiffness: disc.stiffness,
			used: disc.used ? 1 : 0,
			imageUrl: disc.imageUrl,
		})
		.then(response => {
			console.log(response.data)
		})
		.catch(error => console.log(error))
}
