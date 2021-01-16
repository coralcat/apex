google.charts.load("current", {'packages': ['corechart', 'bar', 'scatter']});
google.charts.setOnLoadCallback(drawCOxMAPChart);
google.charts.setOnLoadCallback(drawCOxETCO2Chart);
google.charts.setOnLoadCallback(drawRSO2Chart);
google.charts.setOnLoadCallback(drawMAPChart);
google.charts.setOnLoadCallback(drawETCO2Chart);
google.charts.setOnLoadCallback(drawSJVO2Chart);
google.charts.setOnLoadCallback(drawADJLChart);
google.charts.setOnLoadCallback(drawLOIChart);
google.charts.setOnLoadCallback(drawAVDO2Chart);
google.charts.setOnLoadCallback(drawCEO2Chart);
google.charts.setOnLoadCallback(drawAJglcChart);
google.charts.setOnLoadCallback(drawAJCO2Chart);
google.charts.setOnLoadCallback(drawRQChart);
google.charts.setOnLoadCallback(drawNPIChart);
google.charts.setOnLoadCallback(drawPupilChart);
google.charts.setOnLoadCallback(drawModalCOxMAPChart);
google.charts.setOnLoadCallback(drawRSO2MAPChart);
google.charts.setOnLoadCallback(drawCO2xETCO2Chart);
google.charts.setOnLoadCallback(drawRSO2ETCO2Chart);


function drawCOxChart() {
    var data_COx = new google.visualization.DataTable();
    data_COx.addColumn('date', 'Time of Day');
    data_COx.addColumn('number', 'COx');
    data_COx.addColumn({'type': 'number', 'role': 'interval'});
    data_COx.addColumn({'type': 'number', 'role': 'interval'});
    data_COx.addColumn({'type': 'string', 'role': 'annotation'});
    data_COx.addRows([
        [new Date(2020, 4, 20, 13), 0.2, null, null, null],
        [new Date(2020, 4, 20, 14), 0.2, null, null, null],
        [new Date(2020, 4, 20, 15), 0.3, null, null, null],
        [new Date(2020, 4, 20, 16), 0.2, null, null, null],
        [new Date(2020, 4, 20, 17), 0.25, null, null, null],
        [new Date(2020, 4, 20, 18), 0.36, null, null, null],
        [new Date(2020, 4, 20, 19), 0.17, null, null, null],
        [new Date(2020, 4, 20, 20), 0.28, null, null, null],
        [new Date(2020, 4, 20, 21), 0.29, null, null, null],
        [new Date(2020, 4, 20, 22), 0.30, 0, .5, "Fluid Infusion"],
        [new Date(2020, 4, 20, 23), 0.2, null, null, null],
        [new Date(2020, 4, 20, 24), 0.2, null, null, null],
        [new Date(2020, 4, 21, 1), 0.3, null, null, null],
        [new Date(2020, 4, 21, 2), 0.3, null, null, null],
        [new Date(2020, 4, 21, 3), 0.25, null, null, null],
        [new Date(2020, 4, 21, 4), 0.36, null, null, null],
        [new Date(2020, 4, 21, 5), 0.17, null, null, null],
        [new Date(2020, 4, 21, 6), 0.28, null, null, null],
        [new Date(2020, 4, 21, 7), 0.29, null, null, null],
        [new Date(2020, 4, 21, 8), 0.30, null, null, null],
        [new Date(2020, 4, 21, 9), 0.2, null, null, null],
        [new Date(2020, 4, 21, 10), 0.2, null, null, null],
        [new Date(2020, 4, 21, 11), 0.3, null, null, null],
        [new Date(2020, 4, 21, 12), 0.3, null, null, null],
        [new Date(2020, 4, 21, 13), 0.25, null, null, null],
        [new Date(2020, 4, 21, 14), 0.36, null, null, null],
        [new Date(2020, 4, 21, 15), 0.17, null, null, null],
        [new Date(2020, 4, 21, 16), 0.28, null, null, null],
        [new Date(2020, 4, 21, 17), 0.29, null, null, null],
        [new Date(2020, 4, 21, 18), 0.30, null, null, null],
        [new Date(2020, 4, 21, 19), 0.2, null, null, null],
        [new Date(2020, 4, 21, 20), 0.2, null, null, null],
        [new Date(2020, 4, 21, 21), 0.3, null, null, null],
        [new Date(2020, 4, 21, 22), 0.3, null, null, null],
        [new Date(2020, 4, 21, 23), 0.25, null, null, null],
        [new Date(2020, 4, 21, 24), 0.36, null, null, null],
        [new Date(2020, 4, 22, 1), 0.17, null, null, null],
        [new Date(2020, 4, 22, 2), 0.28, null, null, null],
        [new Date(2020, 4, 22, 3), 0.29, null, null, null],
        [new Date(2020, 4, 22, 4), 0.30, null, null, null],
    ]);

    var options_COx = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        curveType: 'function',
        intervals: {
            color: "yellow"
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "COx",
            lineWidth: 10,
            ticks: [0, .3, .5],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_COx = new google.visualization.AreaChart(document.getElementById("chart_COx"));
    chart_COx.draw(data_COx, options_COx);
}


let jsonData = $.ajax({
    url: "data/data_2528767.json",
    dataType: "json",
    async: false
}).responseText;

jsonData = JSON.parse(jsonData)
const dataValue = Object.values(jsonData)

function drawCOxMAPChart() {
    const data = new google.visualization.DataTable(jsonData);

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'average');

    for (let i in dataValue) {
        for (let j in dataValue[13]) {
            let timestamp = String(dataValue[13][j]);

            let year = timestamp.substring(0,4);
            let month = timestamp.substring(4,6);
            let day = timestamp.substring(6,8);
            let hours = timestamp.substring(8,10);
            let minutes = timestamp.substring(10,12);
            let seconds = timestamp.substring(12,14);

            timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

            data.addRow([
                timestamp,
                parseFloat(dataValue[14][j]),
                parseFloat(dataValue[15][j]),
                parseFloat(dataValue[16][j]),
            ]);
        }

    }

    var options = {
        colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 1,
        lineWidth: 1,
        series: {2: {lineWidth: 1}},
        intervals: {
            color: "yellow"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            ticks: [-1, 0, 1],
            title: "COx MAP",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_COxMAP = new google.visualization.LineChart(document.getElementById('chart_COxMAP'));
    chart_COxMAP.draw(data, options);
}


function drawCOxETCO2Chart() {
    var data = new google.visualization.DataTable(jsonData);

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'average');

    for (var i in dataValue) {
        for (var j in dataValue[13]) {
            var timestamp = String(dataValue[13][j]);

            var year = timestamp.substring(0,4);
            var month = timestamp.substring(4,6);
            var day = timestamp.substring(6,8);
            var hours = timestamp.substring(8,10);
            var minutes = timestamp.substring(10,12);
            var seconds = timestamp.substring(12,14);

            timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

            data.addRow([
                timestamp,
                parseFloat(dataValue[17][j]),
                parseFloat(dataValue[18][j]),
                parseFloat(dataValue[19][j]),
            ]);
        }

    }

    var options = {
        colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 1,
        lineWidth: 1,
        intervals: {
            color: "yellow"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "COx ETCO2",
            ticks: [-1, 0, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_COxETCO2 = new google.visualization.LineChart(document.getElementById('chart_COxETCO2'));
    chart_COxETCO2.draw(data, options);
}



console.log(dataValue[1].length)
console.log(dataValue[2].length)
console.log(dataValue[4].length)
console.log(dataValue[19].length)

function drawRSO2Chart() {
    var data = new google.visualization.DataTable(jsonData);

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');

    for (var i in dataValue) {
        for (var j in dataValue[4]) {
            var timestamp = String(dataValue[4][j]);

            var year = timestamp.substring(0,4);
            var month = timestamp.substring(4,6);
            var day = timestamp.substring(6,8);
            var hours = timestamp.substring(8,10);
            var minutes = timestamp.substring(10,12);
            var seconds = timestamp.substring(12,14);

            timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

            data.addRow([
                timestamp,
                parseFloat(dataValue[1][j]),
                parseFloat(dataValue[2][j]),
            ]);
        }

    }

    var options = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 1,
        lineWidth: 1,
        intervals: {
            color: "yellow"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "RSO2",
            baselineColor: '#777',
            gridlineColor: '#777',
            //ticks: [20, 30, 40, 50, 60],
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_RSO2 = new google.visualization.LineChart(document.getElementById('chart_RSO2'));
    chart_RSO2.draw(data, options);
}


function drawMAPChart() {
    var data_MAP = new google.visualization.DataTable();
    data_MAP.addColumn('date', 'Time of Day');
    data_MAP.addColumn('number', 'OP_BP_min1');
    data_MAP.addColumn('number', 'OP_BP_min2');
    data_MAP.addColumn('number', 'OP_BP_max1');
    data_MAP.addColumn('number', 'OP_BP_max2');
    data_MAP.addColumn('number', 'MAP');
    data_MAP.addColumn({'type': 'number', 'role': 'interval'});
    data_MAP.addColumn({'type': 'number', 'role': 'interval'});
    data_MAP.addRows([
        [new Date(2020, 4, 20, 13), 80, 80, 85, 85, 56.7, null, null],
        [new Date(2020, 4, 20, 14), 80, 80, 85, 85, 55.72, null, null],
        [new Date(2020, 4, 20, 15), 80, 80, 85, 85, 56.03, null, null],
        [new Date(2020, 4, 20, 16), 80, 80, 85, 85, 56.72, null, null],
        [new Date(2020, 4, 20, 17), 80, 80, 85, 85, 57.46, null, null],
        [new Date(2020, 4, 20, 18), 80, 80, 85, 85, 57.7, null, null],
        [new Date(2020, 4, 20, 19), 81, 81, 90, 90, 57.91, null, null],
        [new Date(2020, 4, 20, 20), 81, 81, 90, 90, 58.05, null, null],
        [new Date(2020, 4, 20, 21), 81, 81, 90, 90, 58.34, null, null],
        [new Date(2020, 4, 20, 22), 81, 81, 90, 90, 59.95, 0, 150],
        [new Date(2020, 4, 20, 23), 81, 81, 90, 90, 86.67, null, null],
        [new Date(2020, 4, 20, 24), 81, 81, 90, 90, 89.41, null, null],
        [new Date(2020, 4, 21, 1), 75, 75, 80, 80, 90.2, null, null],
        [new Date(2020, 4, 21, 2), 75, 75, 80, 80, 90.6, null, null],
        [new Date(2020, 4, 21, 3), 75, 75, 80, 80, 90.94, null, null],
        [new Date(2020, 4, 21, 4), 75, 75, 80, 80, 92.27, null, null],
        [new Date(2020, 4, 21, 5), 75, 75, 80, 80, 93.99, null, null],
        [new Date(2020, 4, 21, 6), 75, 75, 80, 80, 94.72, null, null],
        [new Date(2020, 4, 21, 7), 75, 75, 80, 80, 95.18, null, null],
        [new Date(2020, 4, 21, 8), 75, 75, 80, 80, 96.02, null, null],
        [new Date(2020, 4, 21, 9), 75, 75, 80, 80, 96.86, null, null],
        [new Date(2020, 4, 21, 10), 78, 78, 83, 83, 97.02, null, null],
        [new Date(2020, 4, 21, 11), 78, 78, 83, 83, 98.35, null, null],
        [new Date(2020, 4, 21, 12), 78, 78, 83, 83, 99.17, null, null],
        [new Date(2020, 4, 21, 13), 78, 78, 83, 83, 99.11, null, null],
        [new Date(2020, 4, 21, 14), 78, 78, 83, 83, 98.54, null, null],
        [new Date(2020, 4, 21, 15), 78, 78, 83, 83, 98.38, null, null],
        [new Date(2020, 4, 21, 16), 78, 78, 83, 83, 99.08, null, null],
        [new Date(2020, 4, 21, 17), 78, 78, 83, 83, 99.08, null, null],
        [new Date(2020, 4, 21, 18), 78, 78, 83, 83, 99.11, null, null],
        [new Date(2020, 4, 21, 19), 78, 78, 83, 83, 102.45, null, null],
        [new Date(2020, 4, 21, 20), 78, 78, 83, 83, 102.28, null, null],
        [new Date(2020, 4, 21, 21), 78, 78, 83, 83, 101.22, null, null],
        [new Date(2020, 4, 21, 22), 78, 78, 83, 83, 99.86, null, null],
        [new Date(2020, 4, 21, 23), 78, 78, 83, 83, 99.05, null, null],
        [new Date(2020, 4, 21, 24), 78, 78, 83, 83, 99.35, null, null],
        [new Date(2020, 4, 22, 1), 80, 80, 85, 85, 99.26, null, null],
        [new Date(2020, 4, 22, 2), 80, 80, 85, 85, 98.99, null, null],
        [new Date(2020, 4, 22, 3), 80, 80, 85, 85, 99.1, null, null],
        [new Date(2020, 4, 22, 4), 80, 80, 85, 85, 99.25, null, null],
    ]);

    var options_MAP = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        curveType: 'function',
        intervals: {
            color: "yellow"
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "MAP",
            ticks: [0, 50, 100, 150],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        },
        seriesType: 'candlesticks',
        series: {
            1: {
                type: 'line',
                color: 'darkseagreen'
            },
        },
        bar: {groupWidth: '20%'},
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
            risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
        }
    };

    var chart_MAP = new google.visualization.ComboChart(document.getElementById('chart_MAP'));
    chart_MAP.draw(data_MAP, options_MAP);
}


function drawETCO2Chart() {
    var data_ETCO2 = new google.visualization.DataTable();
    data_ETCO2.addColumn('date', 'Time of Day');
    data_ETCO2.addColumn('number', 'OP_BP_min1');
    data_ETCO2.addColumn('number', 'OP_BP_min2');
    data_ETCO2.addColumn('number', 'OP_BP_max1');
    data_ETCO2.addColumn('number', 'OP_BP_max2');
    data_ETCO2.addColumn('number', 'ETCO2');
    data_ETCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_ETCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_ETCO2.addRows([
        [new Date(2020, 4, 20, 13), 45, 45, 50, 50, 46.7, null, null],
        [new Date(2020, 4, 20, 14), 45, 45, 50, 50, 45.72, null, null],
        [new Date(2020, 4, 20, 15), 45, 45, 50, 50, 46.03, null, null],
        [new Date(2020, 4, 20, 16), 45, 45, 50, 50, 46.72, null, null],
        [new Date(2020, 4, 20, 17), 45, 45, 50, 50, 47.46, null, null],
        [new Date(2020, 4, 20, 18), 45, 45, 50, 50, 47.7, null, null],
        [new Date(2020, 4, 20, 19), 45, 45, 50, 50, 47.91, null, null],
        [new Date(2020, 4, 20, 20), 45, 45, 50, 50, 48.05, null, null],
        [new Date(2020, 4, 20, 21), 45, 45, 50, 50, 48.34, null, null],
        [new Date(2020, 4, 20, 22), 45, 45, 50, 50, 49.95, 0, 60],
        [new Date(2020, 4, 20, 23), 45, 45, 50, 50, 46.67, null, null],
        [new Date(2020, 4, 20, 24), 45, 45, 50, 50, 49.41, null, null],
        [new Date(2020, 4, 21, 1), 38, 38, 43, 43, 50.2, null, null],
        [new Date(2020, 4, 21, 2), 38, 38, 43, 43, 50.6, null, null],
        [new Date(2020, 4, 21, 3), 38, 38, 43, 43, 50.94, null, null],
        [new Date(2020, 4, 21, 4), 38, 38, 43, 43, 52.27, null, null],
        [new Date(2020, 4, 21, 5), 38, 38, 43, 43, 53.99, null, null],
        [new Date(2020, 4, 21, 6), 38, 38, 43, 43, 54.72, null, null],
        [new Date(2020, 4, 21, 7), 38, 38, 43, 43, 55.18, null, null],
        [new Date(2020, 4, 21, 8), 38, 38, 43, 43, 56.02, null, null],
        [new Date(2020, 4, 21, 9), 38, 38, 43, 43, 56.86, null, null],
        [new Date(2020, 4, 21, 10), 42, 42, 47, 47, 47.02, null, null],
        [new Date(2020, 4, 21, 11), 42, 42, 47, 47, 48.35, null, null],
        [new Date(2020, 4, 21, 12), 42, 42, 47, 47, 49.17, null, null],
        [new Date(2020, 4, 21, 13), 42, 42, 47, 47, 49.11, null, null],
        [new Date(2020, 4, 21, 14), 42, 42, 47, 47, 48.54, null, null],
        [new Date(2020, 4, 21, 15), 42, 42, 47, 47, 48.38, null, null],
        [new Date(2020, 4, 21, 16), 42, 42, 47, 47, 49.08, null, null],
        [new Date(2020, 4, 21, 17), 42, 42, 47, 47, 49.08, null, null],
        [new Date(2020, 4, 21, 18), 42, 42, 47, 47, 49.11, null, null],
        [new Date(2020, 4, 21, 19), 42, 42, 47, 47, 52.45, null, null],
        [new Date(2020, 4, 21, 20), 42, 42, 47, 47, 52.28, null, null],
        [new Date(2020, 4, 21, 21), 42, 42, 47, 47, 51.22, null, null],
        [new Date(2020, 4, 21, 22), 42, 42, 47, 47, 49.86, null, null],
        [new Date(2020, 4, 21, 23), 42, 42, 47, 47, 49.05, null, null],
        [new Date(2020, 4, 21, 24), 42, 42, 47, 47, 49.35, null, null],
        [new Date(2020, 4, 22, 1), 40, 40, 45, 45, 49.26, null, null],
        [new Date(2020, 4, 22, 2), 40, 40, 45, 45, 48.99, null, null],
        [new Date(2020, 4, 22, 3), 40, 40, 45, 45, 49.1, null, null],
        [new Date(2020, 4, 22, 4), 40, 40, 45, 45, 49.25, null, null],
    ]);

    var options_ETCO2 = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        curveType: 'function',
        intervals: {
            color: "yellow"
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "ETCO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        },
        seriesType: 'candlesticks',
        series: {
            1: {
                type: 'line',
                color: 'darkseagreen'
            },
        },
        bar: {groupWidth: '20%'},
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
            risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
        }
    };

    var chart_ETCO2 = new google.visualization.ComboChart(document.getElementById('chart_ETCO2'));
    chart_ETCO2.draw(data_ETCO2, options_ETCO2);
}


function drawSJVO2Chart() {
    var data_SJVO2 = new google.visualization.DataTable();
    data_SJVO2.addColumn('date', 'Time of Day');
    data_SJVO2.addColumn('number', 'MAP');
    data_SJVO2.addColumn({'type': 'number', 'role': 'interval'});
    data_SJVO2.addColumn({'type': 'number', 'role': 'interval'});
    data_SJVO2.addRows([
        [new Date(2020, 4, 20, 13), 60, null, null],
        [new Date(2020, 4, 20, 14), 61, null, null],
        [new Date(2020, 4, 20, 15), 63, null, null],
        [new Date(2020, 4, 20, 16), 67, null, null],
        [new Date(2020, 4, 20, 17), 65, null, null],
        [new Date(2020, 4, 20, 18), 70, null, null],
        [new Date(2020, 4, 20, 19), 72, null, null],
        [new Date(2020, 4, 20, 20), 73, null, null],
        [new Date(2020, 4, 20, 21), 71, null, null],
        [new Date(2020, 4, 20, 22), 68, 20, 100],
        [new Date(2020, 4, 20, 23), 66, null, null],
        [new Date(2020, 4, 20, 24), 65, null, null],
        [new Date(2020, 4, 21, 1), 62, null, null],
        [new Date(2020, 4, 21, 2), 63, null, null],
        [new Date(2020, 4, 21, 3), 67, null, null],
        [new Date(2020, 4, 21, 4), 70, null, null],
        [new Date(2020, 4, 21, 5), 71, null, null],
        [new Date(2020, 4, 21, 6), 76, null, null],
        [new Date(2020, 4, 21, 7), 74, null, null],
        [new Date(2020, 4, 21, 8), 73, null, null],
        [new Date(2020, 4, 21, 9), 60, null, null],
        [new Date(2020, 4, 21, 10), 65, null, null],
        [new Date(2020, 4, 21, 11), 62, null, null],
        [new Date(2020, 4, 21, 12), 67, null, null],
        [new Date(2020, 4, 21, 13), 54, null, null],
        [new Date(2020, 4, 21, 14), 51, null, null],
        [new Date(2020, 4, 21, 15), 46, null, null],
        [new Date(2020, 4, 21, 16), 47, null, null],
        [new Date(2020, 4, 21, 17), 57, null, null],
        [new Date(2020, 4, 21, 18), 60, null, null],
        [new Date(2020, 4, 21, 19), 65, null, null],
        [new Date(2020, 4, 21, 20), 62, null, null],
        [new Date(2020, 4, 21, 21), 63, null, null],
        [new Date(2020, 4, 21, 22), 73, null, null],
        [new Date(2020, 4, 21, 23), 75, null, null],
        [new Date(2020, 4, 21, 24), 56, null, null],
        [new Date(2020, 4, 22, 1), 57, null, null],
        [new Date(2020, 4, 22, 2), 56, null, null],
        [new Date(2020, 4, 22, 3), 59, null, null],
        [new Date(2020, 4, 22, 4), 70, null, null],
    ]);

    var options_SJVO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: "yellow"
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "SJVO2",
            ticks: [20, 40, 60, 80, 100],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_SJVO2 = new google.visualization.ScatterChart(document.getElementById('chart_SJVO2'));

    chart_SJVO2.draw(data_SJVO2, options_SJVO2);
}


function drawADJLChart() {
    var data_ADJL = new google.visualization.DataTable();
    data_ADJL.addColumn('date', 'Time of Day');
    data_ADJL.addColumn('number', 'ADJL');
    data_ADJL.addColumn({'type': 'number', 'role': 'interval'});
    data_ADJL.addColumn({'type': 'number', 'role': 'interval'});
    data_ADJL.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_ADJL = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "ADJL",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_ADJL = new google.visualization.ScatterChart(document.getElementById('chart_ADJL'));

    chart_ADJL.draw(data_ADJL, options_ADJL);
}


function drawLOIChart() {
    var data_LOI = new google.visualization.DataTable();
    data_LOI.addColumn('date', 'Time of Day');
    data_LOI.addColumn('number', 'LOI');
    data_LOI.addColumn({'type': 'number', 'role': 'interval'});
    data_LOI.addColumn({'type': 'number', 'role': 'interval'});
    data_LOI.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_LOI = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "LOI",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_LOI = new google.visualization.ScatterChart(document.getElementById('chart_LOI'));

    chart_LOI.draw(data_LOI, options_LOI);
}


function drawAVDO2Chart() {
    var data_AVDO2 = new google.visualization.DataTable();
    data_AVDO2.addColumn('date', 'Time of Day');
    data_AVDO2.addColumn('number', 'AVDO2');
    data_AVDO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AVDO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AVDO2.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_AVDO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "AVDO2",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AVDO2 = new google.visualization.ScatterChart(document.getElementById('chart_AVDO2'));

    chart_AVDO2.draw(data_AVDO2, options_AVDO2);
}


function drawCEO2Chart() {
    var data_CEO2 = new google.visualization.DataTable();
    data_CEO2.addColumn('date', 'Time of Day');
    data_CEO2.addColumn('number', 'CEO2');
    data_CEO2.addColumn({'type': 'number', 'role': 'interval'});
    data_CEO2.addColumn({'type': 'number', 'role': 'interval'});
    data_CEO2.addRows([
        [new Date(2020, 4, 20, 13), 30, null, null],
        [new Date(2020, 4, 20, 14), 32, null, null],
        [new Date(2020, 4, 20, 15), 26, null, null],
        [new Date(2020, 4, 20, 16), 28, null, null],
        [new Date(2020, 4, 20, 17), 29, null, null],
        [new Date(2020, 4, 20, 18), 33, null, null],
        [new Date(2020, 4, 20, 19), 39, null, null],
        [new Date(2020, 4, 20, 20), 32, null, null],
        [new Date(2020, 4, 20, 21), 31, null, null],
        [new Date(2020, 4, 20, 22), 38, 0, 60],
        [new Date(2020, 4, 20, 23), 37, null, null],
        [new Date(2020, 4, 20, 24), 35, null, null],
        [new Date(2020, 4, 21, 1), 33, null, null],
        [new Date(2020, 4, 21, 2), 34, null, null],
        [new Date(2020, 4, 21, 3), 32, null, null],
        [new Date(2020, 4, 21, 4), 31, null, null],
        [new Date(2020, 4, 21, 5), 30, null, null],
        [new Date(2020, 4, 21, 6), 27, null, null],
        [new Date(2020, 4, 21, 7), 28, null, null],
        [new Date(2020, 4, 21, 8), 31, null, null],
        [new Date(2020, 4, 21, 9), 30, null, null],
        [new Date(2020, 4, 21, 10), 31, null, null],
        [new Date(2020, 4, 21, 11), 34, null, null],
        [new Date(2020, 4, 21, 12), 36, null, null],
        [new Date(2020, 4, 21, 13), 38, null, null],
        [new Date(2020, 4, 21, 14), 37, null, null],
        [new Date(2020, 4, 21, 15), 34, null, null],
        [new Date(2020, 4, 21, 16), 30, null, null],
        [new Date(2020, 4, 21, 17), 35, null, null],
        [new Date(2020, 4, 21, 18), 33, null, null],
        [new Date(2020, 4, 21, 19), 32, null, null],
        [new Date(2020, 4, 21, 20), 31, null, null],
        [new Date(2020, 4, 21, 21), 34, null, null],
        [new Date(2020, 4, 21, 22), 37, null, null],
        [new Date(2020, 4, 21, 23), 34, null, null],
        [new Date(2020, 4, 21, 24), 36, null, null],
        [new Date(2020, 4, 22, 1), 28, null, null],
        [new Date(2020, 4, 22, 2), 24, null, null],
        [new Date(2020, 4, 22, 3), 31, null, null],
        [new Date(2020, 4, 22, 4), 32, null, null],
    ]);

    var options_CEO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        curveType: 'function',
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "CEO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_CEO2 = new google.visualization.AreaChart(document.getElementById("chart_CEO2"));
    chart_CEO2.draw(data_CEO2, options_CEO2);
}


function drawAJglcChart() {
    var data_AJglc = new google.visualization.DataTable();
    data_AJglc.addColumn('date', 'Time of Day');
    data_AJglc.addColumn('number', 'AJglc');
    data_AJglc.addColumn({'type': 'number', 'role': 'interval'});
    data_AJglc.addColumn({'type': 'number', 'role': 'interval'});
    data_AJglc.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_AJglc = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "AJglc",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AJglc = new google.visualization.ScatterChart(document.getElementById('chart_AJglc'));

    chart_AJglc.draw(data_AJglc, options_AJglc);
}


function drawAJCO2Chart() {
    var data_AJCO2 = new google.visualization.DataTable();
    data_AJCO2.addColumn('date', 'Time of Day');
    data_AJCO2.addColumn('number', 'AJCO2');
    data_AJCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AJCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AJCO2.addRows([
        [new Date(2020, 4, 20, 13), 30, null, null],
        [new Date(2020, 4, 20, 14), 32, null, null],
        [new Date(2020, 4, 20, 15), 26, null, null],
        [new Date(2020, 4, 20, 16), 28, null, null],
        [new Date(2020, 4, 20, 17), 29, null, null],
        [new Date(2020, 4, 20, 18), 33, null, null],
        [new Date(2020, 4, 20, 19), 39, null, null],
        [new Date(2020, 4, 20, 20), 32, null, null],
        [new Date(2020, 4, 20, 21), 31, null, null],
        [new Date(2020, 4, 20, 22), 30, 0, 60],
        [new Date(2020, 4, 20, 23), 37, null, null],
        [new Date(2020, 4, 20, 24), 35, null, null],
        [new Date(2020, 4, 21, 1), 33, null, null],
        [new Date(2020, 4, 21, 2), 34, null, null],
        [new Date(2020, 4, 21, 3), 32, null, null],
        [new Date(2020, 4, 21, 4), 31, null, null],
        [new Date(2020, 4, 21, 5), 30, null, null],
        [new Date(2020, 4, 21, 6), 27, null, null],
        [new Date(2020, 4, 21, 7), 28, null, null],
        [new Date(2020, 4, 21, 8), 31, null, null],
        [new Date(2020, 4, 21, 9), 30, null, null],
        [new Date(2020, 4, 21, 10), 31, null, null],
        [new Date(2020, 4, 21, 11), 34, null, null],
        [new Date(2020, 4, 21, 12), 36, null, null],
        [new Date(2020, 4, 21, 13), 38, null, null],
        [new Date(2020, 4, 21, 14), 37, null, null],
        [new Date(2020, 4, 21, 15), 34, null, null],
        [new Date(2020, 4, 21, 16), 30, null, null],
        [new Date(2020, 4, 21, 17), 35, null, null],
        [new Date(2020, 4, 21, 18), 33, null, null],
        [new Date(2020, 4, 21, 19), 32, null, null],
        [new Date(2020, 4, 21, 20), 31, null, null],
        [new Date(2020, 4, 21, 21), 34, null, null],
        [new Date(2020, 4, 21, 22), 37, null, null],
        [new Date(2020, 4, 21, 23), 34, null, null],
        [new Date(2020, 4, 21, 24), 36, null, null],
        [new Date(2020, 4, 22, 1), 28, null, null],
        [new Date(2020, 4, 22, 2), 24, null, null],
        [new Date(2020, 4, 22, 3), 31, null, null],
        [new Date(2020, 4, 22, 4), 32, null, null],
    ]);

    var options_AJCO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        curveType: 'function',
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "AJCO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AJCO2 = new google.visualization.AreaChart(document.getElementById("chart_AJCO2"));
    chart_AJCO2.draw(data_AJCO2, options_AJCO2);
}


function drawRQChart() {
    var data_RQ = new google.visualization.DataTable();
    data_RQ.addColumn('date', 'Time of Day');
    data_RQ.addColumn('number', 'RQ');
    data_RQ.addColumn({'type': 'number', 'role': 'interval'});
    data_RQ.addColumn({'type': 'number', 'role': 'interval'});
    data_RQ.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_RQ = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "RQ",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_RQ = new google.visualization.ScatterChart(document.getElementById('chart_RQ'));
    chart_RQ.draw(data_RQ, options_RQ);
}


function drawNPIChart() {
    var data_NPI = new google.visualization.DataTable();
    data_NPI.addColumn('datetime', 'Time of Day');
    data_NPI.addColumn('number', 'Left');
    data_NPI.addColumn('number', 'Right');
    data_NPI.addColumn({'type': 'number', 'role': 'interval'});
    data_NPI.addColumn({'type': 'number', 'role': 'interval'});
    data_NPI.addRows([
        [new Date(2020, 4, 20, 13), 3.92, 4.12, null, null],
        [new Date(2020, 4, 20, 14), 4.21, 4.21, null, null],
        [new Date(2020, 4, 20, 15), 3.24, 3.57, null, null],
        [new Date(2020, 4, 20, 16), 3.54, 3.94, null, null],
        [new Date(2020, 4, 20, 17), 3.21, 3.75, null, null],
        [new Date(2020, 4, 20, 18), 3.9, 4.53, null, null],
        [new Date(2020, 4, 20, 19), 3.57, 4.18, null, null],
        [new Date(2020, 4, 20, 20), 4.5, 4.23, null, null],
        [new Date(2020, 4, 20, 21), 4.21, 3.75, null, null],
        [new Date(2020, 4, 20, 22), 4.38, 3.95, 0, 5],
        [new Date(2020, 4, 20, 23), 4.18, 3.64, null, null],
        [new Date(2020, 4, 20, 24), 3.97, 3.71, null, null],
        [new Date(2020, 4, 21, 1), 3.12, 3.41, null, null],
        [new Date(2020, 4, 21, 2), 3.37, 3.97, null, null],
        [new Date(2020, 4, 21, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 4), 3.57, 4.31, null, null],
        [new Date(2020, 4, 21, 5), 3.74, 4.12, null, null],
        [new Date(2020, 4, 21, 6), 4.32, 4.64, null, null],
        [new Date(2020, 4, 21, 7), 4.12, 4.32, null, null],
        [new Date(2020, 4, 21, 8), 4.02, 3.75, null, null],
        [new Date(2020, 4, 21, 9), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 10), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 11), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 12), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 13), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 14), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 15), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 16), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 17), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 18), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 19), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 20), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 21), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 22), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 23), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 24), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 1), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 2), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 4), 3.94, 3.74, null, null],
    ]);

    var options_NPI = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        curveType: 'function',
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "NPI",
            ticks: [0, 1, 2, 3, 4, 5],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_NPI = new google.visualization.LineChart(document.getElementById('chart_NPI'));
    chart_NPI.draw(data_NPI, options_NPI);
}


function drawPupilChart() {
    var data_pupil = new google.visualization.DataTable();
    data_pupil.addColumn('datetime', 'Time of Day');
    data_pupil.addColumn('number', 'Left');
    data_pupil.addColumn('number', 'Right');
    data_pupil.addColumn({'type': 'number', 'role': 'interval'});
    data_pupil.addColumn({'type': 'number', 'role': 'interval'});
    data_pupil.addRows([
        [new Date(2020, 4, 20, 13), 3.92, 4.12, null, null],
        [new Date(2020, 4, 20, 14), 4.21, 4.21, null, null],
        [new Date(2020, 4, 20, 15), 3.24, 3.57, null, null],
        [new Date(2020, 4, 20, 16), 3.54, 3.94, null, null],
        [new Date(2020, 4, 20, 17), 3.21, 3.75, null, null],
        [new Date(2020, 4, 20, 18), 3.9, 4.53, null, null],
        [new Date(2020, 4, 20, 19), 3.57, 4.18, null, null],
        [new Date(2020, 4, 20, 20), 4.5, 4.23, null, null],
        [new Date(2020, 4, 20, 21), 4.21, 3.75, null, null],
        [new Date(2020, 4, 20, 22), 4.38, 3.95, 0, 5],
        [new Date(2020, 4, 20, 23), 4.18, 3.64, null, null],
        [new Date(2020, 4, 20, 24), 3.97, 3.71, null, null],
        [new Date(2020, 4, 21, 1), 3.12, 3.41, null, null],
        [new Date(2020, 4, 21, 2), 3.37, 3.97, null, null],
        [new Date(2020, 4, 21, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 4), 3.57, 4.31, null, null],
        [new Date(2020, 4, 21, 5), 3.74, 4.12, null, null],
        [new Date(2020, 4, 21, 6), 4.32, 4.64, null, null],
        [new Date(2020, 4, 21, 7), 4.12, 4.32, null, null],
        [new Date(2020, 4, 21, 8), 4.02, 3.75, null, null],
        [new Date(2020, 4, 21, 9), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 10), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 11), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 12), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 13), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 14), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 15), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 16), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 17), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 18), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 19), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 20), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 21), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 22), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 23), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 24), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 1), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 2), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 4), 3.94, 3.74, null, null],
    ]);

    var options_pupil = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'yellow'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        vAxis: {
            title: "Pupil Size",
            ticks: [0, 1, 2, 3, 4, 5],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_pupil = new google.visualization.LineChart(document.getElementById('chart_pupil'));
    chart_pupil.draw(data_pupil, options_pupil);
}


function drawModalCOxMAPChart() {
    var data_ModalCOxMAP = new google.visualization.DataTable();
    data_ModalCOxMAP.addColumn('number', 'MAP');
    data_ModalCOxMAP.addColumn('number', 'COx');
    data_ModalCOxMAP.addRows([
        [60, 1],
        [70, 0.47],
        [80, 0.8],
        [90, 0.67],
        [100, 0.3],
        [110, -0.3],
        [120, -0.4],
        [130, -0.16],
        [140, 0.12],
        [150, 0.4],
        [160, 0.34],
        [170, 0.67],
        [180, 0.3],
        [190, -0.3],
        [200, -0.3],
    ]);

    var options_ModalCOxMAP = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        curveType: 'function',
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "COx",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '80%'
        }
    };

    var chart_ModalCOxMAP = new google.visualization.ColumnChart(document.getElementById("chart_ModalCOxMAP"));
    chart_ModalCOxMAP.draw(data_ModalCOxMAP, options_ModalCOxMAP);
}


function drawRSO2MAPChart() {
    var data_RSO2MAP = new google.visualization.DataTable();
    data_RSO2MAP.addColumn('number', 'MAP');
    data_RSO2MAP.addColumn('number', 'RSO2');
    data_RSO2MAP.addRows([
        [60, 1],
        [70, 0.47],
        [80, 0.8],
        [90, 0.67],
        [100, 0.3],
        [110, -0.3],
        [120, -0.4],
        [130, -0.16],
        [140, 0.12],
        [150, 0.4],
        [160, 0.34],
        [170, 0.67],
        [180, 0.3],
        [190, -0.3],
        [200, -0.3],
    ]);

    var options_RSO2MAP = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 7,
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "RSO2",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        },
        chartArea: {
            width: '80%',
            height: '80%'
        }
    };

    var chart_RSO2MAP = new google.visualization.ScatterChart(document.getElementById('chart_RSO2MAP'));

    chart_RSO2MAP.draw(data_RSO2MAP, options_RSO2MAP);
}


function drawCO2xETCO2Chart() {
    var data_CO2xETCO2 = new google.visualization.DataTable();
    data_CO2xETCO2.addColumn('number', 'CO2x');
    data_CO2xETCO2.addColumn('number', 'ETCO2');
    data_CO2xETCO2.addRows([
        [10, 1],
        [20, 0.47],
        [30, 0.8],
        [40, 0.67],
    ]);

    var options_CO2xETCO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        title: "Time under ETCO2opt : --hr--min",
        legend: "none",
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "ETCO2",
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "CO2x",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '80%'
        }
    };

    var chart_CO2xETCO2 = new google.visualization.ColumnChart(document.getElementById("chart_CO2xETCO2"));
    chart_CO2xETCO2.draw(data_CO2xETCO2, options_CO2xETCO2);
}


function drawRSO2ETCO2Chart() {
    var data_RSO2ETCO2 = new google.visualization.DataTable();
    data_RSO2ETCO2.addColumn('number', 'RSO2');
    data_RSO2ETCO2.addColumn('number', 'ETCO2');
    data_RSO2ETCO2.addRows([
        [10, 1],
        [20, 0.47],
        [30, 0.8],
        [40, 0.67],
    ]);

    var options_RSO2ETCO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 7,
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "ETCO2",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "RSO2",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '80%'
        }
    };

    var chart_RSO2ETCO2 = new google.visualization.ScatterChart(document.getElementById('chart_RSO2ETCO2'));

    chart_RSO2ETCO2.draw(data_RSO2ETCO2, options_RSO2ETCO2);
}
