function Election(data) {

    let result = [];
  
    data.forEach(function(element, index) {
      
      if (data.indexOf(element, index + 1) > -1) {
        
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });
  
    console.log("Winner is" +  result);
  }
  
 Election([1,2,3,3,3,3,4,5,7,8])  