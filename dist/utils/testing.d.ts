import { IMessageUpdateAPI, IMessageResultAPI, INewUserAPI, IUserResultAPI, IRoomResultAPI, IChannelResultAPI } from './interfaces';
import { IMessage } from '../config/messageInterfaces';
/** Define common attributes for DRY tests */
export declare const testChannelName = "tests";
/** Get information about a user */
export declare function userInfo(username: string): Promise<IUserResultAPI>;
/** Create a user and catch the error if they exist already */
export declare function createUser(user: INewUserAPI): Promise<IUserResultAPI>;
/** Get information about a channel */
export declare function channelInfo(query: {
    roomName?: string;
    roomId?: string;
}): Promise<IChannelResultAPI>;
/** Get the last messages sent to a channel (in last 10 minutes) */
export declare function lastMessages(roomId: string, count?: number): Promise<IMessage[]>;
/** Create a room for tests and catch the error if it exists already */
export declare function createChannel(name: string, members?: string[], readOnly?: boolean): Promise<IChannelResultAPI>;
/** Send message from mock user to channel for tests to listen and respond */
/** @todo Sometimes the post request completes before the change event emits
 *        the message to the streamer. That's why the interval is used for proof
 *        of receipt. It would be better for the endpoint to not resolve until
 *        server side handling is complete. Would require PR to core.
 */
export declare function sendFromUser(payload: any): Promise<IMessageResultAPI>;
/** Update message sent from mock user */
export declare function updateFromUser(payload: IMessageUpdateAPI): Promise<IMessageResultAPI>;
/** Create a direct message session with the mock user */
export declare function setupDirectFromUser(): Promise<IRoomResultAPI>;
/** Initialise testing instance with the required users for SDK/bot tests */
export declare function setup(): Promise<void>;
