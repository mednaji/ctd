
 
 

//exo1

  function pexo1() {
     document.getElementById("pexo1").style.display ="block";
     document.getElementById("rexo1").style.display = "none";
     document.getElementById("eexo1").style.display = "none";}

  function rexo1() {
     document.getElementById("pexo1").style.display = "none";
     document.getElementById("rexo1").style.display ="block";
     document.getElementById("eexo1").style.display = "none";
 }
 
   function eexo1() {
     document.getElementById("pexo1").style.display ="none";
     document.getElementById("rexo1").style.display = "none";
     document.getElementById("eexo1").style.display = "block";}
  function exo1() {
  var  d =  parseInt(document.getElementById('input1').value),
     a=document.getElementById("rjs1");
   var h = parseInt(d/3600),
         r = parseInt(d%3600),
         m = parseInt(r/60),
         s = parseInt(r%60);
        a.innerHTML = d + " secondes est compose de " +
        h+ " heurs, "+m+" minutes et "+s+" seconde"; }

   
//exo2
 function pexo2() {
     document.getElementById("pexo2").style.display ="block";
     document.getElementById("rexo2").style.display = "none";
     document.getElementById("eexo2").style.display = "none";}

  function rexo2() {
     document.getElementById("pexo2").style.display = "none";
     document.getElementById("rexo2").style.display ="block";
     document.getElementById("eexo2").style.display = "none";
 }
 
   function eexo2() {
     document.getElementById("pexo2").style.display ="none";
     document.getElementById("rexo2").style.display = "none";
     document.getElementById("eexo2").style.display = "block";}

   function exo2() {
     var n1=parseInt(document.getElementById('input2_1').value),
        n2=parseInt(document.getElementById('input2_2').value),
        r=document.getElementById('rjs2');
        if (n1>n2) { r.innerHTML="L'ordre croissant est respectivement "+n2+" et " +n1;}
     else if (n2>n1) { r.innerHTML="L'ordre croissant est respectivement "+n1+" et " +n2;}
     else{ r.innerHTML="Les entiers entrés sont égeaux"; } }


//exo3

 function pexo3() {
     document.getElementById("pexo3").style.display ="block";
     document.getElementById("rexo3").style.display = "none";
     document.getElementById("eexo3").style.display = "none";}

  function rexo3() {
     document.getElementById("pexo3").style.display = "none";
     document.getElementById("rexo3").style.display ="block";
     document.getElementById("eexo3").style.display = "none";
 }
 
   function eexo3() {
     document.getElementById("pexo3").style.display ="none";
     document.getElementById("rexo3").style.display = "none";
     document.getElementById("eexo3").style.display = "block";}
 
 function exo3() {
  var n = parseInt(document.getElementById('input3').value),
      r = document.getElementById('rjs3');
 if ((n%4==0) && (n%100!==0) ||( n%400==0))
  { r.innerHTML="l'annee"+ n +" est  bissextile";}
 else
  { r.innerHTML="l'annee "+ n +" n'est pas bissextile"; }
 } 

//exo4
 function pexo4() {
     document.getElementById("pexo4").style.display ="block";
     document.getElementById("rexo4").style.display = "none";
     document.getElementById("eexo4").style.display = "none";
    document.getElementById("div4").style.height ="15em";}

  function rexo4() { 
     document.getElementById("pexo4").style.display = "none";
     document.getElementById("rexo4").style.display ="block";
     document.getElementById("eexo4").style.display = "none";


  document.getElementById("div4").style.height ="19em"; }
 
   function eexo4() {document.getElementById("div4").style.height ="15em";
     document.getElementById("pexo4").style.display ="none";
     document.getElementById("rexo4").style.display = "none";
     document.getElementById("eexo4").style.display = "block";}

     function exo4(){
  var n1=parseInt(document.getElementById("input4_1").value),
      n2=parseInt(document.getElementById("input4_3").value),
     c=document.getElementById("input4_2").value,
    r=document.getElementById("rjs4");
     switch(c){
      case "+": r.innerHTML= n1+n2;break;
      case "-": r.innerHTML= n1-n2;break;
      case "*": r.innerHTML= n1*n2;break;
      case "/": if (n2==0) { r.innerHTML="l'infinie"; }
                 else{ r.innerHTML=n1/n2; }break;
      default : r.innerHTML="pas correct";

     } }

//exo5
 function pexo5() {
     document.getElementById("pexo5").style.display ="block";
     document.getElementById("rexo5").style.display = "none";
     document.getElementById("eexo5").style.display = "none";}

  function rexo5() {
     document.getElementById("pexo5").style.display = "none";
     document.getElementById("rexo5").style.display ="block";
     document.getElementById("eexo5").style.display = "none";
 }
 
   function eexo5() {
     document.getElementById("pexo5").style.display ="none";
     document.getElementById("rexo5").style.display = "none";
     document.getElementById("eexo5").style.display = "block";}
 
 function exo5(){
  n=parseInt(document.getElementById("input5").value),
    r=document.getElementById("rjs5");
    switch(n)
 {
 case 1: r.innerHTML="janvier"; break;
 case 2: r.innerHTML="Fevrier"; break ;
 case 3: r.innerHTML="Mars"; break ;
 case 4: r.innerHTML="Avril"; break ;
 case 5: r.innerHTML="Mais"; break ;
 case 6: r.innerHTML="Juin"; break ;
 case 7: r.innerHTML="Juillet"; break ;
 case 8: r.innerHTML="Aout"; break ;
 case 9: r.innerHTML="Septembre"; break ;
 case 10: r.innerHTML="Octobre"; break ;
 case 11: r.innerHTML="Nouvembre"; break ;
 case 12: r.innerHTML="Decembre"; break ;
 default : r.innerHTML="n'est pas defini ";
 }
 }

//exo6
 function pexo6() {
     document.getElementById("pexo6").style.display ="block";
     document.getElementById("rexo6").style.display = "none";
     document.getElementById("pexe6").style.display = "none";}

  function rexo6() {
     document.getElementById("pexo6").style.display = "none";
     document.getElementById("rexo6").style.display ="block";
     document.getElementById("pexe6").style.display = "none";
 }
 
   function eexo6() {
     document.getElementById("pexo6").style.display ="none";
     document.getElementById("rexo6").style.display = "none";
     document.getElementById("pexe6").style.display = "block";}
 
//exo7
 function pexo7() {
     document.getElementById("pexo7").style.display ="block";
     document.getElementById("rexo7").style.display = "none";
     document.getElementById("rjs7").style.display = "none";}

  function rexo7() {
     document.getElementById("pexo7").style.display = "none";
     document.getElementById("rexo7").style.display ="block";
     document.getElementById("rjs7").style.display = "none";
 }
 
   function rjs7() { 
     document.getElementById("pexo7").style.display ="none";
     document.getElementById("rexo7").style.display = "none";
     document.getElementById("rjs7").style.display = "block";}
 

//exo8
 function pexo8() {
     document.getElementById("pexo8").style.display ="block";
     document.getElementById("rexo8").style.display = "none";
     document.getElementById("rjs8").style.display = "none";}

  function rexo8() {
     document.getElementById("pexo8").style.display = "none";
     document.getElementById("rexo8").style.display ="block";
     document.getElementById("rjs8").style.display = "none";
 }
 
   function rjs8() { 
     document.getElementById("pexo8").style.display ="none";
     document.getElementById("rexo8").style.display = "none";
     document.getElementById("rjs8").style.display = "block";}
   
   var  r=document.getElementById("rjs8"),
     s=0, i=1;
   for(i=1;i<=50;i++){
 if(i%2==0){
  s=s+i;
 }}
 r.innerHTML= "La somme des entiers positifs paire inferieur<br> à 50 est "+s;

//exo9

 function pexo9() {
     document.getElementById("pexo9").style.display ="block";
     document.getElementById("rexo9").style.display = "none";
     document.getElementById("eexo9").style.display = "none";}

  function rexo9() {
     document.getElementById("pexo9").style.display = "none";
     document.getElementById("rexo9").style.display ="block";
     document.getElementById("eexo9").style.display = "none";
 }
 
   function eexo9() {
     document.getElementById("pexo9").style.display ="none";
     document.getElementById("rexo9").style.display = "none";
     document.getElementById("eexo9").style.display = "block";}
 
 function exo9() {
    var n=parseInt(document.getElementById("input9").value),
        r=document.getElementById("rjs9"),
       i=1; 
       document.write("Les diviseurs de " +n+"sont respectivement : <br>");
    for(i=1; i<=n; i++){ 
      if(n%i==0){document.write(i+"<br>"); }  

    }
 } 

//exo10

 function pexo10() {
     document.getElementById("pexo10").style.display ="block";
     document.getElementById("rexo10").style.display = "none";
     document.getElementById("eexo10").style.display = "none";}

  function rexo10() {
     document.getElementById("pexo10").style.display = "none";
     document.getElementById("rexo10").style.display ="block";
     document.getElementById("eexo10").style.display = "none";
 }
 
   function eexo10() {
     document.getElementById("pexo10").style.display ="none";
     document.getElementById("rexo10").style.display = "none";
     document.getElementById("eexo10").style.display = "block";}
 
 function  exo10(){
  var n=parseInt(document.getElementById("input10").value),
     r=document.getElementById("rjs10"), i=1, s=0;
     for(i=1;i<=n;i++){
     s=s+1/i;}
    r.innerHTML="La somme hormonique de 1 à "+n+"="+s;
 }
  

//exo11

 function pexo11() {
     document.getElementById("pexo11").style.display ="block";
     document.getElementById("rexo11").style.display = "none";
     document.getElementById("eexo11").style.display = "none";}

  function rexo11() {
     document.getElementById("pexo11").style.display = "none";
     document.getElementById("rexo11").style.display ="block";
     document.getElementById("eexo11").style.display = "none";
 }
 
   function eexo11() {
     document.getElementById("pexo11").style.display ="none";
     document.getElementById("rexo11").style.display = "none";
     document.getElementById("eexo11").style.display = "block";}
 
 function  exo11(){
  var n=parseInt(document.getElementById("input11").value),
     r=document.getElementById("rjs11"), i=1;
     if (n!=1) {
     document.write("les nombre paires entre 1 et " +n+" sont respectivement : <br>");
     for(i=1;i<=n;i++){
      if (i%2==0  ) {
    document.write(i+"<br>");}
     }}
    }
  
//exo12

 function pexo12() {
     document.getElementById("pexo12").style.display ="block";
     document.getElementById("rexo12").style.display = "none";
     document.getElementById("eexo12").style.display = "none";}

  function rexo12() {
     document.getElementById("pexo12").style.display = "none";
     document.getElementById("rexo12").style.display ="block";
     document.getElementById("eexo12").style.display = "none";
 }
 
   function eexo12() {
     document.getElementById("pexo12").style.display ="none";
     document.getElementById("rexo12").style.display = "none";
     document.getElementById("eexo12").style.display = "block";}
 
