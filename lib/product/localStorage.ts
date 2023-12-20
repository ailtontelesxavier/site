import { AbstractDataSource } from "./abstractDataSource";
import { Product } from "./entities";

export class LocalDataStorage extends AbstractDataSource {
    protected loadProducts(): Promise<Product[]> {
        return Promise.resolve([{id:1, name: "p1", category: "Watersports", description: "p1 whatersports", price:3},
        {id:2, name: "p2", category: "Watersports", description: "p2 whatersports", price:4},
        {id:3, name: "p3", category: "running", description: "p3 whatersports", price:5}])
    }

    storeOder(): Promise<number> {
        console.log("Store Order");
        console.log(JSON.stringify(this.order))
        return Promise.resolve(1)
    }
}