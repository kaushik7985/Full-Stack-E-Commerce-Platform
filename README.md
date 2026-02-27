🛒 MERN E-Commerce Application (Full Stack)

A scalable, production-ready Full-Stack E-Commerce Application built using the MERN Stack, implementing secure authentication, role-based authorization, payment gateway integration, and a complete admin management system.
This project demonstrates strong backend architecture, REST API design, security best practices, and real-world deployment readiness.

📌 Project Overview

This application simulates a real-world e-commerce workflow including:
Secure user authentication,
Role-based access control (User/Admin),
Product lifecycle management,
Persistent cart management,
Order processing system,
Online payment integration using Razorpay,
Admin analytics and order management,
The architecture follows modular backend structuring and scalable frontend state management.

🚀 Key Features

1️⃣ Authentication & Authorization:-
JWT-based authentication,
Secure password hashing using Bcrypt,
Role-based route protection,
Middleware-driven request validation,
Persistent user sessions

2️⃣ Product Management System (Admin):-
Create / Update / Delete products,
Multi-image upload using Multer,
Cloudinary-based media storage,
RESTful API design,
Admin dashboard for product lifecycle management

3️⃣ Cart & Checkout System:-
Add to cart,
Update cart quantity,
Remove cart items,
Cart persistence in MongoDB,
Checkout page with shipping details collection,
Order generation from cart items

4️⃣ Payment Gateway Integration:-
Razorpay order creation via backend,
Secure payment verification using signature validation,
Payment status tracking,
Database transaction updates

5️⃣ Order Management:-
User order history,
Admin order dashboard,
Order status management (Pending / Paid / Delivered),
Protected admin-only routes

6️⃣ Security & Best Practices:-
Environment-based configuration,
Protected API routes,
Secure token handling,
Payment verification security,
Structured folder architecture,

🛠️ Technology Stack

Frontend:-
React.js,
TailwindCSS,
React Router DOM,
Axios

Backend:-
Node.js,
Express.js,
MongoDB,
Mongoose

Authentication & Security:-
JSON Web Token (JWT),
Bcrypt

File & Media Management:-
Multer,
Cloudinary

Payment Integration:-
Razorpay API

🏗️ System Architecture:-
Client (React Frontend)->
REST APIs (Express Backend)->
Business Logic Layer (Controllers)->
Database Layer (MongoDB + Mongoose)->
External Services (Cloudinary + Razorpay)

🔐 Authentication Flow:-
User registers → password hashed using Bcrypt->
JWT generated upon successful login->
Token stored on client side->
Middleware validates token on protected routes->
Admin routes verified via role-based access control

💳 Payment Workflow:-
Backend creates Razorpay order->
Frontend initiates Razorpay checkout->
Payment signature verified in backend->
Order status updated securely in database
