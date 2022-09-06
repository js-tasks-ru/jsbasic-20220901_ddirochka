function checkSpam(str) {
  
  newString = str.toLowerCase();
  
  return (newString.includes('xxx') || (newString.includes('1xbet'))) ? true : false;  
}
