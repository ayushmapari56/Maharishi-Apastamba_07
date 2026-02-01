# Campus Placement System

## System Overview
A **Dual-Role Platform** serving as an integrated ecosystem for **Students (Applicants)** and **Companies (Recruiters)**.

- **Eligibility Audit**: Real-time student dashboard showing specific met/missed criteria (CGPA, Branch, Skills).
- **Explainable Logic**: Uses boolean-driven natural language to provide clear justifications for every decision (e.g., "Eligible because CGPA 8.2 >= 7.5").
- **Security**: AES-256 encryption in the Python Engine for sensitive data protection.

---

## Tech Stack

### Frontend (User Interface)
- **React.js**: Fast, responsive, interactive UX.
- **Tailwind CSS**: Modern, professional styling.
- **Redux/Context API**: State management (Login status, Application progress).
- **Framer Motion**: Global animations.

### Backend (Server Logic)
- **Node.js & Express**: Scalable API gateway and orchestration.
- **JWT**: Secure role-based authentication.

### Database
- **MongoDB (NoSQL)**: Student profiles, company rules, logs.
- **PostgreSQL (Relational)**: Academic records, final offers.

### Logic Engine
- **Python**: Explainable Rule Engine.
- **AES-256**: Data protection.

---

## Project Structure (Monorepo)

- **`client/`**: React Frontend Application
- **`server/`**: Node.js Backend API
- **`engine/`**: Python Rule Logic Service
