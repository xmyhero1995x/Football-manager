export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString
        .split('/')
        .map((item: string): number => {
            return parseInt(item);
        })

        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}

// export const numberStringToNumber = (numberString: string): number => {
//     let stringToNumber = parseInt(numberString);
//     return stringToNumber;
// }