import { Navigation } from "lucide-react";
import SubsystemPage from "./SubsystemPage";

const NavigationPage = () => (
  <SubsystemPage
    title="Navigation"
    icon={Navigation}
    overview="Navigation is powered by the ROS 2 Nav2 stack, providing global path planning, local obstacle avoidance, and map-based localization."
    sections={[
      {
        title: "Nav2 Stack Overview",
        content: "The full Nav2 stack handles behavior trees, planners, controllers, and recovery behaviors for robust autonomous navigation.",
        bullets: [
          "Behavior tree-based task orchestration",
          "Plugin-based architecture for customization",
          "Built-in recovery behaviors for stuck situations",
        ],
      },
      {
        title: "Path Planning",
        content: "Global planning uses NavFn or Smac for optimal paths. Local planning with DWB controller handles real-time obstacle avoidance.",
        bullets: [
          "Global planner: optimal route computation",
          "Local planner: dynamic obstacle avoidance",
          "Costmap layers for static and dynamic obstacles",
        ],
      },
      {
        title: "Localization",
        content: "AMCL (Adaptive Monte Carlo Localization) on a pre-built map, augmented with ArUco marker detection for precision docking.",
        bullets: [
          "Pre-built 2D occupancy grid map",
          "AMCL particle filter localization",
          "ArUco markers for precise goal alignment",
        ],
      },
    ]}
  />
);

export default NavigationPage;
