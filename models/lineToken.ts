import { LineToken } from "../entities";
import { Postgres } from "../services/database/postgres/typeorm";

const repository = Postgres.getRepository(LineToken);

export const createLineToken = async (lineToken: LineToken) => {
    try {
        return await repository.save(lineToken);
    } catch (err) {
        throw err;
    };
};