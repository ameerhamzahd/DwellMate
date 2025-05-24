# DwellMate 

**DwellMate** is a modern, full-stack web application designed to help individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Whether you're looking for a shared space or listing a vacant room, DwellMate connects the right people through an intuitive and engaging platform.

Built with React, Tailwind CSS, Firebase Authentication, Express.js, and MongoDB, DwellMate ensures a secure and user-friendly experience from profile creation to roommate matching.

---

## 🚀 Features

- 🔐 Firebase Authentication (Email & Google Sign-In)
- 🧑‍💼 User Profiles – Each listing includes user name, email, photo, contact info, lifestyle preferences, and room type.
- 🔍 Browse Roommate Listings – Search and view all available accommodations with rich details and responsive cards.
- ❤️ Like Feature – Users can express interest in a post (except their own); each like is counted and displayed in real-time.
- 📊 Interest Counter – See how many people are interested in each accommodation directly on the listing and details page.
- 📌 Detailed Property View – See full descriptions, rent, availability, and lifestyle info in a clean, focused layout.
- 📝 Add and manage roommate listings
- 🎨 Responsive Design – Optimized for all devices using Tailwind CSS.
- ⚛️ Built using React + React Router + Firebase
- 📄 Static pages like Terms & Condition, and Error page
- 🚀 Live Deployment – Frontend deployed on Firebase; backend powered by Express, MongoDB and deployed on Vercel.

---

## 🧑‍💻 Tech Stack

- **Frontend**: React, React Router DOM, Vite, React Simple Typewriter, React Tooltip
- **Backend/Auth**: Firebase Authentication & Hosting
- **Styling**: Tailwind CSS
- **Components & Animations**: DaisyUI, Swiper
- **Notifications**: React Toastify, SweetAlert2

---

## 🛠️ Setup Instructions & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ameerhamzahd/dwellmate-client.git
   cd dwellmate-client


2. **Install dependencies:**:
    ```bash
    npm install

    ⚠️ Make sure to initialize Tailwind CSS and configure Vite if you haven’t already. For example, after installing, run:
    ```bash
    npx tailwindcss init -p

3. **Configure Firebase**:
    Create a .env.local file and add your Firebase config:
    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id

4. **Run locally**:
    ```bash
    npm run dev

---

## Fix Client-Side Routing (React Router)
    If using React Router, add a _redirects file in your public/ folder:
    ```bash
    /*    /index.html   200

---

## 🚀 Deployment Steps to Firebase

1. **Login to Firebase CLI (if not already)**:
    ```bash
    npm install -g firebase-tools
    firebase login

2. **Initialize Firebase in your project**:
    ```bash
    firebase init

    Choose Hosting.
    Select your Firebase project.
    Set dist as the public directory.
    Choose Yes for single-page app rewrite (index.html).
    Choose No for GitHub deploys (unless needed).

3. **Build your React app**:
    ```bash
    npm run build

4. **Deploy to Firebase**:
    ```bash
    firebase deploy

---

## 📬 Contact

For issues or suggestions, please contact: ameerhamzah.daiyan@gmail.com

---

## 📄 License

-This project is licensed under the MIT License.

---

## ✨ Acknowledgements

Thanks to Firebase, Tailwind, and the React ecosystem for powering this project.

---