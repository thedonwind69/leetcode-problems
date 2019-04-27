function translatePigLatin(str) {
         var vowel_list = 'aeiouAEIOU';
         var vowels = vowel_list.split("");
         var strArray = str.split("");
          var regex = /[aeiou]/gi;
         if (vowels.includes(strArray[0])) {
           return strArray.join("") + "way";
         } else if (str.match(regex) === null) {
             return str + "ay";
         };
         var endArray = [];
         var endIndex = 0;
         for (let i = 0; i<strArray.length; i++) {
             var currentLetter = strArray[i];
             if (vowels.includes(currentLetter)) {
                 endIndex = i;
                 break;
             } else {
               endArray.push(currentLetter);
             }
         }
         var newStr = strArray.slice(endIndex, strArray.length);
         return newStr.join("") + endArray.join("") + "ay";
   }
   
  
  console.log(translatePigLatin("consonant"));