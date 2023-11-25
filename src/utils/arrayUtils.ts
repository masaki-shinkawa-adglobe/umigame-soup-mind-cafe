/** 配列から重複した要素を削除する */
export const removeDuplicates = <T>(arr: T) => {
  if (!Array.isArray(arr)) return arr;
  return arr.reduce((result, item) => {
    if (result.includes(item)) return result;
    return [...result, item];
  }, []);
};

/** 配列の合計値を返す */
export const sum = (array: number[]): number => array.reduce((_sum, num) => _sum + num, 0);
