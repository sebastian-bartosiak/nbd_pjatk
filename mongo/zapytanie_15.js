function mapFunc() 
{
    this.credit.forEach(function(item){
        var balance = parseFloat(item.balance);
        if(!isNaN(balance))
            emit(item.currency, {sum: balance, avg: balance})
    });
}

function reduceFunc(key, value)
{
    var result = {};
    result.avg = 0;
    result.sum = 0;
    var count = 0;
    value.forEach(function(item){
        result.sum += item.sum;
        count++;
    });
    result.avg = result.sum / count;
    return result;
}

db.people.mapReduce(mapFunc, reduceFunc, { out : 'query_15', query : {nationality:'Poland', sex: 'Female'} })

printjson(db.query_15.find({}).toArray());