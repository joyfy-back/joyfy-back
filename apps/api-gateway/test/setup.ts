import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env.test' });
console.log('Jest setup - DATABASE_URL:', process.env.DATABASE_URL);