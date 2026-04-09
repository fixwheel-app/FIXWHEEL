import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './lib/db';
import bookingRoutes from './routes/bookings';
import partnerRoutes from './routes/partners';

// Load environment variables
dotenv.config();

const app = express();

// Use Render dynamic port
const PORT = process.env.PORT;

if (!PORT) {
  console.error('❌ PORT environment variable is not defined');
  process.exit(1);
}

// Middleware
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || 'http://localhost:3000',
      'https://fixwheel-sooty.vercel.app',
      'http://localhost:3000'
    ],
    credentials: true,
  })
);

app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'alive',
    server: 'FixWheel Backend',
    timestamp: new Date().toISOString(),
    port: PORT,
  });
});

// Database health check
app.get('/ping-db', async (req: Request, res: Response) => {
  try {
    await db.booking.count();

    res.status(200).json({
      status: 'database alive',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('❌ Database ping failed:', error);

    res.status(500).json({
      status: 'database error',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// API Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/partners', partnerRoutes);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'FixWheel Backend is running 🚀',
  });
});

// Catch-all 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
  });
});

// Start server
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});