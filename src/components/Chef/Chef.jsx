/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
	const { id, name, image, experience, recipes, likes } = chef;
	return (
		<div className="card w-full bg-base-100 shadow-xl text-primary">
			<figure>
				<img className="w-full h-96" src={image} alt="" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>Year Of Experience : {experience}</p>
				<p>Number Of Recipes : {recipes}</p>
				<div className="badge badge-primary p-3">Likes : {likes}</div>
				<div className="card-actions justify-end">
					<Link to={`/chefrecipes/${id}`}>
						<button className="btn btn-primary hover:btn-secondary rounded-full">
							View Recipes
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Chef;
