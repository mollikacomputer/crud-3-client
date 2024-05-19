import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([]);
    
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data),)
    },[])

    return (
    <div className="overflow-x-auto">
        <h2 className="text-3xl"> Your Bookings :{bookings.length} </h2>
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th>Name & img </th>
                <th>Title</th>
                <th>Email</th>
                <th>Price</th>
                <th>Phone</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {
                    bookings.map( booking => <BookingRow key={booking._id} booking={booking} > </BookingRow>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default Bookings;