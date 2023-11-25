export type sessionStorageKey = "reserve-confirm-dialog";

/**
 * セッションストレージから値を取得する
 * @param key SessionStorageのkey
 * @returns
 */
export const getSessionStorageItem = (key: sessionStorageKey): string =>
  sessionStorage.getItem(key) ?? "";

/**
 * セッションストレージに値を設定する
 * @param key SessionStorageのkey
 * @param value SessionStorageに保存する値
 * @returns
 */
export const setSessionStorageItem = (key: sessionStorageKey, value: string) =>
  sessionStorage.setItem(key, value);

/**
 * セッションストレージから削除する
 * @param key SessionStorageのkey
 * @returns
 */
export const removeSessionStorageItem = (key: sessionStorageKey) => sessionStorage.removeItem(key);

/**
 * セッションストレージから全て削除する
 * @param key SessionStorageのkey
 * @returns
 */
export const clearSessionStorage = () => sessionStorage.clear();
