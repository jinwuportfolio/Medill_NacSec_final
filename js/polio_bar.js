var w = 500;
var h = 700;


var dataset = [
[
    {x:0, y:2980},
    {x:1, y:4334},
    {x:2, y:3506},
    {x:3, y:901},
    {x:4, y:595},
    {x:5, y:2159},
     {x:6, y:643},
    {x:7, y:1214},
    {x:8, y:935},
     {x:9, y:811},
    {x:10, y:777},
    {x:11, y:1147},
     {x:12, y:1046},
    {x:13, y:1803},
    {x:14, y:527},
     {x:15, y:508},
    {x:16, y:341},
    {x:17, y:1147},
    {x:18, y:341},
    {x:19, y:558},
    {x:20, y:199},
    {x:21, y:119},
    {x:22, y:90},
    {x:23, y:103},
     {x:24, y:53},
    {x:25, y:28},
    {x:26, y:40},
     {x:27, y:32},
    {x:28, y:117},
    {x:29, y:89},
     {x:30, y:144},
    {x:31, y:198},
    {x:32, y:74},
     {x:33, y:141},
    {x:34, y:328},
    {x:35, y:32}
],
[
     {x:0, y:49820},
    {x:1, y:61704},
    {x:2, y:48382},
    {x:3, y:39532},
    {x:4, y:34609},
    {x:5, y:36454},
     {x:6, y:32378},
    {x:7, y:38644},
    {x:8, y:33852},
     {x:9, y:25383},
    {x:10, y:22601},
    {x:11, y:12085},
     {x:12, y:14244},
    {x:13, y:8697},
    {x:14, y:8069},
     {x:15, y:6494},
    {x:16, y:3733},
    {x:17, y:4039},
    {x:18, y:6006},
    {x:19, y:6583},
    {x:20, y:2772},
    {x:21, y:378},
    {x:22, y:1832},
    {x:23, y:681},
     {x:24, y:1205},
    {x:25, y:2004},
    {x:26, y:1981},
     {x:27, y:1354},
    {x:28, y:1614},
    {x:29, y:1700},
     {x:30, y:1204},
    {x:31, y:518},
    {x:32, y:217},
     {x:33, y:340},
    {x:34, y:86},
    {x:35, y:27}
]
];

var stack = d3.layout.stack();
stack(dataset);

var xScale = d3.scale.ordinal()
				.domain(d3.range(dataset[0].length))
				.rangeRoundBands([0, w], 0.05);
		

			var yScale = d3.scale.linear()
				.domain([0,				
					d3.max(dataset, function(d) {
						return d3.max(d, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([h,0]);
				
			//Easy colors accessible via a 10-step ordinal scale
			var colors = d3.scale.category10();
		
			//Create SVG element
			var svg = d3.select("#graphic_line")
						.append("svg")
						.attr("width", w)
						.attr("height", h);
	
			// Add a group for each row of data
			var groups = svg.selectAll("g")
				.data(dataset)
				.enter()
				.append("g")
				.style("fill", function(d, i) {
					return colors(i);
				});
	
			// Add a rect for each data value
			var rects = groups.selectAll("rect")
				.data(function(d) { return d; })
				.enter()
				.append("rect")
				.attr("x", function(d, i) {
					return xScale(i);
				})
				.attr("y", function(d) {
					return yScale(d.y0);
				})
				.attr("height", function(d) {
					return yScale(d.y);
				})
				.attr("width", xScale.rangeBand());
						