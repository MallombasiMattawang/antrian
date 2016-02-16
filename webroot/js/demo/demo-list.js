// REMEMBER LIST
// ------------------------------------------------------------------------------------------------ * -->
$(function () {
        var options = {
                valueNames: ['date', 'media-heading', 'tag', 'category']
        };

        var rememberList = new List('rememberList', options);

        $('#filter-personal').click(function () {
                rememberList.filter(function (item) {
                        if(item.values().category == "Personal") {
                                return true;
                        } else {
                                return false;
                        }
                });
                return false;
        });

        $('#filter-work').click(function () {
                rememberList.filter(function (item) {
                        if(item.values().category == "Work") {
                                return true;
                        } else {
                                return false;
                        }
                });
                return false;
        });

        $('#filter-high').click(function () {
                rememberList.filter(function (item) {
                        if(item.values().category == "High Priority") {
                                return true;
                        } else {
                                return false;
                        }
                });
                return false;
        });

        $('#filter-none').click(function () {
                rememberList.filter();
                return false;
        });
		
});


// FILTERABLE LIST - component-widgets-users.html
// ------------------------------------------------------------------------------------------------ * -->
$(function () {
		// search typeahead
		var list_source = [];
		$('#userLastLoggedList li').each(function () {
				var search_name = $(this).find('.f_name').text();;
				list_source.push(search_name);
		});
		
		$('#userLastLoggedSearch').typeahead({
				source: list_source,
				items: 5,
				minLength: 1
		});
		
		var pagingOptions = {};
		
		var options = {
				valueNames: ['f_name', 'f_email', 'f_status', 'f_access', 'f_ip'],
				page: 5,
				plugins: [
						['paging', {
								innerWindow: 1,
								left: 1,
								right: 1
						}]
				]
		};
		
		var userList = new List('userLastLogged', options);
		
		$('#filter-online').click(function() {
				$('ul.filter li').removeClass('active');
				$(this).parent('li').addClass('active');
				userList.filter(function (item) {
						if(item.values().f_status == "online") {
								return true;
						} else {
								return false;
						}
				});
				return false;
		});
		
		$('#filter-offline').click(function() {
				$('ul.filter li').removeClass('active');
				$(this).parent('li').addClass('active');
				userList.filter(function (item) {
						if(item.values().f_status == "offline") {
								return true;
						} else {
								return false;
						}
				});
				return false;
		});
		
		$('#filter-all, #refreshList').click(function() {
				$('ul.filter li').removeClass('active');
				$(this).parent('li').addClass('active');
            	userList.filter();
            	return false;
        });
		
});