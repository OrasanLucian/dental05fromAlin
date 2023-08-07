import React, { useState, useEffect } from 'react';
import { ServiceCategory } from './ServiceCategory';
import axios from 'axios';

export const ServicesCard = () => {
	const [serviceCategories, setServiceCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const getServices = async () => {
		const services = await axios.get(
			'https://dentalclinic-ppqd.onrender.com'
		);

		let serviceCategories = [];

		services.data.forEach((service) => {
			const { category, name, price } = service;
			if (serviceCategories[category]) {
				serviceCategories[category].services.push({ name, price });
			} else {
				serviceCategories[category] = {
					title: category,
					services: [{ name, price }],
				};
			}
		});

		return Object.values(serviceCategories);
	};

	useEffect(() => {
		getServices().then((serviceCategories) => {
			console.log(serviceCategories);
			if (serviceCategories.length > 0) {
				setIsLoading(false);
				setServiceCategories(serviceCategories);
			} else {
				setIsError(true);
				setIsLoading(false);
			}
		});
	}, []);

	return (
		<div>
			<h1>Services</h1>
			{isLoading ? (
				<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
			) : isError ? (
				<h2>Error</h2>
			) : (
				<div>
					{serviceCategories.map((serviceCategory, index) => (
						<ServiceCategory
							key={index}
							title={serviceCategory.title}
							services={serviceCategory.services}
						/>
					))}
				</div>
			)}
		</div>
	);
};
