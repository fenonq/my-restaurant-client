export const convertArrayToMap = (array) => {
    return array.reduce((acc, el) => {
        if (acc.hasOwnProperty(JSON.stringify(el))) {
            acc[JSON.stringify(el)] += 1;
        } else {
            acc[JSON.stringify(el)] = 1;
        }
        return acc;
    }, {});
};
