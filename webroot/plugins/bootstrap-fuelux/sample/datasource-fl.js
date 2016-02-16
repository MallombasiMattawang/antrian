/*
 * Flickr DataSource for Fuel UX Datagrid
 * https://github.com/adamalex/fuelux-dgdemo
 *
 * Copyright (c) 2012 Adam Alexander
 * Demo source released to public domain.
 */

var FlickrDataSource = function (options) {
	this._formatter = options.formatter;
	this._columns = options.columns;
};

FlickrDataSource.prototype = {

	/**
	 * Returns stored column metadata
	 */
	columns: function () {
		return this._columns;
	},

	/**
	 * Called when Datagrid needs data. Logic should check the options parameter
	 * to determine what data to return, then return data by calling the callback.
	 * @param {object} options Options selected in datagrid (ex: {pageIndex:0,pageSize:5,search:'searchterm'})
	 * @param {function} callback To be called with the requested data.
	 */
	data: function (options, callback) {

		var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6d798f51bbd5ec0a1f9e9f1e62c43ab&format=json';
		var self = this;

		if (options.search) {

			// Search active.  Add URL parameters for Flickr API.
			url += '&tags=' + options.search;
			url += '&per_page=' + options.pageSize;
			url += '&page=' + (options.pageIndex + 1);

			$.ajax(url, {

				// Set JSONP options for Flickr API
				dataType: 'jsonp',
				jsonpCallback: 'jsonFlickrApi',
				jsonp: false,
				type: 'GET'

			}).done(function (response) {

				// Prepare data to return to Datagrid
				var data = response.photos.photo;
				var count = response.photos.total;
				var startIndex = (response.photos.page - 1) * response.photos.perpage;
				var endIndex = startIndex + response.photos.perpage;
				var end = (endIndex > count) ? count : endIndex;
				var pages = response.photos.pages;
				var page = response.photos.page;
				var start = startIndex + 1;

				// Allow client code to format the data
				if (self._formatter) self._formatter(data);

				// Return data to Datagrid
				callback({ data: data, start: start, end: end, count: count, pages: pages, page: page });

			});

		} else {

			// No search. Return zero results to Datagrid
			callback({ data: [], start: 0, end: 0, count: 0, pages: 0, page: 0 });

		}
	}
};