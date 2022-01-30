import { Grid } from '@mui/material'
import React from 'react'
import GalleryCard from '../card/GalleryCard'

function Images(props) {
	const { discsToShow, loaded } = props

	return discsToShow.map(disc => (
		<Grid key={'grid' + disc.id} item xs={12} md={6} xl={3}>
			<GalleryCard disc={disc} />
		</Grid>
	))
}

export default Images
