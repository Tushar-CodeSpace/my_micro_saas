import { logger } from "@shared/logger";
import { startApp } from "./app";


try {
    logger.info("Starting auth service...");
    startApp();
} catch (error: any) {
    logger.error("Error starting auth service:", error);
}