var LCM = document.getElementById("lcm");
var HCF = document.getElementById("hcf");

LCM.onclick = function get() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    
    function lcm(a, b) {
       return (!a || !b) ? 0 : Math.abs((a * b) / hcf(a, b));
     }
    
     function hcf(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
      }
      
      if (a == 0) {
        document.getElementById("alcm").innerText = "Please Enter Numbers!"
       } else if (b == 0) {
        document.getElementById("alcm").innerText = "Please Enter Numbers!"
       } else { 
           document.getElementById("alcm").innerText = `The LCM of ${a} and ${b} is ${lcm(a, b)}`;
       }
}
 
HCF.onclick = function() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
 
   function hcf(a, b) {
   a = Math.abs(a);
   b = Math.abs(b);
   while(b) {
     var t = b;
     b = a % b;
     a = t;
   }
   return a;
 }
 document.getElementById("ahcf").innerText = `The HCF of ${a} and ${b} is ${hcf(a, b)}`;
}


