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


const randomRoom = () => {
  let hotels = 100;
  let record = 0;
  while (hotels > 0) {
    const hotelReservation = new db.Hotel({ id: hotels });
    let rooms = 4;
    while (rooms > 0) {
      let daysAhead = 0;
      const maxBeds = randomizeNumber(1, 11);
      const AllRooms = new db.AllRooms({});
      while (daysAhead < 90) {
        const currentRoom = {};
        currentRoom.record = record;
        currentRoom.hotelId = hotels;
        currentRoom.roomId = rooms;
        currentRoom.maxBeds = maxBeds;
        currentRoom.bedsLeft = randomizeNumber(0, maxBeds + 1);
        currentRoom.price = randomizeNumber(5, (maxBeds * 2));
        currentRoom.date = sequentialDate(daysAhead);
        const reservation = new db.Booking(currentRoom);
        AllRooms.room.push(reservation);
        daysAhead += 1;
        record += 1;
      }
      hotelReservation.rooms.push(AllRooms);
      rooms -= 1;
    }
    db.save(hotelReservation);
    hotels -= 1;
  }
};

module.exports.randomRoom = randomRoom;
