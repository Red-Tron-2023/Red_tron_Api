import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Historic, HistoricCategory } from "../domain/historic";


@Entity({ name: "historic" })
export class HistoricEntity implements Historic {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({name: "entity", type: "enum", enum:HistoricCategory })
    entity: HistoricCategory;

    @Column({ name: "created_at", type: "timestamp", nullable: false, default: () => "now()", })
    createdAt: Date;

}