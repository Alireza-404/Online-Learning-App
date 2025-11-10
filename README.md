# 🎓 Online Learning App

A modern **mobile-only Online Learning App** built with **React (TypeScript)**, **Tailwind CSS**, and **JavaScript**.  
This project simulates a learning platform where users can **register, log in, and explore demo video lessons**.  
It focuses on **mobile-first design**, **clean UI**, and a **persistent theme system** stored in localStorage.

---

## 🌟 Overview

This app is designed **exclusively for mobile devices** 📱.  
It features 4 core pages — **Home**, **Courses**, **Messages**, and **Account** —  
alongside a sleek dark/light theme system, login and signup forms validated by **Regex**,  
and an engaging **404 page animated with Particles.js**.

> The goal of this project is to demonstrate a mobile learning concept with React and TypeScript, focusing on smooth UX, responsive UI, and modular code structure.

---

## 🧠 Key Features

- 📱 **Mobile-Only Design** – optimized for smartphones only
- 🌓 **Dark / Light Mode** – stored in localStorage for persistent theme
- ✅ **Regex Validation** – ensures valid email/password patterns
- 🔐 **Login / Register System** – works locally without backend
- 🎥 **Short Demo Videos** – watch 5-second sample lessons
- ⚙️ **Settings & Privacy Panel** – toggle theme directly from Account page
- 🚫 **Custom 404 Page** – animated using Particles.js
- 💾 **Local Storage Support** – saves theme preference
- 💡 **Built with TypeScript (TSX)** for better structure and type safety

---

## 🧰 Tech Stack

| Category       | Technology               |
| -------------- | ------------------------ |
| **Framework**  | React (TypeScript / TSX) |
| **Styling**    | Tailwind CSS             |
| **Validation** | Regex (JavaScript)       |
| **Animation**  | Particles.js             |
| **Storage**    | localStorage             |
| **Build Tool** | Vite (if used)           |

---

## 🧭 Project Structure

```
Online-Learning-App/
│
├── public/
│ ├── Fonts/
│ ├── Images/
│ └── Videos/
│
├── src/
│ ├── assets/
│ ├── Components/
│ ├── Pages/
│ │ ├── AccountOptionsPage.tsx
│ │ ├── AccountPage.tsx
│ │ ├── CoursePgae.tsx
│ │ ├── HomePage.tsx
│ │ ├── NotFoundPage.tsx
│ │ ├── NotificationsPage.tsx
│ │ └── VideoPage.tsx
│ ├── ParticlesLibrary/
│ ├── Redux/
│ │ ├── Slices/
│ │ └── Store.ts
│ ├── Utils/
│ │ ├── PersianPhoneNumber.ts
│ │ └── ToPersianNumber.ts
│ ├── App.tsx
│ └── main.tsx
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Alireza-404/Online-Learning-App.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project locally

```bash
npm run dev
```

Now open your browser at **http://localhost:5173** (or the port shown in the console).

---

## 🧩 How It Works

- Regex validation ensures that the entered email and password are in valid format.
- The login and register pages simulate authentication without a real backend.
- Dark/light mode can be toggled from the Account → Settings → Privacy section.
- Theme preference is saved to localStorage, persisting after refresh.
- The Courses page contains clickable demo lessons with short videos.
- 404 page is interactive and rendered using Particles.js for a futuristic touch.
- TypeScript is used for stronger typing and cleaner component architecture.

---

## 💬 About Me

👋 Hi, I'm Alireza, a Front-End Developer who loves building clean, fast, and user-friendly web interfaces.
I focus on React, TypeScript, and modern front-end practices — always improving and learning new things.

If you liked this project, don’t forget to ⭐ star the repo or connect with me! 🙌

---

## 📫 Contact

- GitHub: [Alireza-404](https://github.com/Alireza-404)
- Email: [alireza4o4shabani@gmail.com]
