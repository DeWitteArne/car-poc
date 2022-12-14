
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewCar {
    name: string;
    model: string;
    color: string;
    price: number;
    owner: string;
}

export class UpdateCar {
    name: string;
    model: string;
    color: string;
    price: number;
}

export class NewOwner {
    name: string;
    firstName: string;
}

export class UpdateOwner {
    name: string;
    firstName: string;
}

export class Car {
    id: string;
    name: string;
    model: string;
    color: string;
    price: number;
    owner?: Nullable<Owner>;
}

export abstract class IQuery {
    abstract cars(): Nullable<Car[]> | Promise<Nullable<Car[]>>;

    abstract car(id: string): Car | Promise<Car>;

    abstract owners(): Nullable<Owner[]> | Promise<Nullable<Owner[]>>;

    abstract owner(): Owner | Promise<Owner>;
}

export abstract class IMutation {
    abstract createCar(input: NewCar): Car | Promise<Car>;

    abstract replaceCar(id: string, input: UpdateCar): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteCar(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createOwner(input: NewOwner): Owner | Promise<Owner>;

    abstract replaceOwner(id: string, input: UpdateOwner): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteOwner(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Owner {
    id: string;
    name: string;
    firstName: string;
}

type Nullable<T> = T | null;
