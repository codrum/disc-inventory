import * as React from 'react'
import { Modal } from '@mui/material'
import { Box } from '@mui/system'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	// bgcolor: 'background.paper',
	// border: '2px solid #000',
	// boxShadow: 24,
	p: 4,
}

const ImageModal = props => {
	const { image } = props
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<img src={image} alt='altt' style={{ width: '100%', height: 'auto' }} onClick={handleOpen} />
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<img src={image} alt='altt' style={{ width: '100%', height: '100%' }} />
				</Box>
			</Modal>
		</>
	)
}

export default ImageModal
