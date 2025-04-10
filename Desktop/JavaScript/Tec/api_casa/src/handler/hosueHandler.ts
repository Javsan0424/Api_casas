import { HouseController } from "../controller/houseController";
import { housedb } from "../db/fakeService/fakeService";

export class HouseHandler{
    getHouses(){
        const ctrl = new HouseController(new housedb());
        return ctrl.gethousesByType("Renta",0,10000);
    }
}