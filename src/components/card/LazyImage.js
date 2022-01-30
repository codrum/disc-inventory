import { makeStyles } from '@mui/styles'
import Skeleton from '@mui/material/Skeleton'
import React from 'react'

const useStyles = makeStyles(theme => ({
	media: {
		width: '100%',
		// height: 140,
	},
	skeleton: { height: 0, overflow: 'hidden', paddingTop: '100%', position: 'relative' },
}))

const LazyImage = props => {
	const { handleContentClick, src } = props
	const [loaded, setLoaded] = React.useState(false)
	const [error, setError] = React.useState(false)
	const classes = useStyles()

	React.useEffect(() => {
		const img = new Image()
		img.onload = () => {
			//console.log('laoded')
			setLoaded(true)
			props.handleSetLoaded()
		}
		img.onerror = () => {
			//console.log('image load error')
			setError(true)
		}
		img.src = props.src
	}, [])

	return loaded ? (
		<img
			className={classes.media}
			src={src}
			alt={'alternate'}
			onClick={e => handleContentClick(e)}
		/>
	) : (
		<Skeleton
			sx={{ height: 0, overflow: 'hidden', paddingTop: '100%', position: 'relative' }}
			animation='wave'
			variant='rectangular'
		/>
	)
	// if (loaded) return <img className={classes.media} src={props.src} alt={'alternate'} />
	// else return <Skeleton className={classes.skeleton} animation='wave' variant='rectangular' />
}
export default LazyImage
