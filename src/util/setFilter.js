import {
	setBrandFilter,
	setColorFilter,
	setStampColorFilter,
	setWeightFilter,
	setPriceFilter,
	setFlatnessFilter,
	setStiffnessFilter,
	setTypeFilter,
} from './../redux/reducers/filterSlice'

export const setFilter = (dispatch, funcName, payload) => {
	funcName === 'brand' && dispatch(setBrandFilter(payload))
	funcName === 'color' && dispatch(setColorFilter(payload))
	funcName === 'stampColor' && dispatch(setStampColorFilter(payload))
	funcName === 'weight' && dispatch(setWeightFilter(payload))
	funcName === 'price' && dispatch(setPriceFilter(payload))
	funcName === 'flatness' && dispatch(setFlatnessFilter(payload))
	funcName === 'stiffness' && dispatch(setStiffnessFilter(payload))
	funcName === 'type' && dispatch(setTypeFilter(payload))
}
