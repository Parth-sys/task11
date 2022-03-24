

    async function url1(){
      const url ="https://foodish-api.herokuapp.com/api"
      var response=  await fetch(url);
       var data= await response.json();
       console.log(data)
      console.log(data.image);

     var i=document.createElement("img")
     var d= document.getElementById("div2");
    var d=document.getElementById('m').src=data.image;
    /* 
    i.setAttribute("src",data.image) ;
     i.style.width='300px'   ;
     i.style.marginLeft='500px';
     i.style.marginTop='10px';
     i.style.border="1px"
     i.style.borderColor="black"
     d.appendChild(i);
      */
    }


    function classToggle() {
      const navs = document.querySelectorAll('.Navbar__Items')
      
      navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }
    
    document.querySelector('.Navbar__Link-toggle')
      .addEventListener('click', classToggle);