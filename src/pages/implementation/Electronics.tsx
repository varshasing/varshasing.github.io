import { Cpu } from "lucide-react";
import SubsystemPage from "./SubsystemPage";

const Electronics = () => (
  <SubsystemPage
    title="Electronics"
    icon={Cpu}
    overview="The electronics subsystem manages power distribution, compute hardware, and all electrical interconnections."
    sections={[
      {
        title: "Compute Platform",
        bullets: [
          "NVIDIA Jetson Orin for onboard AI inference",
          "ROS 2 Humble running on Ubuntu 22.04",
          "Dedicated microcontroller for motor control",
        ],
      },
      {
        title: "Power System",
        bullets: [
          "Lithium-ion battery pack for extended runtime",
          "Regulated power distribution to all subsystems",
          "Battery management system with monitoring",
        ],
      },
      {
        title: "Wiring & Integration",
        content: "Custom wiring harness with labeled connectors for maintainability. All connections follow hospital-grade safety standards.",
      },
    ]}
  />
);

export default Electronics;
