/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const { error, status } = useRouteError();
	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<img
						src="https://media.istockphoto.com/id/1129597161/photo/page-not-found-message.jpg?b=1&s=612x612&w=0&k=20&c=HSB7SAvQlHCWkZwF40z7xGs1LTWy5H6m6cBjcoD4SiM="
						alt=""
					/>
					<h2 className="mb-8 font-extrabold text-6xl text-gray-600">
						<span className="sr-only">Error</span> {status || 404}
					</h2>
					<p className="text-2xl font-semibold md:text-3xl mb-8">
						{error?.message}
					</p>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
