import { Monitor } from "lucide-react";
import SubsystemPage from "./SubsystemPage";

const Interface = () => (
  <SubsystemPage
    title="Interface"
    icon={Monitor}
    overview="The user interface provides an intuitive touchscreen experience for nurses and staff to interact with NurseAid."
    sections={[
      {
        title: "Touchscreen Display",
        content: "A mounted touchscreen provides real-time status, task management, and delivery confirmation.",
        bullets: [
          "Task request and status display",
          "Delivery confirmation workflow",
          "System health monitoring",
        ],
      },
      {
        title: "Task Management",
        bullets: [
          "Priority-based task queue",
          "Multi-destination delivery support",
          "Task history and logging",
        ],
      },
    ]}
  />
);

export default Interface;
