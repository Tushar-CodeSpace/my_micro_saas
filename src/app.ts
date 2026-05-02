import express from "express";

const app = express();

function appRoutes() {
    // Define your routes here
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
}

export function initializeApp() {
    appRoutes();
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}
