import { Shield } from "lucide-react";
import SubsystemPage from "./SubsystemPage";

const Safety = () => (
  <SubsystemPage
    title="Safety"
    icon={Shield}
    overview="Safety is the top priority. NurseAid includes multiple layers of fault detection, emergency stop, and safe behavior."
    sections={[
      {
        title: "Emergency Stop",
        bullets: [
          "Physical e-stop button accessible on the robot",
          "Software-triggered emergency halt",
          "Automatic stop on sensor failure detection",
        ],
      },
      {
        title: "Fault Handling",
        content: "The system continuously monitors sensor health, motor status, and navigation state. Any anomaly triggers a safe stop and operator alert.",
        bullets: [
          "Watchdog timers on critical processes",
          "Graceful degradation on sensor loss",
          "Operator notification via interface",
        ],
      },
      {
        title: "Human Safety",
        bullets: [
          "Speed limiting in crowded areas",
          "Proximity-based slowdown zones",
          "Compliant bumper design for low-impact contact",
        ],
      },
    ]}
  />
);

export default Safety;
