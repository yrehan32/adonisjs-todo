'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
    async index({ view }) {
        const todos = await Todo.all()

        return view.render('todos.index', { todos: todos.rows })
    }

    async create({ view }) {
        return view.render('todos.create')
    }

    async store({ request, response, session }) {
        const todo = new Todo()
        todo.title = request.input('title')
        todo.description = request.input('description')
        todo.status = request.input('status')

        await todo.save()
        session.flash({ notification: 'Todo created successfully' })

        return response.route('todos.index')
    }

    async edit({ params, view }) {
        const todo = await Todo.find(params.id)

        return view.render('todos.edit', { todo: todo })
    }

    async update({ params, request, response, session }) {
        const todo = await Todo.find(params.id)
        todo.title = request.input('title')
        todo.description = request.input('description')
        todo.status = request.input('status')

        await todo.save()
        session.flash({ notification: 'Todo updated successfully' })

        return response.route('todos.index')
    }

    async delete({ params, response, session }) {
        const todo = await Todo.find(params.id)

        await todo.delete()
        session.flash({ notification: 'Todo deleted successfully' })

        return response.route('todos.index')
    }

    
    // UNTUK API
    async getData({ response }) {
        const todos = await Todo.all()

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: todos
        })
    }

    async getDataById({ request, response }) {
        const reqParam = request.only([
            'id'
        ]);

        const todo = await Todo.query().where('id', reqParam.id).first()

        var status_code = 200;
        var res = [];

        if (todo) {
            status_code = 200
            res = {
                code: 200,
                status: 'success',
                data: todo
            };
        } else {
            status_code = 404
            res = {
                code: 404,
                status: 'not found'
            };
        };

        return response.status(status_code).json(res)
    }

    async insertData({ request, response }) {
        const reqParam = request.only([
            'title',
            'description'
        ]);

        const todo = new Todo()
        todo.title = reqParam.title
        todo.description = reqParam.description

        const saving = await todo.save()

        var status_code = 200;
        var res = [];

        if (saving) {
            status_code = 200
            res = {
                code: 200,
                status: 'success',
                message: 'Data inserted successfully'
            };
        } else {
            status_code = 500
            res = {
                code: 500,
                status: 'internal server error',
                message: 'Data failed to insert'
            };
        };

        return response.status(status_code).json(res)
    }
}

module.exports = TodoController
