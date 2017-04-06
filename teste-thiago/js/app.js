var UI = {

	screen: {
		width: '',
		height: '',

		set: function(){
			this.width = $(window).width();
			this.height = $(window).height();
		}
	},

	nav: {
		element: '',
		trigger: '',		

		set: function(element, trigger){
			this.element = element;
			this.trigger = trigger;
		},

		state: function(){
			if($(this.element).hasClass('active')){
				return true;
			}else{
				return false;
			}
		},

		enable: function(){
			$(this.element).addClass('active');
			$(this.trigger).addClass('active');
		},

		disable: function(){
			$(this.element).removeClass('active');
			$(this.trigger).removeClass('active');
		}		
	},

	scroll: {
		trigger: '',

		set: function(trigger){			
			this.trigger = trigger;
		},

		scroll: function(anchor){
			var hash = $(anchor.hash);	
			$('html, body').animate({
				scrollTop: hash.offset().top
			}, 600);
		}
	},

	preloader: {
		element: '',

		set: function(element){			
			this.element = element;
		},

		init: function(){
			$('body').waitForImages({waitForAll: true}).progress(function(loaded, count, success) {
				if(loaded == (count-1)){					
					$(UI.preloader.element).fadeOut();
				}
			});
		}
	},

	flowtype: {
		init: function(){			

			
			$('.title').flowtype({		
				maximum : 1920,
				fontRatio : 160,
				minFont: 2
			});

			$('.description').flowtype({		
				maximum : 1920,
				fontRatio : 160,
				minFont: 10
			});	

			$('.black').flowtype({		
				maximum : 1920,
				fontRatio : 160,
				minFont: 10
			});	

			$('.red').flowtype({		
				maximum : 1920,
				fontRatio : 160,
				minFont: 10
			});	


			
			
		}
	}

}


$(document).ready(function(){
	
	var preloader_element = '.loading';
	var nav_element = 'nav';
	var nav_trigger = '.nav-icon';
	var scroll_trigger = '.smooth-scroll';

	UI.preloader.set(preloader_element);
	UI.preloader.init();

	UI.nav.set(nav_element, nav_trigger);
	$(UI.nav.trigger).on('click', function(event){
		event.preventDefault();
		if(UI.nav.state()){
			UI.nav.disable();						
		}else{
			UI.nav.enable();						
		}
	});

	UI.scroll.set(scroll_trigger);
	$(UI.scroll.trigger).on('click', function(event){
		event.preventDefault();
		UI.scroll.scroll(this);
		if(UI.nav.state()){
			UI.nav.disable();
		}
	});

	UI.flowtype.init();
	
	UI.screen.set();	
	
});