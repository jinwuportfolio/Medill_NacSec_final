
// Set tooltips
var axis = d3.svg.axis().orient("top").ticks(4);

var tip = d3.tip()
            .attr('class', 'd3-tip')
            // .offset([-10, 0])
            .html(function(d) {
              // return d.name + " has <br>" + d.value + " stateless people";
              return d.properties.name;
            })

// Set margin, with and height
var margin = {top: 20, right: 30, bottom: 30, left: 30},
            width = 900 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;  
// Set projection 
var projection = d3.geo.mercator()
                   .scale(130)
                   .translate( [width / 2, height / 1.5]);
// Set path
var path = d3.geo.path().projection(projection);
// Setsvg and then give it a class called map
var svg = d3.select("#dataViz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr('class', 'map');
// Call tooltips
svg.call(tip);


d3.csv("data/polio_1988.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }
      
        svg.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
          .style("opacity",0.8)
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })


        // svg.selectAll("text")
        // .data(json.features)
        // .enter()
        // .append("svg:text")
        // .text(function(d) {
        //   return d.properties.name;
        // })
        // .attr("x",function(d){
        //   return path.centroid(d)[0];
        // })
        // .attr("y",function(d){
        //   return path.centroid(d)[1];
        // })
        // .attr("text-anchor","middle")
        // .attr('font-size','6pt');
      });

  });

  var function1988 = function() {
      document.getElementById("text").innerHTML = "1988";
               document.getElementById("year").innerHTML = "1988";
      document.getElementById("countrynumber").innerHTML = "67";

      svg.selectAll("path").remove();

     d3.csv("data/polio_1988.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
          .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })

      });

  });
  };

    var function1989 = function() {
      document.getElementById("text").innerHTML = "1989";
      document.getElementById("year").innerHTML = "1989";
      document.getElementById("countrynumber").innerHTML = "64";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1989.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
          .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })

      });

  });
  };

  var function1990 = function() {
      document.getElementById("text").innerHTML = "1990";
      document.getElementById("year").innerHTML = "1990";
      document.getElementById("countrynumber").innerHTML = "58";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1990.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)   
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })
      });

  });
  };

   var function1991 = function() {
      document.getElementById("text").innerHTML = "1991";
      document.getElementById("year").innerHTML = "1991";
      document.getElementById("countrynumber").innerHTML = "55";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1991.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
          .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })
      });

  });
  };

   var function1992 = function() {
      document.getElementById("text").innerHTML = "1992";
      document.getElementById("year").innerHTML = "1992";
      document.getElementById("countrynumber").innerHTML = "51";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1992.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
          .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })
      });

  });
  };

   var function1993 = function() {
      document.getElementById("text").innerHTML = "1993";
      document.getElementById("year").innerHTML = "1993";
      document.getElementById("countrynumber").innerHTML = "48";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1993.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })
      });

  });
  };

   var function1994 = function() {
      document.getElementById("text").innerHTML = "1994";
      document.getElementById("year").innerHTML = "1994";
      document.getElementById("countrynumber").innerHTML = "46";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1994.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })
      });

  });
  };

   var function1995 = function() {
      document.getElementById("text").innerHTML = "1995";
      document.getElementById("year").innerHTML = "1995";
      document.getElementById("countrynumber").innerHTML = "44";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1995.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })
      });

  });
  };

   var function1996 = function() {
      document.getElementById("text").innerHTML = "1996";
      document.getElementById("year").innerHTML = "1996";
      document.getElementById("countrynumber").innerHTML = "38";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1996.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function1997 = function() {
      document.getElementById("text").innerHTML = "1997";
      document.getElementById("year").innerHTML = "1997";
      document.getElementById("countrynumber").innerHTML = "32";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1997.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3) 
          .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function1998 = function() {
      document.getElementById("text").innerHTML = "1998";
      document.getElementById("year").innerHTML = "1998";
      document.getElementById("countrynumber").innerHTML = "27";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1998.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function1999 = function() {
      document.getElementById("text").innerHTML = "1999";
      document.getElementById("year").innerHTML = "1999";
      document.getElementById("countrynumber").innerHTML = "25";

      svg.selectAll("path").remove();

      d3.csv("data/polio_1999.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function2000 = function() {
      document.getElementById("text").innerHTML = "2000";
       document.getElementById("year").innerHTML = "2000";
      document.getElementById("countrynumber").innerHTML = "19";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2000.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function2001 = function() {
      document.getElementById("text").innerHTML = "2001";
       document.getElementById("year").innerHTML = "2001";
      document.getElementById("countrynumber").innerHTML = "9";


      svg.selectAll("path").remove();

      d3.csv("data/polio_2001.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function2002 = function() {
      document.getElementById("text").innerHTML = "2002";
       document.getElementById("year").innerHTML = "2002";
      document.getElementById("countrynumber").innerHTML = "6";


      svg.selectAll("path").remove();

      d3.csv("data/polio_2002.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function2003 = function() {
      document.getElementById("text").innerHTML = "2003";
       document.getElementById("year").innerHTML = "2003";
      document.getElementById("countrynumber").innerHTML = "6";


      svg.selectAll("path").remove();

      d3.csv("data/polio_2003.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })  
      });

  });
  };

   var function2004 = function() {
      document.getElementById("text").innerHTML = "2004";
       document.getElementById("year").innerHTML = "2004";
      document.getElementById("countrynumber").innerHTML = "6";


      svg.selectAll("path").remove();

      d3.csv("data/polio_2004.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

   var function2005 = function() {
      document.getElementById("text").innerHTML = "2005";
       document.getElementById("year").innerHTML = "2005";
      document.getElementById("countrynumber").innerHTML = "5";


      svg.selectAll("path").remove();

      d3.csv("data/polio_2005.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

 var function2006 = function() {
      document.getElementById("text").innerHTML = "2006";
       document.getElementById("year").innerHTML = "2006";
      document.getElementById("countrynumber").innerHTML = "5";


      svg.selectAll("path").remove();

      d3.csv("data/polio_2006.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

 var function2007 = function() {
      document.getElementById("text").innerHTML = "2007";
          document.getElementById("year").innerHTML = "2007";
      document.getElementById("countrynumber").innerHTML = "4";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2007.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

 var function2008 = function() {
      document.getElementById("text").innerHTML = "2008";
          document.getElementById("year").innerHTML = "2008";
      document.getElementById("countrynumber").innerHTML = "4";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2008.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

 var function2009 = function() {
      document.getElementById("text").innerHTML = "2009";
          document.getElementById("year").innerHTML = "2009";
      document.getElementById("countrynumber").innerHTML = "4";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2009.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

 var function2010 = function() {
      document.getElementById("text").innerHTML = "2010";
          document.getElementById("year").innerHTML = "2010";
      document.getElementById("countrynumber").innerHTML = "4";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2010.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

var function2011 = function() {
      document.getElementById("text").innerHTML = "2011";
          document.getElementById("year").innerHTML = "2011";
      document.getElementById("countrynumber").innerHTML = "4";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2011.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

  var function2012 = function() {
      document.getElementById("text").innerHTML = "2012";
          document.getElementById("year").innerHTML = "2012";
      document.getElementById("countrynumber").innerHTML = "3";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2012.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

var function2013 = function() {
      document.getElementById("text").innerHTML = "2013";
               document.getElementById("year").innerHTML = "2013";
      document.getElementById("countrynumber").innerHTML = "3";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2013.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

var function2014 = function() {
      document.getElementById("text").innerHTML = "2014";
               document.getElementById("year").innerHTML = "2014";
      document.getElementById("countrynumber").innerHTML = "3";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2014.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })   
      });

  });
  };

var function2015 = function() {
      document.getElementById("text").innerHTML = "2015";
               document.getElementById("year").innerHTML = "2015";
      document.getElementById("countrynumber").innerHTML = "2";

      svg.selectAll("path").remove();

      d3.csv("data/polio_2015.csv",function(data) {

        d3.json("world_countries.json", function(json) {
      
            for (var i=0; i< data.length; i++) {
          var dataCountry = data[i].name;

          var dataValue = parseFloat(data[i].value);

          for (var j = 0; j < json.features.length; j++) {
            var jsonCountry = json.features[j].properties.name;

            if (dataCountry == jsonCountry) {
              json.features[j].properties.value = dataValue;

              break;
            }
          }
        }

        svg.selectAll("path")
          .data(json.features)
          .enter()
          // .transition()
          // .duration(1000)
          .append("path")
          .attr("class","map")
          .attr("d",path)
          .style("fill",function(d) {
            var value = d.properties.value;
            if (value ==1) {
              return "rgb(249, 77, 0)";
            } else {
              return "rgb(192,192,192)";
            }
          })
          .style("stroke","white")
          .style("stroke-width",0.3)
           .style("opacity",0.8)   
          .on("mouseover",function(d) {
            tip.show(d);
            d3.select(this)
              .style("opacity",1)
              .style("stroke-width",1.5);
          })
          .on("mouseout",function(d) {
            tip.hide(d);
            d3.select(this)
            .style("opacity",0.8)
            .style("stroke-width",0.3);
          })  
      });

  });
  };



  var sliderfunction = function (event,value) {
    if (value == 1988) {
      function1988();
    }
    else if (value == 1989) {
      function1989();
    }
    else if (value == 1990) {
      function1990();
    }
     else if (value == 1991) {
      function1991();
    }
     else if (value == 1992) {
      function1992();
    }
     else if (value == 1993) {
      function1993();
    }
     else if (value == 1994) {
      function1994();
    }
     else if (value == 1995) {
      function1995();
    }
     else if (value == 1996) {
      function1996();
    }
     else if (value == 1997) {
      function1997();
    }
     else if (value == 1998) {
      function1998();
    }
     else if (value == 1999) {
      function1999();
    }
     else if (value == 2000) {
      function2000();
    }
    else if (value == 2001) {
      function2001();
    }
    else if (value == 2002) {
      function2002();
    }
    else if (value == 2003) {
      function2003();
    }
    else if (value == 2004) {
      function2004();
    }
    else if (value == 2005) {
      function2005();
    }
    else if (value == 2006) {
      function2006();
    }
    else if (value == 2007) {
      function2007();
    }
    else if (value == 2008) {
      function2008();
    }
    else if (value == 2009) {
      function2009();
    }
    else if (value == 2010) {
      function2010();
    }
     else if (value == 2011) {
      function2011();
    }
     else if (value == 2012) {
      function2012();
    }
     else if (value == 2013) {
      function2013();
    }
     else if (value == 2014) {
      function2014();
    }
     else if (value == 2015) {
      function2015();
    }
    else if (value == 1988) {
      function1988();
    }
    else {
      console.log(value);
  }
};

  d3.select('#time_slider').call(d3.slider().axis(true).min(1988).max(2015).step(1).on("slide",sliderfunction));