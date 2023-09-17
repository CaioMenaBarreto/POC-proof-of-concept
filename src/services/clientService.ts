import { clientRepository } from "@/repositories/clientRepository";

async function createClient(firstName: string, lastName: string) {
    const existingClient = await clientRepository.getClientByName(firstName, lastName);
    if(existingClient.length > 0){
        throw {type: "Conflict", message: "Client already exists"};
    };
    await clientRepository.createClient(firstName, lastName); 
};

async function getClients(){
    const clients = await clientRepository.getClients();
    return clients;
}

async function updateClient(id: number, firstName: string, lastName: string){
    const existingClient = await clientRepository.getClientById(id);
    if(existingClient.length === 0){
        throw {type: "notFound", message: "Client not exists"};
    };
    return await clientRepository.updateClient(id, firstName, lastName);
}

async function deleteClient(id: number){
    const existingClient = await clientRepository.getClientById(id);
    if(existingClient.length === 0){
        throw {type: "notFound", message: "Client not exists"};
    };
    return await clientRepository.deleteClient(id);
};

export const clientService = { createClient, getClients, updateClient, deleteClient };