# Your Energy Website

This is a web project developed for the "Your Energy" platform, focusing on
fitness exercises, user favorites, and a rating system. The application is built
with modern web technologies and provides an interactive user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Exercise Catalog**: Browse a wide range of fitness exercises.
- **Favorites Management**: Add and remove exercises from your personal
  favorites list.
- **Exercise Details**: View detailed information for each exercise in a modal.
- **Rating System**: Users can submit ratings and reviews for exercises.
- **Filtering and Search**: Filter exercises by various categories and search by
  keywords.
- **Pagination**: Navigate through exercise listings efficiently.
- **Responsive Design**: Optimized for various screen sizes.
- **Modal Windows**: Interactive modals for displaying exercise details and
  rating forms.

## Technologies Used

- **JavaScript (ES Modules)**: For all interactive functionalities.
- **HTML5**: Semantic markup for content structure.
- **CSS3**: Styling and layout, including a modular CSS architecture.
- **Vite**: Modern frontend tooling for fast development and optimized builds.
- **IziToast**: For elegant and customizable notifications.
- **Local Storage**: For persisting user favorites.

## Installation

To get a copy of the project up and running on your local machine, follow these
steps:

1.  **Clone the repository**:

    ```bash
    git clone <repository_url>
    cd your-energy-website
    ```

2.  **Install dependencies** (assuming you have Node.js and npm/Yarn installed):

    ```bash
    npm install
    # or if you use Yarn
    yarn install
    ```

## Usage

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will open the application in your browser, typically at
`http://localhost:5173/` (or another port if 5173 is in use).

**Live Demo**: You can access the deployed version of this project at:
[https://macintosh393.github.io/your-energy-website/index.html](https://macintosh393.github.io/your-energy-website/index.html)

To build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be located in the `dist` directory.

## Project Structure

```
.
├── assets/                # Static assets like fonts, general images
├── public/                # Public assets, icons, etc.
├── src/                   # Main application source code
│   ├── api/               # API interaction functions
│   ├── css/               # Modular CSS files
│   ├── handlers/          # Event handlers and business logic
│   ├── img/               # Images specific to sections
│   ├── partials/          # Reusable HTML partials (header, footer, modal)
│   ├── render/            # Functions responsible for rendering UI components
│   ├── service/           # Helper services (e.g., notifications)
│   ├── state/             # Application state management
│   ├── utility/           # Utility functions (validators, capitalizers, etc.)
│   ├── favorites.html     # Favorites page HTML
│   ├── index.html         # Main page HTML
│   └── main.js            # Main application entry point
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation (this file)
└── vite.config.js         # Vite configuration
```
