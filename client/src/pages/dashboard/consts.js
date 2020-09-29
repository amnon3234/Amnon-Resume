
// dashboard sidebar items
module.exports.menuItems = [
    {
        icon:'fas fa-user-tie',
        text:'Management',
        route:'/',
    },
    {
        icon:'fas fa-info',
        text:'Info',
        route:'/info',
    },
    {
        icon:'fas fa-file-alt',
        text:'Experience',
        route:'/experience',
    },
    {
        icon:'fas fa-project-diagram',
        text:'Projects',
        route:'/projects',
    },
    {
        icon:'fas fa-sticky-note',
        text:'Notes',
        route:'/notes',
    },
    {
        icon:'fas fa-users',
        text:'Users',
        route:'/users',
    }
];

// dashboard topbar items
module.exports.topBarItems = [
    {
        icon:'far fa-clipboard',
        text:'Offer Me A Job',
        route:''
    },
    {
        icon:'fas fa-envelope-open-text',
        text:'Contact Me',
        route:''
    },
    {
        icon:'fas fa-sign-out-alt',
        text:'Log-Out',
        route:''
    }
];

// model templates
module.exports.experienceTemplate = {
    company:'',
    jobDescription:'',
    jobLocation:'',
    fromYear:'',
    toYear:'',
    content:''
}

module.exports.noteTemplate = {
    name:'',
    title:'',
    content:''
}

module.exports.projectsTemplate = {
    title:'',
    description:'',
    gitHubLink:''
}

module.exports.userTemplate = {
    fullName:'',
    email:''
}