import { ASSETS, ASSET_TYPES, HOLDINGS } from "./demo";

interface Asset {
    asset_id: string;
    amount: number;
}

interface ChartData {
    [key: string]: number;
}

interface UserData {
    total_value: number;
    chart: ChartData;
}

export function getProfileData(user_id: string) {
    const chartData: UserData = {
        total_value: 0,
        chart: {}
    };

    // Find the user's holdings
    const userHoldings: any = HOLDINGS.find(holding => holding.userId === user_id);
    if (!userHoldings) {
        return null;
    }

    // Calculate the total value
    userHoldings.wallets.forEach((wallet: any) => {
        wallet.assets.forEach((asset: any) => {
            const { asset_id, amount } = asset;
            const assetInfo = ASSETS.find(a => a.assetId === asset_id);
            if (assetInfo) {
                const { type } = assetInfo;
                const assetType = ASSET_TYPES.find(t => t === type);
                if (assetType) {
                    chartData.total_value += amount;
                    chartData.chart[type] = chartData.chart[type] ? chartData.chart[type] + amount : amount;
                }
            }
        });
    });

    const assets = userHoldings.wallets.reduce((acc: any, wallet: any) => {
        return acc.concat(wallet.assets);
    }, []);

    const tableData = assets.reduce((mergedAssets: any, asset: any) => {
        const assetData = ASSETS.find((a) => a.assetId === asset.asset_id);
        if (assetData) {
            const percentage = ((asset.amount) / chartData.total_value * 100).toFixed(2);
            const existingAsset = mergedAssets.find((a: any) => a.ticker === assetData.ticker);
            const assetObj = {
                ticker: assetData.ticker,
                name: assetData.name,
                type: assetData.type,
                value: asset.amount, // Replace 100 with the actual value calculation
                percentage: parseFloat(percentage),
            };

            if (existingAsset) {
                existingAsset.value += assetObj.value;
                existingAsset.percentage += assetObj.percentage;
            } else {
                mergedAssets.push(assetObj);
            }
        }
        return mergedAssets;
    }, []);

    return { chartData, tableData };
}
