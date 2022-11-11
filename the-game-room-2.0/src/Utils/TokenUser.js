// return the token from the session //
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
// return the user from the session //
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

 // set the token and user from the session //
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token',
     token);
    sessionStorage.setItem('user', 
    JSON.stringify(user)
);
}
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}