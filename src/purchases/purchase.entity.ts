import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('purchases')
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @Column()
  name: string;

  @Column('decimal')
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}