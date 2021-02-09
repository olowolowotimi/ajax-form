


function Validate(Calculus=Calculus) {
const firstcourse = document.getElementById("firstcourse");
const secondcourse = document.getElementById("secondcourse");
const thirdcourse = document.getElementById("thirdcourse");

if(firstcourse.value !== Calculus || secondcourse.value !== Calculus || thirdcourse.value !== Calculus)
{
    alert("calculus is required")
    return false;
}
if(firstcourse.value=="" && secondcourse.value=="" && thirdcourse.value==""){
    alert("Courses are required!")
    return false;
}
else{
    true;
}
}
const Button = document.getElementById("button");
Button.addEventListener("click", Validate);