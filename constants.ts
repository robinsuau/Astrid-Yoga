import { Practice, Service, Story, CalendarSlot } from './types';

// Palette
export const COLORS = {
  primary: '#5A6C57',
  mat: '#4A5D4B',
  secondary: '#D6C6B6',
  accent: '#E8E1DA',
  textDark: '#2C2C2C',
  textLight: '#666666',
  white: '#FFFFFF',
  bgBody: '#FAF9F6',
};

export const PRACTICES: Practice[] = [
  {
    id: 'ashtanga',
    title: 'Ashtanga',
    frontTitle: 'Yoga Ashtanga',
    subtitle: '"La méditation en mouvement."',
    description: 'Une pratique dynamique et structurée, synchronisant le souffle et le mouvement pour purifier le corps.',
    image: 'https://images.pexels.com/photos/8534767/pexels-photo-8534767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'yin',
    title: 'Yin Yoga',
    frontTitle: 'Yin Yoga',
    subtitle: '"L\'éloge de la lenteur."',
    description: 'Une pratique douce et meditative. Nous tenons les postures au sol pour un lâcher-prise total.',
    image: 'https://images.pexels.com/photos/9032690/pexels-photo-9032690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'vinyasa',
    title: 'Vinyasa',
    frontTitle: 'Yoga Vinyasa',
    subtitle: '"Flow et Créativité."',
    description: 'Un enchaînement fluide et créatif de postures, tel une danse. On travaille le cardio et la souplesse.',
    image: 'https://images.pexels.com/photos/6916300/pexels-photo-6916300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'collective',
    title: 'Collectif',
    price: '18€',
    period: '/ séance',
    capacity: 'Max 8 personnes',
    features: ['Yin Yoga', 'Vinyasa Flow', 'Ashtanga']
  },
  {
    id: 'individual',
    title: 'Individuel',
    price: '70€',
    period: '/ heure',
    features: ['Sur mesure', 'Correction posturale', 'À domicile ou en ligne']
  },
  {
    id: 'corporate',
    title: 'Entreprise',
    price: 'Sur devis',
    features: ['Gestion du stress', 'Yoga sur chaise', 'Team Building Zen']
  }
];

export const STORIES: Story[] = [
  { id: '1', thumbnail: 'https://images.pexels.com/photos/8964938/pexels-photo-8964938.jpeg?auto=compress&cs=tinysrgb&w=200', fullImage: 'https://images.pexels.com/photos/8964938/pexels-photo-8964938.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', thumbnail: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=200&auto=format&fit=crop', fullImage: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&auto=format&fit=crop' },
  { id: '3', thumbnail: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=200&auto=format&fit=crop', fullImage: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&auto=format&fit=crop' },
  { id: '4', thumbnail: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=200&auto=format&fit=crop', fullImage: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=800&auto=format&fit=crop' },
  { id: '5', thumbnail: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=200&auto=format&fit=crop', fullImage: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&auto=format&fit=crop' },
];

export const CALENDAR: CalendarSlot[] = [
  { id: '1', day: 'Lundi', time: '18:00', activity: 'Yoga Vinyasa' },
  { id: '2', day: 'Mardi', time: '19:30', activity: 'Yoga Ashtanga' },
  { id: '3', day: 'Mercredi', time: '10:00', activity: 'Yin Yoga Doux' },
  { id: '4', day: 'Jeudi', time: '18:30', activity: 'Hatha Flow' },
  { id: '5', day: 'Samedi', time: '09:00', activity: 'Morning Yoga' },
];