'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupSchema extends Schema {
    up() {
        this.create('groups', (table) => {
            table
                .integer('group_number')
                .unsigned()
                .notNullable()
                .primary('group_number')
            table.timestamps()
        })
    }

    down() {
        this.drop('groups')
    }
}

module.exports = GroupSchema
