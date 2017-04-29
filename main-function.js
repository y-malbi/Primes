
(function (){
	var x = Number(prompt('Enter x'));
	var y = Number(prompt('Enter y'));
	if (x < y) {
		for (var i=x; i<=y; i++){
			
			for (var j = 2; j < i; j++) {
	      		if (i % j == 0){
	      			break;
	      		}
	      	}
			if (j==i){
				document.write (i + '</br>');
			}
		}
	} else {
		alert ('Неверно указан диапазон : Y должен быть больше X');
	}

})();
