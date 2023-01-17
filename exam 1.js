/* we want to divide the properties in half with no remainder
   so we use the modulus operator*/

   function myFunction(property) {

      if(property % 2 ===0) {

        return 'This property may be divided in half. '
      } else {
          return 'It can not be divided in half.'
      }
   }

    console.log(myFunction(1000));