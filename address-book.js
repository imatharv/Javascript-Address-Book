class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    pin;
    phoneNumber;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.pin = params[5];
        this.phoneNumber = params[6];
    }

    get firstName() {return this._firstName;}
    set firstName(firstName) {this._firstName = firstName;}

    get lastName() {return this._lastName;}
    set lastName(lastName) {this._lastName = lastName;}

    get address() {return this._address;}
    set address(address) {this._address = address;}

    get city() {return this._city;}
    set city(city) {this._city = city;}

    get state() {return this._state;}
    set state(state) {this._state = state;}

    get pin() {return this._pin;}
    set pin(pin) {this._pin = pin;}

    get phoneNumber() {return this._phoneNumber;}
    set phoneNumber(phoneNumber) {this._phoneNumber = this.phoneNumber;}
    
    toString() {
       return "First name: "+ this.firstName +", Last name: "+this.lastName+", Address: "+this.address+", City: "+this.city+
       ", State: "+this.state+", Pin: "+this.pin+", Phone number: "+this.phoneNumber;
    }
}

let contact = new AddressBook("Atharva","Joshi","Sagar park","Jalgaon","Maharashtra","425001","9665654666");
console.log(contact)