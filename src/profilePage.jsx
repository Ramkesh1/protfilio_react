import React, { useState, useEffect } from 'react';
import "./portfilio.css"

const Portfolio = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active nav based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = `#${section.id}`;
        }
      });
      
      if (current !== '' && current !== activeNav) {
        setActiveNav(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeNav]);

  // Portfolio data
  const skills = [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "AWS", level: 40 },
    { name: "React", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "HTML & CSS", level: 80 },
    { name: "RESTful API", level: 85 },
    { name: "Git", level: 70 }
  ];


  const contactData = {
    info: [
      {
        id: 1,
        icon: "📍",
        title: "Location",
        details: "Delhi, Palam, India"
      },
      {
        id: 2,
        icon: "📧",
        title: "Email",
        details: "singhramkesh412@gmail.com"
      },
      {
        id: 3,
        icon: "📱",
        title: "Phone",
        details: "+91 7678633267"
      }
    ],
    social: [
      {
        id: 1,
        platform: "LinkedIn",
        icon: "in",
        link: "https://www.linkedin.com/in/ramkesh-nishad-7ab422281/"
      },
      {
        id: 2,
        platform: "GitHub",
        icon: "gh",
        link: "https://github.com/Ramkesh-100"
      }
     
    ],
    formFields: [
      {
        id: "name",
        type: "text",
        placeholder: "",
        required: true
      },
      {
        id: "email",
        type: "email",
        placeholder: "Your Email",
        required: true
      },
      {
        id: "subject",
        type: "text",
        placeholder: "Subject",
        required: true
      },
      {
        id: "message",
        type: "textarea",
        placeholder: "Your Message",
        rows: 5,
        required: true
      }
    ]
  };
  
  const projects = [
    {
      id: 1,
      title: "HRM System",
      description: "A comprehensive Human Resource Management system that simplifies employee onboarding processes, automates joining procedures, and effectively manages employee data.",
      technologies: ["Node.js", "Express", "mysql", "JWT"],
      icon: "users"
    },
    {
      id: 2,
      title: "URL Shortener",
      description: "An application that converts long URLs into short, shareable links. Comes with tracking and analytics features that analyze clicks and user interactions.",
      technologies: ["React", "Node.js", "Express", "mysql", "REST API"],
      icon: "link"
    },
    {
      id: 3,
      title: "EasyGo SMS System",
      description: "A bulk messaging platform for sending SMS to a large number of customers simultaneously. Provides customer list management, message templates, and delivery reports.",
      technologies: ["React", "Node.js", "Express", "MySQL", "API"],
      icon: "comment-dots"
    }
  ];
  
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Kurukshetra University",
      duration: "2024 - Present",
      description: "Currently pursuing a Master's degree with a focus on advanced programming techniques, database management, software development, and modern computing concepts."
    },
    {
      id: 2,
      degree: "Bachelor of Commerce (BCom)",
      institution: "Delhi University",
      duration: "2020 - 2023",
      description: "Completed a Bachelor's degree with a specialization in Computer Science, gaining proficiency in programming languages, data structures, algorithms, and foundational software engineering principles."
    }
  ];
  

return (
    <>
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header/Navbar */}
      <header className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Ramkesh</h1>
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={() => setActiveNav(`#${item}`)}
                className={`${activeNav === `#${item}` ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-600 transition-colors duration-300`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
      
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="w-32 h-32 rounded-full bg-white p-1 mx-auto mb-8">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ramkesh</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-blue-100">Node.js Developer | Backend Specialist</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            1 year of experience building scalable and high-performance applications. Specialized in developing robust backend systems and responsive web applications.
          </p>
          <div id="home-buttons">
  <a href="#projects" className="btn btn-primary">View My Work</a>
  <a href="#contact" className="btn btn-outline">Contact Me</a>
</div>

        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
    </div>
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <p className="text-lg mb-6 text-gray-700">
        Hello! I'm <span className="font-semibold">Ramkesh</span>, a passionate 
        <span className="font-semibold"> Node.js Developer</span> with <span className="font-semibold">1 year of experience</span> in backend development. 
        I have worked at <span className="font-semibold">Manthan IT Solutions</span> in Delhi, Jangpura, where I gained hands-on experience in building 
        scalable and high-performance backend systems.
      </p>
      <p className="text-lg mb-6 text-gray-700">
        I specialize in developing RESTful APIs, handling database management with MySQL, and optimizing server-side logic. My expertise includes 
        creating efficient backend systems that streamline business operations.
      </p>
      <p className="text-lg mb-6 text-gray-700">
        Currently, I am pursuing my <span className="font-semibold">Master of Computer Applications (MCA)</span>, constantly expanding my technical knowledge 
        and applying it to real-world projects.
      </p>
      <p className="text-lg mb-6 text-gray-700">
        My professional journey includes working on diverse projects such as:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>HRM (Human Resource Management) systems to streamline employee management.</li>
        <li>URL Shortener projects to optimize and track link performance.</li>
        <li>Bulk SMS platforms to manage high-volume messaging services efficiently.</li>
      </ul>
      <p className="text-lg text-gray-700">
        I am always eager to explore new technologies, solve complex challenges, and contribute to impactful projects. Let’s connect and build something amazing!
      </p>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="h-48 bg-blue-600 text-white flex items-center justify-center">
                  <div className="text-4xl">
                    {project.icon === 'users' && '👥'}
                    {project.icon === 'link' && '🔗'}
                    {project.icon === 'comment-dots' && '💬'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <a href={`#project-${project.id}`} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    View Details →
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Education</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600">{edu.institution}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">
                    {edu.duration}
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Feel free to contact me for any work opportunities or suggestions
      </p>
    </div>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
          {/* Contact Information */}
          <div className="bg-blue-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactData.info.map((item) => (
                <div key={item.id} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
              <div className="mt-8">
                <p className="font-semibold mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {contactData.social.map((platform) => (
                    <a 
                      key={platform.id}
                      href={platform.link}
                      className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-colors"
                      title={platform.platform}
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
     
       
        </> 
        
)}
      
      
        export default Portfolio