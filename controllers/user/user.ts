import { User } from "../../entities/user";
import { Postgres } from "../../services/database/postgres/typeorm";
import logger from "../../util/logger";
import { CreateUser } from "./interface";

const repository = Postgres.getRepository(User);

//TODO more easily
//TODO use Rxjs
//TODO params
export const create = async (user: CreateUser): Promise<User> => {
    try {
        user.createdTime = new Date();
        user.updatedTime = new Date();
        const result = await repository.save(user);
        return result;
    } catch (err) {
        throw err;
    };
};

export const readAll = async (): Promise<User[]> => {
    try {
        const result = await repository.find();
        return result;
    } catch (err) {
        throw err;
    };
};

export const readById = async (id: string): Promise<User> => {
    try {
        const user = new User();
        user.id = id;
        const result = await repository.findOneBy(user);
        if (!result) {
            return user;
        } else {
            return result;
        };
    } catch (err) {
        throw err;
    };
};

export const updateById = async (id: string, user: CreateUser) => {
    try {
        user.updatedTime = new Date();
        const result = await repository.update(id, user);
        return result;
    } catch (err) {
        throw err;
    };
};

export const deleteById = async (id: string) => {
    try {
        const user = new User();
        user.id = id;
        const result = await repository.delete(user);
        if (!result) {
            return user;
        } else {
            return result;
        };
    } catch (err) {
        throw err;
    };
};