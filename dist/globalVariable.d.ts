import { GenerateTimeSeriesParams, GenerateTimeSeriesResults } from "./Generator";
declare global {
    interface Window {
        GenerateTimeSeries: (options: GenerateTimeSeriesParams) => GenerateTimeSeriesResults;
    }
}
