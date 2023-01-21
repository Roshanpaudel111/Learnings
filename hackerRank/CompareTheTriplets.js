function compareTriplets(a, b) {
    let aliceScore = 0;
      let bobScore = 0;
      let score = [aliceScore, bobScore];
      for (let i = 0; i < a.length; i++) {
        let itemA = a[i];
        let itemB = b[i];
        if (itemA > itemB) {
          aliceScore += 1;
        } else if (itemB > itemA) {
          bobScore += 1;
        }
        score = [aliceScore, bobScore];
      }
      return score;
    
    }