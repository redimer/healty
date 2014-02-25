// First Chart Example - Area Line Chart

Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2014-02-01', km: 350 },
	{ d: '2014-02-02', km: 210 },
	{ d: '2014-02-03', km:  820 },
	{ d: '2014-02-04', km: 839 },
	{ d: '2014-02-05', km: 792 },
	{ d: '2014-02-06', km: 859 },
	{ d: '2014-02-07', km: 790 },

	
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',

  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['km'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['km'],
 
  // Disables line smoothing
  smooth: true,
  lineColors: ['#26AE90'],
	 pointFillColors: ['#26AE90'],

});

Morris.Donut({
  element: 'morris-chart-donut',
  data: [
    {label: "Referral", value: 42.7},
    {label: "Direct", value: 8.3},
    {label: "Social", value: 12.8},
    {label: "Organic", value: 36.2}
  ],
  formatter: function (y) { return y + "%" ;}
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-line',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2014-02-01', km: 350 },
	{ d: '2014-02-02', km: 210 },
	{ d: '2014-02-03', km:  820 },
	{ d: '2014-02-04', km: 839 },
	{ d: '2014-02-05', km: 792 },
	{ d: '2014-02-06', km: 859 },
	{ d: '2014-02-07', km: 790 },

	
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['km'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['km'],


  // Disables line smoothing
  smooth: true,

	lineColors: ['#26AE90'],
	pointFillColors: ['#26AE90'],
	 
});


