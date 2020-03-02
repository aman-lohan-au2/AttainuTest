function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
    if (height >= 1) {
  
      stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);
  
      console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
  
      stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
    }
    
    return;
  }
  
  stepsToSolveHanoiT(3, "A", "C", "B");
  