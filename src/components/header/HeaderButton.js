import { Button } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderButton = props => {
	const { title, url } = props
	const navigate = useNavigate()

	const handleClick = event => {
		navigate(url)
	}

	return (
		<>
			<Button variant='text' onClick={handleClick}>
				{title}
			</Button>
		</>
	)
}

export default HeaderButton
