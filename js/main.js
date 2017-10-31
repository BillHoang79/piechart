var w     = 600,        
    h     = 600,
    r     = 200,
    color = d3.scale.category10();

    data = [
        {"label": "basketball", "value":17.4},
        {"label": "hockey", "value":14.1},
        {"label": "football", "value":35},
        {"label": "soccer", "value":8},
        {"label": "baseball", "value":31.5},

    ];

    var vis = d3.select("body")
        .append("svg:svg")
        .data([data])
            .attr("width", w)
            .attr("height", h)
        .append("svg:g")
            .attr("transform", "translate(" + r + "," + r + ")")

    var arc = d3.svg.arc()
        .outerRadius(r);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.value;
        });

    var arcs = vis.selectAll("g.slice")
        .data(pie)
        .enter()
            .append("svg:g")
                .attr("class", "slice");

        arcs.append("svg:path")
            .attr("fill", function(d, i) {
                return color(i);
            })
            .attr("d", arc);

        arcs.append("svg:text")
            .attr("transform", function(d) {
            d.innerRadius = 0;
            d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function(d, i) {
                return data[i].label;
            });





