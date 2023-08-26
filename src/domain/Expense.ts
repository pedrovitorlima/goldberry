import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Expense {
    constructor(id: number, value: number, description: string) {
        this.id = id;
        this.value = value;
        this.description = description;
    }


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    description: String;
}