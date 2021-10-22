*//Result Object
Matt Johnson
Bart Paden
Ryan Doss
Jared Malcolm
Jordan Heigle
Tyler Viles*//

import 'bootstrap@4.6.0'
import $ from 'jquery'


let array1 = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm'];
let array2 = ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles'];
let array3 = [];

for(let i=0;i<array1.length;i++){
  if(array3.indexOf(array1[i]) == -1)
     array3.push(array1[i])
}
for(let i=0;i<array2.length;i++){
  if(array3.indexOf(array2[i]) == -1)
     array3.push(array2[i])
}

	alert(array3);

