'use strict'

const { validateAll, sanitize, rule } = use('Validator')
const User = use('App/Models/User')

class RegisterController {
    async register({ request, response, auth, session }) {
        const nameRegex = "/^[a-zA-Z\u00C0-\u00FF'-\\s]+$/gi"
        const validationRules = {
            name: [
                `required|min:2|max:40`,
                rule('regex', new RegExp(nameRegex))
            ],
            firstname: [
                `required|min:2|max:40`,
                rule('regex', new RegExp(nameRegex))
            ],
            email: 'required|email|unique:users,email|min:3|max:254',
            password: 'required|min:8|max:60',
            password_confirmation: 'required|min:8|max:60|same:password'
        }
        const sanitizationRules = {
            name: 'trim',
            firstname: 'trim',
            email: 'trim',
            password: 'trim'
        }
        const validationMessages = {
            'name.required': 'Le nom est requis',
            'name.regex':
                'Le nom contient un ou plusieurs caractères non valides',
            'name.min': 'Le nom doit contenir au minimum 2 caractères',
            'name.max': 'Le nom doit contenir au maximum 40 caractères',
            'firstname.required': 'Le prénom est requis',
            'firstname.regex':
                'Le prénom contient un ou plusieurs caractères non valides',
            'firstname.min': 'Le prénom doit contenir au minimum 2 caractères',
            'firstname.max': 'Le prénom doit contenir au maximum 40 caractères',
            'email.required': "L'adresse email est requise",
            'email.email': "L'adresse email n'est pas valide",
            'email.unique': 'Cette adresse email existe déjà',
            'email.min':
                "L'adresse email doit contenir au minimum 3 caractères",
            'email.max':
                "L'adresse email doit contenir au maxnimum 254 caractères",
            'password.required': 'Le mot de passe est requis',
            'password.min':
                'Le mot de passe doit contenir au minimum 8 caractères',
            'password.max':
                'Le mot de passe doit contenir au maxnimum 60 caractères',
            'password_confirmation.required':
                'La confirmation du mot de passe est requise',
            'password_confirmation.min':
                'La confirmation du mot de passe doit contenir au minimum 8 caractères',
            'password_confirmation.max':
                'La confirmation du mot de passe doit contenir au maxnimum 60 caractères',
            'password_confirmation.same':
                'Les mots de passe doivent être identiques'
        }
        const userData = request.only([
            'name',
            'firstname',
            'email',
            'password',
            'password_confirmation'
        ])
        const sanitizedUserData = sanitize(userData, sanitizationRules)
        const validation = await validateAll(
            sanitizedUserData,
            validationRules,
            validationMessages
        )

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            return response.json({ validationMessages: validation.messages() })
        } else {
            try {
                delete sanitizedUserData.password_confirmation
                const user = await User.create(sanitizedUserData)

                return response.json({
                    status: 'success',
                    data: user
                })
            } catch (error) {
                return response.status(400).json({
                    status: 'error',
                    message: error
                })
            }
        }
    }
}

module.exports = RegisterController
