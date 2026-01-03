# 🛒 Server-Rendered E-commerce Admin Dashboard

A **server-side rendered (SSR)** product management dashboard built with **Next.js**, designed for real-world e-commerce administration.
Admins can securely manage products, upload images, visualize stock & pricing data, and perform full CRUD operations.

---

## 🚀 Objective

To build a **production-style admin dashboard** that demonstrates:

* Server-side rendering for performance & SEO
* Secure admin authentication
* Full product lifecycle management
* Real-time data visualization
* Cloud-based image handling

This project is intended as a **Web Development / SDE Intern–level system design showcase**.

---

## ✨ Features

* ⚡ **Server-Side Rendering (SSR)** using Next.js App Router
* 🔐 **Authentication & Authorization**

  * Admin-only dashboard access
  * Secure credential login using NextAuth
* 📦 **Product Management (CRUD)**

  * Create, Read, Update, Delete products
  * Edit products inline
* 🧾 **Form Validation**

  * Robust validation using **Zod**
  * Frontend + backend validation
* 🖼️ **Image Uploads**

  * Secure uploads via **Cloudinary**
  * Optimized image delivery
* 📊 **Data Visualization**

  * Stock & price charts using **Recharts**
* 🧠 **Clean Architecture**

  * API routes (backend)
  * Models & validation layers
  * Reusable UI components
* 🎨 **Modern UI**

  * Tailwind CSS
  * shadcn/ui components
  * Responsive layout with sidebar

---

## 🧱 Tech Stack

### Frontend

* Next.js (App Router, SSR)
* React
* Tailwind CSS
* shadcn/ui
* Recharts

### Backend

* Next.js API Routes
* NextAuth (Credentials Provider)
* Zod (validation)

### Database & Storage

* MongoDB (Mongoose)
* Cloudinary (image storage)

---

## 🔄 Workflow

1. Admin logs in securely
2. Dashboard page is **server-rendered**
3. Products are fetched from the database
4. Admin can:

   * Add / edit / delete products
   * Upload product images
   * View stock & pricing charts
5. UI refreshes automatically after updates

---

## 🖥️ Screens / Pages

* `/login` – Admin login page
* `/dashboard` – Admin dashboard

  * Product list
  * Add/Edit/Delete actions
  * Stock & price charts

---
## 🌍 Live Demo

🔗 **https://ssr-e-commerce-admin-dashboard.vercel.app**

---

## 🔐 Dummy Admin Credentials

> Use these credentials to access the dashboard:

```
Email:    admin@test.com
Password: admin123
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Cloudinary

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```


## 🛠️ Local Setup

```bash
# Clone the repository
git clone https://github.com/dixitprateek/SSR-e-commerce-admin-dashboard.git

# Navigate into project
cd SSR-e-commerce-admin-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

App will run at:
👉 `http://localhost:3000`

---

## 📦 Git & Repo Notes

* `node_modules/` and `.next/` are intentionally **excluded**
* Images are stored remotely via Cloudinary
* Repository contains **only source code & configuration**

---

## 🎥 Demo Video

A 3–5 minute demo video showcasing:

* Admin login
* Product CRUD
* Image uploads
* Charts & dashboard flow

📎 *(Link to be added)*

---


## 🧠 Learning Outcomes

* Built a **real SSR application**
* Implemented **secure admin workflows**
* Designed **scalable backend routes**
* Understood **Git, env vars & deployment practices**

---
