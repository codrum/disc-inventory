import * as React from 'react'
import { Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const LandingPageHero = () => {
	const navigate = useNavigate()

	const toDiscs = () => {
		navigate('/discs')
	}
	return (
		<div style={{ position: 'relative' }}>
			<img src={'https://i.imgur.com/xDBbsGR.jpg'} alt='heroImage' width={'100%'} height={'auto'} />
			<div
				style={{
					position: 'absolute',
					top: '20%',
					color: 'white',
					width: '100%',
					textAlign: 'center',
				}}
			>
				<Typography variant='h2'>Every great disc starts with a click.</Typography>
				<Button
					variant='contained'
					size='large'
					disableElevation
					sx={{ marginTop: '5%', fontSize: 21 }}
					onClick={toDiscs}
				>
					Shop Now
				</Button>
			</div>
		</div>
	)
}

export default LandingPageHero
