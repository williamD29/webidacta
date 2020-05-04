'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
    sheets() {
        return this.hasMany('App/Models/Sheet', 'group_number', 'group_number')
    }
}

module.exports = Group
