export const generateUserErrorInfo = user => {
    return `
    Uno o mas parámetros estan incompletos o no son válidos.
    Lista de properties obligotorios:
        - first_name: Must be a string. (${user.first_name})
        - last_name: Must be a string. (${user.last_name})
        - email: Must be a string. (${user.email})
    `
}