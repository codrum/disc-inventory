import * as React from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

import { fetchBrands } from './redux/slices/brands'
import { fetchDiscs } from './redux/slices/discs'
import { fetchDiscTypes } from './redux/slices/discTypes'
import { fetchStatuses } from './redux/slices/statuses'
import { dispatchFunction } from './util/dispatchFunction'
import Layout from './layouts/Layout'
import Userfront from '@userfront/react'
import { authorized } from './redux/reducers/authReducer'
import { useNavigate } from 'react-router-dom'

Userfront.init('wbm4qgn4')

function App() {
	const dispatch = useDispatch()
	let navigate = useNavigate()

	React.useEffect(() => {
		dispatchFunction(dispatch, fetchDiscTypes)
		dispatch(fetchDiscs())
			.unwrap()
			.then()
			.catch(() => {
				navigate('/server-error')
			})

		dispatchFunction(dispatch, fetchBrands)
		dispatchFunction(dispatch, fetchStatuses)
		if (Userfront.tokens.accessToken) {
			dispatchFunction(dispatch, authorized)
		}
	}, [dispatch, navigate])
	return <Layout />
}

export default App
