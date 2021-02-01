/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
 * entre valores do conjunto que resultem na soma do número alvo.
 * 
 * Observações:
 * 
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *  
 *  combinate([2, 3, 5], 8) retornando
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]  
 *       [3,5]
 *       [5,3]
 *   ]
 * 
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 * 
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 * 
 * 
 * Seguem mais alguns exemplos do retorno esperado:
 * 
 *  combinate([2, 3, 5], 8) deve retornar
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
*
*    outro exemplo: 
*
*    combinate([2, 3, 6, 7], 7) retorna
*
*    [
*       [2, 2, 3],
*       [7]
*    ]
 */

function testArrays (array, sum) {
    let result1 = sumArray(array, sum);
    let result2 = sumArray(array.reverse(), sum);

    if (result1.length > result2.length) {
        for (i = 0; i < result1.length; i++) {
            result1[i].sort();
        }
        return result1;
    } else {
        for (i = 0; i < result2.length; i++) {
            result2[i].sort();
        }
        return result2.reverse();
    }
}

function sumArray(array, sum) {
    let nums = [];
    let numRepeat = [];
    let prevNums = [];
    let resto = '';

    /*
    ** Resolver a parte de repetição
    */
    for (let i in array) {
        numRepeat[i] = [];
        if (isPar(sum)) {
            resto = sum / array[i];
            if (isPar(resto)) {
                while (resto > 0 ) {
                    numRepeat[i].push(array[i]);
                    resto--;
                }
            }
        }
        if (sum == array[i]) {
            numRepeat[i].push(array[i]);
        }
    }

    for(let j in array) {
        nums[j] = [];
        elemento = array[j];
        nums[j].push(elemento);
        let teste = elemento
        for (x = 0; x < sum; x++) {
            if (typeof(array[parseFloat(j)+1]) == "undefined") {
                nums[j] = [];
                break;
            }
            nums[j].push(parseFloat(array[parseFloat(j)+1]));
            teste += parseFloat(array[parseFloat(j)+1]);
            if (teste > sum) {
                nums[j] = [];
                break;
            }
            if (teste == sum) {
                break;
            }
            if (typeof(teste) == NaN) {
                nums[j] = [];
                break;
            }
            nums[j].sort()
        }
    }

    let arrayJoin = numRepeat.concat(nums);
    let ret = arrayJoin.filter(e => e.length);

    return ret
}

function isPar (num) {
    if (num % 2 == 0 ) {
        return true;
    } else {
        return false;
    }
}

const combinate = (set, target) => {
    let sets = testArrays(set, target);

    return sets;
}

module.exports = combinate
