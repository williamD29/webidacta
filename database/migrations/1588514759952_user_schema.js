'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
    up() {
        this.create('users', (table) => {
            table.increments()
            table.string('name', 40).notNullable()
            table.string('firstname', 40).notNullable()
            table
                .string('email', 254)
                .notNullable()
                .unique()
            table.string('password', 60).notNullable()
            table.string('profile_picture', 254).nullable()
            table.boolean('is_admin').defaultTo(false)
            table.timestamps()
        })
    }

    down() {
        this.drop('users')
    }
}

module.exports = UserSchema
