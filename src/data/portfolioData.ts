import { Project, ProcessStep, SoftwareTool, Certificate, EducationItem } from '../types';
import naturePondImg from '../assets/images/nature_pond_countryside_1790246993287.jpg';
import natureRiverRaysImg from '../assets/images/nature_river_godrays_1790247007605.jpg';
import natureMountainViewImg from '../assets/images/nature_mountain_viewpoint_1790247019196.jpg';

export const PERSONAL_INFO = {
  name: 'MANOJ CHETRI',
  shortName: 'Manoj C.',
  role: 'Digital Marketing / Business & Visual Creative',
  tagline: 'B.Com student exploring digital marketing, business growth, creative content, and modern technologies.',
  bio: "Hi, I'm Manoj Chetri, a B.Com student with a growing interest in Digital Marketing, Business, and Technology. At the moment, I’m focused on turning my theoretical knowledge into practical experience through personal projects, content creation, and digital marketing experiments. I enjoy exploring new ideas, learning how digital platforms work, and developing skills that can help businesses build and grow their online presence. I’m curious, eager to learn, and continuously working on improving my skills. My long-term goal is to build a career in Digital Marketing, where I can combine my B.Com background with digital skills to create meaningful results for businesses. This portfolio represents my learning journey, skills, projects, and progress as I prepare for future opportunities.",
  location: 'India',
  specialization: 'Digital Marketing / Business Growth / Content Strategy / Technology',
  experience: 'Digital Marketing & Business Explorer',
  email: 'manojchetri45@gmail.com',
  instagram: 'manozchetri',
  behance: 'manojchetri',
  linkedin: 'manoj-chetri',
  availableForHire: true,
};

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: 'Microsoft Excel', abbr: 'Xl', color: '#0A3B21', textColor: '#21A366', role: 'Data analysis, financial records, reporting & analytics' },
  { name: 'Google Workspace', abbr: 'Gw', color: '#1A73E8', textColor: '#4285F4', role: 'Docs, Sheets, Slides, Drive & business collaboration' },
  { name: 'Canva Pro', abbr: 'Cv', color: '#002B36', textColor: '#00C4CC', role: 'Rapid campaign assets, client templates & prototypes' },
  { name: 'Meta Business Suite', abbr: 'Mb', color: '#0668E1', textColor: '#2D88FF', role: 'Campaign management, audience insights & scheduling' },
];

export const DESIGNING_SKILLS = [
  'Digital Marketing Fundamentals',
  'Computer Applications',
  'Content Creation',
  'Basic Market & Competitor Research',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    tagline: 'Understand the brief, audience and objectives.',
    description: 'Deep dive into the core brand story, target demographic expectations, and unique visual positioning to define the creative thesis.',
  },
  {
    step: '02',
    title: 'RESEARCH',
    tagline: 'Explore references, competitors, trends and visual directions.',
    description: 'Assemble moodboards, historical design references, Swiss typographic hierarchy, and cultural nuances to uncover distinct angles.',
  },
  {
    step: '03',
    title: 'CONCEPT',
    tagline: 'Develop multiple creative directions.',
    description: 'Rough sketch layouts, compositional thumbnailing, mascot exploration, and initial typography pairings to present clear options.',
  },
  {
    step: '04',
    title: 'DESIGN',
    tagline: 'Build typography, color, composition and visual assets.',
    description: 'Translate approved concepts into high-resolution vectors, tactile color harmonies, 3D mockups, and cohesive design layouts.',
  },
  {
    step: '05',
    title: 'REFINE',
    tagline: 'Review, test and improve the design.',
    description: 'Stress-test designs across different formats, responsive viewports, CMYK print separations, and digital social feeds for optimal impact.',
  },
  {
    step: '06',
    title: 'DELIVER',
    tagline: 'Prepare final assets for digital or print use.',
    description: 'Hand over print-ready press PDFs with bleed & crop marks, clean Figma components, web-optimized assets, and brand asset guides.',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-google-digital-marketing',
    number: '01',
    title: 'Fundamentals of digital marketing',
    issuer: 'Google',
    recipient: 'Manoj Chetri',
    year: 'August 20, 2026',
    credentialId: '468344049',
    skills: 'Digital Marketing • Content Strategy • SEO & Analytics • Online Presence',
    description: 'Officially certified in Fundamentals of digital marketing by Google. Completed all curriculum modules covering search engine optimization, display & search campaigns, customer journey mapping, and digital marketing strategies.',
    badge: 'GOOGLE CERTIFIED',
    status: 'COMPLETED',
  },
  {
    id: 'cert-google-ads-search',
    number: '02',
    title: 'GOOGLE ADS SEARCH CERTIFICATION',
    issuer: 'Google (Skillshop)',
    year: 'September 9, 2026',
    credentialId: '193642566',
    skills: 'Google Ads Search • Keyword Bidding • Quality Score • Search Campaigns',
    description: 'Has successfully completed and is certified in Google Ads Search Certification. Demonstrates proficiency in building and optimizing Google Search campaigns that convert intent into measurable business results.',
    badge: 'GOOGLE ADS CERTIFIED',
    status: 'COMPLETED',
    verificationUrl: 'https://skillshop.credential.net/4ba518c8-f7a3-4426-b5d1-227730a93d0f#acc.aZ4H76oc',
  },
  {
    id: 'cert-meta-blueprint',
    number: '03',
    title: 'META BLUEPRINT',
    issuer: 'Meta',
    year: '2026',
    credentialId: 'META-BLP-VERIFIED',
    skills: 'Social Advertising • Campaign Objectives • Audience Targeting • Ad Formats',
    description: 'Completed digital marketing and advertising learning programs, specializing in campaign objective selection, Meta ad placement, conversion optimization, and brand storytelling.',
    badge: 'META CERTIFIED',
    status: 'COMPLETED',
  },
  {
    id: 'cert-computer-course',
    number: '04',
    title: 'COMPUTER COURSE',
    issuer: 'Computer Applications & Skills',
    year: '2026',
    credentialId: 'COMP-APP-2026',
    skills: 'Computer Applications • Data Management • Digital Tools • Office Productivity',
    description: 'Completed training in computer applications and digital skills, building practical proficiency with essential computing software, digital workflows, and productivity tools.',
    badge: 'COMPLETED',
    status: 'COMPLETED',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-school',
    number: '01',
    level: 'SCHOOL',
    title: '10th PASS OUT',
    institution: 'Grace Educational Institute School',
    description: 'Completed my secondary education and built a strong academic foundation.',
    status: 'COMPLETED',
  },
  {
    id: 'edu-higher-secondary',
    number: '02',
    level: 'HIGHER SECONDARY',
    title: '12th PASS OUT',
    institution: 'Pandu College',
    description: 'Completed my higher secondary education and developed an interest in business, technology, and skills.',
    status: 'COMPLETED',
  },
  {
    id: 'edu-college',
    number: '03',
    level: 'CURRENTLY',
    title: 'COLLEGE EDUCATION',
    institution: 'Pandu College',
    description: 'Currently pursuing my B.Com graduation while developing my skills , technology, and business.',
    status: 'IN PROGRESS',
  },
];

export const PROJECTS: Project[] = [
  // =========================================================================
  // 1. RANDOM — Casual and miscellaneous personal photographs & moments
  // [EASY TO REPLACE: Change 'heroImage' to your own photo URL or local file]
  // =========================================================================
  {
    id: 'random-candid-moment',
    title: 'MANOJ CHETRI — CANDID MOMENTS',
    subtitle: 'Everyday Perspectives & Student Life',
    category: 'RANDOM',
    location: 'Personal Journal',
    year: '2026',
    client: 'Personal Story',
    description: 'Casual, candid moments and snapshots from daily life, college routines, and personal growth.',
    fullStory: 'A collection of spontaneous, everyday moments—from morning campus routines to evening walks and conversations with friends.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85',
    ],
    tools: ['Casual Snaps', 'Daily Memories', 'Personal Vibe'],
    featured: true,
    aspectRatio: 'landscape',
    tags: ['Candid', 'Lifestyle', 'Moments', 'Manoj'],
    colorAccent: '#FFB000',
  },
  {
    id: 'random-desk-study',
    title: 'DESK VIBES & NIGHT SESSIONS',
    subtitle: 'Study Notes, Screen Glow & Music',
    category: 'RANDOM',
    location: 'Study Space',
    year: '2026',
    client: 'Workspace',
    description: 'Late night desk sessions with headphones on, working through assignments and exploring new ideas.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Desk Setup', 'Night Routine', 'Study Hours'],
    featured: false,
    aspectRatio: 'portrait',
    tags: ['LateNight', 'Music', 'Desk', 'Vibes'],
    colorAccent: '#6366F1',
  },
  {
    id: 'random-coffee-break',
    title: 'COFFEE BREAK & CASUAL HANGOUT',
    subtitle: 'Chai, Coffee & Great Conversations',
    category: 'RANDOM',
    location: 'Cafe Moments',
    year: '2026',
    client: 'Hangouts',
    description: 'Grabbing tea or coffee with friends, unwinding after classes, and catching up on good stories.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Cafe', 'Hangout', 'Friends', 'Chill'],
    featured: false,
    aspectRatio: 'portrait',
    tags: ['Coffee', 'Chai', 'Conversations', 'Relax'],
    colorAccent: '#D97706',
    externalUrl: 'https://maps.google.com/?q=Cafe+Moments',
    linkText: 'View Cafe',
  },

  // =========================================================================
  // 2. NATURE — Scenic landscapes, serene countryside, mountain ridges, and outdoor views
  // [EASY TO REPLACE: Change 'heroImage' to your own photo URL or local file]
  // =========================================================================
  {
    id: 'nature-countryside-pond',
    title: 'RURAL POND & COUNTRYSIDE',
    subtitle: 'Quiet Waters, Farm Meadow & Monsoon Trees',
    category: 'NATURE',
    location: 'Rural Countryside',
    year: '2026',
    client: 'Nature Memories',
    description: 'Serene rural lake bordered by lush green neem and eucalyptus groves under an overcast sky, with rustic farm machinery resting in the meadow.',
    fullStory: 'There is something deeply peaceful about the countryside after fresh rain. The stillness of the pond, dense emerald trees, and open fields bring grounded clarity away from noisy city life.',
    heroImage: naturePondImg,
    galleryImages: [
      naturePondImg,
    ],
    tools: ['Landscape View', 'Countryside', 'Monsoon Green'],
    featured: true,
    aspectRatio: 'landscape',
    tags: ['Nature', 'Countryside', 'Pond', 'LushGreen', 'Serenity'],
    colorAccent: '#10B981',
  },
  {
    id: 'nature-river-sunbeams',
    title: 'SUNBEAMS OVER RIVER HORIZON',
    subtitle: 'Crepuscular Light Breaking Through Storm Clouds',
    category: 'NATURE',
    location: 'Riverbank & Valley',
    year: '2026',
    client: 'Sky & Water',
    description: 'Dramatic sun rays breaking through majestic cloudy skies over a wide, ripple-textured river, framed by distant blue mountain ranges.',
    fullStory: 'Witnessing sunbeams pierce through storm clouds over the river is a moment of pure wonder. The golden radiance reflects across the gentle waves with the cool mountain breeze.',
    heroImage: natureRiverRaysImg,
    galleryImages: [
      natureRiverRaysImg,
    ],
    tools: ['God Rays', 'River Horizon', 'Cloudscape'],
    featured: false,
    aspectRatio: 'portrait',
    tags: ['Sunbeams', 'River', 'Mountains', 'Clouds', 'Nature'],
    colorAccent: '#F59E0B',
  },
  {
    id: 'nature-mountain-panoramic-view',
    title: 'PANORAMIC MOUNTAIN OVERLOOK',
    subtitle: 'Cliff Lookout, Lush Ridge Trails & River Valley',
    category: 'NATURE',
    location: 'Himalayan Ridge Viewpoint',
    year: '2026',
    client: 'Mountain Exploration',
    description: 'Breathtaking high-altitude panoramic view from a cliffside lookout terrace overlooking vast forested hills and a winding river valley below.',
    fullStory: 'Standing at the peak viewpoint with a prayer flag fluttering in the wind, looking across layered mountain valleys where a pristine river carves through the forest.',
    heroImage: natureMountainViewImg,
    galleryImages: [
      natureMountainViewImg,
    ],
    tools: ['Mountain Trek', 'Cliff Overlook', 'Panoramic View'],
    featured: true,
    aspectRatio: 'landscape',
    tags: ['Mountains', 'Viewpoint', 'Valley', 'Nature', 'Travel'],
    colorAccent: '#059669',
  },

  // =========================================================================
  // 3. ASSAM — Nature, places, travel, and memories in Assam
  // [EASY TO REPLACE: Change 'heroImage' to your own photo URL or local file]
  // =========================================================================
  {
    id: 'assam-brahmaputra-sunset',
    title: 'BRAHMAPUTRA RIVERBED & TWILIGHT',
    subtitle: 'Sunset along the Riverbank • Guwahati, Assam',
    category: 'ASSAM',
    location: 'Guwahati, Assam',
    year: '2026',
    client: 'Assam Memories',
    description: 'Golden sunsets casting reflections over the mighty Brahmaputra. The calm river breeze and the soothing horizon of Guwahati.',
    fullStory: 'Spending evenings along the Brahmaputra banks offers unmatched peace. The gentle waters and shifting river skies are among my favorite memories in Assam.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Riverbank', 'Sunset Views', 'Assam Pride'],
    featured: true,
    aspectRatio: 'landscape',
    tags: ['Brahmaputra', 'Guwahati', 'Assam', 'River', 'Sunset'],
    colorAccent: '#0EA5E9',
  },
  {
    id: 'assam-lush-hills',
    title: 'VERDANT HILLS & NATURE TRAILS',
    subtitle: 'Misty Mornings & Lush Greenery of Assam',
    category: 'ASSAM',
    location: 'Assam Greenery',
    year: '2026',
    client: 'Travel & Nature',
    description: 'Rolling green hillocks, tea garden trails, and rain-washed emerald scenery that makes Assam naturally breathtaking.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Scenic Roadtrip', 'Nature Hike', 'Green Assam'],
    featured: false,
    aspectRatio: 'portrait',
    tags: ['TeaGarden', 'Hills', 'NatureTrail', 'Northeast'],
    colorAccent: '#10B981',
  },
  {
    id: 'assam-cloud-canopy',
    title: 'MISTY VALLEYS & RAINY SKIES',
    subtitle: 'Monsoon Clouds Over Northeast Ridges',
    category: 'ASSAM',
    location: 'Assam Countryside',
    year: '2026',
    client: 'Landscape Memories',
    description: 'Gentle showers and thick cloud blankets drifting low over countryside trees and rural roads.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Monsoon', 'Misty Vistas', 'Assam Rain'],
    featured: false,
    aspectRatio: 'square',
    tags: ['Monsoon', 'AssamVibes', 'Clouds', 'Countryside'],
    colorAccent: '#F59E0B',
  },

  // =========================================================================
  // 3. DELHI — City views, architectural monuments, outings, and memories in Delhi
  // [EASY TO REPLACE: Change 'heroImage' to your own photo URL or local file]
  // =========================================================================
  {
    id: 'delhi-heritage-avenue',
    title: 'DELHI ARCHITECTURE & HERITAGE',
    subtitle: 'Historic Monuments & Grand Boulevards',
    category: 'DELHI',
    location: 'Central Delhi',
    year: '2026',
    client: 'Delhi Diary',
    description: 'Exploring the rich blend of historic Mughal and colonial architecture, wide tree-lined avenues, and iconic city landmarks.',
    fullStory: 'Walking through Delhi’s iconic avenues reveals layers of history at every turn. From majestic stonework to the lively energy of street corners, Delhi leaves an impression.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Heritage Walk', 'City Architecture', 'Delhi Sights'],
    featured: true,
    aspectRatio: 'landscape',
    tags: ['Delhi', 'Monuments', 'CityWalk', 'Architecture'],
    colorAccent: '#EC4899',
  },
  {
    id: 'delhi-urban-energy',
    title: 'STREETS, LIGHTS & METRO VIBES',
    subtitle: 'The Fast-Paced Heartbeat of the Capital',
    category: 'DELHI',
    location: 'Delhi Metro & Markets',
    year: '2026',
    client: 'City Exploration',
    description: 'Vibrant markets, metro stations, neon street signs, and the bustling rhythm of Delhi by night.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Urban Exploration', 'Night Lights', 'Delhi Street'],
    featured: false,
    aspectRatio: 'portrait',
    tags: ['DelhiStreet', 'NightLife', 'Metro', 'Urban'],
    colorAccent: '#8B5CF6',
  },
  {
    id: 'delhi-cp-colonnades',
    title: 'CONNAUGHT PLACE & EVENING OUTINGS',
    subtitle: 'Classic White Pillars & Evening Cafes',
    category: 'DELHI',
    location: 'Connaught Place, Delhi',
    year: '2026',
    client: 'Delhi Hangouts',
    description: 'Strolling through CP’s inner circle, checking out book stalls, cafes, and soaking in the classic capital atmosphere.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['CP Stroll', 'Cafe Culture', 'Delhi Memories'],
    featured: false,
    aspectRatio: 'square',
    tags: ['ConnaughtPlace', 'DelhiOuting', 'Memories', 'Capital'],
    colorAccent: '#3B82F6',
  },

  // =========================================================================
  // 4. FITNESS — Gym, workout, and fitness-related photographs
  // [EASY TO REPLACE: Change 'heroImage' to your own photo URL or local file]
  // =========================================================================
  {
    id: 'fitness-strength-discipline',
    title: 'HEAVY LIFTS & COMPOUND STRENGTH',
    subtitle: 'Barbell Deadlifts, Squats & Daily Progression',
    category: 'FITNESS',
    location: 'Gym Floor',
    year: '2026',
    client: 'Training Routine',
    description: 'Heavy barbell deadlifts, squats, and bench presses. Grounding everyday discipline in consistent repetition, physical grit, and steady progress.',
    fullStory: 'Fitness is about cultivating mental resilience and structure. Every session builds stamina, dedication, and focus for academics, life, and personal goals.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85',
    ],
    tools: ['Strength Training', 'Progressive Overload', 'Discipline'],
    featured: true,
    aspectRatio: 'landscape',
    tags: ['Strength', 'Deadlift', 'Discipline', 'Fitness'],
    colorAccent: '#EF4444',
  },
  {
    id: 'fitness-dumbbell-conditioning',
    title: 'DUMBBELL CONDITIONING & HYPERTROPHY',
    subtitle: 'Upper Body Conditioning & Muscle Tone',
    category: 'FITNESS',
    location: 'Weight Room',
    year: '2026',
    client: 'Daily Workout',
    description: 'Targeted dumbbell presses, shoulder stability work, and bicep circuits for posture and strength.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Dumbbell Circuit', 'Hypertrophy', 'Form Check'],
    featured: false,
    aspectRatio: 'portrait',
    tags: ['Conditioning', 'Dumbbells', 'Workout', 'Fitness'],
    colorAccent: '#F97316',
  },
  {
    id: 'fitness-cardio-stamina',
    title: 'CARDIO, AGILITY & CALISTHENICS',
    subtitle: 'High Heart Rate, Stamina & Bodyweight Circuits',
    category: 'FITNESS',
    location: 'Training Arena',
    year: '2026',
    client: 'Daily Athletics',
    description: 'Morning cardio runs, pull-ups, push-up variations, and core stability circuits that keep energy levels high all day.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Calisthenics', 'Endurance', 'Mobility'],
    featured: false,
    aspectRatio: 'square',
    tags: ['Cardio', 'Athletics', 'Routine', 'Energy'],
    colorAccent: '#EAB308',
  },
  {
    id: 'fitness-focus-mindset',
    title: 'FOCUS ZONE & WEIGHTS',
    subtitle: 'Tunnel Vision & Consistent Daily Reps',
    category: 'FITNESS',
    location: 'Iron Zone',
    year: '2026',
    client: 'Athletic Lifestyle',
    description: 'Putting on headphones, blocking out distractions, and putting in the work. True transformation is built rep by rep.',
    // REPLACE PHOTO: heroImage
    heroImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85',
    ],
    tools: ['Focus Mindset', 'Heavy Weights', 'Consistency'],
    featured: true,
    aspectRatio: 'portrait',
    tags: ['Focus', 'Heavy Weights', 'Dedication', 'Fitness'],
    colorAccent: '#DC2626',
  },
];
