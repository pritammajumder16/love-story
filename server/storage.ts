import { type User, type InsertUser, type DiaryEntry, type InsertDiaryEntry, type Memory, type InsertMemory, type ProposalResponse, type InsertProposalResponse } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Diary operations
  getDiaryEntries(): Promise<DiaryEntry[]>;
  getDiaryEntryByDate(date: string): Promise<DiaryEntry | undefined>;
  createDiaryEntry(entry: InsertDiaryEntry): Promise<DiaryEntry>;
  updateDiaryEntry(date: string, entry: Partial<InsertDiaryEntry>): Promise<DiaryEntry | undefined>;
  
  // Memory operations
  getMemories(): Promise<Memory[]>;
  createMemory(memory: InsertMemory): Promise<Memory>;
  deleteMemory(id: string): Promise<boolean>;
  
  // Proposal operations
  getProposalResponses(): Promise<ProposalResponse[]>;
  createProposalResponse(response: InsertProposalResponse): Promise<ProposalResponse>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private diaryEntries: Map<string, DiaryEntry>;
  private memories: Map<string, Memory>;
  private proposalResponses: Map<string, ProposalResponse>;

  constructor() {
    this.users = new Map();
    this.diaryEntries = new Map();
    this.memories = new Map();
    this.proposalResponses = new Map();
    
    // Initialize with some starter diary entries
    this.initializeStarterData();
  }

  private initializeStarterData() {
    const startDate = new Date('2025-06-27');
    const entries = [
      {
        date: '2025-06-27',
        title: 'The Day We Started Talking',
        content: 'Today marks the beginning of something beautiful. When we first started talking, I had no idea that this conversation would change my life forever. Your voice, your laugh, the way you think - everything about you captivated me from day one.',
        createdAt: startDate,
        updatedAt: startDate,
      },
      {
        date: '2025-06-28',
        title: 'Getting to Know You',
        content: 'Our second day of talking and I was already falling for your intelligence and wit. The way you shared your thoughts, your dreams, and your perspectives on life - I knew I was talking to someone extraordinary.',
        createdAt: new Date('2025-06-28'),
        updatedAt: new Date('2025-06-28'),
      }
    ];

    entries.forEach(entry => {
      const diaryEntry: DiaryEntry = { ...entry, id: randomUUID() };
      this.diaryEntries.set(entry.date, diaryEntry);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDiaryEntries(): Promise<DiaryEntry[]> {
    return Array.from(this.diaryEntries.values()).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  async getDiaryEntryByDate(date: string): Promise<DiaryEntry | undefined> {
    return this.diaryEntries.get(date);
  }

  async createDiaryEntry(insertEntry: InsertDiaryEntry): Promise<DiaryEntry> {
    const id = randomUUID();
    const now = new Date();
    const entry: DiaryEntry = { 
      ...insertEntry, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.diaryEntries.set(entry.date, entry);
    return entry;
  }

  async updateDiaryEntry(date: string, updateData: Partial<InsertDiaryEntry>): Promise<DiaryEntry | undefined> {
    const existing = this.diaryEntries.get(date);
    if (!existing) return undefined;

    const updated: DiaryEntry = {
      ...existing,
      ...updateData,
      updatedAt: new Date(),
    };
    this.diaryEntries.set(date, updated);
    return updated;
  }

  async getMemories(): Promise<Memory[]> {
    return Array.from(this.memories.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async createMemory(insertMemory: InsertMemory): Promise<Memory> {
    const id = randomUUID();
    const memory: Memory = { 
      ...insertMemory, 
      id, 
      description: insertMemory.description || null,
      createdAt: new Date() 
    };
    this.memories.set(id, memory);
    return memory;
  }

  async deleteMemory(id: string): Promise<boolean> {
    return this.memories.delete(id);
  }

  async getProposalResponses(): Promise<ProposalResponse[]> {
    return Array.from(this.proposalResponses.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createProposalResponse(insertResponse: InsertProposalResponse): Promise<ProposalResponse> {
    const id = randomUUID();
    const response: ProposalResponse = { 
      ...insertResponse, 
      id, 
      message: insertResponse.message || null,
      createdAt: new Date() 
    };
    this.proposalResponses.set(id, response);
    return response;
  }
}

export const storage = new MemStorage();
