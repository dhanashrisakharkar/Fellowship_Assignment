var heads = "Head";
var tails = "Tail";
function coinFlip()
{
    x= (Math.floor(Math.random()*2)== 0) ;
    if(x)
    {
        console.log(heads);
    }else
    {
        console.log(tails);
    }
}

coinFlip();