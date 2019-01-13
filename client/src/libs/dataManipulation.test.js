import { formatDataForPieCharts } from './dataManipulation';
// [TOREMOVE]
// import cf from '../config';

const data = [
      {
            currency: 'BTC',
            value: 3000,
      },
      {
            currency: 'ETH',
            value: 1000,
      },
      {
            currency: 'ETH',
            value: 2390,
      },
];

describe('formatDataForPieCharts', () => {
      it('Turns the data passed into data formatted for a pie chart', () => {
            const result1 = formatDataForPieCharts(data, 'currency');

            expect(result1).toEqual([
                  {
                        color: '#F7464A',
                        highlight: '#FF5A5E',
                        label: 'BTC',
                        value: 1,
                  },
                  {
                        color: '#46BFBD',
                        highlight: '#5AD3D1',
                        label: 'ETH',
                        value: 2,
                  },
            ]);
      });
});
