# Music Track Metadata Finder

## Project Overview

This React application allows users to search for music track metadata using ISRC codes. The app interacts with a Spring Boot backend API to fetch track details, including metadata and cover images. The application begins with an authorization step where it calls the `/login` API and then redirects users to the search page upon successful authorization.

## Features

1. **Authorization Step**:

   - The application calls the `/login` API on startup to authorize the user.
   - Displays a progress bar during the authorization process.
   - Redirects to the search form page on successful authorization.

2. **Track Metadata Search**:

   - Allows users to input an ISRC code to fetch track metadata.
   - Submits the code to the backend using a `POST` request to `/createTrack`.
   - Displays track details, including:
     - Track Name
     - Artist Name
     - Album Name
     - Explicit Content Indicator
     - Playback Seconds
     - Cover Image

3. **Error Handling**:

   - Displays error messages if the API call fails during authorization or search.

4. **Responsive Design**:

   - Uses Material UI for a clean and responsive user interface.

5. **Routing**:
   - Implements React Router for navigation between pages (e.g., Authorization and SearchForm).

## Installation and Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Backend Spring Boot API** running locally on `http://localhost:8080`

### Steps to Install and Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/secret-point/spotify-music-tracker-frontend.git
   cd music-track-metadata-finder
   ```
2. **Install Dependencies**:

```bash
npm install

cd music-track-metadata-finder
```

3. **Set Backend API URL**:

- Update the base URL in the apiClient file (e.g., http://localhost:8080).

4. **Run the Application**:

```bash
npm start
```

5. **Authorization and Search Flow**:

- Open your browser and navigate to http://localhost:3000.
  Authorization and Search Flow:

- On application load, the /login API is called automatically.
  If successful, you’ll be redirected to the search form to input ISRC codes.
  Update the base URL in the apiClient file (e.g., http://localhost:8080).

## Folder Structure

```
src/
├── api/                  # API client for backend interaction
├── components/           # Reusable UI components
│   ├── AuthorizationPage.tsx
│   ├── SearchForm.tsx
├── redux/                # Redux store and slices
├── App.tsx               # Main application component
├── index.tsx             # Entry point
```
