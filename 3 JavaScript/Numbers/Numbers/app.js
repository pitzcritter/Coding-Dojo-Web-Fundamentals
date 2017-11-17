'use strict';
            function numbersOnly(thisArr) {
                var newArray= [];
                for (var i = 0; i < thisArr.length; i++) {
                    if (typeof thisArr[i] === "number")                        
                        newArray.push(thisArr[i]);
                }
                return newArray;
            }
            
            var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
            console.log(newArray);

            function removeNumbers(thisArr) {
                for (var i = 0; i < thisArr.length; i++) {                
                    if (typeof thisArr[i] === "number")
                        thisArr.splice(i, 1);
                }
                return thisArr;
            }
            var newArray = removeNumbers([1, "apple", -3, "orange", 0.5]);
            console.log(newArray);
