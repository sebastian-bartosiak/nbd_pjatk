db.people.aggregate(
    [
        { $unwind : "$credit" },
        {$group : { _id : "$credit.currency", avgBalance : {$avg : "$credit.balanceFloat"}}}
    ]
)