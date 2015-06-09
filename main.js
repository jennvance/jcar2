$(document).ready(function(){
	$('.jcarousel').jcarousel({
		list : '.jcarousel-list'
	});

	$('.jcarousel-prev').click(function() {
	    $('.jcarousel').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next').click(function() {
	    $('.jcarousel').jcarousel('scroll', '+=1');
	});

    // $('.jcarousel-pagination').jcarouselPagination();

    // var carouselItems = $('li');

	$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'li', function() {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'li', function() {
		$(this).removeClass('active');
	})

    $('.jcarousel-pagination').jcarouselPagination({
	    'item': function(page, carouselItems) {
	    	console.log(page, carouselItems);
	        return '<li><a href="#' + page + '">Page ' + page + '</a></li>';
	    },
	    'perPage': 1
	});

	// $('.jcarousel-pagination').jcarouselPagination({
	//     'item': function(page, carouselItems) {
	//         // return '<li><a href="#' + page + '">Page ' + page + '</a></li>';
	//         return '<li><a href="#' + page + '">' + 'O' + '</a></li>';
	//     },
	//     'perPage': 3
	// });

		// $('.jcarousel-control')
		// $('.jcarousel-pagination')
		// 	.on('jcarouselpagination:active', 'li', function() {
		// 		$(this).addClass('active');
		// 	})
		// 	.on('jcarouselpagination:inactive', 'li', function() {
		// 		$(this).removeClass('active');
		// 	})
		// 	.jcarouselPagination({
		// 		'perPage':5,
		// 		'item': function(page, carouselItems) {
		// 			// return '<li class="' + (page == 1 ? "active" : "") + '"><a href="#' + page + '"></a></li>';
		// 			return '<li><a href="#' + page + '">' + 'O' + '</a></li>';
		// 		}
		// 	});


	// $('.product-carousel')
	//         .on('jcarouselpagination:active', 'li', function() {
	//             $(this).addClass('active');
	//         })
	//         .on('jcarouselpagination:inactive', 'li', function() {
	//             $(this).removeClass('active');
	//         })
	//         .jcarouselPagination({
	//             'perPage':1,
	//             'item': function(page, carouselItems) {
	//                 return '<li class="' + (page == 1 ? "active" : "") + '"><a href="#' + page + '"></a></li>';
	//             }
	//         });

	//     $('.mycarousel-prev').jcarouselControl({target:'-=1'});
	//     $('.mycarousel-next').jcarouselControl({target:'+=1'});









})
