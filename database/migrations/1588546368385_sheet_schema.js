'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SheetSchema extends Schema {
    up() {
        this.create('sheets', (table) => {
            table.increments()
            table.string('title', 120).notNullable()
            table.string('global_question', 254).notNullable()
            table
                .integer('group_number')
                .unsigned()
                .references('group_number')
                .inTable('groups')
                .notNullable()
            table
                .integer('series_number')
                .unsigned()
                .references('series_number')
                .inTable('series')
                .notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('sheets')
    }
}

module.exports = SheetSchema
