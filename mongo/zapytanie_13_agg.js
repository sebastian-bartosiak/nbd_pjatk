var myCursor = db.people.aggregate(
    [
        {$group : { _id : "job", jobs : {"$addToSet" : "$job"}}}
    ]
);

myCursor.forEach(printjson);    
