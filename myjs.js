function myFunction()
{
    document.getElementById("demo").innerHTML = "Paragraph changed";
}

let x, y, z;
x = 4;
y = 3;
z = x + y;


function toggleDiv()
{
    const div = document.getElementById("myDiv");

    if(div.style.display === "none" || div.style.display === "")
    {
        div.style.display = "block";
        console.log = "Div is now visible.";
    }
    else
    {
        div.style.display = "none";
        console.log = "Div is now hidden.";
    }
}