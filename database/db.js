const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookings');

const bookingSchema = mongoose.Schema({
  record: { type: Number, unique: true },
  hotelId: Number,
  roomId: Number,
  roomName: String,
  price: Number,
  maxBeds: Number,
  bedsLeft: Number,
  date: Date,
});

const roomsSchema = mongoose.Schema({
  room: [bookingSchema],
});

const hotelSchema = mongoose.Schema({
  id: Number,
  rooms: [roomsSchema],
});

const Booking = mongoose.model('Booking', bookingSchema);
const Hotel = mongoose.model('Hotel', hotelSchema);
const Room = mongoose.model('Room', roomsSchema);

const save = (reservation) => {
  reservation.save();
};

const serveHotel = (hostelId, callback) => {
  Hotel.findOne({ id: hostelId }).exec((err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

module.exports.save = save;
module.exports.Hotel = Hotel;
module.exports.AllRooms = Room;
module.exports.Booking = Booking;
module.exports.serveHotel = serveHotel;
