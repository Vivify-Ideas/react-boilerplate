export function getItem(keyName: string) {
  try {
    const localStorageValue = localStorage.getItem(keyName)
    return localStorageValue ? JSON.parse(localStorageValue) : null
  } catch (error) {
    console.log(error)
    return null
  }
}

export function setItem(keyName: string, value: unknown) {
  localStorage.setItem(keyName, JSON.stringify(value))
}

export function removeItem(keyName: string) {
  localStorage.removeItem(keyName)
}
