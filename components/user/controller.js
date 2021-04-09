module.exports = function(injectedStore) {
    let store = injectedStore
    if(!injectedStore) {
        store = require('../../store/dummy')
    }

    function get(id) {
        return store.get('user', id)
    }
    
    function list() {
        return store.list('user')
    }

    function insert(data) {
        return store.insert('user', data)
    }

    function update(id, data) {
        return store.update('user', id, data)
    }
    function remove(id) {
        return store.remove('user', id)
    }

    return {
        get,
        list,
        insert,
        update,
        remove,
    }
}