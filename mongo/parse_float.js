var bulk = db.people.initializeOrderedBulkOp();
var counter = 0;
db.people.find().forEach(function(data) {
    var updoc = {
        "$set": {}
    };
    if(parseFloat(data.height) > 0)
        updoc["$set"]["heightFloat"] = parseFloat(data.height);
    
    if(parseFloat(data.weight) > 0)
        updoc["$set"]["weightFloat"] = parseFloat(data.weight);
    if(data.credit){
        var credit = data.credit;
        
        for(var i = 0; i < credit.length; i++)
        {
            credit[i]["balanceFloat"] = parseFloat(credit[i].balance);
        }
        updoc["$set"]["credit"] = credit;
    }
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
