import { useState, useEffect } from "react";
import { apply, compose, anyPass, always } from "ramda";
import { StyledEngineProvider } from "@mui/material/styles";

import { Table, Filters, Sort, Search } from "./components";
import { getImages, getUsers, getAccounts } from "./mocks/api";

import styles from "./App.module.scss";

import type { Row } from "./components";

import { dataConverter } from "./utils";

function App() {
    const [data, setData] = useState<Row[]>([]);
    const [filterPost, setFilterPost] = useState(always(always(true)));
    const [search, setSearch] = useState(always(always(true)));

    useEffect(() => {
        // fetching data from API
        Promise.all([getUsers(), getAccounts(), getImages()]).then(compose(setData, apply(dataConverter)));
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <div className="App">
                <div className={styles.container}>
                    <div className={styles.sortFilterContainer}>
                        <Filters setFilter={setFilterPost} />
                        <Sort updateStore={setData} />
                    </div>
                    <Search setSearch={setSearch} />
                </div>
                <Table rows={data.filter(anyPass([search, filterPost]))} />
            </div>
        </StyledEngineProvider>
    );
}

export default App;
