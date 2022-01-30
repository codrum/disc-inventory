import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
	button: {
		color: '#000000',
	},
}))

const LoadMoreButton = props => {
	const classes = useStyles()

	return (
		<div>
			<Button variant='contained' className={classes.button} onClick={props.handleLoadMore}>
				Load More
			</Button>
		</div>
	)
}

export default LoadMoreButton
