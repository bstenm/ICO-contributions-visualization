const env = process.env.NODE_ENV;

const grapqhQLendPoint =
      env === 'development'
            ? 'http://localhost:4000'
            : 'https://ico-contributions-visualization.herokuapp.com/';

export default { grapqhQLendPoint };
