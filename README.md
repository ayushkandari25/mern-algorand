# 🚀 MERN + Algorand Take-Home Challenge

This project is a full-stack application built using **MongoDB**, **Express.js**, **React (Vite + TypeScript)**, and **Node.js**, integrated with the **Algorand TestNet** blockchain. Users can send TestNet ALGO transactions by providing a mnemonic phrase, recipient address, and amount. Transactions are broadcasted via the backend to the Algorand TestNet, stored in MongoDB, and their status is displayed on the frontend.

---

## 🧩 Tech Stack

**Frontend:** React (Vite + TypeScript), Axios  
**Backend:** Node.js + Express, MongoDB + Mongoose, Algorand SDK (algosdk), dotenv, cors, ts-node-dev

---

## ⚙️ Features

- ✅ Generate or use existing Algorand TestNet account  
- ✅ Send ALGO transactions using mnemonic  
- ✅ Track transaction confirmation status in real-time  
- ✅ Store transaction history in MongoDB  
- ✅ Full MERN integration (Frontend ↔ Backend ↔ Database)

---

## 🧱 Folder Structure

mern-algorand/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── algorand.controller.ts
│   │   ├── models/
│   │   │   └── Transaction.ts
│   │   ├── routes/
│   │   │   └── algorand.routes.ts
│   │   ├── index.ts
│   │   └── genAccount.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   └── package.json
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file in **backend**:

PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
ALGOD_SERVER=https://testnet-api.algonode.cloud
ALGOD_PORT=
ALGOD_TOKEN=

yaml
Copy code

> **Note:** `ALGOD_PORT` and `ALGOD_TOKEN` can be left empty when using Algonode.  
> Frontend does not require `.env`.

---

## 🧠 Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/mern-algorand.git
cd mern-algorand
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npm run dev
You should see:

arduino
Copy code
Server running on port 8000
✅ MongoDB connected
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Access the app at → http://localhost:5173

💡 Usage
Fund a TestNet account via Algorand TestNet Bank

Open the UI and fill in:

Recipient Address: TW3A3ZK4HPAQ3FGBGGQJW6CA67U65M4TDKH3DH645EYL46P37NA2T6Z2MI

Mnemonic: your 25-word phrase

Amount: e.g., 0.1

Click Send Transaction

You will see:

Transaction ID

Status: pending → confirmed

Example API Responses:

json
Copy code
POST /api/algorand/send
{
  "msg": "Transaction sent",
  "txId": "EZS3UMGOAWTYVK5SALGGSB5VW6RVLLDK7MVLDYMHZRZZBY6MTUHQ"
}
json
Copy code
GET /api/algorand/status/:txId
{
  "confirmedRound": 57378838,
  "poolError": "",
  "status": "confirmed"
}
💡 Helpful Scripts
bash
Copy code

# Generate a new test account (backend)
cd backend
npx ts-node-dev src/genAccount.ts
🧠 Notes
TestNet transactions are free and for testing only.

Backend connects to https://testnet-api.algonode.cloud (no API token needed).

All transactions are saved in MongoDB with fields: { from, to, amount, txId, status, createdAt }.

👨‍💻 Author
Ayush Kandari
GitHub: @ayushkandari25