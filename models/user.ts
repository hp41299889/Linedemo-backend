import { UpdateResult, DeleteResult } from "typeorm";

import { User } from "../entities/user";
import { Postgres } from "../services/database/postgres/typeorm";

const repository = Postgres.getRepository(User);

export const createUser = async (user: User) => {
    try {
        return await repository.save(user);
    } catch (err) {
        throw err;
    };
};

export const readAllUsers = async (): Promise<User[]> => {
    try {
        return await repository.find();
    } catch (err) {
        throw err;
    };
};

export const readUserById = async (id: number): Promise<User | null> => {
    try {
        return await repository.findOneBy({ id: id });
    } catch (err) {
        throw err;
    };
};

export const updateUserById = async (id: number, user: User): Promise<UpdateResult> => {
    try {
        // user.createdTime = user.createdTime;
        return await repository.update(id, user);
    } catch (err) {
        throw err;
    };
};

export const deleteUserById = async (id: number): Promise<DeleteResult> => {
    try {
        return await repository.delete({ id: id });
    } catch (err) {
        throw err;
    };
};