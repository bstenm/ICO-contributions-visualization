const env = process.env.NODE_ENV;

const grapqhQLendPoint =
      env === 'development'
            ? 'http://localhost:4000'
            : 'https://ico-contributions-visualizer.herokuapp.com/';

const pieChartColors = [
      {
            color: '#F7464A',
            highlight: '#FF5A5E',
      },
      {
            color: '#46BFBD',
            highlight: '#5AD3D1',
      },
      {
            color: '#FDB45C',
            highlight: '#FFC870',
      },
      {
            color: '#44B2ED',
            highlight: '#3CA4D8',
      },
      {
            color: '#606673',
            highlight: '#4d525E',
      },
      {
            color: '#4D5360',
            highlight: '#424751',
      },
];

const barChartOptions = {
      label: 'Bar chart',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
};

const exchangeRate = {
      ethToBtc: 0.035,
      ltcToBtc: 0.009,
};

const valueRange = {
      min: 100,
      max: 1000,
      minGap: 100,
};

const currencyList = ['BTC', 'ETH', 'LTC'];

export default {
      valueRange,
      currencyList,
      pieChartColors,
      barChartOptions,
      grapqhQLendPoint,
      exchangeRate,
};
