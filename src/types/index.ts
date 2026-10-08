export type Language = 'en' | 'es';

export interface Project {
  id: string;
  title: string;
  category: 'painting' | 'remodeling' | 'roofing';
  location: string;
  year: string;
  scope: string;
  duration: string;
  image: string;
  descriptionEn: string;
  descriptionEs: string;
  highlightsEn: string[];
  highlightsEs: string[];
  clientType: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleEs: string;
  subtitleEn: string;
  subtitleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  featuresEn: string[];
  featuresEs: string[];
  materialsEn: string;
  materialsEs: string;
  metric: string;
  metricLabelEn: string;
  metricLabelEs: string;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  serviceType: string;
  quoteEn: string;
  quoteEs: string;
  rating: number;
}
