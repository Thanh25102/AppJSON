import { IsString } from 'class-validator';
export class MessageDTO {
  @IsString()
  content: string;
}
