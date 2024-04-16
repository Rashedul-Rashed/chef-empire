/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Chef from '../../components/Chef/Chef';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
	const allChef = useLoaderData();

	return (
		<div className="bg-accent">
			<section>
				<div
					className="hero min-h-screen"
					style={{
						backgroundImage: `url("https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-6xl font-bold text-warning">
								Enjoy Our <br />
								<span className="text-secondary">
									Delicious
								</span>{' '}
								Food
							</h1>
							<p className="mb-5">
								Welcome to Chef Empire where you can indulge in
								a mouth-watering culinary experience! We're
								thrilled to invite you to enjoy our delicious
								food and discover a world of flavors that will
								leave you wanting more.
							</p>
							<button className="btn btn-primary">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h2 className="text-5xl text-center text-primary my-8">
					Our Chef Masters
					<hr className="mt-5 w-11/12 md:w-2/4 border border-primary mx-auto" />
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
					{allChef.map((chef) => (
						<Chef key={chef.id} chef={chef}></Chef>
					))}
				</div>
			</section>
			<section>
				<div className="flex flex-col md:flex-row items-center mx-4 my-20">
					<div className="w-full h-96 flex items-center justify-center bg-primary p-3">
						<img
							src="https://uploads-ssl.webflow.com/640950225054f697244bdc53/640d7293791fc71f993b56f8_beef-steak-trans%201-min.png"
							alt=""
						/>
					</div>
					<div className="divider divider-horizontal bg-secondary w-2"></div>
					<div className="space-y-8 p-3 text-center md:text-left">
						<h1 className="text-primary font-semibold text-7xl">
							We Provide <br />{' '}
							<span className="text-secondary">Healthy</span> Food
						</h1>
						<p className="text-gray-700 text-lg">
							“Food For Us Comes From Our Relatives, Whether They
							Have Wings Or Fins Or Roots. That Is How We Consider
							Food. Food Has A Culture. It Has A History. It Has A
							Story. It Has Relationships.”
						</p>
						<div className="flex justify-between w-full md:w-96">
							<img
								src="https://uploads-ssl.webflow.com/640950225054f697244bdc53/640db5a1317316afa295ffb4_we%20provide%20image.png"
								alt=""
							/>
							<div>
								<p className="md:text-2xl font-semibold text-primary">
									Our Happy Customer
								</p>

								<p className="text-gray-600 font-bold">
									5.9k Reviews
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-4 mt-8 flex flex-col md:flex-row items-center md:gap-24 pb-4">
					<div className="space-y-8 w-full md:w-1/2">
						<h1 className="text-primary font-bold text-5xl">
							Best Selling{' '}
							<span className="text-secondary">Dishes</span>
						</h1>
						<p className="text-xl text-gray-500">
							Food For The Body Is Not Enough. There Must Be Food
							For The Soul.
						</p>
						<div className="space-y-5">
							<div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-3 rounded-lg w-full">
								<div className="space-y-3">
									<h3 className="font-bold text-2xl text-primary">
										Lobster with Truffle Butter
									</h3>
									<p className="text-gray-600">
										lobster, truffle butter, shallots, white
										wine, heavy cream
									</p>
								</div>
								<p className="font-bold text-primary text-2xl">
									$87.00
								</p>
							</div>
							<div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-3 rounded-lg w-full">
								<div className="space-y-3">
									<h3 className="font-bold text-2xl text-primary">
										Coq au Vin
									</h3>
									<p className="text-gray-600">
										chicken, red wine, bacon, onions,
										carrots
									</p>
								</div>
								<p className="font-bold text-primary text-2xl">
									$93.00
								</p>
							</div>
							<div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-3 rounded-lg w-full">
								<div className="space-y-3">
									<h3 className="font-bold text-2xl text-primary">
										Raspberry Soufflé
									</h3>
									<p className="text-gray-600">
										egg whites, sugar, raspberries, butter,
										flour, milk
									</p>
								</div>
								<p className="font-bold text-primary text-2xl">
									$78.00
								</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<img
							className="w-full"
							src="https://uploads-ssl.webflow.com/640950225054f697244bdc53/640d72944efe7c85547701c3_best%20dish-min.png"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
