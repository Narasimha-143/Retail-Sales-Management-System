# Retail Sales Management System

Full-stack app:
- Frontend: React + Tailwind (Vite)
- Backend: Express + Mongoose (MongoDB)

## Quick start

1. Start MongoDB (local or Atlas).  
2. Backend:
   - `cd backend`
   - `npm install`
   - copy `.env.example` to `.env` and set `MONGO_URI`
   - `npm run dev`
3. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
4. Open the frontend (Vite default port e.g. http://localhost:5173)

## Notes
- API endpoint: `GET /api/sales` with many query params: `q`, `regions`, `genders`, `ageMin`, `ageMax`, `categories`, `tags`, `paymentMethods`, `dateFrom`, `dateTo`, `sortBy`, `sortOrder`, `page`, `pageSize`.
- Frontend uses fetch-based calls in `frontend/src/services/api.js`.
- Text search implemented with MongoDB text index on `customer.name`, `customer.phone`, `product.name`, `product.tags`.
