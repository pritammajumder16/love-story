import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDiaryEntrySchema, insertMemorySchema, insertProposalResponseSchema } from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage_multer = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage_multer,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|wmv/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'));
    }
  },
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files
  app.use('/uploads', express.static(uploadsDir));

  // Diary routes
  app.get('/api/diary', async (req, res) => {
    try {
      const entries = await storage.getDiaryEntries();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch diary entries' });
    }
  });

  app.get('/api/diary/:date', async (req, res) => {
    try {
      const entry = await storage.getDiaryEntryByDate(req.params.date);
      if (!entry) {
        return res.status(404).json({ message: 'Diary entry not found' });
      }
      res.json(entry);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch diary entry' });
    }
  });

  app.post('/api/diary', async (req, res) => {
    try {
      const validatedData = insertDiaryEntrySchema.parse(req.body);
      const entry = await storage.createDiaryEntry(validatedData);
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ message: 'Invalid diary entry data', errors: (error as any).errors });
      }
      res.status(500).json({ message: 'Failed to create diary entry' });
    }
  });

  app.put('/api/diary/:date', async (req, res) => {
    try {
      const validatedData = insertDiaryEntrySchema.partial().parse(req.body);
      const entry = await storage.updateDiaryEntry(req.params.date, validatedData);
      if (!entry) {
        return res.status(404).json({ message: 'Diary entry not found' });
      }
      res.json(entry);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ message: 'Invalid diary entry data', errors: (error as any).errors });
      }
      res.status(500).json({ message: 'Failed to update diary entry' });
    }
  });

  // Memory routes
  app.get('/api/memories', async (req, res) => {
    try {
      const memories = await storage.getMemories();
      res.json(memories);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch memories' });
    }
  });

  app.post('/api/memories', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const { date, title, description } = req.body;
      const mediaType = req.file.mimetype.startsWith('image/') ? 'image' : 'video';
      const mediaUrl = `/uploads/${req.file.filename}`;

      const memoryData = {
        date,
        title,
        description: description || '',
        mediaUrl,
        mediaType,
      };

      const validatedData = insertMemorySchema.parse(memoryData);
      const memory = await storage.createMemory(validatedData);
      res.status(201).json(memory);
    } catch (error) {
      // Clean up uploaded file if validation fails
      if (req.file) {
        fs.unlink(req.file.path, () => {});
      }
      
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ message: 'Invalid memory data', errors: (error as any).errors });
      }
      res.status(500).json({ message: 'Failed to create memory' });
    }
  });

  app.delete('/api/memories/:id', async (req, res) => {
    try {
      const success = await storage.deleteMemory(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'Memory not found' });
      }
      res.json({ message: 'Memory deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete memory' });
    }
  });

  // Proposal routes
  app.get('/api/proposals', async (req, res) => {
    try {
      const responses = await storage.getProposalResponses();
      res.json(responses);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch proposal responses' });
    }
  });

  app.post('/api/proposals', async (req, res) => {
    try {
      const validatedData = insertProposalResponseSchema.parse(req.body);
      const response = await storage.createProposalResponse(validatedData);
      res.status(201).json(response);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ message: 'Invalid proposal response data', errors: (error as any).errors });
      }
      res.status(500).json({ message: 'Failed to save proposal response' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
