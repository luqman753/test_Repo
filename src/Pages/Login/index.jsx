import React from 'react';
import { Input, Button } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../api';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState('');

	const login = async () => {
		setError('');
		authService
			.login(email, password)
			.then((res) => {
				localStorage.setItem('token', res.accessToken);
				localStorage.setItem('user', JSON.stringify(res.user));
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
			});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<h1>Login</h1>
			<form
				onSubmit={onSubmit}
				className="flex flex-col justify-center items-center gap-4"
			>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required={true}
					type="email"
				/>
				<Input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					required={true}
					type="password"
				/>
				<Button onClick={login}>Login</Button>
			</form>
			<p>{error && <span className="text-red-500 text-sm">{error}</span>}</p>
			<p>
				Already have an account? <Link to="/register">Register</Link>
			</p>
		</div>
	);
};

export default Login;
