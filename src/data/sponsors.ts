export interface Sponsor {
  name: string;
  tier: string;
  logo: string;
  website: string;
  description: string;
}

export const sponsorsData: Sponsor[] = [
  {
    name: "Your Company Here",
    tier: "Platinum",
    logo: "/sponsors/placeholder-platinum.png",
    website: "mailto:hackokstate@okstate.edu?subject=Platinum Sponsorship Inquiry",
    description: "This could be your company supporting the next generation of innovators"
  },
  {
    name: "Be Our Gold Sponsor",
    tier: "Gold",
    logo: "/sponsors/placeholder-gold.png",
    website: "mailto:hackokstate@okstate.edu?subject=Gold Sponsorship Inquiry",
    description: "Partner with us to showcase your brand to talented students"
  },
  {
    name: "Could Be You!",
    tier: "Silver",
    logo: "/sponsors/placeholder-silver.png",
    website: "mailto:hackokstate@okstate.edu?subject=Silver Sponsorship Inquiry",
    description: "Join us in empowering student innovation and creativity"
  }
];
