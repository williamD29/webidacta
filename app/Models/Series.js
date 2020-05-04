'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Series extends Model {
    sheets() {
        return this.hasMany(
            'App/Models/Sheet',
            'series_number',
            'series_number'
        )
    }
}

module.exports = Series
