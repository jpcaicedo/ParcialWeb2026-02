import { RoomEntity } from "src/room/entities/room.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("screning_movements")
export class ScreningMovementEntity{
   @PrimaryGeneratedColumn()
   id!:number;
   
   @Column({ length: 120 })
   movieTitle!:string;
  
   @Column({ length: 120 })
   startsAt!:Date;
   
   @Column({ type: 'varchar', length: 20, default: 'pending' })
   status!: string;
   
   @ManyToOne(()=>RoomEntity, (room) => room.screenings, {
    nullable: false,
  })

   @JoinColumn({name: 'screning_id'})
   room!: RoomEntity;   
}
