import { merge } from './merge';

describe('merge', () => {
      it('should merge two empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const result = merge(collection1, collection2);
        expect(result).toEqual([]);
      });
    
      it('should merge one empty array and one non-empty array', () => {
        const collection1: number[] = [];
        const collection2 = [1, 2, 3];
        const result = merge(collection1, collection2);
        expect(result).toEqual([1, 2, 3]);
      });
    
      it('should merge two non-empty arrays of equal length', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const result = merge(collection1, collection2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
      });
    
      it('should merge two non-empty arrays of different lengths', () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [2, 4, 6];
        const result = merge(collection1, collection2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
      });
    
      it('should merge two non-empty arrays with duplicate elements', () => {
        const collection1 = [1, 3, 3, 5, 7];
        const collection2 = [3, 4, 6];
        const result = merge(collection1, collection2);
        expect(result).toEqual([1, 3, 3, 3, 4, 5, 6, 7]);
      });
    });
    