'use strict';

const client = require('../helpers/es');

function GetAllTodos(req, res) {
    client.search({
        index: 'todo',
        type: 'todo',
        q: '*',
        _sourceInclude: 'todo_id, todo, completed, tags, author, completeddate, duedate'
    }, function (erorr, response) {
        if (error) {
            response.end(JSON.stringify(error));
        } else {
            const results = [];
            results = response.hits.hits.map(hit => hit._source);
            response.header('Content-Type', 'application/json');
            response.end(JSON.stringify(results));
        }
    })
}

/* async function run() {
    await client.search({
        index: 'todo',
    })
} */

module.exports = {
    GetAllTodos: GetAllTodos
};