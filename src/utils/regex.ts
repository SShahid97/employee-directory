export const alphabets = /^[a-zA-Z\s']+$/;
export const alphaNumeric = /^[a-zA-Z0-9\s,-]+$/;
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
export const numbers = /^\d+$/;
export const phoneNumber = /^((\(\d{3}\) ?)|(\d{3}-?))?\d{3}-?\d{4}$/;
export const amount = /^\d*\.?\d+$/;