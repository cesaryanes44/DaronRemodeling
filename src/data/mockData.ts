import { Project, Testimonial } from '../types';
import heroImage from '../assets/images/hero_daron_remodeling_1791408265699.jpg';
import roofingImage from '../assets/images/roofing_shingles_usa_1791408277015.jpg';
import kitchenImage from '../assets/images/kitchen_bathroom_remodel_1791408285664.jpg';
import paintingImage from '../assets/images/painter_craftsman_work_1791408295413.jpg';
import carpentryImage from '../assets/images/service_carpentry_commons.jpg';
import fenceRepairImage from '../assets/images/service_fence_repair_commons.jpg';
import plumbingImage from '../assets/images/service_plumbing_commons.jpg';

export const HERO_IMAGE = heroImage;
export const ROOFING_IMAGE = roofingImage;
export const KITCHEN_IMAGE = kitchenImage;
export const PAINTING_IMAGE = paintingImage;
export const CARPENTRY_IMAGE = carpentryImage;
export const FENCE_REPAIR_IMAGE = fenceRepairImage;
export const PLUMBING_IMAGE = plumbingImage;

export const PROJECTS: Project[] = [
  {
    id: 'roofing-shingles',
    title: 'Asphalt Shingle Roof Repairs',
    category: 'roofing',
    location: 'Houston, TX',
    year: '2025',
    scope: 'Damaged shingles and roof leak repairs',
    duration: 'As scheduled',
    image: ROOFING_IMAGE,
    descriptionEn: 'Repair of damaged or missing asphalt shingles and roof leak areas, with attention to nearby flashing and roof penetrations.',
    descriptionEs: 'Reparación de tejas asfálticas dañadas o faltantes y de áreas con goteras, revisando también el flashing y las uniones cercanas.',
    highlightsEn: [
      'Repair or replacement of individual damaged or missing shingles',
      'Inspection and repair of roof leak areas',
      'Check of flashing around roof penetrations',
      'Cleanup of the work area after repairs'
    ],
    highlightsEs: [
      'Reparación o cambio de tejas individuales dañadas o faltantes',
      'Inspección y reparación de áreas con goteras',
      'Revisión del flashing alrededor de uniones y penetraciones',
      'Limpieza del área de trabajo al terminar'
    ],
    clientType: 'Single Family Homeowner',
  },
  {
    id: 'interior-painting',
    title: 'Whole-Home Interior & Trim Painting',
    category: 'painting',
    location: 'Houston, TX',
    year: '2025',
    scope: '4 Bedrooms + Living + High Ceilings',
    duration: '4 Days',
    image: PAINTING_IMAGE,
    descriptionEn: 'Comprehensive interior overhaul: thorough wall patching, sanding, drywall crack repair, priming, and two finish coats using Sherwin-Williams Emerald washable matte paint with semi-gloss white trim and doors.',
    descriptionEs: 'Transformación interior completa: resanado de paredes, lijado, reparación de grietas en drywall, sellador/primer y dos manos de pintura lavable Sherwin-Williams Emerald, con molduras y puertas en blanco semibrillante.',
    highlightsEn: [
      'Sharp laser-straight cut lines on ceilings, baseboards, and window casings',
      'Full furniture masking and heavy drop-cloth protection on hardwood floors',
      'Odorless, zero-VOC premium paints safe for pets and children',
      'Complete caulking of gaps along baseboards and crown molding'
    ],
    highlightsEs: [
      'Líneas de corte perfectamente rectas en techos, zócalos y marcos de ventanas',
      'Protección total de muebles y pisos de madera con lonas de uso rudo',
      'Pinturas premium sin olor (cero VOC) seguras para mascotas y familia',
      'Sellado completo de grietas con calafateo en molduras y rodapiés'
    ],
    clientType: 'Residential Renovation',
  },
  {
    id: 'kitchen-remodel',
    title: 'Modern Kitchen & Shaker Cabinet Remodel',
    category: 'remodeling',
    location: 'Houston, TX',
    year: '2024',
    scope: 'Kitchen & Breakfast Nook',
    duration: '10 Days',
    image: KITCHEN_IMAGE,
    descriptionEn: 'Complete kitchen modernization: removed dated oak cabinets, installed solid white wood shaker cabinets, durable Calacatta quartz countertops, subway tile backsplash, and under-cabinet LED task lighting.',
    descriptionEs: 'Modernización integral de cocina: retiro de gabinetes antiguos de roble, instalación de gabinetes tipo shaker de madera blanca, cubiertas de cuarzo Calacatta, salpicadero de azulejo tipo metro e iluminación LED bajo muebles.',
    highlightsEn: [
      'Soft-close all-plywood cabinet construction with brushed brass hardware',
      'Seamless quartz countertop installation with undermount single-basin sink',
      'Hand-laid herringbone ceramic tile backsplash with stain-resistant grout',
      'New dedicated 20-amp GFCI electrical outlets and recessed pot lights'
    ],
    highlightsEs: [
      'Gabinetes con bisagras y correderas de cierre suave y tiradores de latón',
      'Cubiertas de cuarzo con tarja bajo cubierta de una sola tina profunda',
      'Azulejo cerámico instalado a mano en espiga con boquilla antimanchas',
      'Tomas eléctricas GFCI de 20 amperios y focos empotrados LED nuevos'
    ],
    clientType: 'Homeowner Remodel',
  },
  {
    id: 'exterior-remodel',
    title: 'Exterior Repairs & Refresh: Roof, Siding & Trim',
    category: 'roofing',
    location: 'Houston, TX',
    year: '2024',
    scope: 'Roofing, Exterior Paint & Porch Refinish',
    duration: '6 Days',
    image: HERO_IMAGE,
    descriptionEn: 'Exterior improvements including asphalt shingle repairs, pressure washing, siding repainting, and porch column repairs.',
    descriptionEs: 'Mejoras exteriores que incluyeron reparación de tejas asfálticas, lavado a presión, pintura del revestimiento y reparación de columnas del porche.',
    highlightsEn: [
      'Asphalt shingle and roof leak repairs',
      'Exterior weather-resistant paint on siding and trim',
      'Porch column carpentry repairs',
      'Work area cleanup after completion'
    ],
    highlightsEs: [
      'Reparación de tejas asfálticas y goteras',
      'Pintura exterior resistente a la intemperie en revestimiento y molduras',
      'Reparaciones de carpintería en columnas del porche',
      'Limpieza del área de trabajo'
    ],
    clientType: 'Complete Exterior Upgrade',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mark & Sarah Jenkins',
    neighborhood: 'Houston, TX',
    serviceType: 'Asphalt Shingle Roof Repair',
    quoteEn: 'Daron is amazing. He came himself to inspect the roof after a severe hail storm, showed me photos of the damage, and gave me an honest quote with no high-pressure sales tactics. He repaired the damaged shingles and leak area, then left my lawn cleaner than it was before!',
    quoteEs: 'Daron es increíble. Él mismo vino a inspeccionar el techo tras una tormenta de granizo, me mostró fotos del daño y me dio un presupuesto honesto sin trucos de venta agresivos. Reparó las tejas dañadas y el área de la gotera, y dejó mi jardín impecable.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos & Maria Ramirez',
    neighborhood: 'Houston, TX',
    serviceType: 'Interior Painting & Drywall Repair',
    quoteEn: 'What I loved most is that Daron does the work himself. No random crews showing up. He fixed cracks in our high living room ceiling that other painters ignored, and his lines on the baseboards are perfection. Plus, communicating with him was super easy in both English and Spanish!',
    quoteEs: 'Lo que más me gustó es que Daron hace el trabajo en persona. No manda a cuadrillas desconocidas. Reparó grietas en techos altos que otros pintores ignoraron y sus cortes de pintura son perfectos. Además, fue muy fácil comunicarnos en inglés y español.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Miller',
    neighborhood: 'Houston, TX',
    serviceType: 'Kitchen Remodel & Backsplash',
    quoteEn: 'We wanted our 90s kitchen updated on a realistic budget. Big remodeling firms quoted us ridiculous prices. Daron gave us practical recommendations, installed gorgeous shaker cabinets and subway tile, and stayed strictly on budget. Truly a trustworthy craftsman.',
    quoteEs: 'Queríamos remodelar nuestra cocina de los años 90 con un presupuesto realista. Las grandes empresas nos cobraban fortunas. Daron nos dio ideas muy prácticas, instaló gabinetes shaker hermosos y azulejos, y cumplió exactamente el presupuesto.',
    rating: 5,
  },
];
