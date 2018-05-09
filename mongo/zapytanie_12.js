function mapFunc() 
{
    for(i = 0; i < this.credit.length; i++)
    {
        var item = this.credit[i];
        emit(item.currency, parseFloat(item.balance));
    }
}

function reduceFunc(key, value)
{
    function calcSum(array)
    {
        var sum = 0;
        for(var idx = 0; idx < array.length; idx++)
        {
            var item = array[idx];
            if(!isNaN(parseFloat(item)) && isFinite(item))
            {
                sum = sum + item;    
            }
        }
        return sum;    
    }
    return calcSum(value);
}
db.people.mapReduce(mapFunc, reduceFunc, { out : 'balance_sum' })