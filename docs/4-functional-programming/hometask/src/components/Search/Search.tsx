import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { always, concat, test } from 'ramda';

import styles from './Search.module.scss';

interface SearchProps {
    // store?: Row[];
    setSearch?: (val: any) => any;
}

// OR

//interface SearchProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const existsValue =
    (regex) =>
    ({ username, country, name }) =>
        test(regex, concat(username, country, name));

export function Search({ setSearch }: SearchProps) {
    const [searchedValue, setSearchedValue] = useState<string>('');

    const onChange = (value) => {
        setSearchedValue(value);
        setSearch(always(existsValue(new RegExp(value, 'i'))));
    };

    return (
        <OutlinedInput
            className={styles.input}
            placeholder="Search by country/name/username"
            value={searchedValue}
            type="search"
            onChange={(e) => onChange(e.target.value)}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    );
}
