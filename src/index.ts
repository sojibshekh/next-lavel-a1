function formatString(input: string, toUpper?: boolean): string {
   
    if (toUpper === undefined || toUpper === true) {
      return input.toUpperCase();
    } else {
     
      return input.toLowerCase();
    }
  }
  
  

  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  



  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
  
    for (let i = 0; i < arrays.length; i++) {
      result = result.concat(arrays[i]);
    }
  
    return result;
  }

  