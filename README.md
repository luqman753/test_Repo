# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Project Details 

AuthorizedRoutes
The AuthorizedRoutes component is used to protect routes that require authentication. It ensures that only authenticated users can access the specified routes.

UnAuthorizedRoutes
The UnAuthorizedRoutes component is used for routes that should only be accessible to unauthenticated users. It can be used, for example, to prevent logged-in users from accessing the login and registration pages.

Routes
Inside the <BrowserRouter>, the <Routes> component is used to define the application's routes.


Routes are configured using the <Route> component. Each <Route> specifies a path and an element to render when that path is matched. Authorized and unauthorized routes are wrapped with <AuthorizedRoutes> and <UnAuthorizedRoutes> components, respectively.

/register: Renders the <Register> component for unauthenticated users.
/login: Renders the <Login> component for unauthenticated users.
/: Renders the <Home> component for authenticated users.
/add-collaborator: Renders the <AddCollaborator> component for authenticated users.

### Home Page
Data: The component fetches data about ebooks and collaborators from API endpoints and manages them using state variables.
Functionality: It allows users to create new books, add sections to existing books, and add subsections to sections. It also displays a list of existing ebooks with their sections and subsections.
Structure: The component includes a navigation bar, a button for creating new books, and a list of ebooks with sections and subsections.
State Variables
ebookData: An array that holds information about ebooks and their sections/subsections.
bookCollaborators: An array containing data about collaborators.
useEffect Hook
The useEffect hook is used to fetch data from API endpoints when the component is mounted.
It populates the ebookData and bookCollaborators state variables with the fetched data.

Event Handlers
handleAddSection(): Adds a new book to the ebookData array and sends a request to the API to create a new book.
handleAddSubsection(id, bookId): Adds a new subsection to a section within an ebook, updates the ebookData state, and sends a request to the API to update the book with the new subsection.
Rendered Content
A navigation bar is displayed at the top of the page.
A "Create New Book" button allows users to create a new ebook.
The main content area displays a list of ebooks, each represented by a Section component.
For each ebook, the Section component is rendered with information such as the author's ID, title, sections, subsections, and the ability to add subsections.

### Add Colaboration Page

Functionality: It provides a list of ebooks, allows users to open a modal to select collaborators, and enables users to add selected collaborators to ebooks.
Structure: The component includes a navigation bar, a list of ebooks, a "Add Collaborator" button for each ebook, and a modal for selecting collaborators.
State Variables
ebookData: An array that holds information about ebooks.
users: An array containing data about users, excluding the current user.
isOpen: A boolean flag to control the visibility of the modal.
useEffect Hook
The useEffect hook is used to fetch data from API endpoints when the component is mounted.
It populates the ebookData and users state variables with the fetched data.
Event Handlers
AddCollaborator(id, bookId): Adds a user as a collaborator to a specific ebook.
It checks if the ebook already has collaborators. If yes, it updates the collaborators' list; otherwise, it creates a new entry for the ebook with collaborators.
It updates the isOpen state to close the modal after adding a collaborator.
Rendered Content
A navigation bar is displayed at the top of the page.
For each ebook in the ebookData array, a card is rendered with the ebook's title and an "Add Collaborator" button.
Clicking the "Add Collaborator" button opens a modal with a list of users.
Users can be selected from the list to add as collaborators to the ebook.

### API Base URL
All endpoints are relative to the appConfig.baseUrl. Make sure to set the appropriate base URL in your configuration.

Endpoints
1. Get Collaborators
Endpoint: /collab
HTTP Method: GET
Description: Retrieve a list of all collaborators.
Parameters: None

2. Get Collaborators by Book ID
Endpoint: /collab?bookId={bookId}
HTTP Method: GET
Description: Retrieve a list of collaborators associated with a specific ebook by providing its bookId.
Parameters:
bookId (string): The unique identifier of the ebook.
3. Update Collaborator Data
Endpoint: /collab/{id}
HTTP Method: PUT
Description: Update collaborator data for a specific collaborator identified by its id.
Parameters:
id (string): The unique identifier of the collaborator.
collaborator (object): The updated collaborator data.

4. Add Collaborator
Endpoint: /collab
HTTP Method: POST
Description: Add a new collaborator entry.
Parameters:
data (object): The data for the new collaborator entry.
