import * as torrentSearch from 'torrent-search-api';
import { SearchResult } from "../models/searchResult";

export class SearchReultsController {

    constructor(private term: string) {
        //torrentSearch.enableProvider('ThePirateBay');


    }

    getResults = async () => {
        let results : SearchResult[] = [];
        torrentSearch.enableProvider('1337x');
        await torrentSearch.search(this.term, 'All', 40).catch(error => {
            console.log(error);
        }).then(async value => {
            value.forEach(async t => {
                let searchResult: SearchResult = {
                    name: t.title,
                    seeds: t.seeds,
                    leeches: t.peers,
                    size: t.size,
                    url: t.desc,
                    provider: t.provider
                };

                results.push(searchResult);
            });
        });

        return results;
    }
}
