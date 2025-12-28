import { titleToNumber } from './excelSheetColumnNumber';

describe('titleToNumber', () => {
  test('should return 1 for columnTitle = "A"', () => {
    expect(titleToNumber('A')).toBe(1);
  });

  test('should return 28 for columnTitle = "AB"', () => {
    expect(titleToNumber('AB')).toBe(28);
  });

  test('should return 701 for columnTitle = "ZY"', () => {
    expect(titleToNumber('ZY')).toBe(701);
  });
});
