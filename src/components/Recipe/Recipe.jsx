/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
	const { name, image, cooking_method, ingredients, rating } = recipe;
	const [clicked, setClicked] = useState(false);

	const handleFavourite = () => {
		toast('Added the recipe to your Favourites!');
		setClicked(true);
	};
	return (
		<div className="flex items-center bg-accent shadow-xl rounded-xl">
			<div className="w-1/4 h-min">
				<img
					className="p-3 rounded-xl w-full h-60"
					src={image}
					alt=""
				/>
			</div>
			<div className="divider divider-horizontal bg-primary w-1 my-3"></div>
			<div className="text-secondary w-2/3 space-y-3 h-60 p-3">
				<h2 className="text-primary text-3xl font-bold">{name}</h2>
				<div>
					<span className="font-bold">Ingredients :</span>{' '}
					{ingredients.map((ingredient, i) => (
						<span key={i}>{ingredient}, </span>
					))}
				</div>
				{cooking_method.length > 300 ? (
					<p>
						<span className="font-bold">Cooking Method :</span>{' '}
						{cooking_method.slice(0, 300)}...
					</p>
				) : (
					<p>
						<span className="font-bold">Cooking Method :</span>{' '}
						{cooking_method}
					</p>
				)}
				<div className="flex items-center gap-5">
					<p className="text-primary font-bold">Rating : {rating}</p>
					<button
						onClick={handleFavourite}
						disabled={clicked}
						className="btn btn-primary hover:btn-secondary gap-2"
					>
						Favourite
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
