/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
    let width = htmlTemplate.match("width:(.*)[^;|\"$]");
    width = width ? width[1].match(/\d+/) : 0;

    let height = htmlTemplate.match("height:(.*)[^;|\"$]");
    height = height ? height[1].match(/\d+/) : 0;

    return {width: parseInt(width), height: parseInt(height)};
}

module.exports = extractSize;


