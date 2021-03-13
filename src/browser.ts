import GenerateTimeSeries from "./Generator";

if (typeof window !== undefined) {
    (function (host: any) {
        if (host) {
            host.GenerateTimeSeries = GenerateTimeSeries
        }
    })(window)
}