function mapFunc() 
{
    var bmi = this.weightFloat / (this.heightFloat/100 * this.heightFloat/100);
    if(bmi < 1) return;
    emit(this.nationality,  {max : bmi, min : bmi, avg : bmi});
}

function reduceFunc(key, value)
{
    var result = {};
    result.min = value[0].min;
    result.max = value[0].max;
    result.avg = 0;
    var count = 0;
    value.forEach(function(item){
        result.min = Math.min(result.min, item.min);
        result.max = Math.max(result.max, item.max);
        result.avg += item.avg;
        count++;
    });
    result.avg = result.avg / count;
    return result;
}

db.people.mapReduce(mapFunc, reduceFunc, { out : 'query_14' })

var myCursor = db.query_14.find({});

myCursor.forEach(printjson);