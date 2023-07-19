import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './../../providers/AuthProvider';

const Checkout = () => {
	const service = useLoaderData();
	const { user } = useContext(AuthContext);
	const { title, price, service_id, img } = service;

	const handleCheckout = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value || 'User Unknown';
		const email = form.email.value || 'Email Unknown';
		const serviceName = form.serviceName.value;
		const serviceId = service_id;
		const servicePrice = form.servicePrice.value;

		const checkoutData = {
			userName: name,
			email,
			serviceName,
			serviceId,
			servicePrice,
			img,
		};

		fetch('http://localhost:5000/order', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(checkoutData),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div className='card w-full my-10 flex-shrink-0 shadow-2xl bg-[#F3F3F3]'>
			<form className='card-body p-16' onSubmit={handleCheckout}>
				{/* Upper fields */}
				<div className='flex gap-x-5'>
					<div className='form-control flex-grow'>
						<label htmlFor='service-name'>Service Name</label>
						<input
							type='text'
							id='service-name'
							name='serviceName'
							defaultValue={title}
							className='input input-bordered'
							readOnly
						/>
					</div>
					<div className='form-control flex-grow'>
						<label htmlFor='service-price'>Service Price</label>
						<input
							type='text'
							id='service-price'
							name='servicePrice'
							defaultValue={`$ ${price}`}
							className='input input-bordered'
							readOnly
						/>
					</div>
				</div>
				{/* Middle fields */}
				<div className='flex gap-x-5'>
					<div className='form-control flex-grow'>
						<label htmlFor='name'>Customer Name</label>
						<input
							type='text'
							id='name'
							name='name'
							defaultValue={user?.displayName}
							placeholder='Enter your name'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control flex-grow'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							defaultValue={user?.email}
							placeholder='Enter your email'
							className='input input-bordered'
						/>
					</div>
				</div>
				{/* Lower fields */}
				<div>
					<label htmlFor='description'></label>
					<textarea
						className='w-full h-52 mt-3 p-5 border outline-gray-300'
						name='description'
						id='description'
						rows='10'
						placeholder='Product Description'></textarea>
				</div>

				<input
					type='submit'
					value='Submit'
					onSubmit={handleCheckout}
					className='btn bg-[#FF3811] border-none'
				/>
			</form>
		</div>
	);
};

export default Checkout;
