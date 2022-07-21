/* Assume there is a collection named users that looks like the one below. How can you get all houses in the “Rabia” 
neighborhood? 

[
    {
        "_id" : ObjectId("5d011c94ee66e13d34c7c388"),
        "userName" : "kevin",
        "email" : "kevin@toptal.com",
        "password" : "affdsg342",
        "houses" : [
            {
                "name" : "Big Villa",
                "neighborhood" : "Zew Ine"
            },
            {
                "name" : "Small Villa",
                "neighborhood" : "Rabia"
            }
        ]
    },

    {
        "_id" : ObjectId("5d011c94ee66e13d34c7c387"),
        "userName" : "sherif",
        "email" : "sharief@toptal.com",
        "password" : "67834783ujk",
        "houses" : [
            {
                "name" : "New Mansion",
                "neighborhood" : "Nasr City"
            },
            {
                "name" : "Old Villa",
                "neighborhood" : "Rabia"
            }
        ]
    },

]
*/

//1. use practice                                           Crear la base de datos o utilizarla si ya existe
/*2.db.users.insertMany([                                   Insertar los documentos
    {
        "_id" : ObjectId("5d011c94ee66e13d34c7c388"),
        "userName" : "kevin",
        "email" : "kevin@toptal.com",
        "password" : "affdsg342",
        "houses" : [
            {
                "name" : "Big Villa",
                "neighborhood" : "Zew Ine"
            },
            {
                "name" : "Small Villa",
                "neighborhood" : "Rabia"
            }
        ]
    },

    {
        "_id" : ObjectId("5d011c94ee66e13d34c7c387"),
        "userName" : "sherif",
        "email" : "sharief@toptal.com",
        "password" : "67834783ujk",
        "houses" : [
            {
                "name" : "New Mansion",
                "neighborhood" : "Nasr City"
            },
            {
                "name" : "Old Villa",
                "neighborhood" : "Rabia"
            }
        ]
    },

])
*/
/*3.
db.users.aggregate([
    { $match: { 'houses.neighborhood': 'Rabia' } },                              Hasta aquí devuelve todos los documentos que tienen una casa en el barrio llamado "Rabia"
    {
        $project: {
            filteredHouses: {   // This is just an alias 
                $filter: {
                    input: '$houses', // The field name we are checking
                    as: 'houseAlias', // just an alias
                    cond: { $eq: ['$$houseAlias.neighborhood', 'Rabia'] }
                }
            },
            _id: 0
        }
    }

])

Output:
{ filteredHouses: [ { name: 'Small Villa', neighborhood: 'Rabia' } ] }
{ filteredHouses: [ { name: 'Old Villa', neighborhood: 'Rabia' } ] }
*/