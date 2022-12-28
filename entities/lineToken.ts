import { PrimaryGeneratedColumn, Column, Generated } from "typeorm";

export class LineToken {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    @Generated("uuid")
    uuid: string;

    @Column()
    token: string;
};