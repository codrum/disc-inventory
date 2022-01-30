import { Container } from '@mui/material'
import * as React from 'react'
import { useSelector } from 'react-redux'
import EditProductForm from '../components/ProductEditPage/EditProductForm'

const style = {
	paddingTop: 2,
}

const EditProductPage = props => {
	const id = parseInt(window.location.pathname.match(/\d+$/)[0], 10)

	const { discs, status } = useSelector(state => state.discs)
	const [loaded, setLoaded] = React.useState(false)
	// const [disc, setDisc] = React.useState({})

	const foundDisc = React.useMemo(() => {
		return discs.find(d => d.id === id)
	}, [id, discs])

	React.useEffect(() => {
		if (status === 'fulfilled') {
			setLoaded(true)
		}
	}, [status, discs])

	return (
		loaded &&
		foundDisc && (
			<>
				<Container maxWidth={'lg'}>
					<EditProductForm disc={foundDisc} />
				</Container>
			</>
		)
	)
}

export default EditProductPage
