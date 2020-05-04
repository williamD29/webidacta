'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sheet extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }

    questions() {
        return this.hasMany('App/Models/Question')
    }

    students() {
        return this.belongsToMany('App/Models/Student')
            .pivotTable('sheet_students')
            .withTimestamps()
    }

    group() {
        return this.belongsTo(
            'App/Models/Group',
            'group_number',
            'group_number'
        )
    }

    series() {
        return this.belongsTo(
            'App/Models/Series',
            'series_number',
            'series_number'
        )
    }
}

module.exports = Sheet
