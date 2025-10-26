/** The event argument object for the webSocketClosed event. */
export interface WebSocketClosedEventArgs {
    /** The close code sent by the server. */
    code: number;
    /** The reason the server closed the connection. */
    reason: string;
    /** Indicates whether or not the connection was cleanly closed. */
    wasClean: boolean;
}
