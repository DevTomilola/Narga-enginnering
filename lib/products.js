import { Shield, Cpu, Battery, Radio, Camera, Wifi, MapPin,  Sun, Smartphone, Disc} from 'lucide-react';

export const products = [
  {
    id: 'seslaa-n1-rex',
    name: 'Seslaa N1-Rex',
    status: 'available',
    price: 14999,
    tagline: '3-Channel 4K Dash Cam',
    description: 'The ultimate 3-Channel Ultra HD Dash Cam engineered for performance, safety, and precision — crafted by Narga Engineering.',
    icon: <Camera />,
    links: {
      amazon: 'https://www.amazon.in/dp/B0FYGLFHZN',
      flipkart: 'https://www.flipkart.com/product/p/itme?pid=VCYHHF69CQGFNGUK&_refId=&_appId=WA',
    },
    specs: {
      brand: 'Seslaa',
      model: 'N1-Rex',
      recording: '3-Channel (Front + Rear + Cabin)',
      resolution: 'Front: 4K UHD (2160p) / Rear: 1K / Cabin: 1K',
      display: '3.16” MIPI LED Touch Screen',
      lens: '170° Super Wide-Angle',
      storage: 'Up to 128GB microSD',
      connectivity: 'Wi-Fi, GPS',
      power: 'DC 5V/2.5A Type-C',
      temperature: '-20°C to 70°C',
      videoFormat: 'H.264 Advanced Compression',
      audio: 'Built-in Microphone with ON/OFF Control'
    },
    features: [
      '3-Channel Ultra HD Recording',
      '3.16” MIPI LED Display',
      'Seamless Loop Recording',
      '4K Front + 1K Rear + 1K Cabin Coverage',
      '170° Super Wide-Angle Lens',
      'Emergency SOS File Protection',
      '3-Axis G-Sensor for Impact Detection',
      'AI Collision Detection',
      '24H Smart Parking Surveillance',
      'Infrared Cabin Camera',
      'GPS Tracking & Route Logging',
      'Integrated Wi-Fi Connectivity',
      'Mobile App Support (Android & iOS)',
      'Built-in Microphone with Audio Control',
      'Manual File Lock Button',
      'Enhanced Low-Light & Night Vision',
      'H.264 Advanced Compression',
      'ACC Detection with Internal RTC Battery',
      'Smart Auto Screen Management',
      'Multi-Language Interface',
      'User-Friendly Menus & Controls',
      'Instant Playback & Easy File Management'
    ],
    highlights: [
      { icon: <Camera />, text: 'Triple Channel Recording' },
      { icon: <Wifi />, text: 'Wi-Fi & Mobile App' },
      { icon: <MapPin />, text: 'GPS Tracking' },
      { icon: <Shield />, text: '24H Parking Surveillance' },
      { icon: <Sun />, text: 'Enhanced Night Vision' },
      { icon: <Smartphone />, text: 'Touch Screen Display' }
    ],
    images: [
      '/products/main1.webp',
      '/products/main2.webp',
      '/products/main3.webp',
      '/products/main4.webp',
      '/products/main5.webp',
      '/products/main6.webp'
    ]
  },
  {
    id: 'seslaa-n2-rex',
    name: 'Seslaa N2-Rex',
    status: 'coming_soon',
    tagline: 'Next-Gen AI Dashcam',
    icon: <Disc />,
  },
  {
    id: 'seslaa-n3-rex',
    name: 'Seslaa N3-Rex',
    status: 'coming_soon',
    tagline: 'Pro Telematics Dashcam',
    icon: <Disc />,
  },
  {
    id: 'obd-device',
    name: 'OBD Device',
    status: 'coming_soon',
    tagline: 'Vehicle Diagnostics',
    icon: <Cpu />,
  },
  {
    id: 'security-systems',
    name: 'Security Systems',
    status: 'coming_soon',
    tagline: 'Smart Integrated Protection',
    icon: <Shield />,
  },
  {
    id: 'ev-charging',
    name: 'EV Charging',
    status: 'coming_soon',
    tagline: 'Future Ready Infrastructure',
    icon: <Battery />,
  },
  {
    id: 'agri-laser-drones',
    name: 'Agri-Laser Drones',
    status: 'coming_soon',
    tagline: 'Precision Agriculture',
    icon: <Radio />,
  }
];