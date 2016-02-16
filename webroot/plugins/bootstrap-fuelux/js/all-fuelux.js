/* ===========================================================================================
 * Fuel UX COMBOBOX
 * https://github.com/ExactTarget/fuelux
 * ---------------------------------------------------------
 *
 * Copyright (c) 2012 ExactTarget
 * Licensed under the MIT license.
 * =========================================================================================== */
 
 ! function ($) {
	 
    // COMBOBOX CONSTRUCTOR AND PROTOTYPE
	
	var Combobox = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.combobox.defaults, options);
        this.$element.on('click', 'a', $.proxy(this.itemclicked, this));
        this.$input = this.$element.find('input');
    };

    Combobox.prototype = {

        constructor: Combobox,

        select: function (val) {
            this.$input.val(val).change();
            return this;
        },

        itemclicked: function (e) {
            this.select($(e.target).text());
            $('body').click();
            e.preventDefault();
        }

    };


    // COMBOBOX PLUGIN DEFINITION
	
	$.fn.combobox = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('combobox');
            var options = typeof option === 'object' && option;

            if(!data) $this.data('combobox', (data = new Combobox(this, options)));
            if(typeof option === 'string') data[option]();
        });
    };

    $.fn.combobox.defaults = {};

    $.fn.combobox.Constructor = Combobox;


    // COMBOBOX DATA-API

    $(function () {
        $('body').on('mousedown.combobox.data-api', '.combobox', function (e) {
            var $this = $(this);
            if($this.data('combobox')) return;
            $this.combobox($this.data());
        });
    });

}(window.jQuery);

/* ===========================================================================================
 * Fuel UX DATAGRID
 * https://github.com/ExactTarget/fuelux
 * ---------------------------------------------------------
 *
 * Copyright (c) 2012 ExactTarget
 * Licensed under the MIT license.
 * =========================================================================================== */

! function ($) {


    // DATAGRID CONSTRUCTOR AND PROTOTYPE

    var Datagrid = function (element, options) {
        this.$element = $(element);
        this.$thead = this.$element.find('thead');
        this.$footer = this.$element.find('tfoot th');
        this.$footerchildren = this.$footer.children();
        this.$topheader = this.$element.find('thead th');
        this.$searchcontrol = this.$element.find('.search');
        this.$pagesize = this.$element.find('.grid-pagesize');
        this.$pageinput = this.$element.find('.grid-pager input');
        this.$pagedropdown = this.$element.find('.grid-pager .dropdown-menu');
        this.$prevpagebtn = this.$element.find('.grid-prevpage');
        this.$nextpagebtn = this.$element.find('.grid-nextpage');
        this.$pageslabel = this.$element.find('.grid-pages');
        this.$countlabel = this.$element.find('.grid-count');
        this.$startlabel = this.$element.find('.grid-start');
        this.$endlabel = this.$element.find('.grid-end');

        this.$tbody = $('<tbody>').insertAfter(this.$thead);
        this.$colheader = $('<tr>').appendTo(this.$thead);

        this.options = $.extend({}, $.fn.datagrid.defaults, options);
        this.options.dataOptions.pageSize = parseInt(this.$pagesize.val(), 10);
        this.columns = this.options.dataSource.columns();

        this.$nextpagebtn.on('click', $.proxy(this.next, this));
        this.$prevpagebtn.on('click', $.proxy(this.previous, this));
        this.$searchcontrol.on('searched cleared', $.proxy(this.searchChanged, this));
        this.$colheader.on('click', 'th', $.proxy(this.headerClicked, this));
        this.$pagesize.on('change', $.proxy(this.pagesizeChanged, this));
        this.$pageinput.on('change', $.proxy(this.pageChanged, this));

        this.renderColumns();
        this.renderData();
    };

    Datagrid.prototype = {

        constructor: Datagrid,

        renderColumns: function () {
            var self = this;

            this.$footer.attr('colspan', this.columns.length);
            this.$topheader.attr('colspan', this.columns.length);

            var colHTML = '';

            $.each(this.columns, function (index, column) {
                colHTML += '<th data-property="' + column.property + '"';
                if(column.sortable) colHTML += ' class="sortable"';
                colHTML += '>' + column.label + '</th>';
            });

            self.$colheader.append(colHTML);
        },

        updateColumns: function ($target, direction) {
            var className = (direction === 'asc') ? 'icon-chevron-up' : 'icon-chevron-down';
            this.$colheader.find('i').remove();
            this.$colheader.find('th').removeClass('sorted');
            $('<i>').addClass(className).appendTo($target);
            $target.addClass('sorted');
        },

        updatePageDropdown: function (data) {
            var pageHTML = '';

            for(var i = 1; i <= data.pages; i++) {
                pageHTML += '<li><a>' + i + '</a></li>';
            }

            this.$pagedropdown.html(pageHTML);
        },

        updatePageButtons: function (data) {
            if(data.page === 1) {
                this.$prevpagebtn.attr('disabled', 'disabled');
            }
            else {
                this.$prevpagebtn.removeAttr('disabled');
            }

            if(data.page === data.pages) {
                this.$nextpagebtn.attr('disabled', 'disabled');
            }
            else {
                this.$nextpagebtn.removeAttr('disabled');
            }
        },

        renderData: function () {
            var self = this;

            this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML));
            this.$footerchildren.hide();

            this.options.dataSource.data(this.options.dataOptions, function (data) {
                var itemdesc = (data.count === 1) ? self.options.itemText : self.options.itemsText;
                var rowHTML = '';

                self.$footerchildren.toggle(data.count > 0);

                self.$pageinput.val(data.page);
                self.$pageslabel.text(data.pages);
                self.$countlabel.text(data.count + ' ' + itemdesc);
                self.$startlabel.text(data.start);
                self.$endlabel.text(data.end);

                self.updatePageDropdown(data);
                self.updatePageButtons(data);

                $.each(data.data, function (index, row) {
                    rowHTML += '<tr>';
                    $.each(self.columns, function (index, column) {
                        rowHTML += '<td>' + row[column.property] + '</td>';
                    });
                    rowHTML += '</tr>';
                });

                if(!rowHTML) rowHTML = self.placeholderRowHTML('0 ' + self.options.itemsText);

                self.$tbody.html(rowHTML);
                self.$element.trigger('loaded');
            });

        },

        placeholderRowHTML: function (content) {
            return '<tr><td style="text-align:center;padding:20px;" colspan="' + this.columns.length + '">' + content + '</td></tr>';
        },

        headerClicked: function (e) {
            var $target = $(e.target);
            if(!$target.hasClass('sortable')) return;

            var direction = this.options.dataOptions.sortDirection;
            var sort = this.options.dataOptions.sortProperty;
            var property = $target.data('property');

            if(sort === property) {
                this.options.dataOptions.sortDirection = (direction === 'asc') ? 'desc' : 'asc';
            }
            else {
                this.options.dataOptions.sortDirection = 'asc';
                this.options.dataOptions.sortProperty = property;
            }

            this.options.dataOptions.pageIndex = 0;
            this.updateColumns($target, this.options.dataOptions.sortDirection);
            this.renderData();
        },

        pagesizeChanged: function (e) {
            this.options.dataOptions.pageSize = parseInt($(e.target).val(), 10);
            this.options.dataOptions.pageIndex = 0;
            this.renderData();
        },

        pageChanged: function (e) {
            this.options.dataOptions.pageIndex = parseInt($(e.target).val(), 10) - 1;
            this.renderData();
        },

        searchChanged: function (e, search) {
            this.options.dataOptions.search = search;
            this.options.dataOptions.pageIndex = 0;
            this.renderData();
        },

        previous: function () {
            this.options.dataOptions.pageIndex--;
            this.renderData();
        },

        next: function () {
            this.options.dataOptions.pageIndex++;
            this.renderData();
        }

    };


    // DATAGRID PLUGIN DEFINITION

    $.fn.datagrid = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('datagrid');
            var options = typeof option === 'object' && option;

            if(!data) $this.data('datagrid', (data = new Datagrid(this, options)));
            if(typeof option === 'string') data[option]();
        });
    };

    $.fn.datagrid.defaults = {
        dataOptions: {
            pageIndex: 0,
            pageSize: 10
        },
        loadingHTML: '<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',
        itemsText: 'items',
        itemText: 'item'
    };

    $.fn.datagrid.Constructor = Datagrid;

}(window.jQuery);

/* ===========================================================================================
 * Fuel UX PILLBOX
 * https://github.com/ExactTarget/fuelux
 * ---------------------------------------------------------
 *
 * Copyright (c) 2012 ExactTarget
 * Licensed under the MIT license.
 * =========================================================================================== */

! function ($) {


    // PILLBOX CONSTRUCTOR AND PROTOTYPE

    var Pillbox = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.pillbox.defaults, options);
        this.$element.on('click', 'li', $.proxy(this.itemclicked, this));
    };

    Pillbox.prototype = {
        constructor: Pillbox,

        items: function () {
            return this.$element.find('li').map(function () {
                var $this = $(this);
                return $.extend({
                    text: $this.text()
                }, $this.data());
            }).get();
        },

        itemclicked: function (e) {
            $(e.currentTarget).remove();
            e.preventDefault();
        }
    };


    // PILLBOX PLUGIN DEFINITION

    $.fn.pillbox = function (option) {
        var methodReturn;

        var $set = this.each(function () {
            var $this = $(this);
            var data = $this.data('pillbox');
            var options = typeof option === 'object' && option;

            if(!data) $this.data('pillbox', (data = new Pillbox(this, options)));
            if(typeof option === 'string') methodReturn = data[option]();
        });

        return(methodReturn === undefined) ? $set : methodReturn;
    };

    $.fn.pillbox.defaults = {};

    $.fn.pillbox.Constructor = Pillbox;


    // PILLBOX DATA-API

    $(function () {
        $('body').on('mousedown.pillbox.data-api', '.pillbox', function (e) {
            var $this = $(this);
            if($this.data('pillbox')) return;
            $this.pillbox($this.data());
        });
    });

}(window.jQuery);

/* ===========================================================================================
 * Fuel UX SEARCH
 * https://github.com/ExactTarget/fuelux
 * ---------------------------------------------------------
 *
 * Copyright (c) 2012 ExactTarget
 * Licensed under the MIT license.
 * =========================================================================================== */

! function ($) {


    // SEARCH CONSTRUCTOR AND PROTOTYPE

    var Search = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.search.defaults, options);
        this.$element.find('button').on('click', $.proxy(this.buttonclicked, this));
        this.$input = this.$element.find('input').on('keydown', $.proxy(this.keypress, this));
        this.$input = this.$element.find('input').on('keyup', $.proxy(this.keypressed, this));
        this.$icon = this.$element.find('i');
        this.activeSearch = '';
    };

    Search.prototype = {

        constructor: Search,

        search: function (searchText) {
            this.$icon.attr('class', 'fontello-icon-cancel-1');
            this.activeSearch = searchText;
            this.$element.trigger('searched', searchText);
        },

        clear: function () {
            this.$icon.attr('class', 'icon-search');
            this.activeSearch = '';
            this.$input.val('');
            this.$element.trigger('cleared');
        },

        action: function () {
            var val = this.$input.val();
            var inputEmptyOrUnchanged = val === '' || val === this.activeSearch;

            if(this.activeSearch && inputEmptyOrUnchanged) {
                this.clear();
            }
            else if(val) {
                this.search(val);
            }
        },

        buttonclicked: function (e) {
            e.preventDefault();
            if($(e.currentTarget).is('.disabled, :disabled')) return;
            this.action();
        },

        keypress: function (e) {
            if(e.which === 13) {
                e.preventDefault();
            }
        },

        keypressed: function (e) {
            var val, inputPresentAndUnchanged;

            if(e.which === 13) {
                e.preventDefault();
                this.action();
            }
            else {
                val = this.$input.val();
                inputPresentAndUnchanged = val && (val === this.activeSearch);
                this.$icon.attr('class', inputPresentAndUnchanged ? 'fontello-icon-cancel-1' : 'icon-search');
            }
        }

    };


    // SEARCH PLUGIN DEFINITION

    $.fn.search = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('search');
            var options = typeof option === 'object' && option;

            if(!data) $this.data('search', (data = new Search(this, options)));
            if(typeof option === 'string') data[option]();
        });
    };

    $.fn.search.defaults = {};

    $.fn.search.Constructor = Search;


    // SEARCH DATA-API

    $(function () {
        $('body').on('mousedown.search.data-api', '.search', function () {
            var $this = $(this);
            if($this.data('search')) return;
            $this.search($this.data());
        });
    });

}(window.jQuery);

/* ===========================================================================================
 * Fuel UX SPINNER
 * https://github.com/ExactTarget/fuelux
 * ---------------------------------------------------------
 *
 * Copyright (c) 2012 ExactTarget
 * Licensed under the MIT license.
 * =========================================================================================== */

! function ($) {


    // SPINNER CONSTRUCTOR AND PROTOTYPE

    var Spinner = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.spinner.defaults, options);
        this.$input = this.$element.find('.spinner-input');
        this.$element.on('keyup', this.$input, $.proxy(this.change, this));

        if(this.options.hold) {
            this.$element.on('mousedown', '.spinner-up', $.proxy(function () {
                this.startSpin(true);
            }, this));
            this.$element.on('mouseup', '.spinner-up, .spinner-down', $.proxy(this.stopSpin, this));
            this.$element.on('mouseout', '.spinner-up, .spinner-down', $.proxy(this.stopSpin, this));
            this.$element.on('mousedown', '.spinner-down', $.proxy(function () {
                this.startSpin(false);
            }, this));
        }
        else {
            this.$element.on('click', '.spinner-up', $.proxy(function () {
                this.step(true);
            }, this));
            this.$element.on('click', '.spinner-down', $.proxy(function () {
                this.step(false);
            }, this));
        }

        this.switches = {
            count: 1,
            enabled: true
        };

        if(this.options.speed === 'medium') {
            this.switches.speed = 300;
        }
        else if(this.options.speed === 'fast') {
            this.switches.speed = 100;
        }
        else {
            this.switches.speed = 500;
        }

        this.render();

        if(this.options.disabled) {
            this.disable();
        }
    };

    Spinner.prototype = {
        constructor: Spinner,

        render: function () {
            this.$input.val(this.options.value);
            this.$input.attr('maxlength', (this.options.max + '').split('').length);
        },

        change: function () {
            var newVal = this.$input.val();

            if(newVal / 1) {
                this.options.value = newVal / 1;
            }
            else {
                newVal = newVal.replace(/[^0-9]/g, '');
                this.$input.val(newVal);
                this.options.value = newVal / 1;
            }

            this.$element.trigger('change');
        },

        stopSpin: function () {
            clearTimeout(this.switches.timeout);
            this.switches.count = 1;
            this.$element.trigger('change');
        },

        startSpin: function (type) {

            if(!this.options.disabled) {
                var divisor = this.switches.count;

                if(divisor === 1) {
                    this.step(type);
                    divisor = 1;
                }
                else if(divisor < 3) {
                    divisor = 1.5;
                }
                else if(divisor < 8) {
                    divisor = 2.5;
                }
                else {
                    divisor = 4;
                }

                this.switches.timeout = setTimeout($.proxy(function () {
                    this.iterator(type);
                }, this), this.switches.speed / divisor);
                this.switches.count++;
            }
        },

        iterator: function (type) {
            this.step(type);
            this.startSpin(type);
        },

        step: function (dir) {
            var curValue = this.options.value;
            var limValue = dir ? this.options.max : this.options.min;

            if((dir ? curValue < limValue : curValue > limValue)) {
                var newVal = curValue + (dir ? 1 : -1) * this.options.step;

                if(dir ? newVal > limValue : newVal < limValue) {
                    this.value(limValue);
                }
                else {
                    this.value(newVal);
                }
            }
        },

        value: function (value) {
            if(typeof value !== 'undefined') {
                this.options.value = value;
                this.$input.val(value);
                return this;
            }
            else {
                return this.options.value;
            }
        },

        disable: function () {
            this.options.disabled = true;
            this.$input.attr('disabled', '');
            this.$element.find('button').addClass('disabled');
        },

        enable: function () {
            this.options.disabled = false;
            this.$input.removeAttr("disabled");
            this.$element.find('button').removeClass('disabled');
        }
    };


    // SPINNER PLUGIN DEFINITION

    $.fn.spinner = function (option, value) {
        var methodReturn;

        var $set = this.each(function () {
            var $this = $(this);
            var data = $this.data('spinner');
            var options = typeof option === 'object' && option;

            if(!data) $this.data('spinner', (data = new Spinner(this, options)));
            if(typeof option === 'string') methodReturn = data[option](value);
        });

        return(methodReturn === undefined) ? $set : methodReturn;
    };

    $.fn.spinner.defaults = {
        value: 1,
        min: 1,
        max: 999,
        step: 1,
        hold: true,
        speed: 'medium',
        disabled: false
    };

    $.fn.spinner.Constructor = Spinner;


    // SPINNER DATA-API

    $(function () {
        $('body').on('mousedown.spinner.data-api', '.spinner', function (e) {
            var $this = $(this);
            if($this.data('.spinner')) return;
            $this.spinner($this.data());
        });
    });

}(window.jQuery);