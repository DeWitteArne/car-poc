import { IsNotEmpty } from 'class-validator';

export class OwnerDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  firstName: string;
}
