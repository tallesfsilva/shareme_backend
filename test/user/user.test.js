"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const axios_1 = require("axios");
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
(0, globals_1.describe)('User', () => {
    (0, globals_1.test)('Login user - Create User', async () => {
        const mockUser = {
            name: "User Test 3",
            email: "terence@gmail.com",
            idGoogle: "7737373",
            image: ""
        };
        const res = await axios_1.default.post('http://localhost:3000/user/login', mockUser);
        (0, globals_1.expect)(res.data.user).toBe(mockUser.name);
        (0, globals_1.expect)(res.data.msg).toBe("User Created");
        (0, globals_1.expect)(res.status).toBe(200);
    });
    (0, globals_1.test)('Login user - Find User Login', async () => {
        const mockUser = {
            name: "User Test",
            email: "terence@gmail.com",
            idGoogle: "121212",
            image: ""
        };
        const res = await axios_1.default.post('http://localhost:3000/user/login', mockUser);
        (0, globals_1.expect)(res.data.user.name).toBe(mockUser.name);
        (0, globals_1.expect)(res.data.msg).toBe("User Found");
        (0, globals_1.expect)(res.status).toBe(200);
    });
    (0, globals_1.test)('Login user - Invalid Login', async () => {
        const mockUser = {
            name: "",
            email: "terence@gmail.com",
            idGoogle: "121212",
            image: ""
        };
        const res = await axios_1.default.post('http://localhost:3000/user/login', mockUser);
        (0, globals_1.expect)(res.data.msg).toBe("Missing information");
        (0, globals_1.expect)(res.status).toBe(200);
    });
});
