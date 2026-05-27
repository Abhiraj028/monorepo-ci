import {WebSocketServer} from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({port: 3001});

server.on("connection", (socket) => {
    console.log("New client connected!");
    socket.send("Welcome to the WebSocket server!", (error) => {
        if (error) {
            console.error("Failed to send welcome message", error);
        }
    });

    void client.user
        .create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })
        .catch((error) => {
            console.error("Failed to create user", error);
        });
});