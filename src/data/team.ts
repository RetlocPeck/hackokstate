export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Colter Holmes",
    role: "Event Director",
    bio: "Computer Engineering student and Microsoft Software Engineering intern dedicated to organizing Hack OKState and inspiring collaboration in tech.",
    image: "/team/colter.jpg",
    github: "https://github.com/retlocpeck",
    linkedin: "https://linkedin.com/in/colterholmes",
    instagram: "https://instagram.com/imcolter"
  },
  {
    name: "Ricardo Mulino",
    role: "Co-Director",
    bio: "Software Engineering student with experience in full-stack development and hackathon organization.",
    image: "/team/michael.jpg",
    github: "https://github.com/michael",
    linkedin: "https://linkedin.com/in/michael",
    instagram: "https://instagram.com/michael"
  },
  {
    name: "Emily Rodriguez",
    role: "Logistics Coordinator",
    bio: "Business and Computer Science double major focused on event planning and participant experience.",
    image: "/team/emily.jpg",
    github: "https://github.com/emily",
    linkedin: "https://linkedin.com/in/emily",
    instagram: "https://instagram.com/emily"
  },
  {
    name: "David Park",
    role: "Sponsorship Lead",
    bio: "Entrepreneurship student building connections between industry and academic communities.",
    image: "/team/david.jpg",
    github: "https://github.com/david",
    linkedin: "https://linkedin.com/in/david",
    instagram: "https://instagram.com/david"
  },
  {
    name: "Alex Thompson",
    role: "Marketing Director",
    bio: "Graphic Design and Computer Science student creating engaging content for the hackathon.",
    image: "/team/alex.jpg",
    github: "https://github.com/alex",
    linkedin: "https://linkedin.com/in/alex",
    instagram: "https://instagram.com/alex"
  },
  {
    name: "Jessica Wu",
    role: "Workshop Coordinator",
    bio: "Computer Science graduate student organizing educational sessions and mentorship programs.",
    image: "/team/jessica.jpg",
    github: "https://github.com/jessica",
    linkedin: "https://linkedin.com/in/jessica",
    instagram: "https://instagram.com/jessica"
  }
];
