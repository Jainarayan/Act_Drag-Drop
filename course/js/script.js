	var count = 0;
	    correct = 0;
	    incorrect = 0;
		audioCorrect = false; 	
	    dropped = false;
	var dropitem;
	var drag;
		
	const audio1 = new Audio('./audio/quest.mp3');
	const audio2 = new Audio('./audio/Click2-Sebastian-1.mp3');
	const audio3 = new Audio('./audio/Correct.mp3');
	const audio4 = new Audio('./audio/Incorrect.mp3');		
		 
	$('#iframe2, #iframe3').hide();
	$('#hideContainer').show();
	
	$('#mainStart').click(function(){
		$('#startContainer').hide();
		audio1.play();		
	})
	
	$('.drag-box').mouseover(function(){
		audio2.play();
	})


		
	$('.dragItem').draggable({
		revert: 'invalid',
		containment: '#top-box',
		drag: function(event, ui) {
			$('#show').mouseover(function(){ $('#show-img').attr('src','./images/show-2.png'); audio2.play();})
			      .mouseout(function(){ $('#show-img').attr('src','./images/show-1.png'); })
				  .css('cursor', 'pointer');
			$('#show').css('opacity', '1');
			
			//audio2.pause();
			
		audio2.pause();

		}
	});
	
	$("#drop-box1").droppable({
		tolerance: 'pointer',
		drop: function(ev,ui){
			var div = $(this).attr('id');
			/* console.log(div)
			console.log($(ui.draggable).text()); */
			if(!$(this).hasClass("drop") && ($(ui.draggable).text()=="x")){				
				dropitem = $(ui.draggable);							
				$(this).append(dropitem).addClass("drop");
				/* var a=$(this).attr('id'); */
				dropped=true;
				/* console.log(a);
				console.log(ev.target.className); */
				$(ui.draggable).appendTo($(this));
				$(ui.draggable).addClass('dropped');
				$(ui.draggable).css({                
									'top': '0vmin',
									'left': '0vmin',
									'margin': '-7.3vmin 10vmin',
									'z-index': '-1'
								});	
			/* 	$(this).children('.drop-boxes').css('visibility','visible'); */
				correct++;
				count++;
				console.log('correct: ' +correct);
				console.log('count: ' +count);
				corr();
				if($(ui.draggable).hasClass('dropped')){
					$(ui.draggable).prop('disabled', true);
				}
				if(correct == 4){
					$(audio3).on('ended', function(){
						$('#mainContainer').hide();
						$('#resultContainer').show();		
						$('#totalCount').text(count);
						$('#totalCorrect').text(correct);
						$('#totalIncorrect').text(incorrect);
					})
				}
			}			
			else{
				/* setTimeout(function(){
					
					$(ui.draggable).css({                
						'top': '0vmin',
						'left': '0vmin'
					});		
				}, 3500); */
				$(ui.draggable).draggable('option','revert',true);
				dropped=false;
				incorrect++;
				console.log('incorrect: ' +incorrect);
				count++;
				console.log('count: ' +count);
				incorr();
			
			}
		}
	});	
	
	$("#drop-box2").droppable({
		tolerance: 'pointer',
		drop: function(ev,ui){
			var div = $(this).attr('id');
			console.log($(ui.draggable).text());
			if(!$(this).hasClass("drop") && ($(ui.draggable).text()=="?k")){				
				dropitem = $(ui.draggable);							
				$(this).append(dropitem).addClass("drop");
				dropped=true;
				$(ui.draggable).appendTo($(this));
				$(ui.draggable).addClass('dropped');
				$(ui.draggable).css({                
									'top': '0vmin',
									'left': '0vmin',
									'margin': '-7.3vmin 10vmin',
									'z-index': '-1'
								});									   
			/* 	$(this).children('.drop-boxes').css('visibility','visible'); */
				correct++;
				count++;
				console.log('correct: ' +correct);
				console.log('count: ' +count);
				corr();
				if($(ui.draggable).hasClass('dropped')){
					$(ui.draggable).prop('disabled', true);
				}
				if(correct == 4){
					$(audio3).on('ended', function(){
						$('#mainContainer').hide();
						$('#resultContainer').show();		
						$('#totalCount').text(count);
						$('#totalCorrect').text(correct);
						$('#totalIncorrect').text(incorrect);
					})
				}
			}			
			else{
				$(ui.draggable).draggable('option','revert',true);
				dropped=false;
				incorrect++;
				console.log('incorrect: ' +incorrect);
				count++;
				console.log('count: ' +count);
				incorr();							
			}
		}
	});	
	
	$("#drop-box3").droppable({
		tolerance: 'pointer',
		drop: function(ev,ui){
			var div = $(this).attr('id');
			if(!$(this).hasClass("drop") && ($(ui.draggable).text()=="d")){				
				dropitem = $(ui.draggable);							
				$(this).append(dropitem).addClass("drop");
				dropped=true;
				$(ui.draggable).appendTo($(this));
				$(ui.draggable).addClass('dropped');
				$(ui.draggable).css({                
									'top': '0vmin',
									'left': '0vmin',
									'margin': '-7.3vmin 10vmin',
									'z-index': '-1'
								});								   
				/* $(this).children('.drop-boxes').css('visibility','visible'); */
				correct++;
				count++;
				console.log('correct: ' +correct);
				console.log('count: ' +count);
				corr();
				if(correct == 4){
					$(audio3).on('ended', function(){
						$('#mainContainer').hide();
						$('#resultContainer').show();		
						$('#totalCount').text(count);
						$('#totalCorrect').text(correct);
						$('#totalIncorrect').text(incorrect);
					})
				}
			}			
			else{
				$(ui.draggable).draggable('option','revert',true);
				dropped=false;
				incorrect++;
				console.log('incorrect: ' +incorrect);
				count++;
				console.log('count: ' +count);
				incorr();							
			}
		}
	});	
	
	$("#drop-box4").droppable({
		tolerance: 'pointer',
		drop: function(ev,ui){
			var div = $(this).attr('id');
			if(!$(this).hasClass("drop") && ($(ui.draggable).text()=="[k")){				
				dropitem = $(ui.draggable);							
				$(this).append(dropitem).addClass("drop");
				dropped=true;
				$(ui.draggable).appendTo($(this));
				$(ui.draggable).addClass('dropped');
				$(ui.draggable).css({                
									'top': '0vmin',
									'left': '0vmin',
									'margin': '-7.3vmin 10vmin',
									'z-index': '-1'
								});								   
				/* $(this).children('.drop-boxes').css('visibility','visible'); */
				correct++;
				count++;
				console.log('correct: ' +correct);
				console.log('count: ' +count);
				corr();
				if(correct == 4){
					$(audio3).on('ended', function(){
						$('#mainContainer').hide();
						$('#resultContainer').show();		
						$('#totalCount').text(count);
						$('#totalCorrect').text(correct);
						$('#totalIncorrect').text(incorrect);
					})
				}
			}			
			else{
				$(ui.draggable).draggable('option','revert',true);
				dropped=false;
				incorrect++;
				console.log('incorrect: ' +incorrect);
				count++;
				console.log('count: ' +count);
				incorr();				
			}
		}
	});	
		
	$(audio1).on('ended', function(){     
		$('#hideContainer').hide();
	});
		
	function corr(){
		audio3.play();
		$('#hideContainer').show();
		$('#iframe2').show();
		$('#iframe1, #iframe3').hide();
		setTimeout(function(){
			$('#iframe2').hide();
			$('#iframe1').show();
		}, 3500);
		$(audio3).on('ended', function(){
			$('#hideContainer').hide();
		});	
	}	
	
	function incorr(){
		audio4.play();
		$('#hideContainer').show();
		$('#iframe3').show();
		$('#iframe1, #iframe2').hide();
		setTimeout(function(){
			$('#iframe3').hide();
			$('#iframe1').show();
		}, 3000);
		$(audio4).on('ended', function(){     
			$('#hideContainer').hide();
		});
	}    	

	$('#refresh, #result-refresh').click(function(){
		location.reload();
	});
	
	$('#refresh').mouseover(function(){ $('#refresh-img').attr('src','./images/refresh-2.png'); audio2.play(); })
			     .mouseout(function(){ $('#refresh-img').attr('src','./images/refresh-1.png'); })			   
	
	$('#show').click(function(){
		$('#drag-box1').animate({
			left: '51.8vmin',
			top: '-23.5vmin'
		}, 800);
		$('#drag-box4').animate({
			left: '-46vmin',
			top: '-23.5vmin'
		}, 800);
		$('#drag-box2').animate({
			left: '69.5vmin',
			top: '-23.5vmin'
		}, 800);
		$('#drag-box3').animate({
			left: '-63.5vmin',
			top: '-23.5vmin'
		}, 800);		
	});
