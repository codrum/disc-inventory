import * as React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Navigate, useNavigate } from 'react-router-dom'
import Userfront from '@userfront/react'
import HeaderButton from './HeaderButton'
import Search from './Search'

function Header(props) {
	const { sections, title } = props

	let navigate = useNavigate()

	const handleRouteToHome = () => {
		navigate('/')
	}

	const handleLogin = () => {
		navigate('/login')
	}

	return (
		<React.Fragment>
			<Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
				{Userfront.tokens.accessToken && (
					<Button onClick={Userfront.logout} size='small'>
						Logout
					</Button>
				)}

				<Typography
					component='h2'
					variant='h5'
					color='inherit'
					align='center'
					noWrap
					sx={{ flex: 1 }}
					onClick={handleRouteToHome}
				>
					{title}
				</Typography>
				<IconButton>
					<Search />
				</IconButton>
				{/* <Button variant='outlined' size='small'>
					Sign up
				</Button> */}
			</Toolbar>
			<Toolbar
				component='nav'
				variant='dense'
				sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
			>
				{sections.map(section => (
					<HeaderButton title={section.title} url={section.url} key={section.title + 'key'} />
					// <Link
					// 	color='inherit'
					// 	noWrap
					// 	key={section.title}
					// 	variant='body2'
					// 	href={section.url}
					// 	sx={{ p: 1, flexShrink: 0 }}
					// >
					// 	{section.title}
					// </Link>
				))}
			</Toolbar>
		</React.Fragment>
	)
}

// Header.propTypes = {
// 	sections: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			title: PropTypes.string.isRequired,
// 			url: PropTypes.string.isRequired,
// 		})
// 	).isRequired,
// 	title: PropTypes.string.isRequired,
// }

export default Header
