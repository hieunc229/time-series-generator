const TimeSeries = require("../dist").default;
const assert = require('assert');


describe('TimeSeries', function () {


    it('should available', function () {
        assert.ok(TimeSeries);
    });


    it('should also works when startDate > endDate', function () {
        let out = TimeSeries({
            startDate: new Date(`2021-03-12 08:16:00`),
            endDate: new Date(`2021-03-12 08:12:00`),
            interval: "minute"
        })
        assert.ok(Array.isArray(out))
        assert.equal(out.length, 4);
    });

    describe('generate time series by millisecond', function () {

        let startStr = `2021-03-12 08:12:12:12`, endStr1 = `2021-03-12 08:12:12:16`, endStr2 = `2021-03-12 08:12:12:21`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "millisecond"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 4 (from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 4);
        })


        it(`should have length is 9 (from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "millisecond"
            })
            assert.equal(out.length, 9);
        })
    })

    describe('generate time series by second', function () {

        let startStr = `2021-03-12 08:12:00`, endStr1 = `2021-03-12 08:12:17`, endStr2 = `2021-03-12 08:13:12`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "second"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 17 (from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 17);
        })


        it(`should have length is 72 (from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "second"
            })
            assert.equal(out.length, 72);
        })
    })

    describe('generate time series by minute', function () {

        let startStr = `2021-03-12 08:12:00`, endStr1 = `2021-03-12 08:30:00`, endStr2 = `2021-03-12 09:00:00`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "minute"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 18 (from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 18);
        })


        it(`should have length is 48 (from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "minute"
            })
            assert.equal(out.length, 48);
        })
    })

    describe('generate time series by hour', function () {

        let startStr = `2021-03-12`, endStr1 = `2021-03-13`, endStr2 = `2021-03-15`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "hour"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 24 (1 day - from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 24);
        })


        it(`should have length is 72 (3 days - from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "hour"
            })
            assert.equal(out.length, 72);
        })
    })

    describe('generate time series by week', function () {

        let startStr = `2021-03-12`, endStr1 = `2021-03-26`, endStr2 = `2021-04-16`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "week"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 2 (from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 2);
        })


        it(`should have length is 5 (from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "week"
            })
            assert.equal(out.length, 5);
        })
    })

    describe('generate time series by month', function () {

        let startStr = `2021-03-12`, endStr1 = `2021-04-26`, endStr2 = `2021-12-16`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "month"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 2 (from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 2);
        })


        it(`should have length is 10 (from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "month"
            })
            assert.equal(out.length, 10);
        })
    })

    describe('generate time series by year', function () {

        let startStr = `2021-03-01`, endStr1 = `2023-04-26`, endStr2 = `2025-12-16`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "year"
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 3 (from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 3);
        })


        it(`should have length is 5 (from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "year"
            })
            assert.equal(out.length, 5);
        })
    })



    describe('generate time series by each 2-hour', function () {

        let startStr = `2021-03-12`, endStr1 = `2021-03-13`, endStr2 = `2021-03-15`;

        let out = TimeSeries({
            startDate: new Date(startStr),
            endDate: new Date(endStr1),
            interval: "hour",
            intervalValue: 2
        })

        it('should be array', function () {
            assert.ok(Array.isArray(out));
        })

        it(`should have length is 12 (1 day - from ${startStr} to ${endStr1})`, function () {
            assert.equal(out.length, 12);
        })


        it(`should have length is 36 (3 days - from ${startStr} to ${endStr2})`, function () {
            out = TimeSeries({
                startDate: new Date(startStr),
                endDate: new Date(endStr2),
                interval: "hour",
                intervalValue: 2
            })
            assert.equal(out.length, 36);
        })
    })
});