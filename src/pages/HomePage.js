import * as React from 'react'
import { Grid, Container, Typography, Button } from '@mui/material'
import LandingPageHero from 'components/homePage/LandingPageHero'
import { useSelector } from 'react-redux'
import GalleryCard from './../components/card/GalleryCard'

const HomePage = () => {
	const discsToShow = useSelector(state => state.discs.discs.slice(0, 4))

	const newDiscs = useSelector(state =>
		state.discs.discs.slice(state.discs.discs.length - 4, state.discs.discs.length)
	)

	// const discsToShow = discs.slice(0, 4)

	// const reverseDiscsToShow = Array.from(discs).reverse().slice(0, 4)

	// const reversedDiscsToShow = discs.slice(discs.length - 4, discs.length)

	const featuredDiscs = discsToShow.map(disc => (
		<Grid item xs={3} key={'featuredDiscs' + disc.id}>
			<GalleryCard disc={disc} />
		</Grid>
	))

	const newDiscsList = newDiscs.map(disc => (
		<Grid item xs={3} key={'newDiscList' + disc.id}>
			<GalleryCard disc={disc} />
		</Grid>
	))

	return (
		<Container maxWidth={'xl'}>
			<LandingPageHero />
			<Grid container spacing={2} sx={{ marginTop: 3 }}>
				<Grid item xs={12}>
					<Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
						Featured
					</Typography>
				</Grid>
				{featuredDiscs}
				<Grid item xs={12}>
					<Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
						Newly Added
					</Typography>
				</Grid>
				{newDiscsList}
			</Grid>
		</Container>
	)
}

export default HomePage
