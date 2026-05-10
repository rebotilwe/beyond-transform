// client/src/data/services.js
import { FaChartLine, FaUsers, FaHeart, FaGraduationCap } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    icon: FaChartLine,
    title: 'HR Consulting',
    description: 'Strategic human capital solutions focused on organizational growth, workforce transformation, and future-ready leadership.',
    link: '/services/hr-consulting'
  },
  {
    id: 2,
    icon: FaUsers,
    title: 'Leadership Coaching',
    description: 'Personalized coaching programs designed to empower leaders, professionals, and emerging talent.',
    link: '/services/coaching'
  },
  {
    id: 3,
    icon: FaGraduationCap,
    title: 'Youth Development',
    description: 'Equipping youth with employability readiness, career direction, and life-changing opportunities.',
    link: '/services/youth-development'
  },
  {
    id: 4,
    icon: FaHeart,
    title: "Women's Empowerment",
    description: 'Supporting women through leadership development, wellness initiatives, and transformational programs.',
    link: '/services/women-empowerment'
  },
];