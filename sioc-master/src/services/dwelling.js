import Http from './http';


export default class DwellingService {
    static async fetch() {
        const {dwellings} = await Http.get('api/dwellings');
        return dwellings;
    }
    static async save(dwelling) {
        const result = await Http.post('api/dwellings', {dwelling});
        return result;
    }
}

