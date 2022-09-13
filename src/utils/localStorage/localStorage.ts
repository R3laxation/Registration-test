export const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token))
};

export const getTokenFromLocalStorage = (token: string) => {
    const value = localStorage.getItem(token)
    return value
}