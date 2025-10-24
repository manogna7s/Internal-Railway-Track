# QRail: Smart Railway Management System

QRail is an intelligent railway track management platform designed to streamline railway asset tracking, maintenance, and monitoring using QR codes and AI-powered insights.

## Features

- **QR Code Tracking:** Scan and manage railway assets and fittings with unique QR codes.
- **AI Insights:** Get predictive maintenance suggestions and analytics for railway infrastructure.
- **Live Monitoring:** Visualize track status and asset health in real-time.
- **User Management:** Role-based access for admins, engineers, and field staff.
- **Interactive Dashboard:** View, search, and filter track and fitting data easily.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB (or your preferred DB)
- **QR & AI:** QR code generation/scanning, AI analytics modules

## Getting Started

### Prerequisites

- Node.js & npm
- Git
- MongoDB (if using locally)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manogna7s/Internal-Railway-Track.git
   cd Internal-Railway-Track
   ```

2. **Install dependencies:**
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd ../Backend
     npm install
     ```

3. **Run the app:**
   - Start backend:
     ```bash
     npm start
     ```
   - Start frontend (in a new terminal):
     ```bash
     cd ../frontend
     npm run dev
     ```

4. **Access the app:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
Internal-Railway-Track/
  ├── frontend/      # React app
  ├── Backend/       # Node.js/Express API
  └── README.md
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

[MIT](LICENSE)

---

*Empowering smarter, safer railways with QRail.*
