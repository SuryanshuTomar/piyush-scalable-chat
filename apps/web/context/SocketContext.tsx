"use client";

import { FC, ReactNode, createContext, useCallback } from "react";

interface SocketProviderProps {
	children: ReactNode;
}

interface ISocketContext {
	sendMessage: (msg: string) => void;
}

export const SocketContext = createContext<ISocketContext | null>(null);

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
	const sendMessage: ISocketContext["sendMessage"] = useCallback((msg) => {
		console.log("Sending Message : ", msg);
	}, []);

	return (
		<SocketContext.Provider value={{ sendMessage }}>
			{children}
		</SocketContext.Provider>
	);
};
