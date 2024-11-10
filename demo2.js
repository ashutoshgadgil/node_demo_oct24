function fetchdata(callback)
{
    setTimeout(() => {
        var data = {message:"Data fetched successfuly"};
        callback(null,data);
    }, 2000);
}

function handledata(err,data)
{
    if(err)
        console.log(err);
    console.log(data);
}

fetchdata(handledata);