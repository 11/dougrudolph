
function write(currentText, elementId, delay)
{
  var element = document.getElementById(elementId);
  var charCount=0;

  setInterval(function(){
    if(charCount>currentText.length)
    {
      return;
    }
    else
    {
      element.innerHTML = currentText.substr(0,charCount++);
    }
  }, delay);
}
