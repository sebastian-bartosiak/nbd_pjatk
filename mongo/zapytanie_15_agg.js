var myCursor = db.people.aggregate(
    [
        { $unwind : "$credit" },
        { $match : { sex : "Female", nationality : "Poland"}},
        {$group : { _id : "$credit.currency", avgBalance : {$avg : "$credit.balanceFloat"}, sumBalance : {$sum : "$credit.balanceFloat"}}}
    ]
)


myCursor.forEach(printjson);    