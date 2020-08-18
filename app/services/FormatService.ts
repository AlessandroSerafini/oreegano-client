function twoDecimals(val: number): number {
    return (Math.round((val + Number.EPSILON) * 100) / 100).toFixed(2);
}

export function formatPrice(price: number): string {
    return `${twoDecimals(price)} €`;
}

export function formatDistance(distance: number): string {
    return `${twoDecimals(distance)} km`;
}
