import { UpdateResult, DeleteResult } from "typeorm";

import { User } from "../entities/user";
import { Postgres } from "../services/database/postgres/typeorm";

const repository = Postgres.getRepository(User);

export const create = async (user: User) => {
    try {
        return await repository.save(user);
    } catch (err) {
        throw err;
    };
};

export const readAll = async (): Promise<User[]> => {
    try {
        return await repository.find();
    } catch (err) {
        throw err;
    };
};

export const readById = async (id: string): Promise<User | null> => {
    try {
        return await repository.findOneBy({ id: id });
    } catch (err) {
        throw err;
    };
};

export const updateById = async (id: string, user: any): Promise<UpdateResult> => {
    try {
        return await repository.update(id, user);
    } catch (err) {
        throw err;
    };
};

export const deleteById = async (id: string): Promise<DeleteResult> => {
    try {
        return await repository.delete({ id: id });
    } catch (err) {
        throw err;
    };
};