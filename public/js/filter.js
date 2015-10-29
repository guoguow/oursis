var myapp=angular.module('myApp.filters', []);
myapp.filter('nulltozero', function() {
  return function(input) {
      if(input==null){
    return 0;}
      return input;
  };
})
.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});