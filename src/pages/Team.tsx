import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Linkedin } from "lucide-react";

import { useEffect, useState } from "react";

const teamMembers = [
  { name: "Matthew Kweon", role: "Computer Engineering", contribution: "UI/UX Design", Image: "/matthew_headshot.jpeg", linkedin: "https://www.linkedin.com/in/yongjoon-kweon/" },
  { name: "Varsha Singh", role: "Computer Engineering", contribution: "Project Manager & Systems", Image: "/varsha_headshot.jpeg", linkedin: "https://www.linkedin.com/in/var-singh/" },
  { name: "Kevin Liu", role: "Computer Engineering", contribution: "Navigation & Embedded", Image: "/kevin_headshot.jpeg", linkedin: "https://www.linkedin.com/in/kevin-liu-b1a417261/" },
  { name: "Lillian Chung", role: "Mechanical Engineering", contribution: "Chassis & Drivetrain", Image: "/lillian_headshot.jpeg", linkedin: "https://www.linkedin.com/in/lillianrchung/" },
  { name: "Audrey Wang", role: "Mechanical Engineering", contribution: "Electronics & Manufacturing", Image: "/audrey_headshot.jpeg", linkedin: "https://www.linkedin.com/in/audreyxwang/" },
];

const galleryImages = [
  { src: "/shark_tank.jpeg", caption: "Team 18 celebrating our Shark Tank win!" },
  { src: "/camera_bringup.jpg", caption: "Matthew and Kevin testing the Intel RealSense SDK" },
  { src: "/promo-vid_filming.jpg", caption: "Audrey and Kevin filming our first promo video" },
  { src: "/nurseaid_proto2.jpg", caption: "Our first structural prototype" },
];

const Team = () => {
  const [galleryIdx, setGalleryIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIdx((idx) => (idx + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  const firstRowMembers = teamMembers.slice(0, 3);
  const secondRowMembers = teamMembers.slice(3);

  return (
    <SectionWrapper>
      <div className="text-center mb-14 space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          The <span className="text-gradient-scarlet">Team</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Meet the team! A mixed Computer Engineering & Mechanical Engineering capstone team housed in the ECE department @ Boston University.
        </p>
        <div className="flex flex-col items-center justify-center my-8">
          <div className="relative w-80 h-52 md:w-[28rem] md:h-64 rounded-2xl overflow-hidden border-2 border-border bg-card flex items-center justify-center">
            {galleryImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.caption}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${galleryIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                draggable={false}
              />
            ))}
          </div>
          <div className="mt-3 text-muted-foreground text-sm min-h-[1.5em]">
            {galleryImages[galleryIdx].caption}
          </div>
          <div className="flex gap-2 mt-2 justify-center">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${galleryIdx === i ? 'bg-primary' : 'bg-border'}`}
                onClick={() => setGalleryIdx(i)}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {firstRowMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="feature-card text-center"
          >
            <div className="w-20 h-20 rounded-full bg-scarlet-soft flex items-center justify-center mx-auto mb-4">
              <img src={member.Image} alt={member.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-display font-semibold mb-0">{member.name}</h3>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`} className="inline-flex items-center">
                <Linkedin className="w-5 h-5 text-black hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
            <p className="text-muted-foreground text-sm mt-2">{member.contribution}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-5">
        {secondRowMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + firstRowMembers.length) * 0.08 }}
            className="feature-card text-center"
          >
            <div className="w-20 h-20 rounded-full bg-scarlet-soft flex items-center justify-center mx-auto mb-4">
              <img src={member.Image} alt={member.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-display font-semibold mb-0">{member.name}</h3>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`} className="inline-flex items-center">
                <Linkedin className="w-5 h-5 text-black hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
            <p className="text-muted-foreground text-sm mt-2">{member.contribution}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Team;
