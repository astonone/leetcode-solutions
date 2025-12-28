import { convertToTitle } from './excelSheetColumnTitle';

describe('convertToTitle', () => {
  test('should return "A" for columnNumber = 1', () => {
    expect(convertToTitle(1)).toBe('A');
  });

  test('should return "AB" for columnNumber = 28', () => {
    expect(convertToTitle(28)).toBe('AB');
  });

  test('should return "ZY" for columnNumber = 701', () => {
    expect(convertToTitle(701)).toBe('ZY');
  });

  test('should return "BXX" for columnNumber = 2000', () => {
    expect(convertToTitle(2000)).toBe('BXX');
  });

  test('should return "AZ" for columnNumber = 52', () => {
    expect(convertToTitle(52)).toBe('AZ');
  });
});
