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
    image: "/activities/activity1.jpg",
    icon: "📖"
  },
  {
    id: "act-002",
    title: "Counselling Sessions",
    description: "We offer compassionate guidance through difficult times with our dedicated counselling sessions. Our trained volunteers provide emotional support, trauma care, and spiritual direction.",
    image: "/activities/activity2.jpg",
    icon: "🤝"
  },
  {
    id: "act-003",
    title: "Founder's Scholarships Scheme",
    description: "Education support for orphans and fatherless children through our comprehensive scholarship scheme. We believe education is the key to breaking the cycle of poverty and opening doors of opportunity.",
    image: "/activities/activity3.jpg",
    icon: "🎓"
  },
  {
    id: "act-004",
    title: "Skill Acquisition Program",
    description: "Empowering members with practical vocational training to achieve financial independence. We offer courses in tailoring, baking, computer literacy, and other market-relevant skills.",
    image: "/activities/activity4.jpg",
    icon: "🛠️"
  },
  {
    id: "act-005",
    title: "Small-Scale Business Loans",
    description: "We provide zero-interest micro-loans to help widows and the elderly start or expand their small businesses. This initiative fosters self-reliance and economic stability within our communities.",
    image: "/activities/activity5.jpg",
    icon: "💼"
  },
  {
    id: "act-006",
    title: "Faith Clinic",
    description: "A specialized prayer and spiritual healing program for those facing severe challenges. The Faith Clinic offers intensive intercessory prayer and faith-building sessions.",
    image: "/activities/activity6.jpg",
    icon: "🙏"
  },
  {
    id: "act-007",
    title: "Annual Events (Career Seminar, Thanksgiving, National Convention)",
    description: "Our major yearly gatherings bring all members together for mass empowerment, celebration, and strategic planning. These include our highly anticipated National Convention and Thanksgiving service.",
    image: "/activities/activity7.jpg",
    icon: "🎉"
  }
];
