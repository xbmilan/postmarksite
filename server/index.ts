import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { ZodError } from 'zod';
import { insertWaitlistSignupSchema } from '../src/schema.js';
import { storage } from './storage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV === 'development';

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/v1/waitlist/count', async (req, res) => {
  try {
    const count = await storage.getWaitlistCount();
    res.json({ data: { count } });
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    res.status(500).json({
      error: { message: 'Failed to get waitlist count' },
    });
  }
});

app.post('/api/v1/waitlist/signup', async (req, res) => {
  try {
    // Validate request body
    const validatedData = insertWaitlistSignupSchema.parse(req.body);

    // Create signup
    const signup = await storage.createWaitlistSignup(validatedData);

    res.status(201).json({
      data: signup,
      message: 'Successfully joined waitlist',
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        error: {
          message: 'Validation failed',
          details: error.errors,
        },
      });
    }

    if (error instanceof Error && error.message === 'Email already exists') {
      return res.status(409).json({
        error: { message: 'Email is already on the waitlist' },
      });
    }

    console.error('Error creating waitlist signup:', error);
    res.status(500).json({
      error: { message: 'Failed to join waitlist' },
    });
  }
});

// Serve static files in production
if (!isDevelopment) {
  app.use(express.static(path.join(__dirname)));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${isDevelopment ? 'development' : 'production'}`);
});
