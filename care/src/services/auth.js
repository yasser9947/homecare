
export const setToken = (token) =>{
 localStorage.setItem('apiKey', token)
}


export const getToken = () =>{
 return localStorage.getItem('apiKey')
}

export const logout = () => {
 localStorage.removeItem('apiKey')
}