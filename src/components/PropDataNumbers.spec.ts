import { describe, test, expect } from 'vitest';
import { PropData } from './PropDataNumbers';

describe('PropData', () => {
  test('returns the correct result for an input array', () => {
    const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const expected: string = '1 2 Prop 4 Data Prop 7 8 Prop Data 11 Prop 13 14 PropData 16';
    const actual: string = PropData(num);
    expect(actual).toBe(expected);
  });
});