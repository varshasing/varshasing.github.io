import { Wrench } from "lucide-react";
import SubsystemPage from "./SubsystemPage";

const Mechanical = () => (
  <SubsystemPage
    title="Mechanical"
    icon={Wrench}
    overview="The mechanical subsystem encompasses the chassis, drivetrain, and cabinet design—engineered for hospital-grade reliability and maneuverability."
    sections={[
      {
        title: "Chassis Design",
        content: "A custom aluminum frame designed for stability and modularity. The chassis supports swappable compartments and integrates mounting points for all sensors and electronics.",
        bullets: [
          "Aluminum extrusion frame for strength and weight savings",
          "Modular mounting system for sensors and compute",
          "Designed for hospital doorway and elevator clearance",
        ],
      },
      {
        title: "Drivetrain",
        content: "Differential drive system with high-torque DC motors and encoder feedback for precise odometry.",
        bullets: [
          "Differential drive with caster wheels",
          "Encoder-based odometry for localization",
          "Motor controllers with PID feedback loops",
        ],
      },
      {
        title: "Cabinet & Payload",
        bullets: [
          "Secure lockable compartment for medical supplies",
          "Internal shelving for multiple delivery items",
          "Easy-access design for nurses and staff",
        ],
      },
    ]}
  />
);

export default Mechanical;
