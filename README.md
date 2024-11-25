

# E-commerce Project: Managing an Unfinished Open Source Project

> **Note**: This is the initial version of the project. The complete and fully developed version is available in the organization's repository. To gain access to the full version or the latest updates, please contact me for permissions to access the real or developed version.

## Overview

This project provides an e-commerce platform where users can manage their own online stores. It utilizes **React** for the frontend, **Supabase** for the backend and authentication, and **Context API** for state management.

![Project Screenshot](./images/project-screenshot.png)

## Features

- **User Authentication**: Secure sign-in and sign-up functionality using Supabase.
- **State Management**: Handled with **React Context API** for global state management.
- **Create Your Own Store**: Users can create and manage their personalized online stores.
- **Real-Time Updates**: Using Supabase for real-time data synchronization.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Supabase
- **Authentication**: Supabase Auth
- **State Management**: React Context API
- **Real-Time Updates**: Supabase Realtime

## Setup & Installation

### Prerequisites

- Node.js
- Git

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-url
   ```

2. Install dependencies:

   ```bash
   cd your-project-folder
   npm install
   ```

3. Set up Supabase:

   - Create a Supabase account at [supabase.io](https://supabase.io) and set up a new project.
   - Update the `.env` file with your Supabase credentials:

     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Your application should now be running at `http://localhost:3000`.

![Admin Dashboard](./images/admin-dashboard.png)

## License

This project is licensed under the MIT License.

---

### Key Points:
- The note at the beginning clearly explains that this is the initial version.
- It directs users to contact you for the full version or further access.

