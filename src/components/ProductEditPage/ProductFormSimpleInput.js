import { Grid, Typography, TextField } from '@mui/material'
import * as React from 'react'

const ProductFormSimpleInput = props => {
	const { xs, title, placeholder, width, multiline, handleSetState, name, value } = props
	return multiline !== null ? (
		<Grid item xs={xs}>
			<Typography variant='body1'>{title}</Typography>
			<TextField
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleSetState}
				multiline
				rows={multiline}
				sx={{ width: width }}
			/>
		</Grid>
	) : (
		<Grid item xs={xs}>
			<Typography variant='body1'>{title}</Typography>
			<TextField
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleSetState}
				sx={{ width: width }}
			/>
		</Grid>
	)
}

export default ProductFormSimpleInput
