import { formatNumberWithCommas } from '@/utils/formatNumber';

// Customized chart options
function getChartOptions(breakdownChoice) {
  // Responsive fonts
  let fontSize = 10;

  if (window.innerWidth > 540) {
    fontSize = 12;
  }
  if (window.innerWidth > 760) {
    fontSize = 14;
  }
  if (window.innerWidth > 1204) {
    fontSize = 16;
  }

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function (ctx) {
            return `${breakdownChoice === 'yearly' ? 'Year' : 'Month'} ${
              ctx[0].label
            }`;
          },
          label: function (ctx) {
            return `$${ctx.formattedValue}`;
          },
          footer: function (ctx) {
            function getCurrBalance() {
              const balance = ctx
                .map((el) => el.raw)
                .reduce((curr, val) => curr + val, 0)
                .toFixed(2);

              return formatNumberWithCommas(balance);
            }
            return `Total: $${getCurrBalance()}`;
          },
        },
        itemSort: function (a, b) {
          return b.datasetIndex - a.datasetIndex;
        },
        padding: window.innerWidth > 760 ? 8 : 6,
        borderColor: '#74A5B5',
        borderWidth: window.innerWidth > 760 ? 2 : 1,
        backgroundColor: '#FAFAFA',
        titleColor: '#4C707C',
        titleFont: {
          family: "'Fredoka', 'sans-serif'",
          weight: 700,
          size: fontSize - 2,
        },
        titleAlign: 'center',
        titleMarginBottom: 4,
        bodyColor: '#74A5B5',
        bodyFont: {
          family: "'Fredoka', 'sans-serif'",
          weight: 600,
          size: fontSize - 2,
        },
        bodySpacing: window.innerWidth > 760 ? 6 : 4,
        boxPadding: window.innerWidth > 760 ? 6 : 2,
        footerColor: 'rgba(17, 138, 178, 0.7',
        footerAlign: 'center',
        footerFont: {
          family: "'Fredoka', 'sans-serif'",
          weight: 600,
          size: fontSize - 1,
        },
        footerMarginTop: window.innerWidth > 760 ? 8 : 6,
      },
      legend: {
        position: 'bottom',
        onClick: (e, legendItem, legend) => {
          e.defaultPrevented = true;
        },
        labels: {
          boxWidth: 25,
          font: {
            family: "'Fredoka', 'sans-serif'",
            weight: 500,
            size: fontSize,
          },
          color: 'rgba(76, 112, 124, 0.6)',
        },
        title: {
          display: true,
          text: breakdownChoice === 'yearly' ? 'Years' : 'Months',
          color: 'rgba(76, 112, 124, 0.6)',
          font: {
            family: "'Fredoka', 'sans-serif'",
            weight: 400,
            size: fontSize - 1,
          },
          padding: 2,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            family: "'Fredoka', 'sans-serif'",
            weight: 600,
            size: fontSize,
          },
          color: '#74A5B5',
        },
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return `$${formatNumberWithCommas(value)}`;
          },
          font: {
            family: "'Fredoka', 'sans-serif'",
            weight: 600,
            size: fontSize,
          },
          color: '#74A5B5',
        },
      },
    },
    animations: {
      x: false,
      delay: 0,
    },
    interaction: {
      mode: 'index',
    },
    aspectRatio: window.innerWidth < 760 ? 3 / 2 : 5 / 3,
    responsive: true,
    maintainAspectRatio: true,
  };

  return chartOptions;
}

export default getChartOptions;
