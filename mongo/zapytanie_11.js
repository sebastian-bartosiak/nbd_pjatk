function mapFunc() 
{
    var p = { avgH : this.heightFloat, avgW : this.weightFloat }
    emit(this.sex, p);
}

function reduceFunc(key, value)
{
    
    var sumH = 0;
    var countH = 0;
    var sumW = 0;
    var countW = 0;
    value.forEach(function(item){
            if(item.avgH > 0){
                sumH += item.avgH;
                countH++;
            }
            if(item.avgW > 0){
                sumW += item.avgW;
                countW++;
            }
    })
    var res = {};
    
    res.avgH = sumH / countH;
    res.avgW = sumW / countW;
    
    return res;
}
db.people.mapReduce(mapFunc, reduceFunc, { out : 'map_reduce' })