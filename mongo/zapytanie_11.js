function mapFunc() 
{
    
    var p = { 
                avgH : this.heightFloat,
                avgW : this.weightFloat
            }
    emit(this.sex, p);
}

function reduceFunc(key, value)
{
    var arrayH = value.map(x => x.avgH);
    var arrayW = value.map(x => x.avgW);
    var p = { 
                avgH : Array.avg(arrayH),
                avgW : Array.avg(arrayW) 
            }
    return p;
}
db.people.mapReduce(mapFunc, reduceFunc, { out : 'query_11' })

var myCursor = db.query_11.find({});

myCursor.forEach(printjson);