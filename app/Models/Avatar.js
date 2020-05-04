'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Avatar extends Model {
    students() {
        return this.hasOne('App/Models/Student')
    }
}

module.exports = Avatar
