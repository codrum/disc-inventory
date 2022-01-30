import * as React from 'react'
import Userfront from '@userfront/react'

const LoginForm = Userfront.build({
	toolId: 'brbmab',
})

const Login = () => {
	React.useEffect(() => {
		console.log('login')
	}, [])
	return (
		<>
			<LoginForm />
		</>
	)
}

export default Login
