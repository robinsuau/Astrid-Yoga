export interface Practice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  frontTitle: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  period?: string;
  capacity?: string;
  features: string[];
}

export interface Story {
  id: string;
  thumbnail: string;
  fullImage: string;
}

export interface CalendarSlot {
  id: string;
  day: string;
  time: string;
  activity: string;
}