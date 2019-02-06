import * as torrentSearch from 'torrent-search-api';

export class SearchReultsController {

    constructor(private term: string) {
        //torrentSearch.enableProvider('ThePirateBay');

        console.log(torrentSearch.getActiveProviders());
    }

    getResults = () => {
        let torrents = torrentSearch.search(this.term, 'Movies', 100);
        console.log(torrents);
    }
}
