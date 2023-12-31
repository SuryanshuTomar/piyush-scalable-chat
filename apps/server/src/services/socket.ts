import { Server } from "socket.io";


export class SocketService {
	private _io: Server;
	constructor() {
		console.log("Socker Server Initialized...");
		this._io = new Server();
	}

	get io() {
		return this._io;
	}
}
