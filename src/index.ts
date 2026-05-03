import { initializeApp } from "./app";
import logger from "./utils/logger";

try {
    logger.info("Starting application...");
    initializeApp();
} catch (error: any) {
    logger.error("Error occurred while initializing app:", error);
}