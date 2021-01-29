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

    return decomp;
}

const combinate = (set, target) => {
    // let sets = decomp([2, 3], 6);
    let sets = decomp(set, target);

    console.log('############################## SETS', sets);

    return sets;
}

module.exports = combinate
