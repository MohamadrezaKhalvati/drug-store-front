const ID_TOKEN_KEY = 'id_token' as string

/**
 * @description get token form localStorage
 */
export function getToken(): string | null {
  return window.localStorage.getItem(ID_TOKEN_KEY)
}

/**
 * @description save token into localStorage
 * @param token: string
 */
export function saveToken(token: string): void {
  window.localStorage.setItem(ID_TOKEN_KEY, token)
}

/**
 * @description remove token form localStorage
 */
export function destroyToken(): void {
  window.localStorage.removeItem(ID_TOKEN_KEY)
}

export default { getToken, saveToken, destroyToken }
