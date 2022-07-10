import { find, head, sort, propOr, compose } from "ramda";
import { User, Account, Image } from "../types";
import type { Row } from "./components";

const findUser = (id) => find(({ userID }) => id === userID);
const sortByDate = ({ date: a }, { date: b }) => new Date(b).getTime() - new Date(a).getTime();
const getLastPayment = compose(propOr(0, "totalSum"), head, sort(sortByDate), propOr([], "payments"));

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] =>
    users.map(({ userID, username, country, name }) => ({
        avatar: findUser(userID)(images)?.url ?? "",
        username,
        country,
        name,
        lastPayments: getLastPayment(findUser(userID)(accounts)),
        posts: findUser(userID)(accounts)?.posts ?? 0,
    }));
