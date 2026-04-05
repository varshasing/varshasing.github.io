import { Eye } from "lucide-react";
import SubsystemPage from "./SubsystemPage";

const Perception = () => (
  <SubsystemPage
    title="Perception"
    icon={Eye}
    overview="The perception pipeline fuses data from LiDAR and depth cameras to build a real-time understanding of the environment."
    sections={[
      {
        title: "Sensor Suite",
        bullets: [
          "2D LiDAR for 360° obstacle detection",
          "Intel RealSense depth camera for 3D perception",
          "IMU for orientation and motion tracking",
        ],
      },
      {
        title: "Object Detection",
        content: "Real-time human detection and dynamic obstacle classification using depth camera data and point cloud processing.",
        bullets: [
          "Human detection for safety-first navigation",
          "Dynamic vs static obstacle classification",
          "Real-time costmap updates",
        ],
      },
      {
        title: "Sensor Fusion",
        content: "Extended Kalman Filter (EKF) fuses wheel odometry, IMU, and visual data for robust state estimation.",
      },
    ]}
  />
);

export default Perception;
