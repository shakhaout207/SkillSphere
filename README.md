# SkillSphere - Online Learning Platform

SkillSphere is a simple online learning platform built with Next.js. The project allows users to browse courses, view course information, register, login, and access a profile page. It is designed as a student project to demonstrate routing, reusable components, data handling, and basic authentication-related interface design.

## Features

- Home page with project introduction
- Course listing page
- Course cards with course information
- Login page
- Registration page
- My Profile page
- Navigation bar and footer
- Reusable React components
- Course data stored separately
- Custom 404 page
- Responsive user interface

## Technology Used

- Next.js
- React.js
- JavaScript
- Tailwind CSS
- CSS
- Git and GitHub

## Project Structure

```text
src/
  app/
    courses/
    login/
    my-profile/
    register/
    layout.js
    page.js
    not-found.js
    globals.css

  components/
    Navbar.jsx
    Footer.jsx
    CourseCard.jsx
    FadeIn.jsx
    ProtectedCourseDetails.jsx

  context/
    AuthContext.jsx

  data/
    courses.js