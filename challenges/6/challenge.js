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

function* times(set, target) {
    for (i in set) {
        for (let j = 1; j * set[i] <= target; j++) {
            if (j * set[i] == target) {
                yield {i: j, set: set[i]};
            }
        }
    }

    return true;
}

function decomp(set, n) {
    let decomp = [];

    let t = times(set, n);
    console.log('############################## SET', set);
    console.log('############################## N', n);

    while (h = t.next()) {
        console.log('############################## H', h);
        let current = [];
        if (!h.done) {
            for (let j = 0; j < h.value.i; j++) {
                current.push(h.value.set);
            }
            decomp.push(current);
        } else {
            break;
        }
    }

    for (let i = n; i > 0; i--) {
        let current = [];
        // let j = i;
        // console.log('############################## I', i);

        // while (j > 0) {
        //     current.push(j);
        //     if (j == n) {
        //         decomp.push(current);
        //         current = [];
        //     } else if(current.reduce((a, b) => a + b, 0) === n) {
        //         decomp.push(current);
        //         current = [];
        //     } else if (current.reduce((a, b) => a + b, 0) > n) {
        //         current = [];
        //     } else {
        //         continue;
        //     }

        //     j--;
        // }
    }

    return decomp;
}

const combinate = (set, target) => {
    let sets = decomp(set, target);

    console.log('############################## SETS', sets);

    // for (let i in set) {
    //     let current = [];
    //     let red = [];

    //     for (let j = 1; j * set[i] <= target; j++) {
    //         current.push(set[i]);
    //         if (j * set[i] == target) {
    //             sets.push(current);
    //         } else if (set[i] < target) {
    //             red.push(set[i]);
    //         }
    //     }
    //     console.log('############################## RED', red);

    //     let curr = red.reduce((a, b, i, arr) => {
    //         if (a == target) {
    //             arr.splice(arr.length - i - 1);
    //         }
    //         else {
    //             return a + b
    //         }
    //     }, 0);
    //     if (curr == target) {
    //         sets.push(red);
    //         red = [];
    //     }
    // }

    // console.log('############################## DECOMP', sets);

    // let sets = sumArray(set, target);

    return sets;
}

module.exports = combinate
