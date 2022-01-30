import { Container, CssBaseline, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PageNotFound from 'components/error/PageNotFound'
import ServerError from 'components/error/ServerError'
import Login from 'components/Login'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Gallery from '../components/gallery/Gallery'
import Header from '../components/header/Header'
import InventoryForm from '../components/InventoryForm'
import EditProductPage from '../pages/EditProductPage'
import ProductPage from '../pages/ProductPage'
import HomePage from './../pages/HomePage'

const sections = [
	{ title: 'Gallery', url: '/discs' },
	{ title: 'Categories', url: '/' },
	{ title: 'Brands', url: '/' },
	{ title: 'Business', url: '/' },
]

// const switchRoutes = (

// )

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}

			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const theme = createTheme()

const Layout = props => {
	const { discs, status: discStatus } = useSelector(state => state.discs)
	const { brands, status: brandStatus } = useSelector(state => state.brands)
	const { types, status: discTypeStatus } = useSelector(state => state.discTypes)
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth={'lg'} sx={{ paddingBottom: 5 }}>
				<Header title={`Fargendo's Discs`} sections={sections} />
			</Container>
			{/* <Container maxWidth={'xl'}> */}
			<main>
				<Routes>
					<Route path='/page-not-found' element={<PageNotFound />} />

					<Route path='/server-error' element={<ServerError />} />

					<Route path='/discs' element={<Gallery discs={discs} discStatus={discStatus} />} />

					<Route path='discs/admin/create-new-disc' element={<InventoryForm />} />

					<Route path='discs/admin/*' element={<EditProductPage />} />

					<Route path='discs/*' element={<ProductPage />} />

					<Route path='login' element={<Login />} />

					<Route path='/*' element={<HomePage />} />
				</Routes>
			</main>
			{/* </Container> */}
			<footer>
				<Typography variant='h6' align='center' gutterBottom>
					Footer
				</Typography>
				<Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</footer>
		</ThemeProvider>
	)
}

export default Layout
