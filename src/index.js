module.exports = function check(str, bracketsConfig) {
  var tmp = bracketsConfig.join('-'); 
  var forCheckNumber = bracketsConfig.join('');
  forCheckNumber = forCheckNumber.replace(/,/g, ""); 
  var regexp = ''; 

  if (isNaN(forCheckNumber)){
    tmp = tmp.replace(/,/g, "\\"); 
    var array = tmp.split('-');  
    for (i = 0; i < array.length; i++) {
      if (i != (array.length - 1)){
        regexp = regexp + '(\\' + array[i] + ')|';
      } else {
        regexp = regexp + '(\\' + array[i] + ')';
      }
    }
  } else{
    tmp = tmp.replace(/,/g, "");
    var array = tmp.split('-');
    for (i = 0; i < array.length; i++) {
      if (i != (array.length - 1)){
        regexp = regexp + '(' + array[i] + ')|';
      } else {
        regexp = regexp + '(' + array[i] + ')';
      }
    }
  }
  regexp = new RegExp(regexp,'g');

  while (regexp.test(str)) {
      str = str.replace( regexp, "");
  }  
  
  if (str.length > 0) {
    return false;
  } else {
    return true;
  }
}
