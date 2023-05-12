/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import TableRow from "./TableRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  return (
    <div>
      <p>bookings page</p>
      <p>Your Bookings: {bookings.length}</p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
             
              </th>
              <th>Image and Name</th> 
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <TableRow key={booking._id} bookings={bookings} setBookings={setBookings} booking={booking}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
