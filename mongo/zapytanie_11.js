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
db.people.mapReduce(mapFunc, reduceFunc, { out : 'map_reduce' })