import optionInterface from "./type/option";
import defOption from './defOption'
import BG_UNIT from "./units/BG_UNIT";
import getUnit from "./getUnit";
import SM_UNIT from "./units/SM_UNIT";

/**
 * hansify your numbers from 500, 000 to 50萬
 * @param {number} input - numbers you want to format
 * @param {Object} option - options for formatting 
 * @param {boolean} option.trimZero currently not in use;
 * @param {boolean} option[onlyFirstNum]  only shows 1st number e.g. 5十萬;
 * @param {string} option[withDecimal = 1 | 2 ] allow decimals up to 2 digits;
 */
export default function (
  input: number,
  option: optionInterface = defOption
): string {
  const _option = { ...defOption, ...option };

  var index: number = getIndex()
  var division: number = input / lowerLimit(index);
  var [firstNum, ...otherNum]: Array<string | string[]> = division.toString().split("")
  var unit: string = getBGUnit(index)
  var smUnit = getSMUnit(otherNum.length - 1)

  if (!index) {
    if (_option.onlyFirstNum) {
      return firstNum + smUnit
    }

    return Math.floor(input).toString()
  }

  if (_option.onlyFirstNum) {
  }

  if (!_option.withDecimal) {
    var divisionWithoutDecimal = Math.floor(division)
    return divisionWithoutDecimal + unit;
  }

  return division.toFixed(_option.withDecimal) + unit;

  function lowerLimit (pow: number) {
    return Math.pow(10000, pow)
  }

  function getIndex () {
      var pow = 0;
      while (input > lowerLimit(pow + 1)) {
          pow++
      }
      return pow
  }

  function getSMUnit(index:number): string {
    return getUnit(SM_UNIT, index)
  }

  function getBGUnit(index: number): string {
    return getUnit(BG_UNIT, index)
  }
}
