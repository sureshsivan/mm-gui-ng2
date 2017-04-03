
import { Address } from './Address.type'

export class User {
    private userid: string;
    private email: string;
    private alternateEmail: string;
    private address: Address;
    private alternateAddresses: Address[];
    private lastLoggedIn: number;
    private userCreatedOn: number;
}
