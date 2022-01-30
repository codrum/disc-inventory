const filterDiscs = (discs, filters) => {
	//let filteredDiscs = discs.filter(disc => {})
	isDiscInFilter(discs[0], filters)
}

const isDiscInFilter = (disc, filters) => {
	// Object.entries(filters).forEach(({ filterKey, filterValue }) => {
	// 	if (filterValue === []) return
	// 	if (!disc) return
	// 	console.log(filterKey)
	// 	console.log(disc)
	// 	//console.log(filterValue.includes(disc[filterKey]))
	// })
	for (const [key, value] of Object.entries(filters)) {
		if (value.length === 0) return
		console.log(value)
		// if (disc[key] === value) {
		// 	console.log(disc)
		// }
	}
}

export default filterDiscs
