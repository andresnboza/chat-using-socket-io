
export enum SocketMessageType {
    ASSIGN_CLIENT_ID        = 'assignClientId',
    UPDATE_USERS            = 'updateUsers',
    UPDATE_USER_GROUPS      = 'updateUserGroups',
    UPDATE_ROLES            = 'updateRoles',
}

export interface ISocketMessage {
    type: SocketMessageType;
    data: any;
    clientId?: string;
}
