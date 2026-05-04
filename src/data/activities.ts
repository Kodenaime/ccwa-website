export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const activities: Activity[] = [
  {
    id: "act-001",
    title: "Weekly Bible Study / Seminars",
    description: "Our weekly Bible study and seminars provide spiritual growth and fellowship for all members. It is a time of deep scriptural exploration, prayer, and mutual encouragement.",
    image: "https://placehold.co/800x600/2E7D4F/FAFAF7?text=Bible+Study",
    icon: "📖"
  },
  {
    id: "act-002",
    title: "Counselling Sessions",
    description: "We offer compassionate guidance through difficult times with our dedicated counselling sessions. Our trained volunteers provide emotional support, trauma care, and spiritual direction.",
    image: "https://placehold.co/800x600/D4860A/FAFAF7?text=Counselling",
    icon: "🤝"
  },
  {
    id: "act-003",
    title: "Founder's Scholarships Scheme",
    description: "Education support for orphans and fatherless children through our comprehensive scholarship scheme. We believe education is the key to breaking the cycle of poverty and opening doors of opportunity.",
    image: "https://placehold.co/800x600/3A9EAD/FAFAF7?text=Scholarships",
    icon: "🎓"
  },
  {
    id: "act-004",
    title: "Skill Acquisition Program",
    description: "Empowering members with practical vocational training to achieve financial independence. We offer courses in tailoring, baking, computer literacy, and other market-relevant skills.",
    image: "https://placehold.co/800x600/2C2C2C/FAFAF7?text=Skill+Acquisition",
    icon: "🛠️"
  },
  {
    id: "act-005",
    title: "Small-Scale Business Loans",
    description: "We provide zero-interest micro-loans to help widows and the elderly start or expand their small businesses. This initiative fosters self-reliance and economic stability within our communities.",
    image: "https://placehold.co/800x600/2E7D4F/FAFAF7?text=Business+Loans",
    icon: "💼"
  },
  {
    id: "act-006",
    title: "Faith Clinic",
    description: "A specialized prayer and spiritual healing program for those facing severe challenges. The Faith Clinic offers intensive intercessory prayer and faith-building sessions.",
    image: "https://placehold.co/800x600/D4860A/FAFAF7?text=Faith+Clinic",
    icon: "🙏"
  },
  {
    id: "act-007",
    title: "Annual Events (Career Seminar, Thanksgiving, National Convention)",
    description: "Our major yearly gatherings bring all members together for mass empowerment, celebration, and strategic planning. These include our highly anticipated National Convention and Thanksgiving service.",
    image: "https://placehold.co/800x600/3A9EAD/FAFAF7?text=Annual+Events",
    icon: "🎉"
  }
];
