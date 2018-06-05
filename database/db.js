const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookings');

const room = mongoose.Schema({
  record: { type: Number, unique: true },
  hotelId: Number,
  roomId: Number,
  roomName: String,
  price: Number,
  maxBeds: Number,
  reservedBeds: Number,
  date: Date,
});


// in the future I will make a hotel schema with a hotelId containing a child schema called rooms
// const hotelSchema = mongoose.Schema({
//   id: Number,
//   rooms: [room],
// });
const Booking = mongoose.model('Booking', room);
// const Hotel = mongoose.model('Hotel', hotelSchema);

const save = (reservation) => {
  const booking = new Booking(reservation);
  booking.save();
};
// in the future, if i use this function, this will save only the parent schema which
// has the child schemas already pushed into it
// const save = (reservation) => {
  // reservation.save();
// }
module.exports.save = save;
