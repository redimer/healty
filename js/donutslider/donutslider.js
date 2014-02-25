
var DonutSlider = function(elementId, borderSize, colors) {
	  var _this = this,
	      size = Math.min($('#' + elementId).width(), 
	                      $('#' + elementId).height());
      this.colors = colors;
	  this.elementId = elementId;
	  this.pie = d3.layout.pie().sort(null);
	  this.arc = d3.svg.arc()
	             .innerRadius((size / 2) - borderSize)
	             .outerRadius(size / 2);
	  this.svg = d3.select('#' + elementId).append('svg')
	             .attr('width', size)
	             .attr('height', size)
	             .append('g')
	             .attr('transform', 'translate(' + size / 2 + ',' + size / 2 + ')');
	  this.path = this.svg.selectAll('path')
	              .data(this.pie([0, 100]))
	              .enter().append('path')
	                .attr('fill', function(d, i) { 
	                   return _this.colors[i];
	                })
	                .attr('d', this.arc)
	                .each(function(d) { this._current = d; });

	  /*this.dragdealer = new Dragdealer(elementId, {
	    x: 1,
	    slide: false,
	    animationCallback: function(x, y) {
	      _this.updateChart((1 - x) * 100);
	      $('#' + elementId).find('.value').html(Math.round((1 - x) * 100) + '<span class="procent">&nbsp;%</span>');
	    }
	  });*/
	};

	DonutSlider.prototype = {
	  colors: [],
	  /*setValue: function(value) {
	    this.dragdealer.setValue(1 - value, 0, true);
	  },*/
	  updateChart: function(value) {
	  	progress = 0;
	  	$('#' + this.elementId).find('.value').html(Math.round((1 - value) * 100) + '<span class="procent">&nbsp;%</span>');

	  	value = (1 - value) * 100;
	  	var self = this;
	    this.path.data(this.pie([value, 100 - value]))
	    	             .transition()
	                .duration(1000)
	                .attrTween("d", function (a) {
				        // Store the displayed angles in _current.
				        // Then, interpolate from _current to the new angles.
				        // During the transition, _current is updated in-place by d3.interpolate.
				        var i  = d3.interpolate(this._current, a);
				        var i2 = d3.interpolate(progress, value)
				        this._current = i(0);
				        return function(t) {
				          //text.text( format(i2(t) / 100) );
				          return self.arc(i(t));
				        };
				      });
	             //.attr('d', this.arc);      
	  }
	};

setTimeout(function() {
    var s = new DonutSlider('donut-slider1', 5, ['#26AE90', '#fff']);
    s.updateChart(1 - 0.74);
},100);