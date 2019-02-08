/*export class SearchResult {
    constructor( private url: string, private provider: string, public name?: string, public seeds?: number, public leeches?: number, public size?: string) {
    }
}*/

export interface SearchResult {
    name: string,
    seeds: number,
    leeches: number,
    size: string,
    url: string,
    provider: string
}
