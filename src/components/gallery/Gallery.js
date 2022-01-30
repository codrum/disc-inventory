import { Container, Grid } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import BarFilter from '../filters/BarFilter'
import Images from './Images'
import LoadMoreButton from './LoadMoreButton'
import filterDiscs from './../../util/filterDiscs'

const Gallery = props => {
	let arrayForHoldingDiscs = []
	const { discs, status: discStatus } = useSelector(state => state.discs)
	const filter = useSelector(state => state.filter)

	const [state, setState] = React.useState({
		pageCount: 0,
	})
	const discsPerPage = 20

	const [filteredDiscs, setFilteredDiscs] = React.useState(discs)
	const [discsToShow, setDiscsToShow] = React.useState([])
	const [next, setNext] = React.useState(20)

	const loopWithSlice = useCallback(
		(start, end) => {
			const slicedDiscs = filteredDiscs.slice(start, end)
			//console.log('sliced discs: ' + slicedDiscs.length)

			if (!arrayForHoldingDiscs.includes(slicedDiscs[0])) {
				arrayForHoldingDiscs = [...arrayForHoldingDiscs, ...slicedDiscs]
			}

			setDiscsToShow(arrayForHoldingDiscs)
			//console.log(arrayForHoldingDiscs)
		},
		[discs]
	)

	useEffect(() => {
		// call filter functions here

		filterDiscs(discs, filter)
		if (discStatus === 'fulfilled') {
			loopWithSlice(0, discsPerPage)
		}
	}, [discStatus, loopWithSlice, filter, discs])

	const handleLoadMore = event => {
		if (next >= discs.length) {
			setNext(discs.length)
		}
		loopWithSlice(next, next + discsPerPage)
		setNext(next + discsPerPage)
	}

	const endOfPage = next === discs.length

	return (
		<>
			<Container maxWidth={'xl'}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<BarFilter />
					</Grid>
					<Images discsToShow={discsToShow} />
				</Grid>
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
					style={{ paddingTop: 12 }}
				>
					{!endOfPage && <LoadMoreButton handleLoadMore={handleLoadMore} />}
				</Grid>
				<Outlet />
			</Container>
		</>
	)
}

export default Gallery
