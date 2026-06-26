import { Project, Metric, Service, ProcessStep, Testimonial, JournalArticle, Award } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'obsidian-pavilion',
    title: 'The Obsidian Pavilion',
    category: 'Residential Architecture',
    location: 'Hakone, Japan',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    aspect: 'portrait',
    description: 'A dark slate and charred cedar private retreat responding to the hot springs fog. Organized around a series of serene gravity-fed water mirrors that blur structural bounds.',
    philosophies: ['Thermal Massing', 'Monolithic Cedar Cladding', 'Static Water Integration']
  },
  {
    id: 'atrium-light',
    title: 'Atrium of Light',
    category: 'Cultural Spaces',
    location: 'Copenhagen, Denmark',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    aspect: 'wide',
    description: 'A monument of curved off-white raw concrete, punctured by sculptural sky apertures which track the solar path to illuminate the central exhibition galleries.',
    philosophies: ['Solar Position Tracking', 'Double-Curved Concrete Shells', 'Solf-diffused Galleries']
  },
  {
    id: 'canyon-residence',
    title: 'Canyon Rammed Earth',
    category: 'Residential Architecture',
    location: 'Utah Desert, United States',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
    aspect: 'landscape',
    description: 'A home carved from local earth strata. Rammed-earth walls harmonize with raw brushed brass features and monumental sliding sheets of floor-to-ceiling structural glass.',
    philosophies: ['Local Earth Aggregates', 'Zero-Threshold Flooring', 'Brushed Brass Tectonics']
  },
  {
    id: 'monolith-library',
    title: 'The Monolith Library',
    category: 'Civic Architecture',
    location: 'Kyoto, Japan',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    aspect: 'wide',
    description: 'Sandblasted travertine block layout hosting public reading cells, designed as a cloistered stone sanctuary balancing physical gravity with soaring linear light wells.',
    philosophies: ['Travertine Block Stonework', 'Linear Skylight Channels', 'Accoustic Cloistered Void']
  },
  {
    id: 'drift-gallery',
    title: 'The Drift Interior',
    category: 'Interior Architecture',
    location: 'Milan, Italy',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    aspect: 'portrait',
    description: 'A luxury commercial showroom centered on floating rough-hewn limestone monolithic counters, framed by raw silk wall curtains and soft recessed lighting bays.',
    philosophies: ['Limestone Plinth Levitation', 'Raw Silk Partitioning', 'Atmospheric Lighting Troughs']
  },
  {
    id: 'sea-carved-villa',
    title: 'Sea-Carved Oceanside Villa',
    category: 'Residential Architecture',
    location: 'Amalfi, Italy',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    aspect: 'landscape',
    description: 'An elegant private villa nestled deep into Amalfi’s limestone cliffs. Cantilevered terraces extend directly over the water, celebrating the dramatic vertical context.',
    philosophies: ['Limestone Keying', 'Suspended Coastal Formwork', 'Salt-Resistant Glazing']
  },
  {
    id: 'hyderabad-bento',
    title: 'The Bento Courtyard',
    category: 'Residential Architecture',
    location: 'Madhapur, Hyderabad',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80',
    aspect: 'portrait',
    description: 'An elegant minimal villa in Madhapur responsive to warm sunlight, designed with customized stone screen claddings, linear concrete frames, and pocket garden courtyards.',
    philosophies: ['Stone Screens', 'Courtyard Ventilation', 'Linear Concrete Architecture']
  }
];

export const METRICS: Metric[] = [
  {
    id: 'm1',
    value: '7',
    label: 'Completed Projects',
    subtitle: 'Exacting high-end architectural designs delivered'
  },
  {
    id: 'm2',
    value: '4 Years',
    label: 'Studio Experience',
    subtitle: 'Founded and shaping environment since 2022'
  },
  {
    id: 'm3',
    value: 'Hyderabad',
    label: 'Design Hub',
    subtitle: 'Headquartered at Madhapur, Hyderabad'
  },
  {
    id: 'm4',
    value: '100%',
    label: 'Bespoke Focus',
    subtitle: 'Upholding hand-chiseled design & shape integrity'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'House & Villa Design',
    description: 'Custom houses, modern villas, and private estates tailored for your lifestyle, comfort, and local climate.',
    iconName: 'Home',
    gridSpan: 'large',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    title: 'Interior Design',
    description: 'Beautiful interior planning, custom furniture selection, optimal lighting setups, and tactile material finishes.',
    iconName: 'Compass',
    gridSpan: 'medium',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    title: 'Garden & Pools',
    description: 'Quiet outdoor garden designs, clean pools, and cozy seating spots blended beautifully with nature.',
    iconName: 'Leaf',
    gridSpan: 'small',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    title: 'Offices & Shops',
    description: 'Inspiring spaces for workspaces, retail showrooms, cafes, and creative design studios.',
    iconName: 'Layers',
    gridSpan: 'small',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's5',
    title: 'Remodeling',
    description: 'Upgrading existing rooms and classic houses with modern features, open layouts, and durable textures.',
    iconName: 'Globe',
    gridSpan: 'medium',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's6',
    title: '3D Visual Tours',
    description: 'Realistic photo previews, digital video walkthroughs, and miniature physical wooden models of your future home.',
    iconName: 'Maximize',
    gridSpan: 'large',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'First Consultation',
    description: 'We meet with you to explore your ideas and needs, look at the project site, and study properties of natural daylight.',
    milestone: 'Site Analysis & Clear Idea Brief'
  },
  {
    stepNumber: '02',
    title: 'Concept Sketches',
    description: 'We design layout options and build 3D visual models and hand drawings to show you how the space will look.',
    milestone: 'Layout Concept & Styling Agreed'
  },
  {
    stepNumber: '03',
    title: 'Material Selection',
    description: 'We pick matching premium natural stone, wood types, paint finishes, and custom metal fixtures together.',
    milestone: 'Final Material Samples Approved'
  },
  {
    stepNumber: '04',
    title: 'Detailed Planning',
    description: 'We create perfect blueprints and structural maps covering lighting, plumbing, and wall drawings for the builder.',
    milestone: 'Construction Plan Set Delivered'
  },
  {
    stepNumber: '05',
    title: 'On-Site Overseeing',
    description: 'We supervise builders and custom craftsmen on-site daily to ensure everything is put together perfectly.',
    milestone: 'Keys Handed Over & Project Finish'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: '"4 FOLDS DESIGN STUDIO did not just design our coastal residence; they choreographed the sunlight. Every morning, the sunrise climbs across the raw travertine jointing in a way that feels incredibly sacred."',
    author: 'Elena Rostova',
    role: 'Principal Art Curator',
    project: 'Big Sur Coastal Pavilions'
  },
  {
    id: 't2',
    quote: '"Their fanatical devotion to tactile integrity—the raw weight of the massive cast-bronze doors, the quiet glide of the window panels—turns the simple act of arriving home into cinema."',
    author: 'Jean-Laurent Laurent',
    role: 'Design Editor & Academic',
    project: 'The Hakone Slate Retreat'
  },
  {
    id: 't3',
    quote: '"4 FOLDS DESIGN STUDIO balanced mass and weightlessness with ultimate mastery. The Monolith Civic Library has anchored our district, offering citizens a warm, cathedral-like reading chamber."',
    author: 'Chief Director Kenji Tanaka',
    role: 'Urban Planning Committee Head',
    project: 'Kyoto Civic Archive'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j1',
    title: 'Architecture of Silence: राम्र Materials',
    date: 'May 12, 2026',
    category: 'Material Philosophy',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    snippet: 'An exploration of low-clinker concrete, rough travertine slabs, and aged cedar planks that heal and gain character under rain, heat, and frost.'
  },
  {
    id: 'j2',
    title: 'Eliminating the Baseboard and Concealing Portals',
    date: 'April 28, 2026',
    category: 'Interior Tectonics',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    snippet: 'How deleting traditional joinery visual noise, integrating zero-clearance pivots, and flushing floor thresholds allows rooms to truly breathe.'
  },
  {
    id: 'j3',
    title: 'The Modern Redefined Atrium as a Thermal Lung',
    date: 'March 15, 2026',
    category: 'Sustainable Planning',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    snippet: 'Reintroducing Roman and courtyard layouts as physical convection generators, removing deep reliance on mechanical ventilative units in extreme climates.'
  }
];

export const AWARDS: Award[] = [
  {
    id: 'a1',
    title: 'Golden Trowel Icon Prize',
    category: 'Residential Masterwork',
    year: '2025',
    agency: 'Royal Institute of Architecture'
  },
  {
    id: 'a2',
    title: 'Pritzker Vanguard Citation',
    category: 'Emerging Spatial Studio',
    year: '2024',
    agency: 'Pritzker Endowment Panel'
  },
  {
    id: 'a3',
    title: 'Grand Prix of Interior Honor',
    category: 'Sensory Commercial Zone',
    year: '2025',
    agency: 'Milan Spatial Festival'
  },
  {
    id: 'a4',
    title: 'Structural Integrity Distinction',
    category: 'Civic Achievement',
    year: '2024',
    agency: 'Copenhagen Architectural Board'
  },
  {
    id: 'a5',
    title: 'Awwwards Site of the Year Nominee',
    category: 'Global Digital Portfolio',
    year: '2026',
    agency: 'Awwwards Committee'
  }
];

export const IMMERSIVE_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90',
    title: 'The Obsidian Pavilion',
    desc: 'The dialogue of slate and slow steam, deep Hakone.',
    coords: '35.1815° N, 139.0197° E'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=90',
    title: 'Atrium of Light',
    desc: 'Carving shadows with sculptural concrete roofs, Copenhagen.',
    coords: '55.6761° N, 12.5683° E'
  },
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=90',
    title: 'Canyon Rammed Earth',
    desc: 'A structural extension of Utah’s prehistoric rock formations.',
    coords: '37.8393° N, 111.4239° W'
  }
];
