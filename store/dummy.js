let db = {
    user: [{
        id: '1',
        name: 'Sebastian',
        lastName: 'Hernandez',
        phone: '1234',
    },
    {
        id: '2',
    }]
}

async function get(table, id) {
    const data = db[table]
    const res = data.filter(element => element.id == id)
    console.log(res[0])
    return res 
}

async function list(table) {
    const data = db[table]
    return data
}

async function insert(table, data) {
    db[table].push(data)
    return 'Record inserted'
}

async function update(table, id, data) {
    console.log(db[table])
    for(let i = 0; i < db[table].length; i++) {
        if(db[table][i].id === id) {
            db[table][i] = {
                id,
                ...data
            }

            return 'Table updated'
        }
    }
}

async function remove(table, id) {
    for(let i = 0; i < db[table].length; i++) {   
        if(db[table][i].id === id) {
            db[table].splice(i, 1)
            return 'Record deleted succesfuly'
        } 
    }
}
module.exports = {
    get,
    list,
    update,
    remove,
    insert,
}