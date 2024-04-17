import { atom } from "recoil";
export const userIdState = atom({
    key: "user-id",
    default: ""
});

export const chartDataState = atom({
    key: "chart-data-state",
    default: {
        total_value: 0,
        chart: {
            stock: 0,
            bonds: 0,
            crypto: 0,
            nft: 0,
            defi: 0,
            real_estate: 0,
        }
    }
});

export const holdingList = atom({
    key: "holding-list",
    default: []
});