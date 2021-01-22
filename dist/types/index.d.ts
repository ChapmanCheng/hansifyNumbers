import optionInterface from "./type/option";
/**
 * hansify your numbers from 500, 000 to 50萬
 * @param {number} input - numbers you want to format
 * @param {Object} option - options for formatting
 * @param {boolean} option.trimZero currently not in use;
 * @param {boolean} option[onlyFirstNum]  only shows 1st number e.g. 5十萬;
 * @param {string} option[withDecimal] = 1 | 2 ] allow decimals up to 2 digits;
 * @returns {string}
 */
export default function (input: number, option?: optionInterface): string;
