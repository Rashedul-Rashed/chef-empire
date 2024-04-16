/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [open, setOpen] = useState(false);
	const handleLogout = () => {
		logOut()
			.then()
			.catch((error) => console.log(error));
	};

	return (
		<nav className="bg-accent text-primary">
			<div className="flex justify-between items-center md:p-4 p-3">
				<h2 className="text-3xl font-bold">
					<span className="text-secondary">Chef</span>Empire
				</h2>
				<div onClick={() => setOpen(!open)} className="md:hidden ">
					<span>
						{open === true ? (
							<XMarkIcon className="h-6 w-6" />
						) : (
							<Bars3Icon className="h-6 w-6" />
						)}
					</span>
				</div>
				<ul
					className={`md:flex md:space-x-5 text-primary absolute duration-500 md:static ${
						open
							? 'top-2 right-12 text-center bg-accent shadow-md p-2 rounded-md'
							: '-top-96 right-12 text-center bg-accent rounded-md'
					}`}
				>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'pb-1 border-b-2 border-primary hover:border-secondary'
									: ''
							}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'pb-1 border-b-2 border-primary hover:border-secondary'
									: ''
							}
							to="/blog"
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'pb-1 border-b-2 border-primary hover:border-secondary'
									: ''
							}
							to="/register"
						>
							Sign Up
						</NavLink>
					</li>

					<div className=" md:hidden">
						{user ? (
							<div className="dropdown dropdown-end">
								<label
									tabIndex={0}
									className="btn btn-ghost btn-circle avatar"
									title={user.displayName || user.email}
								>
									<div className="w-10 rounded-full">
										<img src={user.photoURL} />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-24 text-center cursor-pointer"
								>
									<div onClick={handleLogout}>Logout</div>
								</ul>
							</div>
						) : (
							<Link to="/login">
								<button className="btn btn-primary">
									Login
								</button>
							</Link>
						)}
					</div>
				</ul>
				<div className="hidden md:block">
					{user ? (
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
								title={user.displayName || user.email}
							>
								<div className="w-10 rounded-full">
									<img src={user.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-24 text-center cursor-pointer"
							>
								<div onClick={handleLogout}>Logout</div>
							</ul>
						</div>
					) : (
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
