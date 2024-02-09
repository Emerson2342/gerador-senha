export default function generatePass() {
    let password: string = '';

    let characters: string =
        'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM!@#$%&*?1234567890';

    let passwordLength = 10;
    for (let index = 0; index < passwordLength; index++)
        password += characters.charAt(
            //retorna um número inteiro randômico dentro do tamanho da variável characters
            Math.floor(Math.random() * characters.length)
        )

    return password

}