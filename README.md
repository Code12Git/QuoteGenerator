# QuoteGenerator

![Screenshot from 2023-10-31 14-27-25](https://github.com/Code12Git/QuoteGenerator/assets/108590542/5c76c70d-9f80-466b-873c-fbf453dd4a2f)

## Overview
This dynamic web application is designed to captivate and inspire users with a curated collection of quotes. It provides a user-friendly interface for viewing, adding, updating, and deleting quotes. The application can be built using either the MERN (MongoDB, Express.js, React, Node.js) ensuring a seamless and interactive experience for users.
## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Backend](#backend)
- [Frontend](#frontend)
- [Sample Quotes](#sample-quotes)
- [User Authentication (Optional)](#user-authentication-optional)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Description

Provide a brief description of your web application. Explain its purpose and the problem it aims to solve.

## Features

List the key features of your web application:

1. **Display Random Quotes:**  
   - When the page loads, a random quote is displayed.
   - A "Next Quote" button allows users to generate and display another random quote without refreshing the page.

2. **Quotes Collection:**  
   - A collection of quotes is stored in a MongoDB database.
   - Each quote is displayed along with the author's name.

3. **Front-end (React ):**  
   - A modern user interface is created using React .
   - Components for displaying quotes, adding quotes, editing quotes, and deleting quotes are included.

4. **Back-end (Node.js with Express, or pure Node.js):**  
   - A server is implemented using Node.js with Express.js  for RESTful API endpoints.
   

5. **Database (MongoDB):**  
   - Quotes are stored in a MongoDB database.
   - CRUD operations (Create, Read, Update, Delete) are implemented for managing quotes.
   - Mongoose library is used for working with MongoDB.

6. **Add a Quote:**  
   - A form allows users to add new quotes to the collection.
   - The form has fields for the quote text and the author's name.
   - Upon submission, the new quote is added to the database, and the page displays the updated collection with the newly added quote.

7. **Update a Quote:**  
   - An option is provided to edit existing quotes.
   - An "Update" button next to each quote opens a form for editing.
   - Users can update the quote text and the author's name.
   - After editing, the quote is updated in the database, and the changes are reflected on the webpage.

8. **Delete a Quote:**  
   - Users can delete quotes from the collection.
   - A "Delete" button next to each quote allows for easy removal.
   - When a quote is deleted, it is removed from the database, and the updated collection is displayed on the webpage.

9. **User Authentication :**  
   - User authentication is implemented using jwt tokens for added security.

10. **User Interface:**  
   - The webpage is designed with a clean and user-friendly interface.
   - It is responsive and works well on both desktop and mobile devices.

11. **Persistence:**  
   - Data persistence for the quotes is implemented in the MongoDB database.

12. **Sample Quotes:**  
   - Sample quotes are provided for testing and demonstration.

## Technologies Used

List the key technologies, libraries, and tools used in your project.

- React 
- Node.js
- Express.js 
- MongoDB
- Mongoose 
- Jwt (user authentication)
- Vinejs (for validations)



## Getting Started

### Prerequisites
Before getting started, make sure you have the following tools and technologies installed:

- Node.js
- Mongodb database
- React.js
- Express

### Installation

```bash
# Clone the repository
git clone https://github.com/Code12Git/QuoteGenerator.git

# Install server dependencies
cd server
npm install

# Install client dependencies
cd client
npm install

```

## Configuration

### Database Configuration

- Create a MongoDB database and configure your database connection in the server/config.env file. You can use the .env.example as a template.


## Usage

 Start the frontend and backend servers using the following commands:

Frontend (React.js):

```bash
cd client
npm run dev

```

Backend (Express):


```bash
cd server
npm start

```


## API Endpoints
The following API endpoints are available:

- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in an existing user.
- GET /api/quote: Get all quote.
- GET /api/quote/🆔: Get a quote by ID.
- POST /api/quote: Create a new quote.
- PUT /api/quote/🆔: Update a quote by ID.
- DELETE /api/quote/🆔: Delete a quote by ID.


## Sample Quotes

Sample quotes are provided for testing and demonstration purposes. You can access them within the application by making URL requests using a test user account. 

### Test User Account

You can use the following test user credentials to access the sample quotes:

- **email:** rahul123@gmail.com
- **Password:** rahul123

### Accessing Sample Quotes

To retrieve sample quotes, you can use API endpoints with tools like [curl](https://curl.se/) or [Postman](https://www.postman.com/) . Here's an example of how to make a GET request to retrieve quotes:

```bash
# For getting quotes
pass quotes and authorName in request

postman -X GET -u http://65.0.27.55:9000/api/quote

# For login
pass email and password  in request

postman -X POST -u http://65.0.27.55:9000/api/login

```
## License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy Quote management with QuoteGenerator! 📝🚀

