function write(pageText, elementId, delay)
{
  var element = document.getElementById(elementId);
  var charCount=0;

  setInterval(function(){
    if(charCount>pageText.length)
    {
      clearInterval();
    }
    else
    {
      element.innerHTML = pageText.substr(0,charCount++);
    }
  }, delay);
}
