'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
    up() {
        this.create('questions', (table) => {
            table.increments()
            table
                .integer('question_number')
                .unsigned()
                .notNullable()
            table.string('answer_1', 254).nullable()
            table.string('answer_2', 254).nullable()
            table.string('answer_3', 254).nullable()
            table.string('image_1', 254).nullable()
            table.string('image_2', 254).nullable()
            table.string('image_3', 254).nullable()
            table
                .integer('sheet_id')
                .unsigned()
                .references('id')
                .inTable('sheets')
                .notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('questions')
    }
}

module.exports = QuestionSchema
