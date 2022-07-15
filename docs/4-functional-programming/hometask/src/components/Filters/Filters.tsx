import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { always, anyPass, isEmpty, pluck } from "ramda";
import styles from "./Filters.module.scss";

interface FiltersProps {
    // store?: {};
    setFilter?: (val) => void;
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
    {
        title: "Without posts",
        filterFunc: ({ posts }) => posts <= 0,
    },
    {
        title: "More than 100 posts",
        filterFunc: ({ posts }) => posts >= 100,
    },
];

export function Filters({ setFilter }: FiltersProps) {
    const [selectedFilter, setSelectedFilter] = useState<{ title: string; filterFunc: (any) => any }[]>([]);

    const onChange = ({ title, filterFunc }) => {
        // console.log(title); // for debugging

        let updatedFilters;
        if (selectedFilter.find(({ title: titleLocal }) => titleLocal === title)) {
            updatedFilters = selectedFilter.filter(({ title: titleLocal }) => titleLocal !== title);
        } else {
            updatedFilters = [...selectedFilter, { title, filterFunc }];
        }
        setSelectedFilter(updatedFilters);
    };

    useEffect(() => {
        setFilter(always(isEmpty(selectedFilter) ? always(true) : anyPass(pluck("filterFunc", selectedFilter))));
    }, [setFilter, selectedFilter]);

    return (
        <div className={styles.group}>
            <div className={styles.title}>Filter by posts</div>
            <ul className={styles.list}>
                {OPTIONS.map((option) => (
                    <li value={option.title} onClick={() => onChange(option)} key={option.title}>
                        <Checkbox
                            checked={!!selectedFilter.find(({ title }) => title === option.title)}
                            value={option.title}
                            // onChange={() => onChange(option)}
                            size="small"
                            color="primary"
                        />{" "}
                        {option.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
