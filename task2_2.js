
function getJson(file,callback) {
  var x=new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState===4 && x.status===200)
    {
       callback(x.responseText);
    }
  }
  x.send();
}
getJson("data1.json",function(text)
{
  var d=JSON.parse(text);
  console.log(d);
  basics(d.resumedata);
})
var main=document.querySelector(".main")
var main2=document.querySelector(".main2")
function basics(s){
  var n=document.createElement("img");
  n.src="img/1.png";
  n.classList.add("test1");
  main.appendChild(n);

  var p=document.createElement("h1");
  p.textContent= s.Name;
  p.classList.add("t2");
  main.appendChild(p);

  var q=document.createElement("h1");
  q.textContent= s.Role;
  q.classList.add("t3");
  main.appendChild(q);

  var t=document.createElement("h3");
  t.textContent="Professional_skills";
  t.classList.add("t4");
  main.appendChild(t);

  var table=document.createElement("table");
  var row="";
  for (var i in s.Professional_skills) {
    row+="<tr><td>"+i+"</td><td id='one'>"+s.Professional_skills[i]+"</td></tr>";
  }
  table.innerHTML=row;
  table.classList.add("t3");
  main.appendChild(table);


var z=document.createElement("h4");
z.textContent="Hobbies";
z.classList.add("t5");
main2.append(z);

var list=document.createElement("ul");
for (var i in s.Hobbies) {
  var li=document.createElement("li");
  li.textContent=s.Hobbies[i];
  li.classList.add("t5");
  main2.appendChild(li);
}
main2.appendChild(list);

var ed=document.createElement("h4");
ed.textContent="EDUCATION";
ed.classList.add("t6");
main2.append(ed);

var table1=document.createElement("table");
var row1="<th>Institute</th><th>Course</th><th>Percentage</th>";
var temp=0;
for (var i in s.Education)
{
row1+="<tr><td>"+s.Education.Institute[temp]+"</td><td>"+s.Education.Course[temp]+"</td><td>"+s.Education.Percentage[temp]+"</td></tr>";
temp++;
}
table1.innerHTML=row1;
table1.classList.add("t7");
main2.appendChild(table1);
}
