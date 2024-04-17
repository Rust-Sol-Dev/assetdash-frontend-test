export interface ChartData {
    total_value: number,
    chart: {
        stock?: number,
        bonds?: number,
        crypto?: number,
        nft?: number,
        defi?: number,
        real_estate?: number
    }
}

export interface TableRowData {
    name: string;
    ticker: string;
    percentage: number;
    type: string;
    value: number
}