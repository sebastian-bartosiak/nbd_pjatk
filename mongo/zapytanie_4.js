var myCursor = db.people.find({weight:{$gte:"68", $lt:"71.5"}})

myCursor.forEach(printjson);