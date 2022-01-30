import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { setFilter } from 'util/setFilter'
import { useDispatch } from 'react-redux'
import { setBrandFilter } from 'redux/reducers/filterSlice'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

function getStyles(name, value, theme) {
	return {
		fontWeight:
			value.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	}
}

const SelectChip = props => {
	const { menuNames, title, filterName } = props

	const dispatch = useDispatch()
	const theme = useTheme()
	const [value, setValue] = React.useState([])

	const handleChange = event => {
		const {
			target: { value },
		} = event
		setValue(
			// On autofill we get a the stringified value.
			typeof value === 'string' ? value.split(',') : value
		)
		setFilter(dispatch, filterName, value)
	}

	return (
		<div>
			<FormControl sx={{ m: 1, width: '90%' }}>
				<InputLabel id='demo-multiple-chip-label'>{title}</InputLabel>
				<Select
					labelId='demo-multiple-chip-label'
					id='demo-multiple-chip'
					multiple
					value={value}
					onChange={handleChange}
					input={<OutlinedInput id='select-multiple-chipz' label='Chip' />}
					renderValue={selected => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map(val => (
								<Chip key={`da${val}`} label={val} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{title === 'Weight' || title === 'Prices'
						? menuNames.map(name => (
								<MenuItem
									key={`${name.title}`}
									value={name.title}
									style={getStyles(name, value, theme)}
								>
									{name.title}
								</MenuItem>
						  ))
						: menuNames.map(name => (
								<MenuItem
									key={name}
									value={name.id ? name.id : name}
									style={getStyles(name, value, theme)}
								>
									{name.id ? name.name : name}
								</MenuItem>
						  ))}
					{/* {menuNames.map(name => (
						<MenuItem key={name} value={name} style={getStyles(name, value, theme)}>
							{name}
						</MenuItem>
					))} */}
				</Select>
			</FormControl>
		</div>
	)
}

export default SelectChip
