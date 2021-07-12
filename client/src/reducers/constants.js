import pdF1 from "css/assets/files/RFD2T5N200-702DSRFuWRevB.pdf";
import pdF2 from "css/assets/files/RFD3T5N200-703DSRFuWRevB.pdf";

export const switchDriversHeaders = [
  "Part Number",
  "Description",
  "Control",
  "Voltage 1",
  "Voltage 2",
  "Sink mA",
  "Source mA"
];
export const limiterHeaders = [
  "Limiter Module",
  "Limiter Description",
  "Frequency (GHz)",
  "Insertion Loss (dB)",
  "Return Loss (dB)",
  "Cw Input Power (Dbm)",
  "Peak Input Power (Dbm)",
  "Flat Leakage Power (dBm)",
  "Spike Leakage (ergs)",
  "Recovery Time (nsec)",
  "Status"
];
export const switchesHeaders = [
  "Part Number",
  "Frequency Range(GHz)",
  "Switch Topology",
  "Tx Average Power (CW)(dBm)",
  "Tx Peak Power (dBm)",
  "Tx - Ant Insertion Loss (dB)",
  "Return Loss (dB)",
  "ISO (dB)",
  "IP3 (dBm)",
  "Status"
];

export const switcDriverProducts = [
  {
    name: "RFD2T-5N200-702",
    description: "SP2T Switch Driver",
    control: "TTL",
    voltage1: "5",
    voltage2: "-15 to -200",
    sinkmA: "50",
    sourcMa: "50",
    download: pdF1
  },
  {
    name: "RFD3T-5N200-703",
    description: "SP3T Switch Driver",
    control: "TTL",
    voltage1: "5",
    voltage2: "-15 to -200",
    sinkmA: "50",
    sourcMa: "50",
    download: pdF2
  }
];
