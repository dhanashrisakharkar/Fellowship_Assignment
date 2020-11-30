function SearchAlgorithm(number)
{
    for(i=0; i< number; i++)
    {
    if(number == array[i])
    {
        console.log("Found the Number,Its Index is"+i)
    }else
    {
        console.log("Not Found")
    }
};
}

var array = [ 1,2,3,4,5,6,7,8,9,10];
SearchAlgorithm(5)