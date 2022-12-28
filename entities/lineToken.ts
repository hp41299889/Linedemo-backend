import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class LineToken {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(type => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    token: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedTime: Date;
};