//andy yong
//4/7/2024
var input = document.querySelector(".input");
var animals = ["Dog","Cat","Fish","Elephant"];

//push button
function arrPush()
{
    animals.push(input.value);
    update();
}

//pop button
function arrPop()
{
    animals.pop();
    update();
}


//unshift button
function arrUnshift()
{
    animals.unshift(input.value);
    update();
}


//shift button
function arrShift()
{
    animals.shift();
    update();
}


//map button
function arrMap()
{
    animals = animals.map(item => input.value + item);
    update();
}

//updates and displays array
function update()
{
    output.innerHTML = animals.reduce(reduct, "");
}
function reduct(i, a, j)
{
    console.log(i)
    return i + "<br>" +(j + 1) + " " + a;
}
