import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const fetchDiscs = createAsyncThunk('discs/fetchDiscs', async () => {
	//let navigate = useNavigate()
	try {
		const response = await axios.get('http://localhost:8080/inventory/discs')
		return response.data
	} catch (error) {
		throw error
	}
})

const initialState = {
	discs: [],
	status: 'idle',
	currentRequestId: undefined,
	error: null,
}

const discs = createSlice({
	name: 'discs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchDiscs.pending, (state, action) => {
			if (state.status === 'idle') {
				state.status = 'pending'
				state.currentRequestId = action.meta.requestId
			}
		})
		builder.addCase(fetchDiscs.fulfilled, (state, action) => {
			const { requestId } = action.meta
			if (state.status === 'pending' && state.currentRequestId === requestId) {
				state.status = 'fulfilled'
				state.discs = action.payload
				state.currentRequestId = undefined
			}
		})
		builder.addCase(fetchDiscs.rejected, (state, action) => {
			const { requestId } = action.meta
			if (state.status === 'pending' && state.currentRequestId === requestId) {
				state.status = 'idle'
				state.error = action.error
				state.currentRequestId = undefined
			}
		})
	},
})

export default discs.reducer
