import { cn, extractEpisodesId, getSharedElements } from '@/app/utils/common';

describe('common functions', () => {

  describe('cn', () => {
    it('should return the same class name when a single class name is provided', () => {
      const result = cn('bg-red-500');
      expect(result).toBe('bg-red-500');
    });
  
    it('should return an empty string when all inputs are undefined or null', () => {
      const result = cn(undefined, null);
      expect(result).toBe('');
    });

    it('should return the last duplicated classname', () => {
      const result = cn('bg-red-500 bg-red-400');
      expect(result).toBe('bg-red-400');
    });
  });

  describe('extractEpisodesId', () => {
    it('should return list of IDs when provided with valid episode URLs', () => {
      const episodes = [
        'http://example.com/episodes/1',
        'http://example.com/episodes/2',
        'http://example.com/episodes/3'
      ];
      const result = extractEpisodesId(episodes);
      expect(result).toEqual(['1', '2', '3']);
    });

    it('should return null when provided with an empty list', () => {
      const episodes: string[] = [];
      const result = extractEpisodesId(episodes);
      expect(result).toBeNull();
    });

    it('should return null when provided with an undefined param', () => {
      const result = extractEpisodesId(undefined);
      expect(result).toBeNull();
    });

    it('it should return a list of IDs for valid string criteria', () => {
      const episodes = [
        'http://example.com/episodes/1',
        'http',
        'any string', 
      ];

      const result = extractEpisodesId(episodes);
      expect(result).toEqual(['1']);
    });
  });

  describe('getSharedElements', () => {
    it('should return common elements when both arrays have shared items', () => {
      const array1 = ['apple', 'banana', 'cherry'];
      const array2 = ['banana', 'cherry', 'date'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual(['banana', 'cherry']);
    });

    it('should return an empty array when one or both input arrays are empty', () => {
      const array1: string[] = [];
      const array2 = ['banana', 'cherry', 'date'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual([]);
    });

    it('should return an empty array when no common elements are found', () => {
      const array1 = ['apple', 'banana', 'cherry'];
      const array2 = ['date', 'fig', 'grape'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual([]);
    });

    it('should return common elements when both arrays have shared items', () => {
      const array1 = ['apple', 'banana', 'banana', 'cherry'];
      const array2 = ['banana', 'cherry', 'date', 'banana'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual(['banana', 'banana', 'cherry']);
    });

    it('should return common element when both arrays have one shared item', () => {
      const array1 = ['apple'];
      const array2 = ['apple'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual(['apple']);
    });

    it('should handle case sensitivity properly when strings differ only by case', () => {
      const array1 = ['apple', 'Banana', 'cherry'];
      const array2 = ['banana', 'Cherry', 'date'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual(['banana', 'cherry']);
    });

    it('should return all elements when all elements in one array are the same', () => {
      const array1 = ['apple', 'apple', 'apple'];
      const array2 = ['apple', 'apple', 'apple'];
      const result = getSharedElements(array1, array2);
      expect(result).toEqual(['apple', 'apple', 'apple']);
    });
  });


});
