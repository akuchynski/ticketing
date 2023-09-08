import { randomBytes } from 'crypto';

export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({
      id: `ch_${randomBytes(12).toString('hex')}`
    })
  }
};