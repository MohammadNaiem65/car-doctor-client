import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Checkout from '../pages/Checkout/Checkout';
import Bookings from '../pages/Bookings/Bookings';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/checkout/:id',
				element: <Checkout />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/service/${params.id}`),
			},
			{
				path: '/bookings',
				element: <Bookings />,
			},
		],
	},
]);

export default router;
