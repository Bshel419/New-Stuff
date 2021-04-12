var i = 1;

function clickParents()
{
    if(i % 2 == 1)
    {
        document.getElementById("parents").style.filter = "blur(0px) grayscale(0%)";
    }
    else
    {
        document.getElementById("parents").style.filter = "blur(2px) grayscale(100%)";
    }
    i++;
}

function showDerp()
{
    document.getElementById("derpButt").disabled = true;

    var img = document.createElement('img');
    img.src = "../images/clickDerp.jpg";
    


    var pos = document.getElementById("derpPosition");
    pos.appendChild(img);
}

