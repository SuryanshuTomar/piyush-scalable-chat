import { Server } from "socket.io";

export class SocketService {
	private _io: Server;
	constructor() {
		console.log("Socker Server Initialized...");
		this._io = new Server({
			cors: {
				allowedHeaders: ["*"],
				origin: "http://localhost:3000",
			},
		});
	}

	public initializeListeners() {
		console.log("Socket Listeners Initialized!");
		const io = this._io;
		io.on("connect", (socket) => {
			console.log("New Socket Connected : ", socket.id);

			socket.on(
				"event:message",
				async ({ message }: { message: string }) => {
					console.log("New Message Received : ", message);
				}
			);
		});
	}

	get io() {
		return this._io;
	}
}
