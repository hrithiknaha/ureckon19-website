"use strict";function fillList(){userDetails.events.map(function(e){var m=document.createElement("option");m.text=e.eventName,m.value=e.eventName,eventSelector.add(m)})}function getMembers(e){var m=eventSelector[e.selectedIndex].value;if("ps"===m)return void $("#memberSection").slideUp();var t;console.log(eventSelector[e.selectedIndex].value),userDetails.events.map(function(e,n){if(e.eventName===m)return void(t=n)});var n=userDetails.events[t];member1.innerHTML=n.member1,member2.innerHTML=n.member2,member3.innerHTML=n.member3,member4.innerHTML=n.member4,member5.innerHTML=n.member5,$("#memberSection").slideDown();for(var r=1;r<=5;r++)"N/A"!==$("#member"+r).text()?$("#member"+r+"-list").slideDown():$("#member"+r+"-list").slideUp()}var userDetails={name:"Full name",username:"username123",email:"email@abc.com",year:2019,phoneNumber:"242353465",institute:"example ins",events:[{eventName:"event1",member1:"member1",member2:"member2",member3:"member3",member4:"member4",member5:"N/A"},{eventName:"event2",member1:"member1",member2:"member2",member3:"member2",member4:"N/A",member5:"N/A"}]},username=document.getElementById("username"),name=document.getElementById("name"),institute=document.getElementById("institute"),year=document.getElementById("year"),phone=document.getElementById("phone"),email=document.getElementById("email"),eventSelector=document.getElementById("eventSelector"),member1=document.getElementById("member1"),member2=document.getElementById("member2"),member3=document.getElementById("member3"),member4=document.getElementById("member4"),member5=document.getElementById("member5");document.getElementById("name").innerHTML=userDetails.name,username.innerHTML=userDetails.username,institute.innerHTML=userDetails.institute,year.innerHTML=userDetails.year,phone.innerHTML=userDetails.phoneNumber,email.innerHTML=userDetails.email,fillList();