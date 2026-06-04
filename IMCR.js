import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import "https://cdn.plot.ly/plotly-3.5.1.min.js";

const sndwich = async () => { 

    const response = await fetch('IMCR_JSON/IMCR1.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;
};

const sndwich2 = async () => { 
    
    const response = await fetch('IMCR_JSON/IMCR2.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;
};

const sndwich3 = async () => { 
    
    const response = await fetch('IMCR_JSON/IMCR3.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;
};

const sndwich4 = async () => { 
    
    const response = await fetch('IMCR_JSON/IMCR4.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;
};

const sndwich5 = async () => { 
    
    const response = await fetch('IMCR_JSON/IMCR5.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;
};

const sndwich6 = async () => { 
    
    const response = await fetch('IMCR_JSON/IMCR6.json'); 
    const data = await response.json();
     
    if(response.status != 200){
        throw new Error('data denied');
    }

    return data;
};

sndwich().then((data) => {
    /* D3: Data-Driven Documents (v7.9.0, ISC license, d3 / d3), Contributors, https://github.com/d3/d3 [1394]

        Getting started, D3 in vanilla HTML, D3, on modification with append.

        Adapted and modified Radial dendrogram, Radial cluster tree, D3, Gallery (Jun. 17, 2025, ISC license).

        Modifications: const cx = width * 0.53; const cy = height * 0.51; const radius = Math.min(width, height) / 2 - 90; .attr("style", "width: 50%; height: auto; font: 2px arial-narrow;") of const svg. and info1.append(svg.node()); where info1 as id and an adapted append modification [1394]. Adapted asynchronous javascript [1].

    Observable Plot (v0.6.17, ISC license, observable / plot), Contributors, https://github.com/observablehq/plot [1]
    
        Plots, Marks options, Plot, on adapted asynchronous javascript modification.
    
    */
       
    // Specify the chart’s dimensions.
    const width = 1152;
    const height = width;

    const cx = width * 0.53; // adjust as needed to fit 
    const cy = height * 0.51; // adjust as needed to fit
    const radius = Math.min(width, height) / 2 - 90;

    // Create a radial cluster layout. The layout’s first dimension (x)
    // is the angle, while the second (y) is the radius.
    const tree = d3.cluster()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    // Sort the tree and apply the layout.
    const root = tree(d3.hierarchy(data)
        .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

    // Creates the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-cx, -cy, width, height])
        .attr("style", "width: 50%; height: auto; font: 2px arial-narrow;");

    // Append links.
    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .selectAll()
        .data(root.links())
        .join("path")
        .attr("d", d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y));

    // Append nodes.
    svg.append("g")
        .selectAll()
        .data(root.descendants())
        .join("circle")
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
        .attr("fill", d => d.children ? "#555" : "#999")
        .attr("r", 2.5);

    // Append labels.
    svg.append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll()
        .data(root.descendants())
        .join("text")
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0) rotate(${d.x >= Math.PI ? 180 : 0})`)
        .attr("dy", "0.31em")
        .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
        .attr("paint-order", "stroke")
        .attr("stroke", "white")
        .attr("fill", "currentColor")
        .text(d => d.data.name);

    info1.append(svg.node()); 

    return sndwich('IMCR_JSON/IMCR2.json');
}).catch((err) => {console.log('rejected:', err.message);
});

sndwich2().then((data) => {
    /* Open source Plotly charting library (v3.6.0, MIT license, plotly/plotly.js), Alex Johnson (https://orcid.org/0000-0003-4623-4147), Étienne Tétreault-Pinard, Contributors, Mojtaba Samimi (Jun. 1, 2026), Plotly, Inc. (copyright 2025), 10.5281/zenodo.13964707, https://github.com/plotly/plotly.js [1395]

        Adapted and modified Control Text Orientation Inside Pie Chart Sectors, Pie Charts in JavaScript, plotly | Graphing Libraries, Plotly (Copyright © 2026).

        Modifications: height, width, const, and info2 as id. Adapted asynchronous javascript [1].

    Contributing to Plotly's Graphing Libraries Documentation (plotly/graphing-library-docs, Creative Commons Legal Code Attribution 3.0 Unported), Plotly, Contributors, https://github.com/plotly/graphing-library-docs?tab=readme-ov-file [1396]

        CC BY 3.0 Attribution 3.0 Unported Deed, cc creative commons, https://creativecommons.org/licenses/by/3.0/deed.en

    Observable Plot (v0.6.17, ISC license, observable / plot), Contributors, https://github.com/observablehq/plot [1]
    
        Plots, Marks options, Plot, on adapted asynchronous javascript modification.  
    */  

    const layout = [{
        height: 200,
        width: 300
    }]

    Plotly.newPlot('info2', data, layout);

    return sndwich('IMCR_JSON/IMCR3.json');

}).catch((err) => {console.log('rejected:', err.message);
});

sndwich3().then((data) => {

    /* 
        Observable Plot (v0.6.17, ISC license, observable / plot), Contributors, https://github.com/observablehq/plot [1]

            Getting started, Plot in vanilla HTML, Plot, on adapted append modification.

            Plots, Marks options, Plot, on adapted asynchronous javascript modification.

            Plots, Other options, Plot, on title modification.

            Vertical bars, rotated labels, Observable, Observable Plot, Gallery (May 9, 2023), on input and no visible license.

            Adapted and modified Vertical bar chart, Observable, Observable Plot, Gallery (May 9, 2023), no visible license.
        
            Modifications: Plot.barY(data, {x: "month", y: "total", sort: {x: "y"}}) with an exclusion of the reverse. Also, percent was eliminated from the y object. const div = document.querySelector("#info3"); div.append(plot); where this another adapted append modification and info3 was id [1]. Adapted “Vertical bars, rotated labels” for JSON input. Modified for adapted asynchronous javascript [1]. Adapted and modified for inclusion of a different title, title: "Total Media Information Per Month" [1].
    */

    const plot = Plot.plot({
        y: {
            grid: true
        },
        title: "Total Media Information Per Month",
        marks: [
            Plot.ruleY([0]),
            Plot.barY(data, {x: "month", y: "total", sort: {x: "y"}})
        ]
    });

    const div = document.querySelector("#info3");
    div.append(plot);

    return sndwich('IMCR_JSON/IMCR4.json');

}).catch((err) => {console.log('rejected:', err.message);
});

sndwich4().then((data) => {

    /* 
    D3: Data-Driven Documents (v7.9.0, ISC license, d3 / d3), Contributors, https://github.com/d3/d3 [1394]

        Getting started, D3 in vanilla HTML, D3, on modification with append.

        Adapted and modified Marimekko, D3, Gallery, Mike Bostock (Aug. 1, 2023, ISC license).

         Modifications: const width = 65000; const marginTop = 1000; const marginRight = 11500; const marginBottom = -5050; const marginLeft = 100; .attr("style", "max-width: 100%; height: auto; font: 130px sans-serif;"); of const svg. where modification was the font.  const color = d3.scaleOrdinal(d3.schemeCategory10).domain(data.map(d => d.month)); modification of the data.map and .month, (d3.hierarchy(d3.group(data, d => d.year, d => d.month)).sum(d => d.value)) where modification was d.year, d.month, const root = treemap(data); where modification was data. info4.append(svg.node()); where info4 was the id and an adapted append modification [1394]. Modification for JSON input [1394] Adapted asynchronous javascript [1].

    Observable Plot (v0.6.17, ISC license, observable / plot), Contributors, https://github.com/observablehq/plot [1]

        Plots, Marks options, Plot, on adapted asynchronous javascript modification. 
    
    */
    
    // Specify the chart’s dimensions.
    const width = 65000;
    const height = width;
    const marginTop = 1000;
    const marginRight = 11500;
    const marginBottom = -5050;
    const marginLeft = 100;

    // Create the color scale.
    const color = d3.scaleOrdinal(d3.schemeCategory10).domain(data.map(d => d.month));

    // Compute the layout.
    const treemap = data => d3.treemap()
        .round(true)
        .tile(d3.treemapSliceDice)
        .size([
        width - marginLeft - marginRight, 
        height - marginTop - marginBottom
        ])
    (d3.hierarchy(d3.group(data, d => d.year, d => d.month)).sum(d => d.value))
    .each(d => {
        d.x0 += marginLeft;
        d.x1 += marginLeft;
        d.y0 += marginTop;
        d.y1 += marginTop;
    });
    const root = treemap(data);

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto; font: 130px sans-serif;");

    // Position the nodes.
    const node = svg.selectAll("g")
    .data(root.descendants())
    .join("g")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

    const format = d => d.toLocaleString();

    // Draw column labels.
    const column = node.filter(d => d.depth === 1);

    column.append("text")
        .attr("x", 3)
        .attr("y", "-1.7em")
        .style("font-weight", "bold")
        .text(d => d.data[0]);

    column.append("text")
        .attr("x", 3)
        .attr("y", "-0.5em")
        .attr("fill-opacity", 0.7)
        .text(d => format(d.value));

    column.append("line")
        .attr("x1", -0.5)
        .attr("x2", -0.5)
        .attr("y1", -30)
        .attr("y2", d => d.y1 - d.y0)
        .attr("stroke", "#000")

    // Draw leaves.
    const cell = node.filter(d => d.depth === 2);

    cell.append("rect")
        .attr("fill", d => color(d.data[0]))
        .attr("fill-opacity", (d, i) => d.value / d.parent.value)
        .attr("width", d => d.x1 - d.x0 - 1)
        .attr("height", d => d.y1 - d.y0 - 1);

    cell.append("text")
        .attr("x", 3)
        .attr("y", "1.1em")
        .text(d => d.data[0]);

    cell.append("text")
        .attr("x", 3)
        .attr("y", "2.3em")
        .attr("fill-opacity", 0.7)
        .text(d => format(d.value));

    info4.append(svg.node());

    return sndwich('IMCR_JSON/IMCR5.json');
}).catch((err) => {console.log('rejected:', err.message);});

sndwich5().then((data) => {
    /* 
        D3: Data-Driven Documents (v7.9.0, ISC license, d3 / d3), Contributors, https://github.com/d3/d3 [1394]

            Getting started, D3 in vanilla HTML, D3, on modification with append.

            Adapted and modified Zoomable sunburst, D3, Gallery, Mike Bostock (May 20, 2025, ISC license).

            Modifications: const width = 528; info5.append(svg.node()); where info5 was the id and an append modification [1394]. Adapted asynchronous javascript [1].

        Observable Plot (v0.6.17, ISC license, observable / plot), Contributors, https://github.com/observablehq/plot [1]

            Plots, Marks options, Plot, on adapted asynchronous javascript modification.
    
    */
    
    // Specify the chart’s dimensions.
    const width = 528; 
    const height = width;
    const radius = width / 6;

    // Create the color scale.
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

    // Compute the layout.
    const hierarchy = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
    const root = d3.partition()
        .size([2 * Math.PI, hierarchy.height + 1])
        (hierarchy);
    root.each(d => d.current = d);

    // Create the arc generator.
    const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, width])
        .style("font", "10px sans-serif");

    // Append the arcs.
    const path = svg.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
        .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
        .attr("d", d => arc(d.current));

    // Make them clickable if they have children.
    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    const format = d3.format(",d");
    path.append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    const label = svg.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", d => +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => d.data.name);

    const parent = svg.append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

    // Handle zoom on click.
    function clicked(event, p) {
        parent.datum(p.parent || root);

        root.each(d => d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth)
        });

        const t = svg.transition().duration(event.altKey ? 7500 : 750);

        // Transition the data on all arcs, even the ones that aren’t visible,
        // so that if this transition is interrupted, entering arcs will start
        // the next transition from the desired position.
        path.transition(t)
            .tween("data", d => {
            const i = d3.interpolate(d.current, d.target);
            return t => d.current = i(t);
            })
        .filter(function(d) {
            return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none") 

            .attrTween("d", d => () => arc(d.current));

        label.filter(function(d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
    }
    
    function arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

    info5.append(svg.node());

    return sndwich('IMCR_JSON/IMCR6.json');

}).catch((err) => {console.log('rejected:', err.message);
});

sndwich6().then((data) => {    
    /* 
        Open source Plotly charting library (v3.6.0, MIT license, plotly/plotly.js), Alex Johnson (https://orcid.org/0000-0003-4623-4147), Étienne Tétreault-Pinard, Contributors, Mojtaba Samimi (Jun. 1, 2026), Plotly, Inc. (copyright 2025), 10.5281/zenodo.13964707, https://github.com/plotly/plotly.js [1395]

            Adapted and modified Rounded Corners on Bars, Bar Charts in JavaScript, plotly | Graphing Libraries, Plotly (Copyright © 2026).

            Modifications: no rounded corners, const, and info6 as id. Adapted asynchronous javascript [1].

        Contributing to Plotly’s Graphing Libraries Documentation (plotly/graphing-library-docs, Creative Commons Legal Code Attribution 3.0 Unported), Plotly, Contributors, https://github.com/plotly/graphing-library-docs?tab=readme-ov-file [1396]

            CC BY 3.0 Attribution 3.0 Unported Deed, cc creative commons, https://creativecommons.org/licenses/by/3.0/deed.en

        Observable Plot (v0.6.17, ISC license, observable / plot), Contributors, https://github.com/observablehq/plot [1]

            Plots, Marks options, Plot, on adapted asynchronous javascript modification.
    */

    const layout = {
        scattermode: 'group',
        title: {
            text: 'Total Media Information At Each Hour of Day'
        },
        xaxis:{
            title: {
                text: '24 hrs'
            }
        },
        yaxis:{
            title: {
                text: 'Total Number of Media Information'
            }
        }
    };
   
    Plotly.newPlot('info6', data, layout);

}).catch((err) => {console.log('rejected:', err.message);
});