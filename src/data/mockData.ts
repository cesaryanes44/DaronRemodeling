import { Project, Testimonial } from '../types';
import heroImage from '../assets/images/hero_daron_remodeling_1791408265699.jpg';
import roofingImage from '../assets/images/roofing_shingles_usa_1791408277015.jpg';
import kitchenImage from '../assets/images/kitchen_bathroom_remodel_1791408285664.jpg';
import paintingImage from '../assets/images/painter_craftsman_work_1791408295413.jpg';

export const HERO_IMAGE = heroImage;
export const ROOFING_IMAGE = roofingImage;
export const KITCHEN_IMAGE = kitchenImage;
export const PAINTING_IMAGE = paintingImage;

export const PROJECTS: Project[] = [
  {
    id: 'roofing-shingles',
    title: 'Architectural Shingle Roof Replacement',
    category: 'roofing',
    location: 'Westfield Suburbs, USA',
    year: '2025',
    scope: '2,600 sq ft (26 Squares)',
    duration: '2 Days',
    image: ROOFING_IMAGE,
    descriptionEn: 'Full tear-off of aged 3-tab shingles down to plywood decking. Replaced rotted sub-decking, installed synthetic underlayment, ice and water shield in valleys, and new dimensional architectural shingles with continuous ridge vent.',
    descriptionEs: 'Retiro completo de tejas antiguas hasta la madera. Reemplazo de triplay dañado, instalación de membrana impermeable sintética, barrera de hielo y agua en limahoyas, y teja asfáltica arquitectónica dimensional con ventilación de cumbrera.',
    highlightsEn: [
      'Architectural asphalt dimensional shingles with 30-year manufacturer warranty',
      'Ice & Water shield installed 6 feet up eaves and inside all valleys',
      'New step flashing and counter-flashing around chimney and sidewalls',
      'Full magnetic roller sweep for nails - spotless yard cleanup upon completion'
    ],
    highlightsEs: [
      'Tejas asfálticas arquitectónicas dimensionales con 30 años de garantía',
      'Barrera de hielo y agua en aleros y en todas las limahoyas',
      'Flashing metálico escalonado nuevo en chimenea y uniones con paredes',
      'Barrido magnético completo de clavos en el jardín y patio al terminar'
    ],
    clientType: 'Single Family Homeowner',
  },
  {
    id: 'interior-painting',
    title: 'Whole-Home Interior & Trim Painting',
    category: 'painting',
    location: 'Oakridge Estates, USA',
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
    location: 'Fairview Heights, USA',
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
    title: 'Full Exterior Makeover: Roof, Siding & Trim',
    category: 'roofing',
    location: 'Maplewood Park, USA',
    year: '2024',
    scope: 'Roofing, Exterior Paint & Porch Refinish',
    duration: '6 Days',
    image: HERO_IMAGE,
    descriptionEn: 'Full curb-appeal transformation including new charcoal architectural shingles, exterior pressure washing, siding repainting, and porch column rebuilding.',
    descriptionEs: 'Transformación total de fachada que incluyó nuevo techo de tejas arquitectónicas color carbón, lavado a presión, pintura de revestimiento y reconstrucción de columnas de porche.',
    highlightsEn: [
      'Complete weatherproofing envelope from roofline to foundation',
      'Exterior elastomeric weather-shield paint on siding and stucco',
      'New seamless aluminum gutters and downspout extensions',
      'Finished on schedule before seasonal autumn rains'
    ],
    highlightsEs: [
      'Sellado completo contra la intemperie desde el techo hasta los cimientos',
      'Pintura elastomérica exterior de alta resistencia contra agua y sol',
      'Canaletas de aluminio sin uniones y bajantes pluviales nuevos',
      'Concluido a tiempo antes del inicio de las lluvias otoñales'
    ],
    clientType: 'Complete Exterior Upgrade',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mark & Sarah Jenkins',
    neighborhood: 'Westfield Suburb',
    serviceType: 'Roof Replacement (Asphalt Shingles)',
    quoteEn: 'Daron is amazing. He came himself to inspect the roof after a severe hail storm, showed me photos of the damage, and gave me an honest quote with no high-pressure sales tactics. He and his helper finished the entire roof in 2 days and left my lawn cleaner than it was before!',
    quoteEs: 'Daron es increíble. Él mismo vino a inspeccionar el techo tras una tormenta de granizo, me mostró fotos del daño y me dio un presupuesto honesto sin trucos de venta agresivos. Terminaron todo el techo en 2 días y dejaron mi jardín impecable.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos & Maria Ramirez',
    neighborhood: 'Oakridge Estates',
    serviceType: 'Interior Painting & Drywall Repair',
    quoteEn: 'What I loved most is that Daron does the work himself. No random crews showing up. He fixed cracks in our high living room ceiling that other painters ignored, and his lines on the baseboards are perfection. Plus, communicating with him was super easy in both English and Spanish!',
    quoteEs: 'Lo que más me gustó es que Daron hace el trabajo en persona. No manda a cuadrillas desconocidas. Reparó grietas en techos altos que otros pintores ignoraron y sus cortes de pintura son perfectos. Además, fue muy fácil comunicarnos en inglés y español.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Miller',
    neighborhood: 'Fairview Heights',
    serviceType: 'Kitchen Remodel & Backsplash',
    quoteEn: 'We wanted our 90s kitchen updated on a realistic budget. Big remodeling firms quoted us ridiculous prices. Daron gave us practical recommendations, installed gorgeous shaker cabinets and subway tile, and stayed strictly on budget. Truly a trustworthy craftsman.',
    quoteEs: 'Queríamos remodelar nuestra cocina de los años 90 con un presupuesto realista. Las grandes empresas nos cobraban fortunas. Daron nos dio ideas muy prácticas, instaló gabinetes shaker hermosos y azulejos, y cumplió exactamente el presupuesto.',
    rating: 5,
  },
];
