export declare type GenerateTimeSeriesInterval = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
export declare type GenerateTimeSeriesParams = {
    startDate: Date;
    endDate: Date;
    interval: GenerateTimeSeriesInterval;
    intervalValue?: number;
    floorInput?: boolean;
};
export declare type GenerateTimeSeriesResult = {
    startDate: Date;
    endDate: Date;
};
export declare type GenerateTimeSeriesResults = GenerateTimeSeriesResult[];
/**
 * Generate series of time.
 * @param options {
 * - @param {Date} startDate: begining of the period
 * - @param {Date} endDate: end of the period
 * - @param {GenerateTimeSeriesInterval} interval
 * - @param {number} intervalValue (optional)
 * - @param {boolean} floorInput (optional) floor date inputs (i.e when interval is "minute", set all "minute", "second", "millisecond" to 0)
 * }
 * @returns {GenerateTimeSeriesResults} array of { startDate: Date, endDate: Date }
 */
export default function GenerateTimeSeries(options: GenerateTimeSeriesParams): GenerateTimeSeriesResults;
