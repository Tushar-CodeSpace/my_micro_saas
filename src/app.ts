import express from "express";
import logger from "./utils/logger";
import healthRouter from "./health/route";

const app = express();

function appMiddleware() {
    // Add your middleware here
    logger.info("Setting up middleware...");
    app.use((req, res, next) => {
        const start = Date.now();

        res.on("finish", () => {
            const ms = Date.now() - start;

            logger.info(`${req.method} ${req.url} ${res.statusCode} - ${ms}ms`);
        });

        next();
    });
    app.use(express.json());
}

function appRoutes() {
    // Define your routes here
    logger.info("Setting up routes...");
    app.use("/health", healthRouter);
}

export function initializeApp() {
    appMiddleware();
    appRoutes();
    app.listen(3000, () => {
        logger.info("Server is running on port 3000");
    });
}
