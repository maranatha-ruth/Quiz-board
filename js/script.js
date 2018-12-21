function mytest()
{
var question1=document.forms["myform"]["c1"].value;
var question2=document.forms["myform"]["c2"].value;
var question3=document.forms["myform"]["c3"].value;
var question4=document.forms["myform"]["c4"].value;

var marks=0;
if(question1=="forEach")
{
  marks=marks+10;
  }
if(question2=="toUppercase")
{
  marks=marks+10;
  }
if(question3=="concat")
{
  marks=marks+10;
}
if(q4=="Camelcase")
{
  marks=marks+10;
}

alert("your score is:"+marks);
}

<form name="myform"></form>