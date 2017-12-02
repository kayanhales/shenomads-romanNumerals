var romanLookup = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  function RomanNumeral(num){
    var i;
    if(num===0){
        return '';
    }
    for (i=0; i<romanLookup.length;i++){
        if (num>=romanLookup[i][0]){
            return romanLookup[i][1]+RomanNumeral(num-romanLookup[i][0])
        }
    }
  }