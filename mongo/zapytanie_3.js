var myCursor = db.people.find({sex:"Male",nationality:"Germany"})

myCursor.forEach(printjson);