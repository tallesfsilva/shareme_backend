import {describe, expect, test} from '@jest/globals';
 
import axios from 'axios'

describe('Pin', () => {
  test('Create', async () => {
    const res = await axios.post('http://localhost:3000/pin/create')
   expect(res.data.msg).toBe('success')
   expect(res.status).toBe(200)
     
  });
})


describe('Pin', () => {
    test('Delete', async () => {
      const res = await axios.post('http://localhost:3000/pin/delete')
     expect(res.data.msg).toBe('success')
     expect(res.status).toBe(200)
       
    });
  })