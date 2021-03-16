"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function GenerateTimeSeries(options) {
    var _a = options.startDate, startDate = _a === void 0 ? new Date() : _a, _b = options.endDate, endDate = _b === void 0 ? new Date() : _b, interval = options.interval, intervalValue = options.intervalValue, _c = options.floorInput, floorInput = _c === void 0 ? true : _c;
    var start = new Date(Math.min(startDate.getTime(), endDate.getTime()));
    var end = new Date(Math.max(startDate.getTime(), endDate.getTime()));
    if (floorInput) {
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
    }
    var startTime = new Date(start);
    var data = [];
    var last = new Date(start);
    var endMs = end.getTime();
    while (last.getTime() < endMs) {
        last = increase({
            date: last,
            interval: interval,
            intervalValue: intervalValue
        });
        data.push({ startDate: startTime, endDate: last });
        startTime = last;
    }
    return data;
}
exports.default = GenerateTimeSeries;
/**
 * Increase a date value by given interval options.
 * @param opts
 * @returns {Date} a new Date object
 */
function increase(opts) {
    var cloned = new Date(opts.date);
    var _a = opts.intervalValue, intervalValue = _a === void 0 ? 1 : _a;
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
