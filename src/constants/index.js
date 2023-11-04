import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bem,
    upi,
    hima,
    proyek1,
    proyek2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Tentang",
    },
    {
      id: "work",
      title: "Pengalaman",
    },
    {
      id: "contact",
      title: "Kontak",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Mahasiswa",
      company_name: "Universitas Pendidikan Indonesia",
      icon: upi,
      iconBg: "#383E56",
      date: "13 Juli 2021 - Sekarang",
      points: [
        "Memahami dan Mempelajari Algoritma dari bahasa C++.",
        "Aktif dalam Mengikuti Sertifikasi, Salah satunya Microsoft Educator MCE.",
        "Berpartisipasi Aktif dalam Organisasi Kampus seperti BEM, HIMA, dan Unit Kegiatan Mahasiswa.",
        
      ],
    },
    {
      title: "Ketua Dewan Eksekutif",
      company_name: "Hima Teknik Komputer",
      icon: hima,
      iconBg: "#E6DEDD",
      date: "Maret 2022 - Sekarang",
      points: [
        "Mendevelop dan melakukan maintain Organisasi.",
        "Berkolaborasi dengan Organisasi kampus lainnya dan Berinovasi dalam perancangan Program Kerja.",
        "Implementasi hasil dari perkuliahan dengan melakukan Pengabdian kepada Masyarakat.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mekatronika",
      description:
        "Pada Matakuliah Mekatronika saya membuat Project Robot Waiters dengan Voice Recognition Berbasis Arduino.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Mekatronika",
          color: "pink-text-gradient",
        },
      ],
      image: proyek1,
      source_code_link: "https://github.com/",
    },
    {
      name: "N-BLUE",
      description:
        "Pada Matakuliah Pemrograman Berorientasi Object saya membuat Project Aplikasi Desktop Kesekertariatan N-Blue untuk mempermudah pendataan dalam melaksanakan tugas Kesekertariatan dalam Sebuah Organisasi dengan berbasis Bahasa Java.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Apache",
          color: "green-text-gradient",
        },
        {
          name: "PBO",
          color: "pink-text-gradient",
        },
      ],
      image: proyek2,
      source_code_link: "https://github.com/",
    },
    {
      name: "RNB MP3 Player",
      description:
        "Pada matakuliah Pemrograman Aplikasi Bergerak saya membuat Project Aplikasi Mobile MP3 Media Player dengan genre Music RNB Aplikasi Mobile ini dapat memutar list lagu RNB yang sudah dimasukan dan aplikasi ini dirancang menggunakan Bahasa Java.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "Pemrograman Mobile",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  