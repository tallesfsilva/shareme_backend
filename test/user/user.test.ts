import {describe, expect, test} from '@jest/globals';

import { UserType } from '../../types';
 
import axios from 'axios'



// describe('User - Login', () => {
//   let db;

//   beforeAll(async () => {
     
//     db = await connectDB();
//   });

//   afterAll(async () => {
//     await db.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('user');



//     const mockUser : UserType = {
//         name : "Terence",
//         email: "terence@gmail.com",
//         idGoogle: "121212"

//     }

//     const res = await axios.post('http://localhost:3000/user/login')
//     //    expect(res.data.msg).toBe('success')
//     //    expect(res.status).toBe(200)

//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({_id: 'some-user-id'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });




describe('User', () => {
  test('Login user - Create User', async () => {

    const mockUser : UserType = {
      name : "User Test 3",
      email: "terence@gmail.com",
      idGoogle: "7737373",
      image: ""

  }

   const res = await axios.post('http://localhost:3000/user/login', mockUser)
   expect(res.data.user).toBe(mockUser.name)
   expect(res.data.msg).toBe("User Created")
   expect(res.status).toBe(200)
     
  });

  test('Login user - Find User Login', async () => {

    const mockUser : UserType = {
      name : "User Test",
      email: "terence@gmail.com",
      idGoogle: "121212",
      image: ""

  }

   const res = await axios.post('http://localhost:3000/user/login', mockUser)
   expect(res.data.user.name).toBe(mockUser.name)
   expect(res.data.msg).toBe("User Found")
   expect(res.status).toBe(200)
     
  });



  test('Login user - Invalid Login', async () => {

    const mockUser : UserType = {
      name : "",
      email: "terence@gmail.com",
      idGoogle: "121212",
      image: ""
  }

   const res = await axios.post('http://localhost:3000/user/login', mockUser)
   expect(res.data.msg).toBe("Missing information")
   expect(res.status).toBe(200)
     
  });

})