function Repeted(data) {

    let result = [];
  
    data.forEach(function(element, index) {
      
      if (data.indexOf(element, index + 1) > -1) {
        
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });
  
    console.log("Repeted element is" +  result);
  }
  
 Repeted([1,4,3,4,2,5,2])  