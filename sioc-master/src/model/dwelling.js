export default class Dwelling {
    _id = undefined;
    publicationType = '';
    address = {
        address: '',
        latitude: null,
        longitude: null
    };
    occupationStatus= '';
    generalDescription= '';
    privateDescription= '';
    type = '';
    subtype = '';
    currency = '';
    price = 0;
    spaces = {
        dorms: '',
        closets: '',
        rooms: '',
        wc: '',
        toilette: '',
        garage: '',
        living: '',
        dinning: '',
        kitchen: '',
        yard: '',
        laundry: '',
        terrace: '',
        balcony: '',
        garden: '',
        pool: '',
        barbecue: '',
        floors: '',
        furnished: '',
        storage: '',
        depser: '',
        sum: ''
    };
    features = {
        location: '',
        orientation: '',
        lightness: '',
        heating: '',
        repair: '',
        refurbished: '',
        status: '',
        floor: ''
    };
    services = {
        gas: '',
        water: '',
        sewer: '',
        phone: '',
        pavement: '',
        electricity: '',
        cabletv: '',
        security: ''
        // falta expensas
    };
    legal = {
        bank: '',
        prof: ''
    };
    constructor(obj) {
        Object.assign(this, obj);
    }
}

