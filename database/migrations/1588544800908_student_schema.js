'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.increments()
            table.string('name', 40).notNullable()
            table.string('firstname', 40).notNullable()
            table
                .integer('difficulty')
                .unsigned()
                .notNullable()
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .notNullable()
            table
                .integer('avatar_id')
                .unsigned()
                .references('id')
                .inTable('avatars')
                .notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('students')
    }
}

module.exports = StudentSchema
