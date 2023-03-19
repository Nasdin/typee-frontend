# React Native Frontend for Typee App
This repository contains the React Native frontend for the Typee App, an educational application for children that explains words, generates stories, and shares interesting facts in a kid-friendly way.

# Overview
The frontend of the Typee App is built using React Native, a popular framework for building mobile applications using JavaScript and React. The app connects to a FastAPI backend to fetch word data and uses Google Cloud Platform services for authentication, storage, and other functionality.

# Project Structure
Here's an overview of the project structure:

typee-app-frontend/
├── public/
│ ├── index.html
│ │ - The main HTML file that serves as a template and includes the root element where the React app is injected.
│ ├── favicon.ico
│ │ - The favicon for the web app.
│ ├── manifest.json
│ │ - A JSON configuration file that provides metadata about the app, such as name, icons, and display settings.
├── src/
│ ├── components/
│ │ ├── OnScreenKeyboard.js
│ │ │ - The onscreen keyboard component displayed on the home screen, allowing the child to type.
│ │ └── GalleryCard.js
│ │ - A component representing a single word card in the gallery, displaying the word's picture, explanation, fact, and story.
│ ├── screens/
│ │ ├── GalleryScreen.js
│ │ │ - Displays the gallery of words, showing their pictures, explanations, facts, and stories fetched from the backend API.
│ │ ├── HomeScreen.js
│ │ │ - Displays Typee the robot with the onscreen keyboard, allowing the child to type. As the child types, the app asynchronously checks if a word is safe, integrating with the backend API.
│ │ ├── LoginScreen.js
│ │ │ - Provides the login screen, allowing users to authenticate using Google Sign-In and integrating with the backend API for authentication.
│ │ └── RegisterScreen.js
│ │ - Provides the registration screen for new users, integrating with the backend API for user registration.
│ ├── App.js
│ │ - The main application component, responsible for rendering the different screens based on the current state (e.g., logged in, logged out).
│ ├── index.js
│ │ - The entry point of the React application, where the main App component is rendered into the DOM.
│ ├── apiClient.js
│ │ - Contains the functions to interact with the backend API, wrapping HTTP requests and handling responses.
│ └── auth.js
│ - Handles the authentication logic, such as Google Sign-In integration and token management.
├── package.json
│ - Lists the project's dependencies and scripts.
├── package-lock.json
│ - Automatically generated file that locks the versions of the installed dependencies.
├── .gitignore
│ - Specifies the files and directories to be ignored by Git.
└── README.md
- Provides an overview of the project, its purpose, how to install and run the app, and information on how to contribute.

This project structure does not include the ios and android folders, and the babel.config.json file has been removed. The explanations for each file are provided, along with any necessary backend integrations.

# Getting Started
Clone the repository:

```
git clone https://github.com/yourusername/react-native-frontend.git
cd react-native-frontend
```

Install Node.js and npm, if not already installed. You can find instructions for your platform here.

Install the Expo CLI:
```
npm install -g expo-cli
```

Install project dependencies:

```
npm install
```

# Dependencies
The app uses various third-party libraries and packages. Some notable dependencies include:

React Native: The main framework for building the mobile application.
React Navigation: Handles navigation between app screens.
Expo: A platform for building and deploying React Native applications.
Axios: A library for making HTTP requests.

# Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode. Open the Expo app on your mobile device and scan the QR code to view the app. The app will reload if you save edits to your files, and you will see build errors and logs in the console.

npm test: Runs the test suite for the app using Jest.

npm run build: Builds the app for production.

# Contributing
To start contributing to the Typee App frontend, follow these steps:

Fork the repository and clone it to your local machine.

Create a new branch for your feature or bugfix:

```
git checkout -b my-feature-branch
```

Install dependencies and make your changes to the code.

Test your changes and ensure they don't break existing functionality.

Commit your changes and push the branch to your fork

```
git add .
git commit -m "Add my new feature"
git push origin my-feature-branch
```

Create a Pull Request on the original repository, comparing your fork's branch with the main branch. Fill out the PR template, describing the changes you've made and any additional information that may help reviewers understand your contribution.

Wait for feedback from the maintainers. They may request changes or ask for clarification about your contribution. Make any necessary changes and update your branch accordingly.

Once your contribution is approved and merged, delete your feature branch and sync your fork with the upstream repository:

```
git checkout main
git pull upstream main
git push origin main
```

Congratulations! You've contributed to the Typee App frontend project. Keep an eye on the issues and discussions in the repository to find more opportunities to help improve the project.