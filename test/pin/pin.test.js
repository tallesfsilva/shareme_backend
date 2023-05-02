"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const axios_1 = require("axios");
(0, globals_1.describe)('Pin', () => {
    (0, globals_1.test)('Create', async () => {
        const res = await axios_1.default.post('http://localhost:3000/pin/create');
        (0, globals_1.expect)(res.data.msg).toBe('success');
        (0, globals_1.expect)(res.status).toBe(200);
    });
});
(0, globals_1.describe)('Pin', () => {
    (0, globals_1.test)('Delete', async () => {
        const res = await axios_1.default.post('http://localhost:3000/pin/delete');
        (0, globals_1.expect)(res.data.msg).toBe('success');
        (0, globals_1.expect)(res.status).toBe(200);
    });
});
