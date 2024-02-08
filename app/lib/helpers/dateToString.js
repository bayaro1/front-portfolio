/**
 * @param {string} utcDate (string renvoyée par api platform)
 */
export const getMonthAndYear =  (utcDate) => {
    const parts = utcDate.split('-');
    return parts[1] + '/' + parts[0];
}