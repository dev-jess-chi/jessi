// Todo el texto de la web vive aquí. Para cambiar un texto, edítalo en "en" y en "es".

export type Lang = "en" | "es";

export type Job = {
  id: string;
  /** Fecha de inicio AAAA-MM, solo se usa para ordenar */
  start: string;
  company: string;
  place: string;
  dates: string;
  role: string;
  bullets: string[];
};

export type Content = {
  nav: { about: string; experience: string; education: string; skills: string; contact: string; menu: string; close: string };
  hero: {
    tagline: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
    focusLabel: string;
    focusRole: string;
    focusOrg: string;
    focusPlace: string;
    photoAlt: string;
  };
  marquee: string;
  about: { label: string; title: string; paragraphs: string[]; stats: { value: string; label: string }[] };
  experience: {
    label: string;
    title: string;
    intro: string;
    sortLabel: string;
    newest: string;
    oldest: string;
    jobs: Job[];
  };
  education: {
    label: string;
    title: string;
    degreesTitle: string;
    trainingTitle: string;
    degrees: { school: string; years: string; title: string }[];
    training: { title: string; org: string; date: string }[];
  };
  skills: {
    label: string;
    title: string;
    digitalTitle: string;
    digital: { group: string; items: string[] }[];
    softTitle: string;
    soft: string[];
    languagesTitle: string;
    languages: { name: string; level: string; value: number }[];
  };
  contact: {
    label: string;
    title: string;
    text: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
    locationValue: string;
    cv: string;
  };
  footer: { top: string };
};

/** Datos que no cambian con el idioma */
export const site = {
  name: "Jessica Chicaiza",
  email: "jessica14402@hotmail.com",
  // Pon phone a null para ocultar el teléfono en la web
  phone: "+34 646 10 34 33" as string | null,
  phoneHref: "tel:+34646103433",
  linkedin: "https://www.linkedin.com/in/jessica-chicaiza-administrative-assistant",
  linkedinLabel: "jessica-chicaiza",
  // Cuando haya un CV en PDF corregido, ponlo en /public y escribe aquí la ruta (ej. "/cv-jessica-chicaiza.pdf")
  cvUrl: null as string | null,
  photo: "/jessi.jpeg",
  organisations: [
    "European Parliament",
    "Edwards Lifesciences",
    "DXC Technology",
    "Anecoop",
    "Embassy of Spain · Stockholm",
    "Europa Travel",
    "Quart de Poblet Town Hall",
    "H.G. Pharmaceutical Laboratories",
  ],
};

const en: Content = {
  nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", contact: "Contact", menu: "Menu", close: "Close" },
  hero: {
    tagline: "Administration · Events · EU Institutions",
    intro:
      "Administrative assistant with an eye for detail. Organising people, documents and events in multinational teams, from Quito to Luxembourg.",
    ctaPrimary: "See my experience",
    ctaSecondary: "Get in touch",
    badge: "Administration · Front office · Events · ",
    focusLabel: "Currently",
    focusRole: "Trainee, DG Security and Safety",
    focusOrg: "European Parliament",
    focusPlace: "Luxembourg",
    photoAlt: "Portrait of Jessica Chicaiza",
  },
  marquee: "Organisations I have worked with",
  about: {
    label: "About",
    title: "Organised, reliable and at home in multicultural teams.",
    paragraphs: [
      "Business Administration graduate and administrative assistant with experience in front office and administrative coordination, meeting and event organisation, diary and document management and financial administration.",
      "I am currently a trainee at the European Parliament in Luxembourg. I am used to handling several files at the same time, working to deadlines and communicating with internal and external stakeholders in multinational and multicultural environments.",
    ],
    stats: [
      { value: "8", label: "organisations" },
      { value: "4", label: "countries" },
      { value: "3", label: "languages" },
    ],
  },
  experience: {
    label: "Experience",
    title: "Experience.",
    intro: "A journey through administration, customer service and international trade.",
    sortLabel: "Sort",
    newest: "Newest first",
    oldest: "Oldest first",
    jobs: [
      {
        id: "ep",
        start: "2026-10",
        company: "European Parliament",
        place: "Luxembourg",
        dates: "Oct 2026 - Present",
        role: "Trainee at the Directorate-General for Security and Safety",
        bullets: [
          "Assistance with the administrative and logistical procedures for the organisation of events, including catering, facilities, protocol and security access requests.",
          "Updating the unit's communication and information materials.",
          "Following parliamentary activities and deepening knowledge of the European Parliament and the EU institutions.",
        ],
      },
      {
        id: "edwards",
        start: "2023-10",
        company: "Temporary Agency & Edwards Lifesciences",
        place: "Valencia, Spain",
        dates: "Oct 2023 - May 2026",
        role: "Reception and Facilities Support",
        bullets: [
          "Managed reception and front office operations in a multinational corporate environment; coordinated visitors, calls and security access requests.",
          "Supported the facilities team with general administrative tasks: incoming and outgoing correspondence, shipment tracking, email management and purchase of office supplies.",
          "Handled purchases of office materials and supplier invoices through Coupa, ensuring compliance with internal procedures.",
          "Supported the onboarding of new employees together with the HR department and worked with the Health & Safety team on compliance procedures.",
          "Handled postal services, shipment tracking and document distribution.",
        ],
      },
      {
        id: "dxc",
        start: "2022-12",
        company: "DXC Technology",
        place: "Valencia, Spain",
        dates: "Dec 2022 - Jun 2023",
        role: "Customer Service",
        bullets: [
          "Delivered online customer support for banking clients, managing multiple cases at the same time while respecting deadlines and quality standards.",
          "Processed and resolved claims following procedures and regulatory requirements; reviewed financial and administrative documentation with accuracy and confidentiality.",
          "Drafted written replies to enquiries and maintained detailed records in line with internal procedures.",
        ],
      },
      {
        id: "anecoop",
        start: "2021-11",
        company: "Anecoop S.A.",
        place: "Valencia, Spain",
        dates: "Nov 2021 - Sep 2022",
        role: "Administrative Assistant",
        bullets: [
          "Processed customer orders and export documentation; managed invoices, proformas and logistics documents.",
          "Coordinated shipments with the logistics team.",
        ],
      },
      {
        id: "embassy",
        start: "2019-07",
        company: "Economic & Commercial Office of the Spanish Embassy",
        place: "Stockholm, Sweden",
        dates: "Jul 2019 - Jan 2020",
        role: "International Trade Advisor",
        bullets: [
          "Prepared reports, notes and market studies.",
          "Assisted Spanish companies looking to enter the Swedish market, helping them understand it and preparing trade mission agendas.",
          "Prepared reports on business enquiries from Spanish and Swedish companies, such as market legislation.",
          "Provided support and assistance in promotional activities.",
        ],
      },
      {
        id: "europa",
        start: "2017-10",
        company: "Europa Travel Agency",
        place: "Valencia, Spain",
        dates: "Oct 2017 - Aug 2018",
        role: "Administrative Assistant",
        bullets: [
          "Supported the organisation of corporate meetings and events.",
          "Processed supplier and hotel invoices and claims; performed bank reconciliations and payment follow-up.",
          "Maintained document archives, administrative databases and financial records.",
        ],
      },
      {
        id: "quart",
        start: "2013-09",
        company: "Quart de Poblet Town Hall",
        place: "Valencia, Spain",
        dates: "Sep 2013 - Sep 2017",
        role: "Receptionist & Customer Service",
        bullets: [
          "Customer service and answering calls.",
          "Database management and CV screening.",
          "Posting job openings and drafting administrative documents.",
          "Filing and document management.",
        ],
      },
      {
        id: "hg",
        start: "2011-04",
        company: "H.G. Pharmaceutical Laboratories",
        place: "Quito, Ecuador",
        dates: "Apr 2011 - Jan 2012",
        role: "Administrative Assistant",
        bullets: [
          "Pharmaceutical supply order planning.",
          "Invoicing and processing bank cheques.",
          "Telephone support for suppliers and customers and filing of delivery notes.",
          "Daily management of public procurement.",
          "Customer service and answering calls.",
        ],
      },
    ],
  },
  education: {
    label: "Education",
    title: "Education & training.",
    degreesTitle: "Education",
    trainingTitle: "Further training",
    degrees: [
      { school: "Universitat de València", years: "2013 - 2018", title: "Bachelor's degree in Business Administration" },
      { school: "Centro Universitario PAX", years: "2008 - 2010", title: "Advanced Vocational Training in Administration and Finance" },
    ],
    training: [
      { title: "Accounting Course", org: "Adams Academy", date: "August 2024" },
      { title: "Integral Logistics Course (270 hours)", org: "Labora Valencia", date: "January - May 2024" },
      { title: "Certificate in Digital Marketing", org: "Chamber of Commerce", date: "May - June 2019" },
      { title: "Certificate in Foreign Trade", org: "Chamber of Commerce", date: "July 2017" },
    ],
  },
  skills: {
    label: "Skills",
    title: "Tools & strengths.",
    digitalTitle: "Digital skills",
    digital: [
      { group: "ERP (user level)", items: ["Salesforce", "Microsoft Dynamics", "Coupa", "SAP"] },
      { group: "Microsoft Office", items: ["Word", "Excel", "PowerPoint", "Outlook"] },
      { group: "Google Workspace", items: ["Drive", "Sheets", "Calendar", "Docs"] },
    ],
    softTitle: "Strengths",
    soft: ["Teamwork", "Organisation and planning", "Time management", "Attention to detail", "Analytical thinking"],
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native", value: 1 },
      { name: "English", level: "Advanced · C1", value: 0.85 },
      { name: "French", level: "Basic · A2", value: 0.35 },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    text: "Would you like to get in touch? Write to me and I will get back to you as soon as possible.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    location: "Based in",
    locationValue: "Contern, Luxembourg",
    cv: "Download CV",
  },
  footer: { top: "Back to top" },
};

const es: Content = {
  nav: { about: "Sobre mí", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "Contacto", menu: "Menú", close: "Cerrar" },
  hero: {
    tagline: "Administración · Eventos · Instituciones UE",
    intro:
      "Asistente administrativa con ojo para el detalle. Organizo personas, documentos y eventos en equipos multinacionales, de Quito a Luxemburgo.",
    ctaPrimary: "Ver mi experiencia",
    ctaSecondary: "Contactar",
    badge: "Administración · Recepción · Eventos · ",
    focusLabel: "Actualmente",
    focusRole: "Becaria, DG de Seguridad y Protección",
    focusOrg: "Parlamento Europeo",
    focusPlace: "Luxemburgo",
    photoAlt: "Retrato de Jessica Chicaiza",
  },
  marquee: "Organizaciones en las que he trabajado",
  about: {
    label: "Sobre mí",
    title: "Organizada, resolutiva y cómoda en equipos multiculturales.",
    paragraphs: [
      "Graduada en Administración y Dirección de Empresas y asistente administrativa con experiencia en recepción y coordinación administrativa, organización de reuniones y eventos, gestión de agendas y documentación, y administración financiera.",
      "Actualmente hago prácticas en el Parlamento Europeo en Luxemburgo. Estoy acostumbrada a llevar varios expedientes a la vez, trabajar con plazos y comunicarme con interlocutores internos y externos en entornos multinacionales y multiculturales.",
    ],
    stats: [
      { value: "8", label: "organizaciones" },
      { value: "4", label: "países" },
      { value: "3", label: "idiomas" },
    ],
  },
  experience: {
    label: "Experiencia",
    title: "Experiencia.",
    intro: "Un recorrido por la administración, la atención al cliente y el comercio internacional.",
    sortLabel: "Ordenar",
    newest: "Más reciente",
    oldest: "Más antigua",
    jobs: [
      {
        id: "ep",
        start: "2026-10",
        company: "Parlamento Europeo",
        place: "Luxemburgo",
        dates: "Oct 2026 - Actualidad",
        role: "Becaria en la Dirección General de Seguridad y Protección",
        bullets: [
          "Apoyo en los procedimientos administrativos y logísticos para la organización de eventos: catering, instalaciones, protocolo y solicitudes de acceso de seguridad.",
          "Actualización de los materiales de comunicación e información de la unidad.",
          "Seguimiento de la actividad parlamentaria y profundización en el conocimiento del Parlamento Europeo y las instituciones de la UE.",
        ],
      },
      {
        id: "edwards",
        start: "2023-10",
        company: "Temporary Agency & Edwards Lifesciences",
        place: "Valencia, España",
        dates: "Oct 2023 - May 2026",
        role: "Recepción y apoyo a Facilities",
        bullets: [
          "Gestión de la recepción y del front office en un entorno corporativo multinacional; coordinación de visitas, llamadas y solicitudes de acceso de seguridad.",
          "Apoyo al equipo de Facilities en tareas administrativas generales: correspondencia de entrada y salida, seguimiento de envíos, gestión del correo electrónico y compra de material de oficina.",
          "Gestión de compras de material de oficina y facturas de proveedores a través de Coupa, cumpliendo los procedimientos internos.",
          "Apoyo en la incorporación de nuevos empleados junto al departamento de RR. HH. y colaboración con el equipo de Seguridad y Salud en procedimientos de cumplimiento.",
          "Gestión del servicio postal, seguimiento de envíos y distribución de documentación.",
        ],
      },
      {
        id: "dxc",
        start: "2022-12",
        company: "DXC Technology",
        place: "Valencia, España",
        dates: "Dic 2022 - Jun 2023",
        role: "Atención al cliente",
        bullets: [
          "Atención online a clientes de banca, gestionando varios casos a la vez y respetando plazos y estándares de calidad.",
          "Tramitación y resolución de reclamaciones según procedimientos y requisitos normativos; revisión de documentación financiera y administrativa con precisión y confidencialidad.",
          "Redacción de respuestas escritas a consultas y mantenimiento de registros detallados según los procedimientos internos.",
        ],
      },
      {
        id: "anecoop",
        start: "2021-11",
        company: "Anecoop S.A.",
        place: "Valencia, España",
        dates: "Nov 2021 - Sep 2022",
        role: "Asistente administrativa",
        bullets: [
          "Tramitación de pedidos de clientes y documentación de exportación; gestión de facturas, proformas y documentos logísticos.",
          "Coordinación de envíos con el equipo de logística.",
        ],
      },
      {
        id: "embassy",
        start: "2019-07",
        company: "Oficina Económica y Comercial de la Embajada de España",
        place: "Estocolmo, Suecia",
        dates: "Jul 2019 - Ene 2020",
        role: "Asesora de comercio internacional",
        bullets: [
          "Elaboración de informes, notas y estudios de mercado.",
          "Asistencia a empresas españolas interesadas en entrar en el mercado sueco, ayudándolas a conocerlo y preparando agendas de misiones comerciales.",
          "Elaboración de informes sobre consultas de empresas españolas y suecas, como legislación del mercado.",
          "Apoyo y asistencia en actividades de promoción.",
        ],
      },
      {
        id: "europa",
        start: "2017-10",
        company: "Europa Travel Agency",
        place: "Valencia, España",
        dates: "Oct 2017 - Ago 2018",
        role: "Asistente administrativa",
        bullets: [
          "Apoyo en la organización de reuniones y eventos corporativos.",
          "Tramitación de facturas y reclamaciones de proveedores y hoteles; conciliaciones bancarias y seguimiento de pagos.",
          "Mantenimiento de archivos documentales, bases de datos administrativas y registros financieros.",
        ],
      },
      {
        id: "quart",
        start: "2013-09",
        company: "Ayuntamiento de Quart de Poblet",
        place: "Valencia, España",
        dates: "Sep 2013 - Sep 2017",
        role: "Recepcionista y atención al ciudadano",
        bullets: [
          "Atención al público y atención telefónica.",
          "Gestión de bases de datos y cribado de currículums.",
          "Publicación de ofertas de empleo y redacción de documentos administrativos.",
          "Archivo y gestión documental.",
        ],
      },
      {
        id: "hg",
        start: "2011-04",
        company: "H.G. Laboratorios Farmacéuticos",
        place: "Quito, Ecuador",
        dates: "Abr 2011 - Ene 2012",
        role: "Asistente administrativa",
        bullets: [
          "Planificación de pedidos de suministros farmacéuticos.",
          "Facturación y tramitación de cheques bancarios.",
          "Atención telefónica a proveedores y clientes y archivo de albaranes.",
          "Gestión diaria de contratación pública.",
          "Atención al cliente y atención telefónica.",
        ],
      },
    ],
  },
  education: {
    label: "Formación",
    title: "Formación.",
    degreesTitle: "Estudios",
    trainingTitle: "Formación complementaria",
    degrees: [
      { school: "Universitat de València", years: "2013 - 2018", title: "Grado en Administración y Dirección de Empresas" },
      { school: "Centro Universitario PAX", years: "2008 - 2010", title: "Técnico Superior en Administración y Finanzas" },
    ],
    training: [
      { title: "Curso de Contabilidad", org: "Adams Academy", date: "Agosto 2024" },
      { title: "Curso de Logística Integral (270 horas)", org: "Labora Valencia", date: "Enero - mayo 2024" },
      { title: "Certificado en Marketing Digital", org: "Cámara de Comercio", date: "Mayo - junio 2019" },
      { title: "Certificado en Comercio Exterior", org: "Cámara de Comercio", date: "Julio 2017" },
    ],
  },
  skills: {
    label: "Habilidades",
    title: "Herramientas y fortalezas.",
    digitalTitle: "Competencias digitales",
    digital: [
      { group: "ERP (nivel usuario)", items: ["Salesforce", "Microsoft Dynamics", "Coupa", "SAP"] },
      { group: "Microsoft Office", items: ["Word", "Excel", "PowerPoint", "Outlook"] },
      { group: "Google Workspace", items: ["Drive", "Sheets", "Calendar", "Docs"] },
    ],
    softTitle: "Fortalezas",
    soft: ["Trabajo en equipo", "Organización y planificación", "Gestión del tiempo", "Atención al detalle", "Pensamiento analítico"],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo", value: 1 },
      { name: "Inglés", level: "Avanzado · C1", value: 0.85 },
      { name: "Francés", level: "Básico · A2", value: 0.35 },
    ],
  },
  contact: {
    label: "Contacto",
    title: "Hablemos.",
    text: "¿Quieres ponerte en contacto conmigo? Escríbeme y te responderé lo antes posible.",
    email: "Email",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    location: "Vivo en",
    locationValue: "Contern, Luxemburgo",
    cv: "Descargar CV",
  },
  footer: { top: "Volver arriba" },
};

export const content: Record<Lang, Content> = { en, es };
