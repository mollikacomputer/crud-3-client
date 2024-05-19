import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {title, _id, price, img, service_id, customerName} = service;
    const {user} = useContext(AuthContext);
   
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const date = form.date.value;

        const booking = {
            customerName: name,
            email,
            phone,
            img,
            title,
            date,
            service_id,
            price,
            customerName
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('Successfully booking')
            }
        })
  
    }
    return (
        <div>
            <h2 className="text-3xl"> {_id, title} </h2>
            <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Name"
                  defaultValue={user?.name}
                  className="input input-bordered"
                  required
                />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name='date'
                  placeholder=""
                  className="input input-bordered"
                  required
                />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  name='phone'
                  placeholder="Phone"
                  className="input input-bordered"
                  required
                />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name='price'
                  defaultValue={'$'+ price}
                  className="input input-bordered"
                  required
                />
                </div>

            </div>
            <input className="btn btn-block btn-primary my-3" type="submit" value="Book Service" />
            </form>
        </div>
    );
};

export default CheckOut;