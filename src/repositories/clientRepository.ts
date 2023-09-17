import { db } from "@/database/database";
import { Client, CreateClient } from "@/protocols/clientProtocol";

async function createClient(firstName: string, lastName: string) {
    const client =  await db.query<CreateClient>(`INSERT INTO clientes ("firstName", "lastName") VALUES ($1, $2);`,[firstName, lastName]);
    return client.rows;
};

async function getClientByName(firstName: string, lastName: string) {
    const client = await db.query<Client>(`SELECT * FROM clientes WHERE "firstName" = $1 AND "lastName" = $2;`,[firstName, lastName]);
    return client.rows;
};

async function getClientById(id: number) {
    const client = await db.query<Client>(`SELECT * FROM clientes WHERE "id" = $1;`,[id]);
    return client.rows;
}

async function getClients(){
    const clients = await db.query<Client>(`SELECT * FROM clientes;`); 
    return clients.rows;
};

async function updateClient(id: number, firstName: string, lastName: string) {
    return await db.query<Client>(`UPDATE clientes SET "firstName" = $1, "lastName" = $2 WHERE "id" = $3;`,[firstName, lastName, id]);
};

async function deleteClient(id: number) {
    return await db.query<Client>(`DELETE FROM clientes WHERE "id" = $1;`,[id]);
};

export const clientRepository = { createClient, getClientByName, getClients, updateClient, deleteClient, getClientById };