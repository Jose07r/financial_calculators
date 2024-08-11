import { formatNumberWithCommas } from '@/utils/formatNumber';

export default function getChartData(data) {
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

  const chartData = {
    labels: data.map((obj) => obj.month),
    datasets: [
      {
        label: 'Initial Balance',
        data: data.map((obj) => obj.principal),
        backgroundColor: '#84BDE0',
      },
      {
        label: 'Monthly Contributions',
        data: data.map((obj) => obj.accrued_contributions),
        backgroundColor: '#74E6F7',
      },
      {
        label: 'Accrued Interest',
        data: data.map((obj) => obj.accrued_interest),
        backgroundColor: '#5FD9CA',
      },
    ],
  };

  // Customized chart options
  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function (ctx) {
            return `Month ${ctx[0].label}`;
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
          size: fontSize,
        },
        footerMarginTop: window.innerWidth > 760 ? 8 : 6,
      },
      legend: {
        position: 'bottom',
        onClick: (e) => {
          e.defaultPrevented = true;
        },
        title: {
          display: true,
          color: 'rgb(116, 165, 181)',
          font: {
            family: "'Fredoka', 'sans-serif'",
            weight: 500,
            size: fontSize,
          },
          text: 'Months',
          padding: fontSize / 2,
        },
        labels: {
          boxWidth: window.innerWidth < 425 ? 20 : 25,
          font: {
            family: "'Fredoka', 'sans-serif'",
            weight: 500,
            size: fontSize,
          },
          color: 'rgba(76, 112, 124, 0.6)',
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
          color: 'rgb(116, 165, 181)',
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
          color: 'rgb(116, 165, 181)',
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
    aspectRatio: window.innerWidth < 540 ? 4 / 3 : 5 / 3,
    responsive: true,
    maintainAspectRatio: true,
  };

  return { chartData, chartOptions };
}
