# Movie Ticket Booking App

Welcome to the Movie Ticket Booking App! This README file provides instructions on how to set up and run the application on your local machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed (version X.X.X)
- [MongoDB](https://www.mongodb.com/) installed and running (or a MongoDB Atlas account)
- [Git](https://git-scm.com/) installed (optional)

## Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/SajanGh/movie-ticket-api

   ```

1. cd movie-ticket-booking-app

1. npm install

1. Create a .env file in the root directory and configure your environment variables. You can use the provided .env.example as a template.

## Configuration

In the .env file, configure the following environment variables:

DATABASE_URL: The URL of your MongoDB database.
JWT_SECRET: A secret key for JWT token generation.
PORT: The port on which the application will run (e.g., 3000).

Database Setup
1.Make sure your MongoDB server is running.

2. Create a new database for the Movie Ticket Booking App.

## Starting the Application

To start the application, run the following command:
npm start

## Setup and insert showtime and movie manually using URL endpoints :

## For inserting movie in the ticket booking app:

Step 1 : Go to the postman and click on search bar then paste this url :
Endpoint : http://localhost:3000/api/v1/movies.

Step: 2: Insert the provided JSON data
JSON Data to insert:

```
 {
   "title": "Lord of the rings:Fellowship of the rings",
   "genre": ["Adventure"],
   "releaseDate": "2024-02-29",
   "duration": 153,
   "description": "A tale of wealth, love, and tragedy in the Roaring Twenties.",
   "posterURL":
     "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
 }
```

Step 3: At the left side of the postman make the Http Request to POST then click on Search

## For inserting showtime:

Step 1 : Follow the same step from above inserting movie to the ticket booking app.
Endpoint: http://localhost:3000/api/v1/somtimes

Step 2: Inser the provided JSON data:
JSON data to be inserted:

```
{
    "movieId": "65717386b05302a50afc2ad1",
    "startTime": "2024-03-16T00:24:22.300Z",
    "totalSeats": 50
}
```

Step 3: Select POST method form the sidebar ffrom the postman Http Request. Then clikc on Search.

# Backend is ready to be served!!!!
