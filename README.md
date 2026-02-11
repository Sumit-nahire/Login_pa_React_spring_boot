# Login System (React + Spring Boot)

This is a simple Login and Registration system created using **React (Frontend)** and **Spring Boot (Backend)**.
It includes user registration, login, and logout functionality.

---

## 🚀 Features
- User Registration
- User Login
- User Logout
- React UI using Bootstrap
- Spring Boot REST API
- MySQL Database connection

---

## 🛠️ Technologies Used

### Frontend
- React JS
- Axios
- Bootstrap
- React Router DOM

### Backend
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL

---

## 📂 Project Structure

### Frontend (React)
- Login.jsx
- Register.jsx
- Welcome.jsx
- App.jsx

### Backend (Spring Boot)
- Controller
- Service
- Repository
- Entity
- Payload (DTO)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/sumit-nahire/Login_pa_React_Spring_boot.git

1)Frontend Setup (React)
Go inside frontend folder:
cd frontend

2)Install dependencies:
npm install

3)Run React project:
npm run dev

4)Frontend will run on:
http://localhost:5173

🔥 Backend Setup (Spring Boot)
1)Go inside backend folder:
cd backend


2)Run Spring Boot Application.
Backend will run on:
http://localhost:8080

## 🗄️ Database Setup (MySQL)
Create database in MySQL:
CREATE DATABASE Login;
Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/Login
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update


