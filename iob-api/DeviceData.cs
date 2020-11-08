using Newtonsoft.Json;
using System;

namespace AzureFunction
{
    public class DeviceData
    {
        [JsonProperty("messageId")]
        public string MessageId { get; set; }

        [JsonProperty("deviceId")]
        public string DeviceId { get; set; }

        [JsonProperty("temperature")]
        public string Temperature { get; set; }

        [JsonProperty("humidity")]
        public string Humidity { get; set; }

        [JsonProperty("pressure")]
        public string pressure { get; set; }

        [JsonProperty("decibels")]
        public string decibels { get; set; }

        [JsonProperty("accelX")]
        public string accelX { get; set; }
        
        [JsonProperty("accelY")]
        public string accelY { get; set; }
        
        [JsonProperty("accelZ")]
        public string accelZ { get; set; }
        
        [JsonProperty("magX")]
        public string magX { get; set; }
        
        [JsonProperty("magY")]
        public string magY { get; set; }
        
        [JsonProperty("magZ")]
        public string magZ { get; set; }
        
        [JsonProperty("pointInfo")]
        public string PointInfo { get; set; }

        [JsonProperty("ioTHub")]
        public string IoTHub { get; set; }

        [JsonProperty("eventEnqueuedUtcTime")]
        public DateTime EventEnqueuedUtcTime { get; set; }

        [JsonProperty("eventProcessedUtcTime")]
        public DateTime EventProcessedUtcTime { get; set; }

        [JsonProperty("partitionId")]
        public string PartitionId { get; set; }
    }
}
