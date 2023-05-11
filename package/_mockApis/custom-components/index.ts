import type { Services, BuildFeatures,pricingType,PortfolioSection,BlogSection,TeamSection,Testimonials} from "@/types/custom-components";

/*import tabler icons*/
import { CheckIcon, XIcon,UserCircleIcon,BriefcaseIcon, StarIcon,AssemblyIcon,LayersIntersect2Icon, TriangleSquareCircleIcon} from 'vue-tabler-icons';

//Services
const ServicesData: Services[] = [
    {
        img: StarIcon,
        title: '4.86',
        desc: 'Out of 5 stars from 3896 reviews on google platform',
    },
    {
        img: UserCircleIcon,
        title: '364',
        desc: 'Client testimonials received in year 2023',
    },
    {
        img: BriefcaseIcon,
        title: '45M+',
        desc: 'Revenue generated through new projects & marketing',
    },
]

//Build Features

const BuildFeaturesData: BuildFeatures[] = [
    {
        icon: AssemblyIcon,
        title: 'Beautiful designs premade',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    },
    {
        icon: TriangleSquareCircleIcon,
        title: 'Coded with much care & notes',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    },
    {
        icon: LayersIntersect2Icon,
        title: 'Amazing demos included',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    }
]


/*-- Pricing Page --*/
/*-- Pricing Page --*/
import img1 from '/images/corporate/silver.png';
import img2 from '/images/corporate/bronze.png';
import img3 from '/images/corporate/gold.png';
const pricing: pricingType[] = [
    {
        tagtext: false,
        caption: 'Silver',
        image: img1,
        free: true,
        price: 10.99,
        yearlyprice: 10.99 * 12,
        buttontext: 'Choose Silver',
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: '3 Members',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: 'Single Device',
                status:false,
            },
            {
                icon: XIcon,
                iconcolor: 'inputBorder',
                listtitle: '50GB Storage',
                status:true,
            },
            {
                icon: XIcon,
                iconcolor: 'inputBorder',
                listtitle: 'Monthly Backups',
                status:true,
            },
            {
                icon: XIcon,
                iconcolor: 'inputBorder',
                listtitle: 'Permissions & workflows',
                status:true,
            }
        ]
    },
    {
        tagtext: true,
        caption: 'bronze',
        image: img2,
        free: false,
        price: 10.99,
        yearlyprice: 10.99 * 12,
        buttontext: 'Choose Bronze',
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: '5 Members',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: 'Multiple Device',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: '80GB Storage',
                status:false,
            },
            {
                icon: XIcon,
                iconcolor: 'inputBorder',
                listtitle: 'Monthly Backups',
                status:true,
            },
            {
                icon: XIcon,
                iconcolor: 'inputBorder',
                listtitle: 'Permissions & workflows',
                status:true,
            }
        ]
    },
    {
        tagtext: false,
        caption: 'gold',
        image: img3,
        free: false,
        price: 22.99,
        yearlyprice: 22.99 * 12,
        buttontext: 'Choose Gold',
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: '15 Members',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: 'Multiple Device',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: '150GB Storage',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: 'Monthly Backups',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                listtitle: 'Permissions & workflows',
                status:false,
            }
        ]
    }

];


//Portfolio

import s1 from '/images/portfolio/portfolio-1.jpg';
import s2 from '/images/portfolio/portfolio-2.png';
import s3 from '/images/portfolio/portfolio-3.jpg';
import s4 from '/images/portfolio/portfolio-4.jpg';
import s5 from '/images/portfolio/portfolio-5.jpg';
import s6 from '/images/portfolio/portfolio-6.jpg';

const Portfolio: PortfolioSection[] = [
    {
        img: s1,
        title: 'White Theming Background',
        desc: '3D Render',

    },
    {
        img: s2,
        title: 'The Heritage',
        desc: 'Illustration',
    },
    {
        img: s3,
        title: 'Belforte Fall',
        desc: 'Photography',
    },
    {
        img: s4,
        title: 'Ipsum neque libero',
        desc: 'React',
    },
    {
        img: s5,
        title: 'White Theming',
        desc: 'Graphics Design',
    },
    {
        img: s6,
        title: 'luctus neque purus',
        desc: 'Html',
    },
    
];


//Blog

import blog1 from '/images/blog-grid/grid-LP.jpg';
import blog2 from '/images/blog-grid/grid-uxdesign.jpg';
import blog3 from '/images/blog-grid/grid-search.jpg';

const Blog: BlogSection[] = [
    {
        img: blog1,
        badge:'UX Design',
        date:'Apr 16, 2023',
        view:'27,567 Views',
        title: '5 Bad Landing Page Examples How We Would Fix Them',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        name:'Mark R. Freeman'
    },
    {
        img: blog2,
        badge:'Digital',
        date:'Apr 16, 2023',
        view:'29,567 Views',
        title: 'Why UX Design Matters and How it Affects Ranking',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        name:'James Robert'
    },
    {
        img: blog3,
        badge:'Html',
        date:'Apr 16, 2023',
        view:'28,567 Views',
        title: 'This Week in Search: New Limits and Exciting Features',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        name:'David William'
    },

  
];


//Team

import team1 from '/images/team/team-1.jpg';
import team2 from '/images/team/team-2.jpg';
import team3 from '/images/team/team-3.jpg';
import team4 from '/images/team/team-4.jpg';

const Team: TeamSection[] = [
    {
        img: team1,
        title: "Michael Doe",
        subtitle: "Property Specialist",
        desc: "You can relay on our amazing features list and also our customer services will be great experience.",
        socialicon: [
          {
            url: "/",
            icon: "mdi mdi-facebook",
          },
          {
            url: "/",
            icon: "mdi mdi-twitter",
          },
          {
            url: "/",
            icon: "mdi mdi-instagram",
          },
          {
            url: "/",
            icon: "mdi mdi-youtube",
          },
        ],
      },
      {
        img: team2,
        title: "Michael Doe",
        subtitle: "Property Specialist",
        desc: "You can relay on our amazing features list and also our customer services will be great experience.",
        socialicon: [
          {
            url: "/",
            icon: "mdi mdi-facebook",
          },
          {
            url: "/",
            icon: "mdi mdi-twitter",
          },
          {
            url: "/",
            icon: "mdi mdi-instagram",
          },
          {
            url: "/",
            icon: "mdi mdi-youtube",
          },
        ],
      },
      {
        img:team3,
        title: "Michael Doe",
        subtitle: "Property Specialist",
        desc: "You can relay on our amazing features list and also our customer services will be great experience.",
        socialicon: [
          {
            url: "/",
            icon: "mdi mdi-facebook",
          },
          {
            url: "/",
            icon: "mdi mdi-twitter",
          },
          {
            url: "/",
            icon: "mdi mdi-instagram",
          },
          {
            url: "/",
            icon: "mdi mdi-youtube",
          },
        ],
      },
      {
        img: team4,
        title: "Michael Doe",
        subtitle: "Property Specialist",
        desc: "You can relay on our amazing features list and also our customer services will be great experience.",
        socialicon: [
          {
            url: "/",
            icon: "mdi mdi-facebook",
          },
          {
            url: "/",
            icon: "mdi mdi-twitter",
          },
          {
            url: "/",
            icon: "mdi mdi-instagram",
          },
          {
            url: "/",
            icon: "mdi mdi-youtube",
          },
        ],
      },
]

//Testimonial 

import profile1 from '/images/blog/cyrus.jpg';
import profile2 from '/images/blog/kriss.jpg';
import profile3 from '/images/blog/sara.jpg';


const TestimonialsData: Testimonials[] = [
    {
        img: profile1,
        testimonial:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
        name: "MICHELLE ANDERSON",
        rating:5
       
      },
      {
        img: profile2,
        testimonial:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
        name: "MARK MESTY",
        rating:4
       
      },
      {
        img: profile3,
        testimonial:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
        name: "LIMPSY ADAM",
        rating:5
      },

  
];


export { ServicesData,BuildFeaturesData,pricing,Portfolio,Blog,Team,TestimonialsData};