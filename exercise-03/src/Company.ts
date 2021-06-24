import { company, address } from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor() {
        this.name = company.companyName();
        this.catchPhrase = company.catchPhrase();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `
            <h1>Company Name: ${this.name}</h1>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        `;
    }
}