3. Services Directory
   Handles business logic. Separate from routes.

authService.ts:
ts
Copy code
export const authService = {
login: async (email: string, password: string) => {
// Validate user and return token
},
logout: async (userId: string) => {
// Invalidate token
},
};
