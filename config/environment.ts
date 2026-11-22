

function requiredEnv(name:string):string{
    const value = process.env[name]
    if(!value){
        throw new Error(`Missing environment variable${name}`)
    }
    return value
}

export const environment = {
    baseUrl: requiredEnv('BASE_URL'),
    apiBaseUrl: requiredEnv('API_BASE_URL'),
    userName: requiredEnv('USERNAME'),
    password: requiredEnv('PASSWORD')

}