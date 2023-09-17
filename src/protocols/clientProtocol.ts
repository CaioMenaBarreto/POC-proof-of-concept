export type Client = {
    id: number;
    firstName: string;
    lastName: string;
};

export type CreateClient = Omit<Client, "id">;