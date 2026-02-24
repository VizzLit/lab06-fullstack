Lab 06 - Node Backend + React Frontend (Fullstack Skeleton)
Student Details
Name: Vedant Lohani
Enrollment Number: CS-2341087 Section: 3CSE15

Project Structure
lab06-fullstack/ │ ├── backend/ │ ├── src/ │ │ └── server.js │ └── package.json │ ├── frontend/ │ └── React Application │ ├── .env ├── .gitignore └── README.md

Setup Instructions
Open terminal:

# Clone the repository
git clone https://github.com/VizzLit/lab06-fullstack.git
cd lab06-fullstack

# =========================
# Backend Setup
# =========================

cd backend

# Install backend dependencies
npm install

# Create environment file
touch .env

# Add variables inside .env file:
# PORT=3000
# DATABASE_URL=your_database_url_here

# Run backend server
node src/server.js

# Backend will run on:
# http://localhost:3000


# =========================
# Frontend Setup
# =========================

# Open new terminal

cd lab06-fullstack
cd frontend

# Install frontend dependencies
npm install

# Run frontend server
npm run dev

# Frontend will run on:
# http://localhost:5173


# =========================
# Git Setup (if creating from scratch)
# =========================

cd lab06-fullstack

git init
git add .
git commit -m "Lab 06 fullstack skeleton"
git branch -M main
git remote add origin https://github.com/VizzLit/lab06-fullstack.git
git push -u origin main