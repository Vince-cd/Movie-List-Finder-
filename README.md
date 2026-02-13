# 🎬 Movie Explorer App

A production-ready React application that integrates with the TMDB API
to allow users to browse trending movies, search titles in real-time,
and manage a persistent favorites list.

This project demonstrates modern React architecture, API integration,
state management using Context API, and clean UI structuring --- making
it portfolio and recruiter ready.

project domain: https://main.d2y9re7k9s4u20.amplifyapp.com/

------------------------------------------------------------------------

## 🚀 Live Features

-   🔥 Browse Popular Movies (TMDB API Integration)
-   🔎 Search Movies by Title
-   ❤️ Add / Remove Favorites
-   💾 Persistent Favorites with LocalStorage
-   ⚡ Optimized Rendering with React Hooks
-   🧠 Global State Management using Context API
-   📱 Responsive Grid Layout

------------------------------------------------------------------------

## 🏗 Architecture & Design

The application follows a clean and scalable structure:

-   Component-based architecture
-   Separation of concerns (API layer, Context, UI components)
-   Reusable MovieCard component
-   Centralized favorites management
-   Persistent client-side storage

------------------------------------------------------------------------

## 🛠 Tech Stack

Frontend: - React (Hooks & Context API) - JavaScript (ES6+) - CSS

API: - TMDB (The Movie Database REST API)

------------------------------------------------------------------------

## 🔑 API Integration

The application connects to the TMDB API for:

-   Fetching popular movies
-   Searching movies dynamically
-   Rendering poster images via TMDB image CDN

API requests are handled inside a dedicated `services/api.js` module for
maintainability.

------------------------------------------------------------------------

## 🧠 State Management

Favorites are handled globally using React Context API.

Features include: - Add to favorites - Remove from favorites - Check if
movie is already favorited - Auto-persist to localStorage

This demonstrates understanding of global state patterns without relying
on external libraries.

------------------------------------------------------------------------

## 💡 Key Engineering Decisions

-   Context API over Redux for lightweight global state
-   Separation of API logic from UI components
-   Defensive UI rendering (loading & error states)
-   Fallback handling for missing movie posters
-   Clean conditional rendering for empty states

------------------------------------------------------------------------

## ⚙️ Installation

1.  Clone the repository:

git clone https://github.com/your-username/movie-explorer.git

2.  Install dependencies:

npm install

3.  Run the development server:

npm run dev

------------------------------------------------------------------------

## 👨‍💻 Author

Built as a portfolio project to demonstrate frontend engineering skills,
API integration, and scalable React architecture.

------------------------------------------------------------------------

