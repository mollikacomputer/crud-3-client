const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, title, email, price, phone, img, customerName, status } = booking;
  return (
    <tr>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
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
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {img && <img src={img} />}
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>
        <span> {email} </span>
      </td>
      <td>{price}</td>
      <td>
        <span> {phone} </span>
      </td>
      <td>
        {
        status === 'confirm' ? <span className="font-bold text-primary"> Confirmed </span> :
        <button onClick={()=>handleBookingConfirm(_id)} >Please Confirm </button>
        }
      </td>
    </tr>
  );
};

export default BookingRow;
