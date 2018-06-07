const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookings');

const bookingSchema = mongoose.Schema({
  record: { type: Number, unique: true },
  hotelId: Number,
  roomId: Number,
  roomName: String,
  price: Number,
  maxBeds: Number,
  reservedBeds: Number,
  date: Date,
});

const roomsSchema = mongoose.Schema({
  roomName: String,
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

const serveHotel = (callback) => {
  Hotel.findOne({ id: 1 }).exec((err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};


module.exports.save = save;
module.exports.Hotel = Hotel;
module.exports.allRooms = Room;
module.exports.Booking = Booking;
module.exports.serveHotel = serveHotel;
