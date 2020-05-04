'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvatarSchema extends Schema {
    up() {
        this.create('avatars', (table) => {
            table.increments()
            table.string('url', 254).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('avatars')
    }
}

module.exports = AvatarSchema
