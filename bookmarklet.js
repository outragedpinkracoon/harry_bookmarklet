javascript: (function () { 

  var headers = document.getElementsByTagName('h1');
  var tags =  Array.prototype.slice.call( headers, 0 );

  var validElements = tags.filter(function(item){ 
    var children = item.children;
    if(item.children.length == 0) {
      return true;
    }
    var first = item.children[0];
    if(first.tagName === 'A') {
      return true;
    }
  })

  if(validElements.length > 0) {

    var h1 = validElements[0];

    var item = h1;
    var text = h1.innerText;

    if(h1.children==0){
      var item = h1.children[0];
      var text = item.innerText;
    }

    item.innerText = 'Harry Potter and the ' + text;
  }

}());