'use strict'

const User = use('App/Models/User')

class UserController {
    async test() {
        const users = await User.all()
        return users.toJSON()
    }
}

module.exports = UserController
