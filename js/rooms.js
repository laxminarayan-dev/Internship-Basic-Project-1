const rooms = [
    {
        image: "./images/roomImages/room2.jpg",
        type: "Luxury Room",
        price: "20000",
        roomNumber: "61",
        avalibility: true
    },
    {
        image: "./images/roomImages/room2.jpg",
        type: "Luxury Room",
        price: "20000",
        roomNumber: "61",
        avalibility: true
    },
    {
        image: "./images/roomImages/room2.jpg",
        type: "Luxury Room",
        price: "20000",
        roomNumber: "61",
        avalibility: true
    },
    {
        image: "./images/roomImages/room1.jpg",
        type: "Delux Room",
        price: "10000",
        roomNumber: "61",
        avalibility: true
    },
    {
        image: "./images/roomImages/room1.jpg",
        type: "Delux Room",
        price: "10000",
        roomNumber: "61",
        avalibility: true
    },
    {
        image: "./images/roomImages/room5.jpg",
        type: "Couple Room",
        price: "8000",
        roomNumber: "61",
        avalibility: true
    },
    {
        image: "./images/roomImages/room7.jpg",
        type: "family Room",
        price: "9000",
        roomNumber: "61",
        avalibility: true
    },
]

const roomCards = document.querySelector('.roomCards')
rooms.map((room) => {
    roomCards.innerHTML += `
    <div class="roomCard">
            <img src="${room.image}" alt="Room"/>
            <div class="roomDetails">
              <h4>${room.type}</h4>
              <p>₹${room.price} per night</p>
              <div class="btn">
                <button>View</button>
                <button>Book</button>
              </div>
            </div>
          </div>
    `
})