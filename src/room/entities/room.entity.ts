import { ScreningMovementEntity } from "src/screning-movements/entities/screning-movements";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("room")
export class RoomEntity{
    @PrimaryGeneratedColumn()
    id!:number;
   
    @Column({ length: 120 })
    name!:string;
    
    @Column({ length: 120 })
    capacity!:number;
    
    @OneToMany(() => ScreningMovementEntity, (room) => room.movieTitle)
    room!: RoomEntity[];
    screenings!:RoomEntity[];
}

