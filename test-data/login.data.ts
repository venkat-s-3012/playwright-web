
interface Credentials{
    email: string;
    password: string;

}

export const valid:Credentials = {
    email: 'venkat@demo.com',
    password: 'Venkat@2000'
}

export const invalid:Credentials = {
    email: 'invalid@email.com',
    password: 'invalid@2000'
}