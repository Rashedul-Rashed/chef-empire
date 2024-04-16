/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
	const { signIn, signInWithGoogle, signInWithGithub, updateUserProfile } =
		useContext(AuthContext);
	const [error, setError] = useState('');
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const navigate = useNavigate();

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError('Wrong Credential');
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((result) => {
				const user = result.user;
				updateUserProfile(user.name, user.photoURL)
					.then(() => {
						navigate(from, { replace: true });
					})
					.catch((error) => {
						setError('Error updating user profile');
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleGithubSignIn = () => {
		signInWithGithub()
			.then((result) => {
				const user = result.user;
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-primary">
				Sign In
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="input input-bordered"
								required
							/>
							<p className="mt-2">
								New to this Website?{' '}
								<Link
									className="underline text-info"
									to="/register"
								>
									Please Register
								</Link>
							</p>
						</div>
						<div className="divider">OR</div>
						<div
							onClick={handleGoogleSignIn}
							className="form-control mt-3 border border-primary p-3 text-secondary rounded-lg text-center cursor-pointer"
						>
							Sign In With{' '}
							<span className="text-primary font-bold">
								Google
							</span>
						</div>
						<div
							onClick={handleGithubSignIn}
							className="form-control mt-3 border border-primary p-3 text-secondary rounded-lg text-center cursor-pointer"
						>
							Sign In With{' '}
							<span className="text-primary font-bold">
								Github
							</span>
						</div>
						<p className="text-error">{error}</p>
						<div className="form-control mt-6">
							<button className="btn btn-secondary hover:btn-primary">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
