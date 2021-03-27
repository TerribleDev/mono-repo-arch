export function formatIntlNumber(number: number) {
    return new Intl.NumberFormat().format(number)
}