var bulk = db.people.initializeOrderedBulkOp();
var counter = 0;
db.people.find().forEach(function(data) {
    var updoc = {
        "$set": {}
    };
    updoc["$set"]["heightFloat"] = parseFloat(data.height);
    updoc["$set"]["weightFloat"] = parseFloat(data.weight);
    // queue the update
    bulk.find({
        "_id": data._id
    }).update(updoc);
    counter++;
    // Drain and re-initialize every 1000 update statements
    if (counter % 1000 == 0) {
        bulk.execute();
        bulk = db.people.initializeOrderedBulkOp();
    }
    })
    // Add the rest in the queue
if (counter % 1000 != 0) bulk.execute();
