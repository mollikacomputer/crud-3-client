const BookingRow = ({booking}) => {
    const {title, email, price, phone, img, customerName} = booking;
    return (
        <tr>
        <th>
        <label>
            <input type="checkbox" className="checkbox" />
        </label>
        </th>
        <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={img} />
                </div>
                </div>
                <div>
                <div className="font-bold">{customerName}</div>
                <div className="text-sm opacity-50">United States</div>
                </div>
            </div>
        </td>
        <td>
        {title}
        </td>
        <td>
        <span className="badge badge-ghost badge-sm"> {email} </span>
        </td>
        <td>{price}</td>
        <th>
        <button className="btn btn-ghost btn-xs">{phone}</button>
        </th>
    </tr>
    );
};

export default BookingRow;