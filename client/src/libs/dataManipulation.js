/* eslint-disable import/prefer-default-export */
import map from 'lodash/map';
import merge from 'lodash/merge';
import groupBy from 'lodash/groupBy';
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
