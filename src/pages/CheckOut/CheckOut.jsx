/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import checkOut from "../../assets/images/checkout/checkout.png";
import "./CheckOut.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const CheckOut = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);
  const { title, _id, price,img } = serviceData;
  const {user} = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    console.log("from inside the event");
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const due = form.due.value;
    const email = user?.email;
    const booking = {
            customerName:name,
            email,
            date,
            service_id: _id,
            service:title,
            price,
            img,
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
        method:'POST',
        body:JSON.stringify(booking),
        headers:{'content-type':'application/json'}
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire('Data inserted successfully to the database')
                form.reset();
            }
        })

  };
  return (
    <div>
      <div className="parent relative mb-32">
        <img src={checkOut} className="image-checkOut" alt="" />
        <div className="overlay">
          <p className="text-3xl font-bold text-white lg:pt-28 lg:pl-20">
            Check Out
          </p>
        </div>
      </div>

      <h3 className="mb-4 text-center text-2xl font-bold">
        Book Service: <span className="text-orange-600">{title}</span>
      </h3>
      <form onSubmit={handleBookService}>
        <div className="card-body bg-base-200 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered"
                name="date"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email "
                className="input input-bordered"
                name="email"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                placeholder="Due amount"
                className="input input-bordered"
                name="due"
                defaultValue={'$'+price}
                readOnly
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              className="p-5 mt-5 rounded w-full"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order confirm"
              className="btn btn-orange-order"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
