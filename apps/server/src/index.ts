import dotenv from "dotenv";
import http from "http";
import { SocketService } from "./services/socket";

// Configurations for the application.
dotenv.config({ path: "./.env" });

async function init() {
	const PORT = (process.env.PORT ?? 8000) as number;
	const httpServer = http.createServer();

	const socketService = new SocketService();
	socketService.io.attach(httpServer);

	httpServer.listen(PORT, () => {
		console.log(`HTTP server started at PORT: ${PORT}`);
	});

	socketService.initializeListeners();
}

init();
