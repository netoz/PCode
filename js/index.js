window.onload = function start() {
    moverTexto();
}
function moverTexto() {
	
    window.setInterval(function () {
       elementTexto1 = document.querySelector('#texto1');
	   elementTexto2 = document.querySelector('#texto2');
	   if(elementTexto1.style.display == 'inline'){
		 
		  elementTexto1.style.display ='none';
		  elementTexto2.style.display ='inline';
		   
	   }else{
		 
		  elementTexto1.style.display ='inline';
		  elementTexto2.style.display ='none';
	   }		   
		   
    }, 3000); // repetir infinitamente por 3 segundos
} 
 
 
 