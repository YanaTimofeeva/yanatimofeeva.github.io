 var hundred = function() {
    
    do {
      var digit = prompt('Введите число больше 100');
      if (digit == null) {
        return;
      }
    } while (digit <= 100);
 };
 
hundred();