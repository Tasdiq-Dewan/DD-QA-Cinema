# DD-QA-Cinema

Team D&D's QA Cinema website for QA Academy project. This a website for QA Cinema, allowing users to view new releases & upcoming films, book tickets, and add discussion posts.

Technologies used include the MERN STACK (MongoDB, Express, React, and Node) as well as the following dependencies:
* react-stripe (for payment checkout)
* reactstrap (for styling)
* axios (for API calls)
* react-google-maps
* mocha (for testing)
* chai (for testing)
* instanbul (for coverage)

## Pre-requisites & Installation

### Clone Git Repository

Clone this repository to your local machine and navigate into the directory ```cd dd-qa-cinema-react-app```

### Node Packages
To run the D&D QA Cinema website, the required Node packages need to be installed. To do so execute the the command ```npm install``` in a terminal which will install all dependencies needed for the project.

### Local Host ports

The application will use local host ports 3000, 8081, 27017 so make sure they are not already in use.

## Running the Application

### Starting the Express server
While inside the directory ```dd-qa-cinema-react-app``` run the command ```npm run connect`` which will start the Express server on localhost port 8081. The follow should be output to the terminal.
![image](https://user-images.githubusercontent.com/37335919/189315218-fd2527a5-12ca-4881-9fb9-6598e75aa413.png)

### Starting the React app
Inside directory ```dd-qa-cinema-react-app``` run the command ```npm start`` which will launch the React app on local host port 3000 and will open the website in your browser.

When the app is finished launching, you should see the homepage:
![image](https://user-images.githubusercontent.com/37335919/189316072-9cdd3d5f-ecc9-4a99-a001-924ba0f79d53.png)

## Application Overview

### Home Screen
This is the Home Screen for the QA Cinema app. The User will see a carousel of current films being shown and a "See Bookings Now" link that will direct the user to the screeenings page where they can book tickets for films.
![image](https://user-images.githubusercontent.com/37335919/189316809-a1f004e8-6797-42ea-87cb-35ecfc3fbc8c.png)

### Navigation Bar
This is the Navigation Bar.
* The "Home" button as well as the logo will direct the user back to the Home Page.
* The "What's On" button will direct users to the What's On page showing the latest films being shown right now.
* The "Upcoming" button will direct users to the Upcoming page which shows upcoming films that will be shown soon.
* The "Screenings" button will direct users to the Screenings page which shows the current screenings the user can book a ticket for.
* The "Discussions" button will directo users to the Discussions page where they can make their own posts as well as read posts from other users.
![image](https://user-images.githubusercontent.com/37335919/189317690-6fee3555-6c97-4eee-938e-278e1d5cbce4.png)

### Search Bar
This is the Search Bar. It allows users to search for films being shown at QA Cinema. The user can enter a film name as well as keywords relating to the genre, synopsis, or classification of a film.
![image](https://user-images.githubusercontent.com/37335919/189318787-e83211d4-12d8-4eb0-b7bd-3c35e4bf03d4.png)

Example 1: Searching for the term "Batman" will return two films: 'The Dark Knight' and 'The Batman'
![image](https://user-images.githubusercontent.com/37335919/189319998-fe581898-aea2-43c9-a5c0-1a41a21a172c.png)
![image](https://user-images.githubusercontent.com/37335919/189320070-0327ed47-5525-41cd-8e6e-220827b82de8.png)

Example 2: Searching for the term "Anime" will return one film: 'Dragon Ball Super: Broly'
![image](https://user-images.githubusercontent.com/37335919/189320269-e4151725-02ed-4500-9554-6462247d30f2.png)

