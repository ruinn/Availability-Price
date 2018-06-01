const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookings');

const room = mongoose.Schema({
  record: Number,
  hotelId: Number,
  roomId: Number,
  roomName: String,
  price: Number,
  maxBeds: Number,
  reservedBeds: Number,
  date: Date,
});

const Booking = mongoose.model('Booking', room);

const save = function (reservation) {
  const booking = new Booking(reservation);
  booking.save();
};

module.exports.save = save;
