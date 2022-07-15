import { sort, identity } from "ramda";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "./Sort.module.scss";
import { Row } from "../Table";

interface SortProps {
    updateStore?: (val) => void;
}

const compare = {
    asc: ({ lastPayments: a }: Row, { lastPayments: b }: Row) => a - b,
    desc: ({ lastPayments: a }: Row, { lastPayments: b }: Row) => b - a,
};

// OR

//interface SortProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Sort({ updateStore }: SortProps) {
    const handleChange = (value) => {
        updateStore(sort(compare[value]) ?? identity);
    };

    return (
        <FormControl className={styles.control} component="fieldset">
            <FormLabel className={styles.label}>Sort by payments</FormLabel>
            <RadioGroup
                className={styles.group}
                aria-label="sorting"
                name="radio-buttons-group"
                onChange={(e) => handleChange(e.target.value)}
            >
                <FormControlLabel value="desc" control={<Radio />} label="desc" />
                <FormControlLabel value="asc" control={<Radio />} label="asc" />
            </RadioGroup>
        </FormControl>
    );
}
