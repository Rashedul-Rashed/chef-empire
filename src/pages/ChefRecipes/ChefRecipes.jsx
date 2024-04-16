/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../../components/Recipe/Recipe';
import LazyLoad from 'react-lazy-load';

const ChefRecipes = () => {
	const chefData = useLoaderData();
	const { name, image, bio, likes, recipeInfo, recipes, experience } =
		chefData;
	return (
		<div>
			<div className="hero bg-[url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content flex-col lg:flex-row">
					<LazyLoad className="w-full h-96" threshold={0.95}>
						<img
							src={image}
							className="w-full rounded-lg shadow-2xl h-96"
						/>
					</LazyLoad>
					<div className="divider bg-secondary divider-horizontal"></div>
					<div className="text-white ml-2 h-96">
						<h1 className="text-5xl text-warning font-bold">
							{name}
						</h1>
						<p className="py-6 font-semibold">{bio}</p>
						<p className="py-6 font-semibold">
							Year of Experience : {experience}
						</p>
						<p className="py-6 font-semibold">
							Number of Recipes : {recipes}
						</p>
						<p className="py-6 font-semibold">Likes : {likes}</p>
					</div>
				</div>
			</div>
			<div className="mx-5 my-5">
				<h1 className="text-5xl font-bold text-center text-warning my-6">
					Popular Recipes
				</h1>
				<hr className="border border-primary my-3 w-2/4 mx-auto" />
				<div className="space-y-5">
					{recipeInfo.map((recipe, i) => (
						<Recipe key={i} recipe={recipe}></Recipe>
					))}
				</div>
			</div>
		</div>
	);
};

export default ChefRecipes;
