const greeting = {
    title: "Hi, I'm Vidur Gupta",
    logo_name: "Vidur Gupta",
    logo_img_show: false, // if true than show image(logo) in home page instant of text(logo)
    logo_img: "https://logo.letskhabar.com/name?name=name",
    full_name: "Vidur Gupta",
    email: "gupta.vidur@outlook.com",
    subTitle:
    "I am currently a senior pursuing my Bachelors of Science in Information Science at University of Maryland, College Park. I specialize in UX/UI Design and Data Analysis and Visualization",
    Programming: false, 
    data_Science: true, // if true, Show 'Programming' section in home page, if false than not show
    developer: true,  // if true, Show 'Full Stack Development' section in home page, if false than not show
    designer: true,  // if true, Show 'designer' section in home page, if false than not show
    cloud_infra_architecture:false,  // if true, Show 'cloud_infra_architecture' section in home page, if false than not show
    ml_ai: false,  // if true, Show 'ml_ai' section in home page, if false than not show
    Robotic: false,  // if true, Show 'Robotic' section in home page, if false than not show
    gamedev: false,  // if true, Show 'gamedev' section in home page, if false than not show
};

const BlogData = {
    // this show your dev.to blog in your Portfolio blog
    show_Blog: true,  // if true it Show your DEV.to article in Blog Section, if false than Blog Section convert to skill Section.
    devto_username: "vimal",
    Blog_Bio : [
        // this is visible in '/blog' section if show_Blog: true, else show in skill section
        "In Progress"
    ]
};


const socialMedia = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "facebook",
        img: "https://logo.letskhabar.com/img?tool=facebook0",
        link: "Your facebook link"
    },
    {
        icon: "twitter",
        img: "https://logo.letskhabar.com/img?tool=twitter",
        link: "Your twitter link"
    },
    {
        icon: "instagram",
        img: "https://logo.letskhabar.com/img?tool=instagram",
        link: "Your instagram link"
    },
    {
        icon: "github",
        img: "https://logo.letskhabar.com/img?tool=github",
        link: "Your github link"
    },
    {
        icon: "gitlab",
        img: "https://logo.letskhabar.com/img?tool=gitlab",
        link: "Your gitlab link"
    },
    {
        icon: "devto",
        img: "https://logo.letskhabar.com/img?tool=dev",
        link: "Your devto link"
    },
    {
        icon: "linkedin",
        img: "https://logo.letskhabar.com/img?tool=linkedin",
        link: "Your linkedin link"
    },
    {
        icon: "mail",
        img: "https://logo.letskhabar.com/img?tool=mail",
        link: "mailto:Your mail"
    }

];

const ProgrammingSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "c-programming",
        img: "https://logo.letskhabar.com/img?tool=c-programming"
    },
    {
        icon: "java",
        img: "https://logo.letskhabar.com/img?tool=java"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },

];

const DevSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "html",
        img: "https://logo.letskhabar.com/img?tool=html"
    },
    {
        icon: "css",
        img: "https://logo.letskhabar.com/img?tool=css3"
    },
    {
        icon: "js",
        img: "https://logo.letskhabar.com/img?tool=javascript"
    },
    {
        icon: "node",
        img: "https://logo.letskhabar.com/img?tool=node"
    },
    {
        icon: "sass",
        img: "https://logo.letskhabar.com/img?tool=sass"
    },
    {
        icon: "react",
        img: "https://logo.letskhabar.com/img?tool=react"
    },
    {
        icon: "vue",
        img: "https://logo.letskhabar.com/img?tool=vue-js"
    },
    {
        icon: "npm",
        img: "https://logo.letskhabar.com/img?tool=npm"
    },
    {
        icon: "yarn",
        img: "https://logo.letskhabar.com/img?tool=yarn"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "wordpress",
        img: "https://logo.letskhabar.com/img?tool=wordpress"
    },
    {
        icon: "rust",
        img: "https://logo.letskhabar.com/img?tool=rust"
    }

];

const DesignSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "figma",
        img: "https://logo.letskhabar.com/img?tool=figma"
    },
    {
        icon: "sketch",
        img: "https://logo.letskhabar.com/img?tool=sketch"
    },
    {
        icon: "adobe-after-effects",
        img: "https://logo.letskhabar.com/img?tool=adobe-after-effects"
    },
    {
        icon: "adobe-xd",
        img: "https://logo.letskhabar.com/img?tool=adobe-xd"
    },
    {
        icon: "adobe-illustrator",
        img: "https://logo.letskhabar.com/img?tool=adobe-illustrator"
    },
    {
        icon: "adobe-photoshop",
        img: "https://logo.letskhabar.com/img?tool=adobe-photoshop"
    },
    {
        icon: "adobe-premiere-pro",
        img: "https://logo.letskhabar.com/img?tool=adobe-premiere-pro"
    }

];
const cloud_infra_architecture_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "gcp",
        img: "https://logo.letskhabar.com/img?tool=google_cloud"
    },
    {
        icon: "aws",
        img: "https://logo.letskhabar.com/img?tool=amazon-web-services"
    },
    {
        icon: "azure",
        img: "https://logo.letskhabar.com/img?tool=azure"
    },
    {
        icon: "kubernetes",
        img: "https://logo.letskhabar.com/img?tool=kubernetes"
    },
    {
        icon: "travis",
        img: "https://logo.letskhabar.com/img?tool=travis"
    },
    {
        icon: "linode",
        img: "https://logo.letskhabar.com/img?tool=linode"
    },
    {
        icon: "oracle",
        img: "https://logo.letskhabar.com/img?tool=oracle"
    }

];
const data_Science_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "kaggle",
        img: "https://logo.letskhabar.com/img?tool=kaggle"
    },
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "jupyter",
        img: "https://logo.letskhabar.com/img?tool=jupyter"
    }

];
const Ml_ai_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.letskhabar.com/img?tool=arduino"
    }

];

const RoboticSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.letskhabar.com/img?tool=arduino"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },

];

const Gamedev_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "unity",
        img: "https://logo.letskhabar.com/img?tool=unity"
    },
    {
        icon: "c-programming",
        img: "https://logo.letskhabar.com/img?tool=c-programming"
    },
    {
        icon: "c-sharp",
        img: "https://logo.letskhabar.com/img?tool=c-sharp-logo"
    }

];


const projects = [
    {
        id: "1",
        name: "project 1",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "2",
        name: "project 2",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "3",
        name: "project 3",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    }
];
const certificate = [
    {
        id: "1",
        name: "certificate 1",
        Description: "this is Description",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "2",
        name: "certificate 2",
        Description: "this is Description",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "3",
        name: "certificate 3",
        Description: "this is Description",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    }
];

const ProgrammingBio = [
    "Extensive knowledge in web design, specifically with Python HTML, Java, and CSS",
];

const DevBio = [
    "Extensive knowledge in web design, specifically with HTML, Javascript, CSS, and React",
    "Detail oriented, persistent, strong desire to produce quality applications ",
    "Effecively translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences"
]

const DesignBio = [
    "Expert in Storyboarding, Physical Prototyping, Wireframing",
    "High Fidelity Design, and Responsive Web Design by using software, such as Balsamiq, Framer.js, and Cinema 4D.",
]


const AboutBio =[
    'I am a student pursuing my Bachelors of Science in Information Science at University of Maryland, College Park',
    ' Fun fact: I am a DJ and love music ',
    ' Love working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' I am From Ellicott City, MD',
    
];
const EducationBio =[
    'I am a student pursuing my Bachelors of Science in Information Science at University of Maryland, College Park',
    ' I am from Ellicott City, MD',
    ' Fun fact: I am a DJ and love music ',
    ' Love working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
];
const ProjectsBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc'
];
const ContactBio =[
    'I am a student pursuing my Bachelors of Science in Information Science at University of Maryland, College Park',
    ' I am from Ellicott City, MD',
];

const cloud_infra_architecture_Bio = [
    "You can Remove this section in name.js",
    "Experience working on multiple cloud platforms",
    'Hosting and maintaining websites on virtual machine instances along with integration of databases',
];

const data_Science_Bio = [
    "Strong analytical skills with an extensive understanding of statistical techniques",
    "Hypothesis development, designing tests/experiments, analyzing data, drawing conclusions, and delivering actionable recommendations.",
    "Expert in Data Visualization Software, such as Tableau, Microsoft Power BI, and Microsft Excel",
    "Libraries: NumPy, Seaborn, Folium, IPython-sql, Pandas, Matplotlib, and ScipPy",
];

const Ml_ai_Bio = [
    "You can Remove this section in name.js",
    "Complex quantitative modelling",
    "you can change below skill icons"
];

const RoboticBio = [
    "You can Remove this section in name.js",
    "Complex Robotic modelling",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

const Gamedev_Bio = [
    "You can Remove this section in name.js",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

export {
    greeting,
    socialMedia,
    DevSkill,
    DesignSkill,
    projects,
    certificate,
    AboutBio,
    EducationBio,
    ProjectsBio,
    ContactBio,
    DevBio,
    DesignBio,
    BlogData,
    ProgrammingSkill,
    RoboticSkill,
    cloud_infra_architecture_Skill,
    data_Science_Skill,
    Ml_ai_Skill,
    Gamedev_Skill,
    cloud_infra_architecture_Bio,
    data_Science_Bio,
    Ml_ai_Bio,
    Gamedev_Bio,
    ProgrammingBio,
    RoboticBio
};