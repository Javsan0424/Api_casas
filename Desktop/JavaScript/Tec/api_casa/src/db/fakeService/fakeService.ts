import { House } from "../../types/db/house";
import { IDBService } from "../types/dbService";

export class housedb implements IDBService {

    private Fake_houses: House[] = [
        {
            price: 100,
            location: "Cumbres 4rto sector, 7898",
            description: "Casa pequeña",
            ratings: 3,
            ratings_comment: "No hay agua",
            terrain_area: 200,
            constrution_area: 100,
            duration: "9 meses",
            type: "Renta"
        }
    ];

    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        return this.Fake_houses.filter(h => 
            h.type === type && 
            h.price >= minPrice && 
            h.price <= maxPrice
        );
    }

    async getHouseByID(id: number): Promise<House> {
        return this.Fake_houses[id];
    }
}
