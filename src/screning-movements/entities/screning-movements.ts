import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("screning_movements")
export class ScreningMovementEntity{
   @PrimaryGeneratedColumn
   id!:number;
   @Column
   movieTitle!:string;
   @Column
   startsAt!:Date;
   @Column
   status!: string;

   room!: 

   }


