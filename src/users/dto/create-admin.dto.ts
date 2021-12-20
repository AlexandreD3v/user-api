import { User } from "../entities/user.entity"; 
import {
    IsNotEmpty,
  } from 'class-validator';

export class AdminDto {

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  message: string;
}