import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FriendMessage {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  userId: number;

  @Column()
  friendId: number;

  @Column()
  content: string;

  @Column()
  messageType: string;

  @Column('int8')
  time: number;
}
