const env = process.env.NODE_ENV;

const grapqhQLendPoint =
      env === 'development'
            ? 'http://localhost:4000'
            : 'https://ico-contributions-visualization.herokuapp.com/';

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

export default { pieChartColors, grapqhQLendPoint };
