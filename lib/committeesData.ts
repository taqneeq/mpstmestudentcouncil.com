// Define the structure of an Event and a Team Member for type safety
interface FlagshipEvent {
  name: string;
  description: string;
}

interface TeamMember {
  name: string;
  imageUrl: string;
}

interface Committee {
  name: string;
  vision: string;
  flagshipEvents: FlagshipEvent[];
  team?: TeamMember[]; // Optional team property
}

interface Category {
  name: string;
  committees: Committee[];
}

// Apply the 'Category[]' type to your data array
export const committeesData: Category[] = [
  {
    name: 'Council',
    committees: [
      {
        name: 'Colloquium',
        vision: 'Dedicated to bridging the gap between academia and the corporate landscape, Colloquium prepares its members for the professional world through strategic industry collaborations with leading global brands.',
        flagshipEvents: [
          { name: 'Stockraze', description: 'A pseudo stock market simulation giving participants a platform to gain exposure about financial markets and investing.' },
          { name: 'Bizzneeti', description: 'A National Level Business Planning Competition for budding entrepreneurs to showcase their startup ideas to angel investors.' },
          { name: 'LinkedIn Workshop', description: 'An official workshop in collaboration with LinkedIn India on the importance of professional networking.' },
        ],
        team: [
          { name: 'Piyush Agarwal', imageUrl: '/images/committees/council/colloquium/core/piyush.png' },
          { name: 'Anshika Pattnaik', imageUrl: '/images/committees/council/colloquium/core/anshika.png' },
          { name: 'Poorvi Malhotra', imageUrl: '/images/committees/council/colloquium/core/poorvi.png' },
          { name: 'Pramey Shah', imageUrl: '/images/committees/council/colloquium/core/pramey.png' },
          { name: 'Shirin Sharma', imageUrl: '/images/committees/council/colloquium/core/shirin.png' },
        ]
      },
      {
        name: 'Cultural Committee',
        vision: 'To create a lively campus atmosphere by curating events that bring students together, celebrate creativity, and offer a refreshing break from academics, building a strong sense of community.',
        flagshipEvents: [
          { name: 'Cultural Night', description: 'One of the most anticipated evenings of the year, featuring lively music, captivating performances, and a joyous atmosphere.' },
          { name: 'Carnival', description: 'A day-long celebration with food stalls, interactive games, and a concluding Comedy Night with well-known comedians.' },
          { name: 'Traditional Day', description: 'A celebration of cultural heritage where students dress in elegant ethnic attire, with photobooths and curated stalls.' },
        ],
        team: [
          { name: 'Daneeka Roy', imageUrl: '/images/committees/council/cultural/core/daneeka.png' },
          { name: 'Darsh Dadhich', imageUrl: '/images/committees/council/cultural/core/darsh.png' },
          { name: 'Niyati Reddy', imageUrl: '/images/committees/council/cultural/core/niyati.png' },
          { name: 'Prisha Mistry', imageUrl: '/images/committees/council/cultural/core/prisha.png' },
          { name: 'Vihan Joshi', imageUrl: '/images/committees/council/cultural/core/vihan.png' },
        ]
      },
      {
        name: 'Editorial Board',
        vision: 'To build a creative culture where voices are valued, ideas are nurtured, and art in all its forms is celebrated, creating a space where literature, creativity, and conversation intersect.',
        flagshipEvents: [
          { name: 'The Editorial Project (TEP)', description: 'A flagship event celebrating creative expression with sub-events like Comic Con, Open Mic Night, a Literary Seminar, and an Artist Night.' },
          { name: 'Blind Date with a Book', description: 'An annual event where books are wrapped anonymously, encouraging students to discover new genres based on curiosity alone.' },
          { name: 'Chapter One', description: 'A platform that honors and launches original books written by student authors, featuring reading sessions and discussions.' },
        ],
        team: [
          { name: 'Aanya Bhaduri', imageUrl: '/images/committees/council/editorial/core/aanya.png' },
          { name: 'Josh Dave', imageUrl: '/images/committees/council/editorial/core/josh.png' },
          { name: 'Laksh Agarwal', imageUrl: '/images/committees/council/editorial/core/laksh.png' },
          { name: 'Rushil Kubavat', imageUrl: '/images/committees/council/editorial/core/rushil.png' },
          { name: 'Tisha Kawad', imageUrl: '/images/committees/council/editorial/core/tisha.png' },
        ]
      },
      {
        name: 'Outreach',
        vision: 'To build a dynamic, interconnected student ecosystem where every committee thrives through meaningful collaboration, transforming individual events into shared experiences.',
        flagshipEvents: [
          { name: 'CL (Contingent Leaders) Meet', description: 'An event where representatives from various colleges are invited to build strong inter-college connections for upcoming events.' },
          { name: 'Prize Distribution Ceremony', description: 'An event to acknowledge the efforts of students who actively contributed to events throughout the year with awards.' },
        ],
        team: [
          { name: 'Siddhi Gandhi', imageUrl: '/images/committees/council/outreach/core/siddhi.png' },
          { name: 'Shashank Doshi', imageUrl: '/images/committees/council/outreach/core/shashank.png' },
          { name: 'Ritwik Sharma', imageUrl: '/images/committees/council/outreach/core/ritwik.png' },
          { name: 'Madhav Sahi', imageUrl: '/images/committees/council/outreach/core/madhav.png' },
          { name: 'Jal Mehta', imageUrl: '/images/committees/council/outreach/core/jal.png' },
        ]
      },
      {
        name: 'Social Impact',
        vision: 'To exhaust the resources at hand to extend help to all who need it, working tirelessly towards the eradication of various social issues in association with different NGOs.',
        flagshipEvents: [
          { name: 'Social Conclave', description: 'A UN-backed socio-economic conference where delegates discuss significant social issues to find sustainable solutions.' },
          { name: 'Beach Clean-up', description: 'An initiative to curb waste and plastics deposited at Juhu Beach post-Ganpati Visarjan.' },
          { name: 'Blood Donation Drive', description: 'An opportunity for students and staff from all SVKM colleges to save lives by donating blood.' },
        ]
      },
      {
        name: 'Sports Committee',
        vision: 'To cultivate a vibrant sports culture that connects every individual, fostering a sense of family where passion meets purpose and every effort is valued.',
        flagshipEvents: [
          { name: 'Conquer', description: 'A premier national-level sports tournament spanning 20 days and 7 core sporting disciplines with colleges from across the country.' },
          { name: 'Gamers’ Asylum', description: 'A thrilling multi-title eSports event bringing together passionate gamers on campus for titles like FIFA, F1, and Valorant.' },
          { name: 'University Turf Tournament', description: 'An exciting inter-NMIMS football competition that brings together teams from various NMIMS campuses.' },
        ]
      },
      {
        name: 'TRC',
        vision: 'To build a vibrant, research-driven ecosystem that empowers students to explore, innovate, and excel in science, technology, and engineering, bridging the gap between academia and real-world applications.',
        flagshipEvents: [
          { name: 'Bombay Research Summit', description: 'A flagship three-day event dedicated to fostering research and innovation, featuring the Innovation Arena for pitches to experts.' },
          { name: 'Taqneeq', description: 'The official technical festival of MPSTME, a vibrant celebration of innovation, creativity, and technical excellence.' },
          { name: 'Internship Fair', description: 'A campus-wide initiative connecting students with valuable industry experience through internships with over 20+ companies.' },
        ],
        team: [
          { name: 'Anubhi Jain', imageUrl: '/images/committees/council/trc/core/anubhi.png' },
          { name: 'Juhi Purohit', imageUrl: '/images/committees/council/trc/core/juhi.png' },
          { name: 'Naisha Modi', imageUrl: '/images/committees/council/trc/core/naisha.png' },
          { name: 'Neev Agarwal', imageUrl: '/images/committees/council/trc/core/neev.png' },
          { name: 'Soham Sawant', imageUrl: '/images/committees/council/trc/core/soham.png' },
        ]
      }
    ]
  },
  {
    name: 'Fests',
    committees: [
      {
        name: 'Sattva',
        vision: 'Sattva is the cultural heart of MPSTME, celebrating creativity, talent, and the vibrant spirit of our student community through a dazzling array of events.',
        flagshipEvents: [
          { name: 'Cultural Parade', description: 'A vibrant showcase of traditions from across the country.' },
          { name: 'Battle of the Bands', description: 'Where musical talents clash for ultimate glory.' },
        ],
        team: [
          { name: 'Vansh Cheddha', imageUrl: '/images/council-logo.png' },
          { name: 'Vansh Dhoka', imageUrl: '/images/council-logo.png' },
          { name: 'Tushita Shetty', imageUrl: '/images/council-logo.png' },
          { name: 'Jimil Shah', imageUrl: '/images/council-logo.png' },
          { name: 'Bhargiv Potpose', imageUrl: '/images/council-logo.png' },
          { name: 'Priyank Shah', imageUrl: '/images/council-logo.png' },
        ],
      },
      {
        name: 'Taqneeq',
        vision: 'At Taqneeq, we envision a dynamic platform where innovation meets inspiration — uniting the brightest minds in technology, engineering, and design. Our mission is to ignite curiosity, foster interdisciplinary collaboration, and empower students to solve real-world challenges through creativity and technical excellence.',
        flagshipEvents: [
          { name: 'Taqneeq 18.0', description: 'A vibrant showcase of technical projects by the students.' },
        ],
        team: [
          { name: 'Jash Sompura', imageUrl: '/images/council-logo.png' },
          { name: 'Aryan Bondgulwar', imageUrl: '/images/council-logo.png' },
          { name: 'Vidit Agrawal', imageUrl: '/images/council-logo.png' },
          { name: 'Juhi Purohit', imageUrl: '/images/council-logo.png' },
          { name: 'Jay Rakholia', imageUrl: '/images/council-logo.png' },
          { name: 'Siddhi Gandhi', imageUrl: '/images/council-logo.png' },
          { name: 'Vansh Chedda', imageUrl: '/images/council-logo.png' },
          { name: 'Charvi Jain', imageUrl: '/images/council-logo.png' },
        ],
      },
      {
        name: 'Social Conclave',
        vision: 'Sattva is the cultural heart of MPSTME, celebrating creativity, talent, and the vibrant spirit of our student community through a dazzling array of events.',
        flagshipEvents: [
          { name: 'Conclave', description: 'Conclave 26' },
        ],
        team: [
          { name: 'Kaunteya Goyal', imageUrl: '/images/council-logo.png' },
          { name: 'Aalia Dandawala', imageUrl: '/images/council-logo.png' },
          { name: 'Sahil Madhani', imageUrl: '/images/council-logo.png' },
          { name: 'Aditya Vaishnav', imageUrl: '/images/council-logo.png' },
          { name: 'Hirnay Prasad', imageUrl: '/images/council-logo.png' },
          { name: 'Khushi Chowdhary', imageUrl: '/images/council-logo.png' },
          { name: 'Varun Pitale', imageUrl: '/images/council-logo.png' },
          { name: 'Vaishnav Menon', imageUrl: '/images/council-logo.png' },
        ],
      },
    ],
  },
  {
    name: 'Technical',
    committees: [
      {
        name: 'ACM',
        vision: 'ACM—the thriving hub of innovators, thinkers, and creators—offers an environment that nurtures growth, exploration, and innovation, bridging the gap between academic knowledge and real-world tech applications.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
        team: [
          { name: 'Kartik Jain', imageUrl: '/images/committees/technical/acm/sc/kartik.png' },
          { name: 'Aarjav Jain', imageUrl: '/images/committees/technical/acm/sc/aarjav.png' },
          { name: 'Nidhi Shah', imageUrl: '/images/committees/technical/acm/sc/nidhi.png' },
          { name: 'Saanvi Kanodia', imageUrl: '/images/committees/technical/acm/sc/saanvi.png' },
          { name: 'Varad Paranjape', imageUrl: '/images/committees/technical/acm/sc/varad.png' },
        ]
      },
      {
        name: 'RAS',
        vision: 'To be the leading student community at NMIMS that inspires innovation, nurtures technical excellence, and shapes future leaders in robotics and automation by fostering a culture of hands-on learning, collaboration, and industry relevance.',
        flagshipEvents: [
          { name: 'CodeRed', description: 'An energetic onboarding event with creative games, treasure hunts, and trivia rounds to foster team bonding.' },
          { name: 'Elevate', description: 'A high-impact event with certified workshops in MATLAB, drone technology, and robotic arm programming.' },
          { name: 'TechSafar', description: 'A focused workshop series providing practical, industry-relevant skills in collaboration with experts like Drona Aviation.' },
        ],
      },
      {
        name: 'FOSS',
        vision: 'To build a vibrant, inclusive community where students learn, share, and grow through Free and Open Source Software, believing in the power of collaboration over competition.',
        flagshipEvents: [
          { name: 'HackForge 2025', description: 'A hybrid intercollegiate hackathon focused on real-world problem-solving using FOSS, with Cybersecurity or Sustainable Tech tracks.' },
          { name: 'Getting Started with Ubuntu', description: 'A hands-on workshop on installing and setting up Ubuntu Linux through VirtualBox and WSL.' },
        ],
      },
      {
        name: 'IET',
        vision: 'To create a vibrant community of aspiring engineers and innovators by bridging the gap between academic learning and real-world application through impactful events, workshops, and industry interactions.',
        flagshipEvents: [
          { name: 'BOTSON', description: 'A flagship robotics competition where participants design, build, and demonstrate bots, often gesture-controlled or obstacle-avoiding.' },
          { name: 'CODEQUEST', description: 'A fast-paced, intellectually stimulating coding quiz competition that spans multiple rounds of logic puzzles and debugging.' },
          { name: 'HACK AND CODE', description: 'An overnight hackathon challenging teams to ideate, develop, and pitch tech-based solutions to real-world problems.' },
        ],
      },
      {
        name: 'IEEE',
        vision: 'To foster a community of future-ready engineers by promoting technical excellence, innovation, and leadership through impactful initiatives like research publications, competitions, and industry interactions.',
        flagshipEvents: [
          { name: 'TechSafar', description: 'An annual technical fest for students to showcase research papers and project posters in emerging domains.' },
          { name: 'Industrial Visit to VEGA India', description: 'An exclusive visit to a global leader in sensor-based measurement technology for firsthand exposure to industrial solutions.' },
          { name: 'Cybersecurity Conclave', description: 'A knowledge platform bringing together cybersecurity leaders and legal experts to explore the evolving digital threat landscape.' },
        ],
      },
      {
        name: 'IETE-SF',
        vision: 'To foster a dynamic, inclusive, and innovation-driven ecosystem that empowers students to become future-ready technocrats, researchers, and leaders, bridging the gap between theory and real-world application.',
        flagshipEvents: [
          { name: 'ULECTRO', description: 'A cutting-edge science and technology exhibition where students showcase innovative projects across four core domains.' },
          { name: 'ACE Hackathon', description: 'An exhilarating two-day event celebrating innovation with over 300+ participants and groundbreaking ideas.' },
          { name: 'ADAPPT', description: 'An annual ideathon designed to bring together innovative minds to solve real-world challenges across four key domains.' },
        ],
      },
      {
        name: 'CodeBase',
        vision: 'To cultivate a strong programming culture at MPSTME by bridging academic concepts with real-world coding applications and fostering a collaborative environment for all skill levels.',
        flagshipEvents: [
          { name: 'Programming Contests', description: 'Regular online contests on platforms like CodeChef to test problem-solving skills and enhance logical thinking.' },
          { name: 'PPS Remedial Workshop', description: 'A workshop designed to support students with the fundamentals of C++ through hands-on coding and live demonstrations.' },
          { name: 'Discussion with Yashavant Kanetkar', description: 'An interactive session with the renowned author of "Let Us C" for insights into programming and technology careers.' },
        ],
      },
      {
        name: 'DataMavericks',
        vision: 'To build a community where curiosity meets data-driven innovation, empowering students to apply data science beyond theory and drive real-world impact.',
        flagshipEvents: [
          { name: 'Speaker Sessions', description: 'Insightful sessions featuring industry professionals who share their expertise and experiences in the field of data science.' },
          { name: 'Tech Flea', description: 'An interactive exhibition that includes technical games and showcases of student-led data science projects.' },
          { name: 'Hackathon', description: 'A competitive event where student teams collaboratively solve real-world problems through data-driven solutions.' },
        ],
      },
      {
        name: 'ISA',
        vision: 'To foster a culture of innovation and collaboration by bridging the gap between academia and industry through engaging activities, technical excellence, and leadership opportunities in automation.',
        flagshipEvents: [
          { name: 'India Automation Games', description: 'A premier national technical competition focused on industrial automation and innovative problem-solving.' },
          { name: 'ARS Automatika', description: 'A two-day technical event where students compete in challenges across domains like PLC and HMI automation.' },
          { name: 'Zero Hour', description: 'An informal fun event with games and activities to build camaraderie and promote team bonding among members.' },
        ],
      },
      {
        name: 'MSC',
        vision: 'To create a vibrant and inclusive community of tech enthusiasts passionate about exploring emerging technologies, developing real-world skills, and growing into future leaders.',
        flagshipEvents: [
          { name: 'Meme-o-Tron', description: 'An induction and showcase event for freshers to learn about GenAI technologies like Deepfake and Image Generation.' },
          { name: 'Equinox Series', description: 'A 2-day ultimate GenAI competition where students are trained by industry experts and work on real problem statements.' },
          { name: 'Microsoft Community Day', description: 'A yearly event to connect with like-minded peers and gain exposure to industry insights from Microsoft MVPs and Student Ambassadors.' },
        ],
      },
      {
        name: 'MPSTMERacing',
        vision: 'To be India’s most innovative, fearless, and unstoppable collegiate racing team, transforming bolts and blueprints into dreams on wheels and redefining what student engineering is capable of.',
        flagshipEvents: [
          { name: 'SAE Baja', description: 'The team\'s flagship event, a national-level competition that takes place annually in Pithampur, Madhya Pradesh.' },
          { name: 'ATVC (Aravalli Terrain Vehicle Championship)', description: 'A national competition organized by Infi-League Motorsports held in various locations across the country.' },
          { name: 'Mega ATV', description: 'A national competition organized by Autosports, typically held in Goa or Coimbatore.' },
        ],
      },
      {
        name: 'TeamDarvin',
        vision: 'To pioneer innovation in autonomous mobility by building intelligent ground vehicles that blend engineering excellence with real-world impact and represent India on the global stage.',
        flagshipEvents: [
          { name: 'IGVC (Intelligent Ground Vehicle Competition)', description: 'Participation in the prestigious international robotics event held annually at Oakland University, Michigan, USA, focusing on autonomous navigation.' },
        ],
      },
      {
        name: 'TeamTechnotix',
        vision: 'To be a pioneering force in robotics by creating intelligent, theme-driven robotic systems that compete at the highest levels of Robocon India and inspire the next generation of engineers.',
        flagshipEvents: [
          { name: 'Robocon India', description: 'Annual participation in the national-level robotics competition under the Asia-Pacific Broadcasting Union (ABU), with the winner representing India internationally.' },
        ],
      },
    ],
  },
  {
    name: 'Management',
    committees: [
      {
        name: '4C',
        vision: 'ACM—the thriving hub of innovators, thinkers, and creators—offers an environment that nurtures growth, exploration, and innovation, bridging the gap between academic knowledge and real-world tech applications.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'Findrome',
        vision: 'Findrome - \'Forward and Onward\' is the finance departmental cell of NMIMS dedicated to fostering financial literacy and expertise among students empowering them with practical insights, industry exposure, and analytical skills that will shape tomorrow\'s finance leaders. Through interactive learning experiences and industry connections, we strive to transform complex financial concepts into accessible knowledge, preparing our members to excel in the dynamic world of finance.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'IEC',
        vision: 'The Innovation and Entrepreneurship Cell (IEC) aims to inspire and support students in exploring the world of startups, business strategy, and problem-solving. Through hands-on events, industry exposure, and peer-driven learning, we strive to create a space where aspiring entrepreneurs can develop their skills, gain confidence, and take the first steps toward building impactful ventures.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
    ],
  },
  {
    name: 'Others',
    committees: [
      {
        name: 'MUNSociety',
        vision: 'We envision our team to be the forerunners in creating positive change through debate and diplomacy. We strive to nurture a community of forward-thinking individuals, the kind that can potentially change our future for the better.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'CNC',
        vision: 'At the Code N Choreography (CNC) Crew, we strive to create a space where dance meets purpose; a platform for students to express, perform, and grow. Our mission goes beyond the stage, empowering young artists to break boundaries, blend creativity with discipline, and build real-world skills in teamwork, leadership, and creative production. We aim to cultivate a culture of excellence and represent our college on the grandest stages of performing arts leaving a lasting impact through every performance.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'Enactus',
        vision: 'We envision a world where students lead social and entrepreneurial action, turning bold ideas into sustainable enterprises that address global challenges and empower communities. Enactus is a global non‑profit organization, active in nearly 100 countries and engaging over 40,000 student social entrepreneurs annually through its recent merger with the Resolution Project. Rooted in leadership since 1975, Enactus has become the world’s largest experiential learning platform for youth-driven social innovation.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'Khachaak',
        vision: 'To build a creative community that goes beyond college corridors, where students don’t just capture moments, but learn to tell stories that matter. Khachaak aims to be a launchpad for young creators, equipping them with real-world skills, industry exposure, and opportunities that take them from covering campus events to creating impact across cities, cultures, and countries.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'Inspire',
        vision: 'To ignite a passion for learning by creating a vibrant community where curiosity thrives, creativity is celebrated, and education becomes a journey of discovery. Insℼire MPSTME envisions a future where students confidently apply critical thinking, explore new ideas fearlessly, and lead with knowledge, innovation, and purpose',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
      {
        name: 'Alumcom',
        vision: 'Our vision is to serve as a dynamic and enduring bridge between MPSTME students and alumni, cultivating a thriving community based on meaningful engagement, mentorship, and collaboration. We aim to establish a supportive ecosystem that nurtures personal and professional growth, facilitates shared learning, and encourages lifelong relationships. By fostering a network rooted in mutual respect and ambition, the committee empowers members, including both current students and alumni, to fulfil their potential, contribute to their alma mater, and collectively advance the legacy and excellence of MPSTME.',
        flagshipEvents: [
          { name: 'Semicolon', description: 'An annual introductory event for first-year students to explore the committee’s departments and initiatives.' },
          { name: 'Programming For Everyone (PFE)', description: 'A beginner-friendly workshop series covering Python, C++, and web development essentials.' },
          { name: 'SEMICODE', description: 'A premier competitive coding event testing algorithmic problem-solving in a multi-round format.' },
        ],
      },
    ],
  },
];

