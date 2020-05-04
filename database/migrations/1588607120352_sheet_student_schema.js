'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SheetStudentSchema extends Schema {
    up() {
        this.create('sheet_students', (table) => {
            table.increments()
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .notNullable()
            table
                .integer('student_id')
                .unsigned()
                .references('id')
                .inTable('students')
                .notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('sheet_students')
    }
}

module.exports = SheetStudentSchema
