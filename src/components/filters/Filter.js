import { Button, Checkbox, Collapse, FormControlLabel, FormGroup } from '@mui/material'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'
import { connect } from 'react-redux'
// import { checkBoxFilter } from '../../../redux/actions/filterActions'

const Filter = props => {
	const { name } = props

	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = event => {
		setExpanded(!expanded)
	}

	const [state, setState] = React.useState({
		Discmania: false,
		checkedB: false,
		checkedF: false,
		checkedG: false,
	})

	let menuNames

	if (name === 'brands') {
		menuNames = ['Discmania', 'Discraft', 'Innova', 'Dynamic Discs', 'MVP']
	} else if (name === 'type') {
		menuNames = ['Distance', 'Fairway', 'Midrange', 'Putter']
	} else if (name === 'weight') {
		menuNames = ['160-164', '165-169', '170-172', '173-175', '176-177', '178-180']
		menuNames.reverse()
	} else if (name === 'color') {
		menuNames = ['Blue', 'Red', 'Pink', 'Glow', 'Black', 'White', 'Yellow', 'Orange', 'Purple']
	} else {
	}

	const handleChange = (event, item) => {
		setState({ ...state, [event.target.name]: event.target.checked })
		props.filterCheckBox(item, name)
	}

	const menuItems = menuNames.map(menuItem => (
		<FormControlLabel
			key={menuItem}
			control={
				<Checkbox
					checked={state[menuItem]}
					name={menuItem}
					onChange={handleChange}
					color='primary'
				/>
			}
			label={menuItem}
		/>
	))

	return (
		<div>
			<Button
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label='show more'
				endIcon={<ArrowDropDownIcon />}
			>
				{name}
			</Button>
			<Collapse in={expanded} name={name} timeout='auto' unmountOnExit>
				<FormGroup column>{menuItems}</FormGroup>
			</Collapse>
		</div>
	)
}
// const mapStateToProps = ({ cart }) => ({
// 	cart,
// })

// const mapDispatchToProps = dispatch => ({
// 	filterCheckBox: (filter, name) => dispatch(checkBoxFilter(filter, name)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
export default Filter
