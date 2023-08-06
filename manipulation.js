

      //https://www.youtube.com/watch?v=cVewPdp5728
      //https://www.sourcecodester.com/tutorial/php/15122/event-crud-fullcalendar-using-php-and-jquery-tutorial
      //https://www.youtube.com/watch?v=4Y-ATRdw0vM      
function submit_C(){
    var date1=document.getElementById("sDate").value;
    var date2=document.getElementById("eDate").value;
    var leave=document.getElementById("leaveType").value;
    var nameS=document.getElementById("flName").value;
    var reason=document.getElementById("studQuery").value;

    const d1=new Date(date1);
    const d2=new Date(date2);

    const time=Math.abs(d2-d1);
    const days=Math.ceil(time/(1000*60*60*24));

   
    const Annual=40;
    const Family=30;
    const Maternity=60;
    const Sick=10;
    const Study=20;

    if(leave=="Annual"){
        const da=Annual-days;
        alert("Leave days taken" +days+" and days left for Annual leave " +da)

    }
    if(leave=="Compassionate / Family"){
        const da=Family-days;
        alert("Leave days taken" +days+" and days left for Compassionate / Family " +da)

    }

    if(leave=="Maternity"){
        const da=Maternity-days;
        alert("Leave days taken" +days+" and days left for Maternity leave " +da)

    }
    if(leave=="Sick"){
        const da=Sick-days;
        alert("Leave days taken" +days+" and days left for Sick leave " +da)

    }
        if(leave=="Study"){
        const da=Study-days;
        alert("Leave days taken" +days+" and days left for Study leave " +da)

    }
   const dateA=date1;
   const dateB=date2;
   const nameSur=nameS;
   const leaveT=leave;
   const reasonT=reason;




   localStorage.setItem('date11',dateA);
   localStorage.setItem('date12',dateB);
    localStorage.setItem('date13',nameSur);
    localStorage.setItem('date14',leaveT);
    localStorage.setItem('date15',reasonT);
   
    
    

   window.location.href="index2.html";

    
}



 