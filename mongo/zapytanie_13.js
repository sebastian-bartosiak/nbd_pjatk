function mapFunc() 
{
    if(!this.job) return;
    emit('jobs_list', {jobs : this.job});
}

function reduceFunc(key, value)
{
    var result = [];
    var func = function(item, pos) 
    {
        if(Array.isArray(item))
        {
            item.forEach(func);
        }
        else if(result.indexOf(item) === -1)
        {
            result.push(item);
        }
    }
    temp = value.map(p => p.jobs);
    temp.forEach(func);
    return {jobs : result};
}
function finalizeFunction(key, reducedValue)
{
    return reducedValue.jobs;
}
db.people.mapReduce(mapFunc, reduceFunc, { out : 'query_13', finalize: finalizeFunction })

printjson(db.query_13.find({}).toArray());