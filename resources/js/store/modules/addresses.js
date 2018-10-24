import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const state = merge_objects(statesMixin.common, {
    form: new Form({
        zipcode: null,
        street: null,
        number: null,
        complement: null,
        neighbourhood: null,
        city: null,
        state: null,
        latitude: null,
        longitude: null,
    }),
})

let actions = actionsMixin
let mutations = mutationsMixin
let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
