import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [bookings, setBookings] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/bookings?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, [user]);
	return <div>
        <h1>{`My bookings (${bookings.length})`}</h1>
    </div>;
};

export default Bookings;
