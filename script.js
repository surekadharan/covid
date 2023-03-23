var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="search";
button.style.marginLeft="8px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

div.append(input,button,active,death,recovered);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/total/dayone/country/${res}`;
    try{
    let res1=await fetch(url);
    let res2=await res1.json();
    let index=res2.length-1;
    let index1=res.length;
    console.log(res2[index].Active);
    active.innerHTML=`total active cases:${res2[index].Active}`;
    death.innerHTML=`total death cases:${res2[index].Deaths}`;
    recovered.innerHTML=`total recovered cases:${res2[index].Recovered}`;
    }catch(error)
    {
        console.log(error);
    }

}