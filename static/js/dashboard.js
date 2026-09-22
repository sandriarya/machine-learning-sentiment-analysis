// ======================================================
// SPARKLINE
// ======================================================

function createSpark(id, color, data) {

    const element = document.querySelector(id);
    if (!element) return;

    const options = {
        chart: {
            type: "area",
            height:45,
            sparkline: {
                enabled: true
            },
            toolbar: {
                show: false
            }
        },

        series: [{
            data: data
        }],

        stroke: {
            curve: "smooth",
            width: 3
        },

        colors: [color],

        fill: {
            opacity: 0.18
        },

        tooltip: {
            enabled: false
        }
    };

    new ApexCharts(element, options).render();
}

createSpark(
    "#spark-total",
    "#ff5b5b",
    [10, 15, 11, 20, 18, 25, 21, 29, 25, 31, 28]
);

createSpark(
    "#spark-positif",
    "#22c55e",
    [14, 18, 15, 21, 19, 22, 20, 24, 23, 27, 25]
);

createSpark(
    "#spark-netral",
    "#3498db",
    [18, 17, 19, 20, 18, 22, 21, 23, 24, 22, 25]
);

createSpark(
    "#spark-negatif",
    "#ef4444",
    [5, 8, 6, 10, 7, 11, 9, 13, 11, 14, 12]
);


// ======================================================
// BAR CHART
// ======================================================

const barChart = document.querySelector("#barChart");

if (barChart) {

    new ApexCharts(barChart, {

        chart: {
            type: "bar",
            height: 330,
            toolbar: {
                show: false
            }
        },

        series: [{
            data: [
                1093,
                1342,
                573
            ]
        }],

        xaxis: {
            categories: [
                "Positif",
                "Netral",
                "Negatif"
            ]
        },

        colors: [
            "#22c55e",
            "#3498db",
            "#ef4444"
        ],

        plotOptions: {
            bar: {
                borderRadius: 8,
                distributed: true,
                columnWidth: "50%"
            }
        },

        dataLabels: {
            enabled: false
        },

        legend: {
            show: false
        }

    }).render();

}


// ======================================================
// DONUT CHART
// ======================================================

const pieChart = document.querySelector("#pieChart");

if (pieChart) {

    new ApexCharts(document.querySelector("#pieChart"), {

    chart: {
        type: "donut",
        height: 340
    },

    series: [
        1093,
        1342,
        573
    ],

    labels: [
        "Positif",
        "Netral",
        "Negatif"
    ],

    colors: [
        "#22c55e",
        "#3498db",
        "#ef4444"
    ],

    plotOptions: {
        pie: {
            donut: {
                size: "72%"
            }
        }
    },

    legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        itemMargin: {
            horizontal: 12,
            vertical: 6
        }
    },

    dataLabels: {
        enabled: true
    },

    stroke: {
        width: 2
    }

}).render();

}
