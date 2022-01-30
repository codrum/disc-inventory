import { Grid, MenuItem, Select, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { useSelector } from 'react-redux'
import ProductFormSimpleInput from './ProductFormSimpleInput'
import { createNewDisc } from '../../api/createNewDisc'
import { updateDisc } from '../../api/updateDisc'
import ImageModal from '../ImageModal'

const style = {
	// paddingTop: 2,
}

const EditProductForm = props => {
	const { disc } = props
	const { brands } = useSelector(state => state.brands)
	const { types } = useSelector(state => state.discTypes)

	const [state, setState] = React.useState(disc)

	const getBrandNameFromId = () => {
		return brands.find(brand => brand.id === disc.brandId).name
	}

	const getDiscTypeFromId = () => {
		return types.find(type => type.id === disc.typeId).name
	}

	const handleSetState = makeHandleSetState(setState)

	const submitUpdatedData = () => {
		setState({
			...state,
			color: state.color.toLowerCase(),
			stampColor: state.stampColor.toLowerCase(),
		})

		updateDisc(state)
	}

	const inputs = [
		{
			title: 'Title',
			placeholder: state.title,
			name: 'title',
			value: state.title,
			xs: 12,
			width: '45%',
			handleSetState: handleSetState,
		},
		{
			title: 'Description',
			name: 'description',
			placeholder: state.description,
			value: state.description,
			xs: 12,
			width: '95%',
			multiline: 4,
			handleSetState: handleSetState,
		},
		{
			title: 'Type (number)',
			name: 'discType',
			placeholder: `${state.typeId} - ${getDiscTypeFromId()}`,
			value: state.typeId,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
		{
			title: 'Brand (number)',
			name: 'brandId',
			placeholder: `${state.brandId} - ${getBrandNameFromId()}`,
			value: state.brandId,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
		{
			title: 'Mold',
			name: 'mold',
			placeholder: state.mold,
			value: state.mold,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
		{
			title: 'Plastic',
			name: 'plastic',
			placeholder: state.plastic,
			value: state.plastic,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
	]

	const bottomInputs = [
		{
			title: 'Weight',
			name: 'weight',
			placeholder: `${state.weight}`,
			value: `${state.weight}`,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
		{
			title: 'Price',
			name: 'price',
			placeholder: `${state.price}`,
			value: `${state.price}`,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
		{
			title: 'Color',
			name: 'color',
			placeholder: state.color,
			value: state.color,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
		{
			title: 'Stamp Color',
			name: 'stampColor',
			placeholder: state.stampColor,
			value: state.stampColor,
			xs: 6,
			width: '90%',
			handleSetState: handleSetState,
		},
	]

	const showInputs = inputs.map(input => (
		<ProductFormSimpleInput
			key={input.title + 'id'}
			title={input.title}
			placeholder={input.placeholder}
			xs={input.xs}
			width={input.width}
			multiline={typeof input.multiline !== 'undefined' ? input.multiline : null}
			handleSetState={input.handleSetState}
			name={input.name}
			value={input.value}
		/>
	))

	const showBottomInputs = bottomInputs.map(input => (
		<ProductFormSimpleInput
			key={input.title + 'id'}
			title={input.title}
			placeholder={input.placeholder}
			xs={input.xs}
			width={input.width}
			multiline={typeof input.multiline !== 'undefined' ? input.multiline : null}
			handleSetState={input.handleSetState}
			name={input.name}
			value={input.value}
		/>
	))
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<ImageModal image={state.imageUrl} />
				</Grid>
				<Grid item xs={7}>
					<Box component='form' noValidate autoComplete='off'>
						<Grid container direction='row' spacing={2} justifyContent='flex-end'>
							{showInputs}
						</Grid>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<Grid container spacing={2}>
						<ProductFormSimpleInput
							xs={12}
							title='Image'
							placeholder={state.imageUrl}
							value={state.imageUrl}
							name={'imageUrl'}
							width='90%'
							handleSetState={handleSetState}
						/>

						<Grid item xs={12}>
							<Typography variant='body1' sx={style}>
								Used
							</Typography>
							<Select
								labelId='select-used'
								id='select-used'
								value={state.used}
								name='used'
								onChange={handleSetState}
								sx={{ width: '90%' }}
							>
								<MenuItem value={true}>Used</MenuItem>
								<MenuItem value={false}>New</MenuItem>
							</Select>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body1' sx={style}>
								For Sale
							</Typography>
							<Select
								labelId='select-statusId'
								id='select-statusId'
								value={state.statusId}
								name='statusId'
								onChange={handleSetState}
								sx={{ width: '90%' }}
							>
								<MenuItem value={1}>1 - Sold</MenuItem>
								<MenuItem value={2}>2 - Available</MenuItem>
								<MenuItem value={3}>3 - Unavailable</MenuItem>
							</Select>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={7}>
					<Grid container spacing={2}>
						{showBottomInputs}
						<Grid item xs={6}>
							<Typography variant='body1' sx={style}>
								Flatness
							</Typography>
							<Select
								labelId='select-flatness'
								id='select-flatness'
								value={state.flatness}
								name='flatness'
								onChange={handleSetState}
								sx={{ width: '90%' }}
							>
								<MenuItem value={1}>1 - Board Flat</MenuItem>
								<MenuItem value={2}>2 - Mostly Flat</MenuItem>
								<MenuItem value={3}>3 - Neutral</MenuItem>
								<MenuItem value={4}>4 - Domey</MenuItem>
								<MenuItem value={5}>5 - Very Domey</MenuItem>
							</Select>
						</Grid>
						<Grid item xs={6}>
							<Typography variant='body1' sx={style}>
								Stiffness
							</Typography>
							<Select
								labelId='select-stiffness'
								id='select-stiffness'
								value={state.stiffness}
								name='stiffness'
								onChange={handleSetState}
								sx={{ width: '90%' }}
							>
								<MenuItem value={1}>1 - Very Domey</MenuItem>
								<MenuItem value={2}>2 - Domey</MenuItem>
								<MenuItem value={3}>3 - Neutral</MenuItem>
								<MenuItem value={4}>4 - Stiff</MenuItem>
								<MenuItem value={5}>5 - Very Stiff</MenuItem>
							</Select>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Box textAlign='center'>
				<Button
					variant='contained'
					color='primary'
					onClick={submitUpdatedData}
					size='large'
					sx={{ marginTop: 4, marginBottom: 2, justifyContent: 'center' }}
				>
					Submit
				</Button>
			</Box>
		</>
	)
}

export default EditProductForm

function makeHandleSetState(setState) {
	return event => {
		const name = event.target.name // comes from inputProps
		console.log(name)
		setState(state => ({
			...state,
			[name]: event.target.value,
		}))
	}
}
