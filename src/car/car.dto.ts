import { IsNotEmpty } from 'class-validator';
import { OwnerDto } from '../owner/owner.dto';

export class CarDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  model: string;
  @IsNotEmpty()
  color: string;
  @IsNotEmpty()
  price: number;

  owner: OwnerDto;
}
