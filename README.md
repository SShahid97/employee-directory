# Employee Directory
## Introduction
This project, titled Employee Directory, is developed as a code challenge assigned by Areeba. The objective is to create a React.js application leveraging a mock API service like json-server to perform CRUD operations for managing employee directory and developing a responsive web application for displaying employees, providing form for adding new employees, editing existing employees, also providing options for deleting employees and viewing particular employee details. The project specifications outlined the use of Material-UI for UI development, Redux for state management, RTK query for handling http requests, Redux Persist Store for persisting specific data and utilization of Jest, React Testing Library and Vitest for writing unit and integration Tests.

### Key Features
- [x] Utilization of json-server to perform CRUD operations via APIs.
- [x] Development of a responsive application using Material-UI components, ensuring an intuitive user interface.
- [x] Utilization of Formik for handling form submissions and yup for form validations.
- [x] Implementation of Redux for efficient state management across the application.
- [x] Integration of Persist Store to retain employee-specific data, such as senior employees.
- [x] Creation of additional screens/routes, including a dedicated screen for displaying senior employees and an employee details screen utilizing the getEmployee API to showcase individual employee details.
- [x] Utilization of Jest, React Testing Library and Vitest for writing unit and integration Tests.
- [x] This project demonstrates proficiency in React.js development, incorporating industry-standard tools and practices to deliver a functional and visually appealing dashboard application.

## Getting Started
Follow these steps to clone the repository, install dependencies, and run the application locally.
### Prerequisites
- Node.js (>=18.18.0) installed on your machine
- Yarn package manager (optional but recommended)
### Cloning the Repository
Clone the repository to your local machine using Git:
```
git clone https://github.com/SShahid97/employee-directory.git
```
### Installing Dependencies
Navigate to the project directory and install the necessary dependencies using yarn
```
cd employee-directory
yarn
```
### Running the json-server for mock API service
To start the json-server, open another instance of the terminal on the same path and 
run the following command to start the json-server
```
npx json-server --watch src/data/db.json --port 3004
```
### Running the Application
Start the development server to run the application locally
```
yarn dev
```
### Running the tests
Run the test cases by running the below command
```
yarn test
```
This command will run all the test cases and will show results of each test in the terminal whether it has passed or failed
