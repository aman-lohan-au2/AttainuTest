class SlidingWindow{
    constructor(windowSize) {
      this.deque = []; 
      this.windowSize = windowSize;
    }
  
    customCompute(input, processWindow, addOutput) {
      let output = [];
  
      if(!input || input.length === 0) {
          return [];
      }
  
      if(input.length < this.windowSize) {
          return input;
      }
  
      for(let i=0; i < input.length; i++) {
          
          if(this.deque.length > 0 && this.deque[0] === i-this.windowSize) {
              this.deque.shift(); 
          }
  
          processWindow(this.deque, input[i], input)
  
          this.deque.push(i)
          
          if(i+1 >= this.windowSize) {
              output.push(addOutput(this.deque, input));
          }
      }
      this.deque = [];
      return output;
    }
  }
  
  let slidingWindow = new SlidingWindow(3);
  
  console.log('computed sliding windows: '+JSON.stringify(slidingWindow.compute([1,2,3,4,5,6,7,8,9])));
  
  function processWindow(deque, currentElement, input){
    while(deque.length > 0 && currentElement > input[deque[deque.length -1]]) {
              deque.pop(); 
          }
  };
  console.log('computed sliding windows maximum: '+JSON.stringify(slidingWindow.customCompute([1,3,-1,-3,5,3,6,7], processWindow, (deque, input) => input[deque[0]])));