### README.md

#### real-time price data ####

### Installation and Setup ###

1. **Clone the repository:**
   ```git remote add origin https://github.com/Mamidi-Rajesh/FomoFactory-Technical-Assessment.git```
   
```cd FomoFactory-Assignment```

3. **Install dependencies:**
   ```bash
   # Frontend dependencies (assuming Node.js and npm are already installed)
   cd frontend
   npm install

   # Backend dependencies (assuming Node.js and npm are already installed)
   cd backend
   ```npm install```

4. **Environment setup:**
   - **Backend**: Create a `.env` file in the `backend` directory with the following variables:
     ```
     PORT=<port-number>
     MONGO_URI=<your-mongodb-uri>
     ```
   - Replace `<port-number>` with your desired port (default is 5000) and `<your-mongodb-uri>` with your MongoDB connection URI.

5. **Run the application:**
   - **Frontend**: Start the development server.
     ```bash
     cd frontend
     Install required dependencies:
     fontawesome for icons
     reduxjs toolkit
     axios
     react dom
     react-redux 

     Copy paste the below command in your terminal to install the required packages and dependencies
     ```npm install @fortawesome/fontawesome-svg-core@^6.5.2 @fortawesome/free-brands-svg-icons@^6.5.2 @fortawesome/react-fontawesome@^0.2.2 @reduxjs/toolkit@^2.2.6 axios@^1.7.2 next@14.2.5 react@^18 react-dom@^18 react-redux@^9.1.2 redux@^5.0.1
     ```

     ```npm run dev```
     This will start the Next.js development server for the frontend.
   
   - **Backend**: Start the server.
     ```cd backend```
     ```npm start```
   
     This will start the Express server for the backend.

### Requirements ###

- Real-time data polling for cryptocurrency prices.
- Storage of data in a MongoDB database.
- Integration with a free cryptocurrency API (e.g., CoinGecko).
- Display of cryptocurrency prices in a table format.
- Modal for selecting different cryptocurrencies.

### Technologies Used ###

- **Frontend**: React, Next.js, TypeScript, Redux (with Redux Toolkit), Axios, CSS Modules.
- **Backend**: Node.js, Express.js, MongoDB (mongoose), Axios for API requests.

### Concepts Covered ###

#### Frontend ####

- React functional components and hooks (useState, useEffect, useDispatch, useSelector).
- Redux for state management (actions, reducers, selectors).
- TypeScript for type safety.
- Integration with external APIs using Axios.
- CSS Modules for scoped styling.

#### Backend ####

- Express.js for API handling.
- MongoDB for database storage (mongoose for ORM).
- Asynchronous JavaScript (async/await) for handling API requests and database operations.
- Periodic data fetching using setInterval.
- Error handling (try/catch blocks, Axios error handling).

### Packages Installed ###

- **Frontend**:
  - react, react-dom
  - next
  - redux, react-redux, @reduxjs/toolkit
  - axios
  - typescript
  - css modules
  - @types/react, @types/react-redux

- **Backend**:
  - express
  - mongoose
  - axios
  - dotenv

  ###Run the following command to install all the dependencies listed under dependencies and devDependencies ###
  ```
  npm install axios@^1.7.2 cors@^2.8.5 dotenv@^16.4.5 express@^4.19.2 mongoose@^8.5.1 @types/cors@^2.8.17 @types/express@^4.17.21 @types/node@^20.14.10 ts-node@^10.9.2 typescript@^5.5.3
```

### Cloning Repository

To clone this repository, use the following command:

 ```git remote add origin https://github.com/Mamidi-Rajesh/FomoFactory-Technical-Assessment.git```



### Conclusion

This project demonstrates a full-stack application using React with Next.js on the frontend and Node.js with Express.js on the backend.
It integrates with a cryptocurrency API to fetch real-time data, stores it in a MongoDB database, and displays it in a user-friendly interface.
This setup provides a scalable foundation for further enhancements and deployments.
