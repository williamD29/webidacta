'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeriesSchema extends Schema {
    up() {
        this.create('series', (table) => {
            table
                .integer('series_number')
                .unsigned()
                .notNullable()
                .primary(['series_number'])
            table.timestamps()
        })
    }

    down() {
        this.drop('series')
    }
}

module.exports = SeriesSchema
