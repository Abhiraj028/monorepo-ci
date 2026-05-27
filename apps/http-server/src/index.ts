import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/signup", async (req,res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await client.user.create({
            data: {
                username: username,
                password: password
            }
        });

        console.log(`Username: ${username}, Password: ${password}`);
        res.json({ message: `Signup successful for ${username} with ID: ${user.id}` });
    } catch (error) {
        console.error("Signup failed", error);
        res.status(500).json({ message: "Signup failed" });
    }
});

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});