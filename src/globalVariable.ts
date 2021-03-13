import GenerateTimeSeries, { GenerateTimeSeriesParams, GenerateTimeSeriesResults } from "./Generator";

declare global {
    interface Window { 
        GenerateTimeSeries: (options: GenerateTimeSeriesParams) => GenerateTimeSeriesResults; 
    }
}

(function (host) {
    host.GenerateTimeSeries = GenerateTimeSeries

})(window);