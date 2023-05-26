Library Management System

The Library Management System is a MERN (MongoDB, Express.js, React.js, Node.js) stack project designed to facilitate the management of libraries. It provides a user-friendly interface for library users, librarians, and administrators to perform various tasks efficiently. This README file serves as a guide to set up and understand the project.

Features

Authentication and Authorization

    Sign Up & Sign In: Users can create an account and sign in to access the system.
    Role-based Access Control: The system supports different roles, including User, Librarian, and Admin. Each role has specific permissions and restrictions.
    Access Tokens and Refresh Tokens: User authentication is implemented using access and refresh tokens for secure and seamless user experience.

User Features

    List of Libraries: Users can view a list of available libraries.
    List of Books: Users can browse books available in the libraries.
    Borrow Books: Users can request to borrow books from a library.
    Return Books: Users can return borrowed books to the respective library.
    Review Books: Users can provide feedback and reviews for books they have read.

Librarian Features

    Manage Own Library: Librarians can oversee and manage their assigned library.
    Manage Books in Library: Librarians can add, update, and remove books from their library's inventory.
    Manage Borrowed and Returned Books: Librarians can track borrowed and returned books within their library.
    Manage Borrow Process: Librarians handle the borrowing process, verifying requests, and maintaining records.

Admin Features

    Manage Libraries: Administrators have control over the overall library system and can manage libraries.
    Assign Librarian: Admins can assign librarians to specific libraries.
    Manage Members: Admins can manage member accounts and profiles.
    Generate and Analyze Metrics: Admins can access and analyze various metrics related to members and libraries.

Technology Stack

    The project utilizes the following technologies:

    Frontend:

    Vite: A fast and efficient frontend build tool.
    TypeScript: A statically-typed superset of JavaScript for enhanced development experience.
    React.js: A popular JavaScript library for building user interfaces.

    Backend:

    Node.js: A server-side JavaScript runtime environment.
    Express.js: A minimalist web application framework for Node.js.
    MongoDB: A NoSQL document database for data storage and retrieval.

Getting Started

To set up and run the Library Management System project on your local machine, follow these steps:

1. Clone the repository from GitHub:
   git clone https://github.com/narendra-singh-chauhan/library-management-system.git

2. Install dependencies for both the frontend and backend. Navigate to the project directory and run the following commands:

   # Install frontend dependencies

   cd frontend
   npm install

   # Install backend dependencies

   cd ../backend
   npm install

3. Configure the environment variables:

   For the frontend, create a .env file in the frontend directory and set the appropriate environment variables required for the frontend application.

   For the backend, create a .env file in the backend directory and set the necessary environment variables required for the backend server.

4. Start the development servers:

   # Start the frontend development server

   cd frontend
   npm run dev

   # Start the backend server

   cd ../backend
   npm run dev

5. Access the Library Management System in your browser:

   Open your browser and navigate to http://localhost:3000 to access the application.

Folder Structure

    The project follows a structured folder organization:

    frontend: Contains the frontend application's source code.
    backend: Contains the backend server's source code.
    docs: Includes project-related documentation, such as this README file.

Contribution

Contributions to the Library Management System project are welcome. If you have any suggestions, improvements, or bug fixes, feel free to submit a pull request. Please ensure adherence to coding standards, write unit tests where applicable, and provide detailed commit messages.

License

The Library Management System project is open-source and released under the MIT License. You can freely use, modify, and distribute the codebase as per the license terms.

Acknowledgments

We would like to acknowledge the following technologies and resources that have contributed to the development of the Library Management System:

    Vite
    TypeScript
    React.js
    Node.js
    Express.js
    MongoDB

Special thanks to all the contributors and developers involved in creating and maintaining these technologies.

Contact

If you have any questions, feedback, or issues related to the Library Management System project, feel free to reach out to us. We appreciate your interest and support!
