import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const teamMembers = [
  { name: "Team Member 1", role: "Computer Engineering", contribution: "Navigation & perception pipeline" },
  { name: "Team Member 2", role: "Computer Engineering", contribution: "ROS 2 integration & interface" },
  { name: "Team Member 3", role: "Computer Engineering", contribution: "Electronics & embedded systems" },
  { name: "Team Member 4", role: "Mechanical Engineering", contribution: "Chassis & drivetrain design" },
  { name: "Team Member 5", role: "Mechanical Engineering", contribution: "Cabinet & payload system" },
  { name: "Team Member 6", role: "Mechanical Engineering", contribution: "Safety & mechanical testing" },
];

const Team = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-14 space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          The <span className="text-gradient-scarlet">Team</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          A joint Computer Engineering & Mechanical Engineering capstone team at Boston University.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="feature-card text-center"
          >
            <div className="w-16 h-16 rounded-full bg-scarlet-soft flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-display font-bold text-lg">
                {member.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <h3 className="font-display font-semibold">{member.name}</h3>
            <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
            <p className="text-muted-foreground text-sm mt-2">{member.contribution}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Team;
