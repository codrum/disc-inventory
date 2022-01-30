import axios from 'axios'

const baseURL = 'http://localhost:8080/inventory/disc'

export const updateDisc = disc => {
	console.log(disc.imageUrl)
	axios
		.put(baseURL, {
			id: disc.id,
			brandId: disc.brandId,
			typeId: disc.typeId,
			statusId: disc.statusId, //FOR_SALE or UNAVAILABLE
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
			used: disc.used,
			imageUrl: disc.imageUrl,
		})
		.then(response => {
			console.log('success ' + response.data)
		})
		.catch(error => console.log('error ' + error))
}
