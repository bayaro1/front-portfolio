/**
 * @param {string} utcDate (string renvoyée par api platform)
 */
export const getMonthAndYear =  (utcDate) => {
    const parts = utcDate.split('-');
    return parts[1] + '/' + parts[0];
}

export const getDateTimeString = (utcDate) => {
    const dateParts = utcDate.split('T')[0].split('-');
    const timeParts = utcDate.split('T')[1].split('+')[0].split(':');

    return dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0] + ' ' + timeParts[0] + ':' + timeParts[1];
}