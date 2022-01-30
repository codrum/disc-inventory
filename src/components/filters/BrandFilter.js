import { MenuItem, Select } from '@mui/material'
import React from 'react'

const BrandFilter = ({ brandFilter, handleBrandFilter, brands }) => {
	return (
		<Select
			labelId='test-select'
			id='test-select'
			value={brandFilter}
			label='filter'
			onChange={handleBrandFilter}
		>
			{brands.map(brand => (
				<MenuItem key={'menuItem' + brand.id} value={brand.id}>
					{brand.name}
				</MenuItem>
			))}
		</Select>
	)
}

export default BrandFilter
