import Swal from "sweetalert2";
// Swal.fire("Deleted!", "Your file has been deleted.", "success");
/* eslint-disable no-unused-vars */
const TableRow = ({ booking,bookings,setBookings }) => {
  console.log(booking);
  const { customerName, price, date, img, service, _id } = booking;
  const handleDelete = (id) => {
    console.log("from inside delete  ", id);
    Swal.fire({
      title: "Are you sure to delete ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`,{
          method:'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount ) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = bookings.filter(b => b._id !== id);
            setBookings(remaining);
          });
      }
    });
  };
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm"
          >
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
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">
              {customerName} <br />{" "}
              <span className="text-slate-300 font-normal text-sm">
                {service}
              </span>{" "}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">${price}</span>
      </td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default TableRow;
