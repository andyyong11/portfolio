const first = document.querySelector("#first");

for (let i = 0; i < 5; i++)
{
    const paragraph = document.createElement("p");
    paragraph.textContent = "Paragraph created by loop";

    first.appendChild(paragraph);
}

function changeColors(){
    document.body.style.backgroundColor ="#333";
    first.style.backgroundColor = "#f0f0f0";
    first.style.color = "red";
}

