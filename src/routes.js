import Gallery from './components/gallery/Gallery'
import InventoryForm from './components/InventoryForm'
import DiscPage from './components/DiscPage'

export const routes = [
	{ path: '/*', name: 'inputForm', element: <InventoryForm /> },
	{
		path: 'discs',
		name: 'discGallery',
		element: <Gallery />,
	},
	// { path: 'discs/:id', name: 'discPage', element: <DiscPage /> },
]
