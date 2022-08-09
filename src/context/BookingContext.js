import React, { createContext, useState } from "react";
import { bookinglist } from "../arrays/bookinglist";

export const allBookingContext = createContext();

const BookingContext = ({children}) => {
  const [bookings, setBookings] = useState(bookinglist);

  return (
    <allBookingContext.Provider value={[bookings, setBookings]}>
      {children}
    </allBookingContext.Provider>
  );
};

export default BookingContext;
