var chart = c3.generate( {
    height:500,
    bindto:document.getElementById('graphic_line'),
    data: {
        x:'year',
        columns: [
        ['year','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
        
        ['Total Polio Cases',55180,70238,55528,42674,36884,40433,35471,42308,37167,27454,27928,13274,15304,10500,8666,7044,4074,5186,6347,7141,2971,497,1922,784,1258,2032,2021,1386,1731,1789,1348,716,291,481,414,59],
             ['Pakistan',2980,4334,3506,901,595,2159,643,1214,935,811,777,1147,1046,1803,527,508,341,1147,341,558,199,119,90,103,53,28,40,32,117,89,144,198,74,141,328,32],
        
        ['Total_Countries_Affected',127,121,123,120,117,111,106,100,102,93,78,71,69,63,63,60,52,47,46,46,31,19,10,15,20,20,19,12,18,25,22,19,911,11,8],
        ],
        type:'line',
        types:{
        Total_Countries_Affected:'bar',
    },
        colors:{
            Total_Countries_Affected:'#636363',
        },
        axes:{
            Total_Countries_Affected:'y2',
        }
    },       
        axis:{    
            x:{
                type:'timeseries',
                label:{
                    text:'Year',
                    position:'outer-center',
                }
            },
            y:{
                padding:{bottom:13},
                label:{
                    text:'Number of polio cases',
                    position:'outer-middle',
                }
            },
            y2:{
                show:true,
                padding:{bottom:0},
                label:{
                    text:'Total countries affected',
                    position:'outer-middle',
                }
            }
        }
});