import { logger, requestLogger } from "@shared/logger";
import express from "express";
import { authRoutes } from "./routes/auth.routes";
import { healthRoutes } from "./routes/health.routes";

const app = express();

function applyMiddleware() {
    logger.info("Applying middleware...");
    app.use(requestLogger);
    app.use(express.json());
}

function setupRoutes() {
    logger.info("Setting up routes...");

    app.use("/api/auth", authRoutes);

    app.use("/health", healthRoutes);
}

export function startApp() {
    applyMiddleware();
    setupRoutes();
    app.listen(3000, () => {
        logger.info("Auth service is running on port 3000");
    });
}