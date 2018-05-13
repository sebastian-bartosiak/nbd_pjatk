var myCursor = db.people.aggregate(
    [
        {$addFields: { bmi : { $divide : ["$weightFloat", {$pow: [{$divide : ["$heightFloat", 100]}, 2]}]}}},//(weightFloat / (heightFloat/100 * heightFloat/100)) }},
        {$group : { _id : "$nationality", maxBMI : {"$max" : "$bmi"}, minBMI : {"$min" : "$bmi"}, avgBMI : { $avg : "$bmi"}}}
    ]
);

myCursor.forEach(printjson);    