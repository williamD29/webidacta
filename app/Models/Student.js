'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }

    avatar() {
        return this.belongsTo('App/Models/Avatar')
    }

    sheets() {
        return this.belongsToMany('App/Models/Sheet').pivotTable(
            'sheet_student'
        )
    }
}

module.exports = Student
