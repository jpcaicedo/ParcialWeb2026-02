import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity(room)
export class RoomEntity{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column
    name!:string;
    @Column
    capacity!:number;
    @OneToMany (())=>ScreningMovementEntity,
    (movement)=>movement.room)
    screenings!:ScreningMovementEntity[];
}