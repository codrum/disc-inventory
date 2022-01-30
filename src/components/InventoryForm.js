import {
	Button,
	Container,
	FormControl,
	InputLabel,
	Select,
	TextField,
	Checkbox,
	FormControlLabel,
	Grid,
	Typography,
} from '@mui/material'

import React from 'react'
import { useSelector } from 'react-redux'
import { createNewDisc } from '../api/createNewDisc'

const InventoryForm = props => {
	// const { brands, brandStatus, types, discTypeStatus, discs, discStatus } = props
	const { brands, status: brandStatus } = useSelector(state => state.brands)
	const { types, status: discTypeStatus } = useSelector(state => state.discTypes)

	const [state, setState] = React.useState({
		brand: 0,
		discType: 0,
		color: '',
		stampColor: '',
		mold: '',
		plastic: '',
		title: '',
		description: '',
		weight: 0,
		price: 0,
		forSale: false,
		flatness: 3,
		stiffness: 3,
		used: false,
		imageUrl: '',
		showOtherColor: false,
		showOtherStampColor: false,
	})

	const handleSetState = makeHandleSetState(setState)

	const toggleChange = event => {
		const name = event.target.name
		console.log(name)
		setState({
			...state,
			[name]: !state[name],
		})
	}

	const submitData = () => {
		setState({
			...state,
			color: state.color.toLowerCase(),
			stampColor: state.stampColor.toLowerCase(),
		})
		// state.color.toLowerCase()
		// state.stampColor.toLowerCase()
		createNewDisc(state)
	}

	const showOtherColorTextField = (
		<Grid item xs={12} sm={2}>
			<TextField
				onChange={handleSetState}
				required
				id='color'
				name='color'
				label='Color'
				fullWidth
			/>
		</Grid>
	)

	const showOtherStampColorTextField = (
		<Grid item xs={12} sm={2}>
			<TextField
				onChange={handleSetState}
				required
				id='stampColor'
				name='stampColor'
				label='Stamp Color'
				fullWidth
			/>
		</Grid>
	)

	const notLoading = discTypeStatus === 'fulfilled' && brandStatus === 'fulfilled'

	return (
		notLoading && (
			<React.Fragment>
				<Typography variant='h6' gutterBottom>
					Disc Inventory
				</Typography>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} align='left'>
							<FormControl>
								<InputLabel required htmlFor='disc-type'>
									Disc Type
								</InputLabel>
								<Select
									native
									value={state.discType.name}
									onChange={handleSetState}
									inputProps={{
										name: 'discType',
										id: 'disc-type',
									}}
								>
									<option />
									{types.map(type => {
										return (
											<option value={type.id} key={'optionType' + type.id}>
												{type.name}
											</option>
										)
									})}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={2} align='left'>
							<FormControl>
								<InputLabel required htmlFor='color'>
									Disc Color
								</InputLabel>
								<Select
									native
									value={state.color}
									onChange={handleSetState}
									inputProps={{
										name: 'color',
										id: 'color',
									}}
								>
									<option aria-label='None' value='' />
									<option value={'clear'}>Clear</option>
									<option value={'transluscent'}>Transluscent</option>
									<option value={'white'}>White</option>
									<option value={'black'}>Black</option>
									<option value={'gray'}>Gray</option>
									<option value={'red'}>Red</option>
									<option value={'blue'}>Blue</option>
									<option value={'green'}>Green</option>
									<option value={'yellow'}>Yellow</option>
									<option value={'orange'}>Orange</option>
									<option value={'purple'}>Purple</option>
									<option value={'other'}>Other</option>
								</Select>
							</FormControl>
						</Grid>
						{state.showOtherColor && showOtherColorTextField}
						{state.showOtherColor ? <Grid item xs={8} /> : <Grid item xs={10} />}

						<Grid item xs={12} sm={2} align='left'>
							<FormControl>
								<InputLabel required htmlFor='color'>
									Stamp Color
								</InputLabel>
								<Select
									native
									value={state.stampColor}
									onChange={handleSetState}
									inputProps={{
										name: 'stampColor',
										id: 'stamp-color',
									}}
								>
									<option aria-label='None' value='' />
									<option value={'clear'}>Clear</option>
									<option value={'transluscent'}>Transluscent</option>
									<option value={'white'}>White</option>
									<option value={'black'}>Black</option>
									<option value={'gray'}>Gray</option>
									<option value={'red'}>Red</option>
									<option value={'blue'}>Blue</option>
									<option value={'green'}>Green</option>
									<option value={'yellow'}>Yellow</option>
									<option value={'orange'}>Orange</option>
									<option value={'purple'}>Purple</option>
									<option value={'other'}>Other</option>
								</Select>
							</FormControl>
						</Grid>
						{state.showOtherStampColor && showOtherStampColorTextField}
						{state.showOtherStampColor ? <Grid item xs={8} /> : <Grid item xs={10} />}

						<Grid item xs={12} align='left'>
							<FormControl>
								<InputLabel required htmlFor='brand-name'>
									Brand
								</InputLabel>
								<Select
									native
									value={state.brand}
									onChange={handleSetState}
									inputProps={{
										name: 'brand',
										id: 'brand',
									}}
								>
									<option />
									{brands.map(brand => {
										return (
											<option value={brand.id} key={'brandOption' + brand.id}>
												{brand.name}
											</option>
										)
									})}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleSetState}
								required
								id='mold'
								name='mold'
								label='Mold'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleSetState}
								required
								id='plastic'
								name='plastic'
								label='Plastic'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleSetState}
								required
								id='title'
								name='title'
								label='Disc Title'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleSetState}
								id='description'
								name='description'
								label='Description'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleSetState}
								required
								id='weight'
								name='weight'
								label='Weight (grams)'
								fullWidth
							/>
						</Grid>
						{/* <Grid item xs={12} sm={6}>
						<TextField
							onChange={handleSetState}
							required
							id='color'
							name='color'
							label='Color'
							fullWidth
						/>
					</Grid> */}

						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleSetState}
								required
								id='price'
								name='price'
								label='Price'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onChange={handleSetState}
								required
								id='imageUrl'
								name='imageUrl'
								label='Image URL'
								fullWidth
							/>
						</Grid>
					</Grid>

					<Grid container align='left'>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color='secondary' name='used' value='no' />} // default value must be unchecked
								label='Used? (Y/N)'
								name='used'
								onChange={toggleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color='secondary' name='forSale' value='no' />} // default value must be unchecked
								label='For sale? (Y/N)'
								name='forSale'
								onChange={toggleChange}
							/>
						</Grid>
						<Grid item xs={12} align='left'>
							<FormControl>
								<InputLabel htmlFor='flatness'>Flatness</InputLabel>
								<Select
									native
									value={state.flatness}
									onChange={handleSetState}
									inputProps={{
										name: 'flatness',
										id: 'flatness',
									}}
								>
									<option aria-label='None' value='' />
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} align='left'>
							<FormControl>
								<InputLabel htmlFor='stiffness'>Stiffness</InputLabel>
								<Select
									native
									value={state.stiffness}
									onChange={handleSetState}
									inputProps={{
										name: 'stiffness',
										id: 'stiffness',
									}}
								>
									<option aria-label='None' value='' />
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
								</Select>
							</FormControl>
						</Grid>
						<Button variant='contained' color='primary' onClick={submitData}>
							Submit
						</Button>
					</Grid>
				</Container>
			</React.Fragment>
		)
	)
}

// const mapStateToProps = ({ discInput, discTypes, brands, statuses }) => ({
// 	discInput,
// 	discTypes,
// 	brands,
// 	statuses,
// })

// const mapDispatchToProps = dispatch => ({})

// export default connect(mapStateToProps, mapDispatchToProps)(InventoryForm)
export default InventoryForm

function makeHandleSetState(setState) {
	return event => {
		const name = event.target.name // comes from inputProps

		setState(state => ({
			...state,
			[name]: event.target.value,
		}))

		if (event.target.value === 'other') {
			console.log('color is other')
			setState(state => ({
				...state,
				...(name === 'color' && { showOtherColor: true }),
				...(name === 'stampColor' && { showOtherStampColor: true }),
			}))
		}
	}
}
