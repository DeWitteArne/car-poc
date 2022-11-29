import {IsNotEmpty} from 'class-validator';

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
    @IsNotEmpty()
    owner: string;
}

