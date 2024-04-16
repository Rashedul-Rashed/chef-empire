/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();

const Blog = () => {
	return (
		<div>
			<div className="text-center my-5 mx-auto w-96">
				<ReactToPdf targetRef={ref} filename="chefEmpireBlog.pdf">
					{({ toPdf }) => (
						<button className="btn btn-primary" onClick={toPdf}>
							Generate pdf
						</button>
					)}
				</ReactToPdf>
				<div className="text-base text-center" ref={ref}>
					<p>This is the Chef Empire's blog page.</p>
					<p>There are some Questions and Answers in this page.</p>
					<p>Thanks for download the pdf.</p>
				</div>
			</div>
			<div className="space-y-5 pb-5 mt-4">
				<div className=" bg-primary text-secondary w-3/4 mx-auto space-y-2 p-5 rounded-lg">
					<h1 className="font-bold text-xl">
						Question : Differences between uncontrolled and
						controlled components
					</h1>
					<p className="text-accent">
						<span className="font-bold text-lg">Answer :</span> In
						React, controlled components refer to components that
						have their state and behavior controlled by the parent
						component. These components rely on props passed down
						from the parent component to update their state and
						behavior. Uncontrolled components refer to components
						that manage their own state internally. In Controlled
						Component data flows from parent component. Where data
						flows within the uncontrolled component. For state
						management generally controlled component is faster than
						uncontrolled component. Controlled component is
						considered as best practice.
					</p>
				</div>
				<div className="bg-primary text-secondary w-3/4 mx-auto space-y-2 p-5 rounded-lg">
					<h1 className="font-bold text-xl">
						Question : How to validate React props using PropTypes?
					</h1>
					<p className="text-accent">
						<span className="font-bold text-lg">Answer :</span> To
						validate React props using PropTypes, we can import the
						prop-types library and define the expected props using
						the PropTypes object.By using PropTypes, we can catch
						errors early in the development process and ensure that
						our React components are receiving the correct props.
					</p>
				</div>
				<div className="bg-primary text-secondary w-3/4 mx-auto space-y-2 p-5 rounded-lg">
					<h1 className="font-bold text-xl">
						Question : Difference between nodejs and express js.
					</h1>
					<p className="text-accent">
						<span className="font-bold text-lg">Answer :</span>{' '}
						Node.js is a runtime environment for JavaScript that
						allows developers to run JavaScript code outside of a
						web browser. It provides a set of built-in modules for
						various purposes such as file I/O, networking, and HTTP.
						Express.js is a web application framework for Node.js
						that provides a set of features and tools for building
						web applications and APIs.
					</p>
				</div>
				<div className="bg-primary text-secondary w-3/4 mx-auto space-y-2 p-5 rounded-lg">
					<h1 className="font-bold text-xl">
						Question : What is a custom hook, and why will you
						create a custom hook?
					</h1>
					<p className="text-accent">
						<span className="font-bold text-lg">Answer :</span> A
						custom hook is a reusable function that encapsulates and
						abstracts a certain behavior or logic in a React
						application. We create a custom hook to extract and
						share common functionality between components, reducing
						duplication and improving code organization and
						reusability.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
