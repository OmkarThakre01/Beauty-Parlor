// src/routes/auth.ts

// ... (imports)

/**
 * @swagger
 * /api/auth/register:
 * post:
 * summary: Register a new user
 * description: This endpoint registers a new user by sending an OTP for verification.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * email:
 * type: string
 * mobile:
 * type: string
 * responses:
 * '200':
 * description: OTP sent successfully.
 * '400':
 * description: Missing required fields.
 */
router.post('/register', async (req: Request, res: Response) => {
    // ... your route logic
});

// ... (rest of the file)
