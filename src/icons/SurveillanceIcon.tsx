import { createLucideIcon } from "lucide-react";

const SurveillanceIcon = createLucideIcon("SurveillanceIcon", [
  // Camera body
  [
    "rect",
    {
      x: "3",
      y: "6",
      width: "14",
      height: "6",
      rx: "1",
      ry: "1",
      key: "camera-body",
    },
  ],

  // Camera mount arm
  [
    "path",
    {
      d: "M5 12v6m0 0h4m-4 0h-2",
      key: "mount-arm",
    },
  ],

  // Lens shape (front angled part)
  [
    "path",
    {
      d: "M17 7l4 2-4 2",
      key: "lens-angle",
    },
  ],

  // Lens circle inside
  [
    "circle",
    {
      cx: "10",
      cy: "9",
      r: "1.4",
      key: "lens-circle",
    },
  ],
]);

export default SurveillanceIcon;
