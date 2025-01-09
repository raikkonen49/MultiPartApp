import { jwtDecode } from 'jwt-decode'; // Use named import

export function getAccessToken() {
    return localStorage.getItem('access');
}

export function getUser() {
    const token = getAccessToken();
    return token ? jwtDecode(token) : null; // Use jwtDecode here
}

export function isAuthenticated() {
    const token = getAccessToken();
    return !!token;
}

export function setAuthToken(token) {
    if (token) {
        localStorage.setItem('access', token);
    } else {
        localStorage.removeItem('access');
    }
}
