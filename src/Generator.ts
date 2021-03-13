
export type GenerateTimeSeriesInterval = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
export type GenerateTimeSeriesParams = { startDate: Date, endDate: Date, interval: GenerateTimeSeriesInterval, intervalValue?: number };
export type GenerateTimeSeriesResult = { startDate: Date, endDate: Date };
export type GenerateTimeSeriesResults = GenerateTimeSeriesResult[];

/**
 * Generate series of time.
 * @param options {
 * - @param {Date} startDate: begining of the period
 * - @param {Date} endDate: end of the period
 * - @param {GenerateTimeSeriesInterval} interval
 * - @param {number} intervalValue (optional)
 * }
 * @returns {GenerateTimeSeriesResults} array of { startDate: Date, endDate: Date }
 */
export default function GenerateTimeSeries(options: GenerateTimeSeriesParams) {

    let { startDate = new Date(), endDate = new Date(), interval, intervalValue } = options;

    let start = new Date(Math.min(startDate.getTime(), endDate.getTime()));
    let end = new Date(Math.max(startDate.getTime(), endDate.getTime()));

    switch (interval) {
        case "year":
            start.setMonth(0);
            end.setMonth(0);
        case "month":
        case "week":
        case "day":
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            break;
        case "hour":
            start.setMinutes(0, 0, 0);
            end.setMinutes(0, 0, 0);
            break;
        case "minute":
            start.setSeconds(0, 0);
            end.setSeconds(0, 0);
            break;
        case "second":
            start.setMilliseconds(0);
            end.setMilliseconds(0);
            break;
    }

    let startTime = new Date(start);
    let data: GenerateTimeSeriesResults = [];
    let last = new Date(start);
    let endMs = end.getTime();

    while (last.getTime() < endMs) {
        last = increase({
            date: last,
            interval,
            intervalValue
        });
        data.push({ startDate: startTime, endDate: last })
        startTime = last;
    }

    return data;
}

/**
 * Increase a date value by given interval options. 
 * @param opts 
 * @returns {Date} a new Date object
 */
function increase(opts: { date: Date, interval: GenerateTimeSeriesInterval, intervalValue?: number }): Date {

    let cloned = new Date(opts.date);
    let { intervalValue = 1 } = opts;

    switch (opts.interval) {
        case "millisecond":
            cloned.setMilliseconds(cloned.getMilliseconds() + intervalValue);
            break;
        case "second":
            cloned.setSeconds(cloned.getSeconds() + intervalValue);
            break;
        case "minute":
            cloned.setMinutes(cloned.getMinutes() + intervalValue);
            break;
        case "hour":
            cloned.setHours(cloned.getHours() + intervalValue);
            break;
        case "day":
            cloned.setDate(cloned.getDate() + intervalValue);
            break;
        case "week":
            cloned.setDate(cloned.getDate() + (7 * intervalValue));
            break;
        case "month":
            cloned.setMonth(cloned.getMonth() + intervalValue);
            break;
        case "year":
            cloned.setFullYear(cloned.getFullYear() + intervalValue);
            break;
    }

    return cloned;
}