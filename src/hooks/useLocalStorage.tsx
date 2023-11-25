export type localStorageKey = "reserve-confirm-dialog";

/**
 * ローカルストレージから値を取得する
 * @param key LocalStorageのkey
 * @returns
 */
export const getLocalStorageItem = (key: localStorageKey): string =>
  localStorage.getItem(key) ?? "";

/**
 * ローカルストレージに値を設定する
 * @param key LocalStorageのkey
 * @param value LocalStorageに保存する値
 * @returns
 */
export const setLocalStorageItem = (key: localStorageKey, value: string) =>
  localStorage.setItem(key, value);

/**
 * ローカルストレージから削除する
 * @param key LocalStorageのkey
 * @returns
 */
export const removeLocalStorageItem = (key: localStorageKey) => localStorage.removeItem(key);

/**
 * ローカルストレージから全て削除する
 * @param key LocalStorageのkey
 * @returns
 */
export const clearLocalStorage = () => localStorage.clear();
