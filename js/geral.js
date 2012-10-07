// jQuery sem conflitos
var $j = jQuery.noConflict();
//$j(document).ready(function(){

//});

$j(document).ready(function(){	
	$j("#topo-arvore").animate({opacity: "show", top: "+=50"}, 600, function() {
		$j("#meio1-arvore").animate({opacity: "show", top: "+=50"}, 600, function() { 
			$j("#meio2-arvore").animate({opacity: "show", top: "+=50"}, 600, function() { 
				$j("#meio3-arvore").animate({opacity: "show", top: "+=50"}, 600, function() { 
					$j("#base-arvore").animate({opacity: "show", top: "+=50"}, 600, function() { 
						$j("#brilho1").animate({opacity: "show", top: "+=50"}, 600, function() { 
				    		$j("#brilho2").animate({opacity: "show", top: "+=0"}, 600, function() { 
				    			$j("#presente").animate({opacity: "show"},600, function() { 
									$j("#logo").animate({opacity: "show", top: "-=155"}, 600);
								});
							});
						});
					});				    
				});
			});	    
		});
	});
});
