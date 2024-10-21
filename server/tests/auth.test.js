const request = require('supertest');
const express = require('express');
const { connectDb, getDb } = require('../db'); // Adjust path as necessary
const authRoutes = require('../authRoutes'); // Adjust path as necessary

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

let db;

beforeAll(async () => {
    await connectDb((error) => {
        if (!error) {
            db = getDb();
        }
    });
});

// Cleanup the users collection before each test
beforeEach(async () => {
    await db.collection('users').deleteMany({});
});

describe('User Registration', () => {
    test('should register a new user successfully', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                userName: 'testUser',
                email: 'test@example.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('User created');
    });

    test('should return 400 if user already exists', async () => {
        await db.collection('users').insertOne({
            userName: 'existingUser',
            email: 'existing@example.com',
            password: 'hashedPassword'
        });

        const response = await request(app)
            .post('/api/auth/register')
            .send({
                userName: 'newUser',
                email: 'existing@example.com', // Same email as existing user
                password: 'password123'
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('User already exists');
    });

    test('should return 500 on server error', async () => {
        // Simulate a server error by passing invalid data
        jest.spyOn(db.collection('users'), 'insertOne').mockImplementationOnce(() => {
            throw new Error('Server error');
        });

        const response = await request(app)
            .post('/api/auth/register')
            .send({
                userName: 'testUser',
                email: 'test@example.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Failed to register user');
    });
});

afterAll(async () => {
    await db.client.close();
});
