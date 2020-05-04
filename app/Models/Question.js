'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
    sheet() {
        return this.belongsTo('App/Models/Sheet')
    }
}

module.exports = Question
