var $table = $('.js-deputies-table');

$(function () {
	
	$.ajax({
     url: 'data/data.raw.json',
     type: 'GET',
	 contentType: "application/json;charset=utf-8",
	 dataType: 'json',
     cache: false,
     success : function(deputies){
  		process(deputies);
     },		
    });
});

function process(deputies) {
	// Sort deputies by name
	deputies.sort(function(a, b) { return a.name.localeCompare(b.name); });
	
	// Render deputies
	$.each(deputies, function(i, deputy) {
		if (!deputy.name) {
			return;
		}
		
		var htmlFb = deputy.facebook ? '<a href="' + deputy.facebook + '" target="_blank"><img src="img/facebook.png"></a>' : '',
			htmlPicture = deputy.picture ? '<img src="img/pixel.png" data-src="' + deputy.picture + '" class="js-lazy-img" style="width: 50px;">' : '',
			htmlName = deputy.url ? '<a href="' + deputy.url + '" target="_blank">' + deputy.name + '</a>' : deputy.name,
			htmlTag1 = '',
			htmlTag2 = '';
		if (deputy.tags.length) {
			$.each(deputy.tags, function(i, tag) {
				switch (tag.name) {
					case 'шокін-ок':
						htmlTag1 = 
							'<a href="' + tag.lawUrl + '" target="_blank" style="display: block; margin-top: 5px;">' +
								'<span class="label label-danger" data-toggle="tooltip" data-placement="left" title="' + tag.lawName + '">' + 
									tag.name + 
								'</span>' + 
							'</a>';
						break;
					case 'популіст':
						htmlTag2 = 
							'<a href="' + tag.lawUrl + '" target="_blank" style="display: block; margin-top: 5px;">' +
								'<span class="label label-warning" data-toggle="tooltip" data-placement="left" title="' + tag.lawName + '">' + 
									tag.name + 
								'</span>' + 
							'</a>';
						break;
				}
			});
		}
		$table.append(
			'<tr>' + 
				'<td style="vertical-align: middle; width: 30px;">' + htmlFb + '</td>' +
				'<td style="height: 84px; width: 60px;">' + htmlPicture + '</td>' +
				'<td style="vertical-align: middle; width: 400px;">' + htmlName + '</td>' +
				'<td style="vertical-align: middle; width: 100px;">' + htmlTag1 + '</td>' + 
				'<td style="vertical-align: middle; width: 100px;">' + htmlTag2 + '</td>' + 
				'<td>&nbsp;</td>' + 
			'</tr>'
		)
	});
	
	// Load images
	function loadImages() {
		var $img = $('.js-lazy-img[data-src]').first();
		$img
			.attr('src', $img.data('src'))
			.removeAttr('data-src')
			.on('load error', function() {
				loadImages();
			});
	}
	
	loadImages();
	// Bind tooltips
	$('[data-toggle="tooltip"]').tooltip();
}