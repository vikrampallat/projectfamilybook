var images = [
  
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitvQYc41slSZFK3TUGv8RZTtxHmLbX-wkDw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0Zj8AtvCBzURWj13vPpgux4dewau5wJDvw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRG-vkpbBXCbdVM4TNXBbXx--4pDvpKvBrA&usqp=CAU",




  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 9)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }
  