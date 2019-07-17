function verify() {
   var data = new Date();
   var year = data.getFullYear();
   var fyear = document.getElementById('txtano');
   var res = document.querySelector('div#res');
   if (fyear.value.length == 0 || fyear.value > year) {
       window.alert('[ERROR] Verify year and try again!')    
   } else {
       var gender = document.getElementsByName('radgen');
       var age = year - Number(fyear.value);
       var genero ='';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');
       if (gender[0].checked) {
           genero = 'Man';
           if (age >=0 && age < 10) {
               //kid
               img.setAttribute('src', 'm1.jpg');
           } else if (age <21) {
               //youth
               img.setAttribute('src', 'm2.jpg');
           } else if (age < 50) {
               //adult
               img.setAttribute('src', 'm3.jpg');
           } else {
               //senior
               img.setAttribute('src', 'm4.jpg');
           }
       } else if (gender[1].checked) {
           genero = 'Woman';
           if (age >=0 && age < 10) {
            //kid
                img.setAttribute('src', 'w1.jpg');
            } else if (age <21) {
                //youth
                img.setAttribute('src', 'w2.jpg');
            } else if (age < 50) {
                //adult
                img.setAttribute('src', 'w3.jpg');
            } else {
                //senior
                img.setAttribute('src', 'w4.jpg');
            }           
       }

       res.style.textAlign = 'center';
       res.innerHTML = `Detected: ${age} y.o. ${genero}`;
       res.appendChild(img);
   }
}