import './HomePage.scss'
import { Search } from '../../components/Search/Search';
import { Steam } from '../../components/Steam/Steam';
import { Dmarket } from '../../components/Dmarket/Dmarket';
import { Bitskins } from '../../components/Bitskins/Bitskins';
import { SearchHistory } from '../../components/SearchHistory/SearchHistory';
import { useState } from 'react';
import { Skinport } from '../../components/Skinport/Skinport';
import { Skinbaron } from '../../components/Skinbaron/Skinbaron';

export const HomePage = ({ searched }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (newQuery) => {
        setSearchQuery(newQuery);
    };
    // const { search } = useLocation();

    // const matchResult = search.match(/(?<==)(\w.*)\b/g)[0];

    return (
        <section className="home">
            <section className="home__left">
                <h5>Search for a skin below:</h5>
                <Search defaultValue={searchQuery} onSearchChange={handleSearchChange} />
                <Steam searchQuery={searchQuery} searched={searched} />
            </section>
            <section className="home__right">
                <Dmarket searchQuery={searchQuery} />
                <Bitskins searchQuery={searchQuery} />
                <Skinport searchQuery={searchQuery} />
                <Skinbaron searchQuery={searchQuery} />
            </section>
            <section className="home__bottom">
                <SearchHistory />
            </section>
        </section>
    );
};