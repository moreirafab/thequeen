$(document).ready(function(){
	$("button.sair-botao").on("click", function(){
		$("nav.navbar").removeClass("aberto");

	});

	$("div.menu-mobile").on("click", function(){
		$("nav.navbar").addClass("aberto");
	});
});