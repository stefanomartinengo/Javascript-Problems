// RGB to Hex Conversion
/*
The rgb() method is incomplete. Complete the method so that passing in RGB
 decimal values will result in a hexadecimal representation being returned. 
 The valid decimal values
 for RGB are 0 - 255. Any (r,g,b) argument values that
fall out of that range should be rounded to the closest valid value.
*/

function rgb(r,g,b) {
    let hex = '';
    [r,g,b].forEach( num => {
      if(num === 0 || num < 0) {
        hex += '00'
      } else if(num > 255) {
        num = 255;;
        hex += num.toString(16).toUpperCase()
      } else if(num !== 0 && num < 16) {
        hex += '0' + num.toString(16).toUpperCase()
      }
      else {
        hex += num.toString(16).toUpperCase()
      }
    })
    return hex;
  }