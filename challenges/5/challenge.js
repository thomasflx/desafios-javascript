/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const posts = require('./posts.json')

function chunkArray(arr, size) {
    let newArr = [];
    let current = [];
    for (let i = 0; i < arr.length; i++) {
        if (i != 0 && i % size == 0) {
            newArr.push(current);
            current = [];
        }
        current.push(arr[i]);
    }

    newArr.push(current);

    return newArr;
}

const paginate = (collection, pageNumber = 1, itemsPerPage = 10) => {
    let chunkPosts = chunkArray(collection, itemsPerPage);
    let currentPosts = typeof chunkPosts[pageNumber - 1] !== 'undefined' ? chunkPosts[pageNumber - 1] : [];

    return {
        currentPage: pageNumber,
        perPage: itemsPerPage,
        total: posts.length,
        totalPages: Math.ceil(posts.length / itemsPerPage),
        data: currentPosts
    }
}

module.exports = paginate