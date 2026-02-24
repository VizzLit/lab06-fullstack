# Lab 06 - Node Backend + React Frontend (Fullstack Skeleton)

---

## Student Details

**Name:** Vedant Lohani  
**Enrollment Number:** CS-2341087  
**Section:** 3CSE15  

---

## Project Structure

```
lab06-fullstack/
│
├── backend/
│   ├── src/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   └── React Application
│
├── .env
├── .gitignore
└── README.md
```

---

## Setup Instructions

Open terminal and follow the steps below:

---

### 1. Clone the Repository

```bash
git clone https://github.com/VizzLit/lab06-fullstack.git
cd lab06-fullstack
```

---

### 2. Backend Setup

```bash
cd backend
npm install
touch .env
```

Add the following inside `.env` file:

```bash
PORT=3000
DATABASE_URL=your_database_url_here
```

Run backend server:

```bash
node src/server.js
```

Backend will run on:

```
http://localhost:3000
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd lab06-fullstack
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

### 4. Git Setup (If Creating Project from Scratch)

```bash
cd lab06-fullstack
git init
git add .
git commit -m "Lab 06 fullstack skeleton"
git branch -M main
git remote add origin https://github.com/VizzLit/lab06-fullstack.git
git push -u origin main
```

---

## Result

The backend and frontend were successfully created and executed.  
The backend runs on port 3000 and the frontend runs on port 5173.  
The complete project was pushed to GitHub successfully.

---

## Conclusion

This lab helped in understanding the structure and setup of a full stack application using Node.js and React. It also provided practical knowledge of environment configuration and version control using Git and GitHub.
