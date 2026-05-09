const lineData = {

    labels: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
    ],


    datasets: [
        {
            label: "sales (thousands, dollars)",

            data: [15, 20, 30, 40, 50, 60, 70],

            fill: false,
            borderColor: 'rgb(75, 192, 192)',


            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.3,

            pointRadius: 5,
        },
    ],
};



const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const myLineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);


const pieData = {
    labels: ["rent", 'food', 'transportation', 'other'],
    datasets: [
        {
            label: 'expenses',
            data: [800, 500, 300, 200],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(99, 107, 255)',
                'rgb(229, 255, 99)',
                'rgb(255, 99, 247)',
                'rgb(99, 255, 104)',

            ],

        },
    ],
};


const pieConfig = {
    type: 'doughnut',
    data: pieData,
    options:{
        responsive: true,

        plugins:{
            legend:{
                position:'right',
            },
            title:{
                display : false,
            },
        },
    },
};

const myPieChart = new Chart(document.getElementById('pieChart'), pieConfig);
