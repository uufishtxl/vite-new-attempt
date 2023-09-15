import { ISource } from "./components/SourceItem/types";

export const model = "xxxxxxxx";

export const brand: "hp" | "dell" = "hp";

export const sources: ISource[] = [
  {
    name: "USB-C Video",
    icon: "signal-usb-c",
  },
  {
    name: "DisplayPort",
    icon: "signal-dp",
  },
  {
    name: "HDMI",
    icon: "signal-hdmi",
  },
];
