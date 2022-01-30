import EditIcon from '@mui/icons-material/Edit'
import { Card, CardActionArea, CardContent, IconButton, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LazyImage from './LazyImage'
import { useSelector } from 'react-redux'
import authorization from './../../redux/reducers/authReducer'

const style = {
	card: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
		height: 'auto',
		width: '100%',
	},
	cardContent: {
		height: '100%',
		width: '100%',
	},
}

const GalleryCard = props => {
	const authorized = useSelector(state => state.authorization.authorized)
	let navigate = useNavigate()
	const [loaded, setLoaded] = React.useState(false)
	const { disc } = props

	const handleEditClick = (e, title, id) => {
		e.preventDefault()
		const path = '/discs/admin/' + title.toLowerCase().replace(/\s/g, '-') + '-' + id
		navigate(path)
	}

	const handleContentClick = e => {
		e.preventDefault()
		const path = '/discs/' + disc.title.toLowerCase().replace(/\s/g, '-') + '-' + disc.id
		navigate(path)
	}

	const handleSetLoaded = event => {
		setLoaded(true)
	}

	return (
		<Card sx={style.card}>
			<CardActionArea>
				{authorized && (
					<IconButton
						onClick={e => handleEditClick(e, disc.title, disc.id)}
						sx={{ position: 'absolute' }}
					>
						<EditIcon />
					</IconButton>
				)}
				<LazyImage
					src={disc.imageUrl}
					handleSetLoaded={handleSetLoaded}
					handleContentClick={handleContentClick}
				/>
			</CardActionArea>
			<CardActionArea>
				<CardContent sx={style.cardContent}>
					{loaded ? (
						<React.Fragment>
							<Typography gutterBottom variant='h6' align='center' component='h2'>
								{disc.title}
							</Typography>
							<Typography noWrap variant='body2' color='textSecondary' align='center' component='p'>
								{disc.brand}
							</Typography>

							<Typography variant='body1' align='center' component='p'>
								{'$' + disc.price}
							</Typography>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Skeleton
								animation='wave'
								height={30}
								width='50%'
								style={{ marginBottom: 1, left: '25%' }}
							/>
							<Skeleton animation='wave' height={30} width='50%' style={{ left: '25%' }} />
						</React.Fragment>
					)}
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default GalleryCard
