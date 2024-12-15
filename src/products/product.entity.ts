import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products_table')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column('int')
  stock: number;
}