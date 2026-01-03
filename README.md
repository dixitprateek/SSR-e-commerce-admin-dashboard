
# 🛒 Server-Rendered E-commerce Admin Dashboard

A **production-ready, server-side rendered (SSR) e-commerce product management dashboard** built using **Next.js**.
This application enables administrators to securely manage products, upload images, and visualize inventory metrics through interactive charts.

---

## 🌍 Live Demo

[https://ssr-e-commerce-admin-dashboard.vercel.app](https://ssr-e-commerce-admin-dashboard.vercel.app)

---

## 🔐 Admin Credentials (Dummy)

> ⚠️ For demo/testing purposes only.

* **Email:** [admin@test.com](mailto:admin@test.com)
* **Password:** admin123

---

## 🎯 Objective

The objective of this project is to build a **server-rendered administrative dashboard** for managing products in an e-commerce system with:

* Fast page load times
* SEO-friendly rendering
* Secure admin access
* Real-world CRUD functionality

---

## 📦 Features

* Server-side rendering (SSR) using Next.js App Router
* Secure authentication and authorization with NextAuth (admin-only access)
* Complete product management (Create, Read, Update, Delete)
* Image upload and storage using Cloudinary
* Interactive charts for stock and pricing metrics (Recharts)
* Form validation using Zod (frontend and backend)
* Automatic UI refresh after product updates
* Continuous deployment with Vercel

---

## 🧠 Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Recharts

### Backend

* Next.js API Routes
* MongoDB with Mongoose
* Zod for validation

### Authentication

* NextAuth.js (Credentials Provider)

### Media Storage

* Cloudinary

### Deployment

* Vercel

---

## 🔄 Application Workflow

1. Admin requests the dashboard page
2. Server fetches product data from the database
3. Page is rendered on the server and sent to the browser
4. Admin performs CRUD operations
5. Images are uploaded securely to Cloudinary
6. UI updates instantly with fresh data
7. Charts reflect real-time product metrics

---

## ⚙️ Environment Variables

Create a `.env.local` file with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://ssr-e-commerce-admin-dashboard.vercel.app

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
---

## 🧪 Local Setup

```
git clone https://github.com/dixitprateek/SSR-e-commerce-admin-dashboard.git
cd ecommerce-admin
npm install
npm run dev
```

The application will run at:

```
http://localhost:3000
```

---

## 🎥 Demo Video

A short demo video (3–5 minutes) demonstrating:

* Admin login
* Product creation
* Image upload
* Product editing and deletion
* Data visualization with charts

*(Demo video link to be added)*

---


## 👤 Author

**Prateek Dixit**
BS-MS Economics, IIT Roorkee

GitHub: [https://github.com/dixitprateek](https://github.com/dixitprateek)

---