import optionInterface from "./type/option";
import defOption from './defOption'
import BG_UNIT from "./units/BG_UNIT";
import getUnit from "./getUnit";
import SM_UNIT from "./units/SM_UNIT";

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
