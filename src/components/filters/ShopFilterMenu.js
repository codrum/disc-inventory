import { Grid, Typography } from '@mui/material'
import React from 'react'
import Filter from './Filter'

const ShopFilterMenu = () => {
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = event => {
		setExpanded(!expanded)
	}

	return (
		<Grid container position='fixed'>
			<Typography variant='h2'>Filters</Typography>
			<Grid item xs={12}>
				<Filter name='brands' />
			</Grid>
			<Grid item xs={12}>
				<Filter name='type' />
			</Grid>
			<Grid item xs={12}>
				<Filter name='weight' />
			</Grid>
			<Grid item xs={12}>
				<Filter name='color' />
			</Grid>
		</Grid>
	)
}
export default ShopFilterMenu
