printjson(db.people.aggregate(
    [
        {$group : { _id : "job", jobs : {"$addToSet" : "$job"}}}
    ]
).toArray());