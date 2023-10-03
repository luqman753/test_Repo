import React from 'react';
import { Button, Input } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../api';

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState('');

	const register = async () => {
		setError('');
		authService
			.register(name, email, password)
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
		register();
	};

	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<h1>Register</h1>
			<form
				onSubmit={onSubmit}
				className="flex flex-col justify-center items-center gap-4"
			>
				<Input
					onChange={(e) => setName(e.target.value)}
					placeholder="name"
					type="text"
					required={true}
				/>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
					type="email"
					required={true}
				/>
				<Input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
					type="password"
					required={true}
				/>
				<Button onClick={register}>Register</Button>
			</form>
			<p>{error && <span className="text-red-500 text-sm">{error}</span>}</p>
			<p>
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
};

export default Register;
