/*
Assume there is a document with nested arrays that looks like the one below. 
How can you insert a “room” that has the name “Room 44” and size of “50” for a particular “house” that belongs to this 
user?

{
    "_id": "682263",
    "userName" : "sherif",
    "email": "sharief@aucegypt.edu",
    "password": "67834783ujk",
    "houses": [
        {
        "_id": "2178123",
        "name": "New Mansion",
        "rooms": [
            {
            "name": "4th bedroom",
            "size": "12"
            },
            {
            "name": "kitchen",
            "size": "100"
            }
        ]
        }
  ]
}

*/

//1. use practice                               Crear la base de datos
/* 2. db.toptal.insertOne(                      Crear la colección "toptal" e insertar un documento

   {
      "_id": "682263",
      "userName" : "sherif",
      "email": "sharief@aucegypt.edu",
      "password": "67834783ujk",
      "houses": [
         {
         "_id": "2178123",
         "name": "New Mansion",
         "rooms": [
            {
            "name": "4th bedroom",
            "size": "12"
            },
            {
            "name": "kitchen",
            "size": "100"
            }
         ]
         }
   ]
   }
) */

/* 3. db.toptal.updateOne(                                                        Actualizar el Array anidado
   { 
       "_id": ObjectId("682263") o "682263" si lo insertamos arbitrariamente,
       "houses._id":"2178123"     // identify the id for the house that we want to update
   },
   { "$push":   
       {
           "houses.$.rooms":      // identify the array we want to push items into
               {                  
                   "name": "Room 44",      // this is the payload that needs to be pushed 
                   "size": "50"
               }
       }
   }
) */