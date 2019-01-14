import {
      convertValueToSatoshi,
      formatDataForPieCharts,
      formatDataForCurrencyValueCharts,
} from './dataManipulation';

jest.mock('../config', () => ({
      barChartOptions: {
            some: 'bar chart options',
      },
      pieChartColors: [
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
      ],
      exchangeRate: {
            ethToBtc: 0.05,
            ltcToBtc: 0.01,
      },
}));

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
      {
            currency: 'LTC',
            value: 4590,
      },
];

describe('formatDataForPieCharts', () => {
      it('Turns the data passed into data formatted for a pie chart', () => {
            const result = formatDataForPieCharts(data, 'currency');

            expect(result).toEqual([
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
                  {
                        color: '#FDB45C',
                        highlight: '#FFC870',
                        label: 'LTC',
                        value: 1,
                  },
            ]);
      });
});

describe('formatDataForCurrencyValueCharts', () => {
      it('Turns the data passed into data formatted for a the curency to value bar chart', () => {
            const result = formatDataForCurrencyValueCharts(data);

            expect(result).toEqual({
                  datasets: [
                        Object.assign(
                              {},
                              { data: [3000, 1695, 4590] },
                              { some: 'bar chart options' },
                        ),
                  ],
                  labels: ['BTC', 'ETH', 'LTC'],
            });
      });
});

describe('convertValueToSatoshi', () => {
      it('Changes all values in data set into satoshis according to exchange rate set in config', () => {
            expect(convertValueToSatoshi(data)).toEqual([
                  {
                        currency: 'BTC',
                        value: 3000,
                  },
                  {
                        currency: 'ETH',
                        value: 1000 * 0.05,
                  },
                  {
                        currency: 'ETH',
                        value: 2390 * 0.05,
                  },
                  {
                        currency: 'LTC',
                        value: 4590 * 0.01,
                  },
            ]);
      });
});

// [TOREMOVE]
// describe('buildDataForLineCharts', () => {
//       it('Turns the data passed into data formatted for a line chart', () => {
//             const result = buildDataForLineCharts(data, 'age', 'value');

//             const expected = {
//                   labels: ['21', '39'],
//                   datasets: [
//                         Object.assign(
//                               {},
//                               {
//                                     data: [2000, 2390],
//                               },
//                               cf.lineChartOptions,
//                         ),
//                   ],
//             };
//             expect(result).toEqual(expected);
//       });

//       it('Sets the data key in dataset to array of 0s if data key passed if erroneous', () => {
//             const result = buildDataForLineCharts(data, 'age', 'unknown');

//             const expected = {
//                   labels: ['21', '39'],
//                   datasets: [
//                         Object.assign(
//                               {},
//                               {
//                                     data: [0, 0],
//                               },
//                               cf.lineChartOptions,
//                         ),
//                   ],
//             };
//             expect(result).toEqual(expected);
//       });
// });
