import * as React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import ImageModal from '../components/ImageModal'
import { getBrandFromId } from './../util/getBrandFromId'

const ProductPage = () => {
	const id = parseInt(window.location.pathname.match(/\d+$/)[0], 10)
	const { discs, status } = useSelector(state => state.discs)
	const { brands } = useSelector(state => state.brands)
	const [loaded, setLoaded] = React.useState(false)

	const foundDisc = React.useMemo(() => {
		return discs.find(d => d.id === id)
	}, [id, discs])

	React.useEffect(() => {
		if (status === 'fulfilled') {
			setLoaded(true)
		}
	}, [status, discs])

	return (
		loaded &&
		foundDisc && (
			<Container maxWidth={'lg'}>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<ImageModal image={foundDisc.imageUrl} />
					</Grid>

					<Grid item xs={7}>
						<Grid container>
							<Grid item xs={12}>
								<Typography variant='h5'>{foundDisc.title}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h5'>{getBrandFromId(brands, foundDisc.brandId)}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h6'>
									{foundDisc.plastic} {foundDisc.mold}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h6'>{foundDisc.weight}g</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h6'>${foundDisc.price}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h6'>{foundDisc.used ? 'Used' : 'New'}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h6'>{foundDisc.description}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		)
	)
}

export default ProductPage
