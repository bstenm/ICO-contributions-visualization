/* eslint-disable import/prefer-default-export */
import keys from 'lodash/keys';
import map from 'lodash/map';
import merge from 'lodash/merge';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import cf from '../config';

/**
 * @param {array} set: collection of objects
 * @param {string} type: a key in the objects making up the collection
 * @return {array}
 */
export const formatDataForPieCharts = (set, type) => {
      let i = 0;

      const grouped = groupBy(set, type);

      const pieChartData = map(grouped, (value, key) =>
            merge({ value: value.length, label: key }, cf.pieChartColors[i++]),
      );

      return pieChartData;
};

/**
 * @param {array} set: collection of object
 * @param {*} labelKey: the key that will serve as label for the bar chart
 * @param {*} dataKey: the key from which we will calculate the data points
 */
export const formatDataForCurrencyValueCharts = set => {
      const { barChartOptions } = cf;

      // transform set into { <label>: <array of entries> }
      const grouped = groupBy(set, 'currency');

      // transform set into { <label>: <average value of the data key in array of entries>}
      const labelToAverageData = mapValues(grouped, entry => {
            const totalAmount = entry.reduce((result, { value }) => {
                  if (value) {
                        result += parseInt(value, 10);
                  }

                  return result;
            }, 0);
            // return the average value
            return totalAmount / entry.length;
      });

      // gives array of labels
      const labels = keys(labelToAverageData);

      // gives array of average value of data
      const data = labels.map(label => labelToAverageData[label]);

      return {
            labels,
            datasets: [Object.assign({}, { data }, barChartOptions)],
      };
};