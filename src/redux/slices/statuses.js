import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStatuses = createAsyncThunk('discs/fetchStatuses', async (req, res) => {
	try {
		const response = await axios.get('http://localhost:8080/inventory/statuses')
		return response.data
	} catch (error) {
		throw error
	}
})

const initialState = {
	statuses: [],
	status: 'idle',
	currentRequestId: undefined,
	error: null,
}

const statuses = createSlice({
	name: 'discs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchStatuses.pending, (state, action) => {
			if (state.status === 'idle') {
				state.status = 'pending'
				state.currentRequestId = action.meta.requestId
			}
		})
		builder.addCase(fetchStatuses.fulfilled, (state, action) => {
			const { requestId } = action.meta
			if (state.status === 'pending' && state.currentRequestId === requestId) {
				state.status = 'fulfilled'
				state.statuses = action.payload
				state.currentRequestId = undefined
			}
		})
		builder.addCase(fetchStatuses.rejected, (state, action) => {
			const { requestId } = action.meta
			if (state.status === 'pending' && state.currentRequestId === requestId) {
				state.status = 'idle'
				state.error = action.error
				state.currentRequestId = undefined
			}
		})
	},
})

export default statuses.reducer
