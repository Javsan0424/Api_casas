import { House } from "../../types/db/house";

export interface IDBService {
    getHouses(type:string, minPrice:number, maxPrice:number): Promise<House[]>
    getHouseByID(id:number): Promise<House>}