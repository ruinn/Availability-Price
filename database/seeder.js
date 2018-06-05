const faker = require('faker');
const db = require('./db');

const randomizeNumber = (min, max) => Math.floor(Math.random() * Math.floor(max)) + min;

const sequentialDate = (next) => {
  const today = new Date();
  today.setDate(today.getDate() + next);
  let day = today.getDate();
  if (day < 10) day = `0${day}`;
  let month = today.getMonth();
  if (month < 10) month = `0${month}`;
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
};

// in the future I will set each hotel as a new instance of the mongoose model Hotel
// let hotelReservation = new Hotel({id : hotels}) this will set
// the id as the current hotelId i am working with
//
// I will set each room as a new instance of the mongoose model Booking
// const reservation = new Booking(currentRoom)
// whereupon I will push them into the hotel using hotelReservation.rooms.push(reservation)
// as I decrement hotels I will then save the hotel model using
// hotelReservation.save()
// ^ this will not need to call the db method anymore (will import mongoose instead)
// since hotel is being defined as a model in this scope.
// alternatively i can call db.save and change it to
// save (reservation)
// reservation.save() and save it directly
const randomRoom = () => {
  let hotels = 100;
  let record = 0;
  while (hotels > 0) {
    let rooms = 10;
    while (rooms > 0) {
      const randomName = faker.name.findName();
      let daysAhead = 30;
      const maxBeds = randomizeNumber(1, 11);
      while (daysAhead > 0) {
        const currentRoom = {};
        currentRoom.record = record;
        currentRoom.hotelId = hotels;
        currentRoom.roomId = rooms;
        currentRoom.roomName = randomName;
        currentRoom.maxBeds = maxBeds;
        currentRoom.reservedBeds = randomizeNumber(0, maxBeds + 1);
        currentRoom.price = randomizeNumber(5, (maxBeds * 2));
        currentRoom.date = sequentialDate(daysAhead);
        db.save(currentRoom);
        daysAhead -= 1;
        record += 1;
      }
      rooms -= 1;
    }
    hotels -= 1;
  }
};

module.exports.randomRoom = randomRoom;
