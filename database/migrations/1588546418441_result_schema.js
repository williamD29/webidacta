'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResultSchema extends Schema {
    up() {
        this.create('results', (table) => {
            table.increments()
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
            table
                .integer('question_number')
                .unsigned()
                .notNullable()
            table
                .integer('answer_number')
                .unsigned()
                .notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('results')
    }
}

module.exports = ResultSchema
