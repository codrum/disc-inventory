import SearchIcon from '@mui/icons-material/Search'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import * as React from 'react'

const Search = props => {
	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	})

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		})
	}

	const handleMouseDownPassword = event => {
		event.preventDefault()
	}

	return (
		<FormControl sx={{ m: 1, width: '10ch' }} variant='standard'>
			<InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
			<Input
				id='standard-adornment-password'
				type={values.showPassword ? 'text' : 'password'}
				value={values.password}
				onChange={handleChange('password')}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	)
}

export default Search
