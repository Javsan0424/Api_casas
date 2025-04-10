import { IDBService } from "../db/types/dbService";
import { House } from "../types/db/house";
import { housedb } from "../db/fakeService/fakeService";

export class HouseController {
    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async gethousesByType(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        const houses = await this.dbService.getHouses(type, minPrice, maxPrice);
        return houses;
    }
}
