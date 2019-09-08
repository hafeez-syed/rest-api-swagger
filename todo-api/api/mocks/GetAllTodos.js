'use strict';

function GetAllTodos(req, res) {
    res.json([
        {
            todo_id: 0,
            todo: "do some chores",
            datecreated: "2019-09-08T10:19:19.622Z",
            author: "Hafeez",
            duedate: "2019-09-08T10:19:19.622Z",
            completed: false
        },
        {
            todo_id: 1,
            todo: "do some shopping",
            datecreated: "2019-09-08T10:19:19.622Z",
            author: "Syed",
            duedate: "2019-09-08T10:19:19.622Z",
            completed: false
        },
    ]
    );
}

module.exports = {
    GetAllTodos: GetAllTodos
};