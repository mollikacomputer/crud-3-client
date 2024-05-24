import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([]);
    
    useEffect( ()=>{
        // fetch(url)
        axios.get(url, {withCredentials:true})
        .then(res => setBookings(res.data))
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data),)
    },[url]);

    const handleDelete = (id) =>{
        const proceed = confirm("Are you Sure You Want to delete");
        if(proceed){
          fetch(`http://localhost:5000/bookings/${id}`, {
            method:"DELETE"
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount >0){
              alert('Delete Successfull');
              const remaining = bookings.filter(booking => booking._id !== id);
              setBookings(remaining)
            }
          })
        }
      };
      const handleBookingConfirm = (id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
          method:"PATCH",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({status:"confirm"})
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            alert("Status confirmed")
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        })
      }

    return (
    <div className="overflow-x-auto">
        <h2 className="text-3xl"> Your Bookings :{bookings.length} </h2>
        <table className="table">
            {/* head */}
            <thead>
          <tr>
                <th>
                <button className="btn btn-circle btn-sm btn-outline">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
                </th>
                <th>Name & img </th>
                <th>Title</th>
                <th>Email</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Status </th>
          </tr>
            </thead>
            <tbody>
                {
                    bookings.map( booking => <BookingRow 
                        key={booking._id} 
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}
                        
                        > </BookingRow>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default Bookings;