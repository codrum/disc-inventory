import { Grid } from '@mui/material'
import SelectChip from 'components/filters/SelectChip'
import * as React from 'react'
import { useSelector } from 'react-redux'

const colors = [
	'All',
	'Red',
	'Blue',
	'Orange',
	'Yellow',
	'White',
	'Pink',
	'Glow',
	'Green',
	'Purple',
	'Brown',
	'Gray',
	'Black',
	'Transluscent',
	'Clear',
	'Other',
]

const weights = [
	{ title: '150-160', value: [150, 160] },
	{ title: '161-165', value: [161, 165] },
	{ title: '166-168', value: [166, 168] },
	{ title: '169-170', value: [169, 170] },
	{ title: '171-172', value: [171, 172] },
	{ title: '173-175', value: [173, 175] },
	{ title: '176+', value: [176, 180] },
]

const prices = [
	{ title: '$0-$10', value: [0.0, 10.0] },
	{ title: '$10-$15', value: [10.01, 15.0] },
	{ title: '$15-$20', value: [15.01, 20.0] },
	{ title: '$20-$25', value: [20.01, 25.0] },
	{ title: '$25-$30', value: [25.01, 30.0] },
	{ title: '$30-$50', value: [30.01, 50.0] },
	{ title: '$50+', value: [50.01] },
]

const flatness = [1, 2, 3, 4, 5]

const stiffness = [1, 2, 3, 4, 5]

const BarFilter = props => {
	const brandNames = useSelector(state => state.brands.brands.map(brand => brand.name))
	const brands = useSelector(state => state.brands.brands)
	const discs = useSelector(state => state.discs.discs)
	const discTypeNames = useSelector(state => state.discTypes.types.map(type => type.name))
	let uniqueStampColorSet = [...new Set(discs.map(disc => disc.stampColor))]

	const onChange = (type, payload) => {
		//dispatch(filter())
	}

	return (
		<>
			<Grid container justifyContent='space-between'>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={colors} title='Color' filterName='color' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={uniqueStampColorSet} title='Stamp Color' filterName='stampColor' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={brands} title='Brands' filterName='brand' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={weights} title='Weight' filterName='weight' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={prices} title='Prices' filterName='price' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={flatness} title='Flatness' filterName='flatness' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={stiffness} title='Stiffness' filterName='stiffness' />
				</Grid>
				<Grid item xs={6} md={4} xl={3}>
					<SelectChip menuNames={discTypeNames} title='Type' filterName='type' />
				</Grid>
			</Grid>
		</>
	)
}

export default BarFilter
