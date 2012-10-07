// jQuery sem conflitos
var $j = jQuery.noConflict();
//$j(document).ready(function(){

//});

$j(document).ready(function(){	
	$j("#topo-arvore").animate({opacity: "show", top: "+=50"}, 2000, function() {
		$j("#meio1-arvore").animate({opacity: "show", top: "+=50"}, 2300, function() { 
			$j("#meio2-arvore").animate({opacity: "show", top: "+=50"}, 2000, function() { 
				$j("#meio3-arvore").animate({opacity: "show", top: "+=50"}, 2000, function() { 
					$j("#base-arvore").animate({opacity: "show", top: "+=50"}, 2000, function() { 
						$j("#brilho1").animate({opacity: "show", top: "+=50"}, 300, function() { 
				    		$j("#brilho2").animate({opacity: "show", top: "+=0"}, 300, function() { 
				    			$j("#presente").delay(500).animate({opacity: "show"},1500, function() { 
									$j("#logo").delay(1000).animate({opacity: "show", top: "-=155"}, 1000, function() {
										$j.fn.snow({ minSize: 5, maxSize: 50, newOn: 1000, flakeColor: '#9DFAFF' });
									});
								});
							});
						});
					});				    
				});
			});	    
		});
	});
});
