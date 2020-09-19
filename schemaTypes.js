
//Schema types
const nameRequierd = {
    type: String,
    required:true,
    trim:true,
    minlength:3,
    maxlength:20
};

const phoneRequierd = {
    type: String,
    required:true,
    trim:true,
    minlength:10,
    maxlength:14
}

const addressRequierd = {
    type: String,
    required:true,
    trim:true,
    minlength:10,
    maxlength:50
}

const address = {
    type: String,
    trim:true,
    minlength:10,
    maxlength:50
}

const jobDecriptionRequierd = {
    type: String,
    required:true,
    trim:true,
    minlength: 3,
    maxlength: 40
}

const aboutRequired = {
    type: String,
    required:true,
    trim:true,
    minlength:40
}

const companyNameRequired = {
    type: String,
    required:true,
    trim:true,
    minlength:2,
    maxlength:40
}

const dateStringRequired = {
    type: String,
    required:true,
    trim:true,
    maxlength:40
}

const dateString = {
    type: String,
    trim:true,
    defualt:'now',
    maxlength:40
}

const contentRequired = {
    type: String,
    required:true,
    trim:true,
    minlength:10
}

const titleRequierd = {
    type: String,
    required: true,
    trim:true,
    minlength: 4,
    maxlength: 80
}

const decriptionRequired = {
    type: String,
    required:true,
    trim:true,
    minlength: 5,
    maxlength: 120
}

const skillRequired = {
    type: String,
    required:true,
    trim:true,
    maxlength:80
}

const skillCategoryRequired = {
    type: String,
    enum:['LANGUAGES', 'PROGRAMMING_LANGUAGES', 'OPERATING_SYSTEMS', 'IDE'],
    required:true,
    trim:true,
    maxlength:80
}

const userRole = {
    type: String,
    enum:['ADMIN','USER'],
    defualt:'USER',
    required:true,
    trim:true
}

const passwordRequierd = {
    type: String,
    required:true,
    minlength:8,
    trim:true
}

// export types
module.exports = {
    nameRequierd, phoneRequierd, addressRequierd,
    address, jobDecriptionRequierd, aboutRequired,
    companyNameRequired, dateStringRequired, dateString,
    contentRequired, titleRequierd, decriptionRequired,
    skillRequired, skillCategoryRequired, userRole,
    passwordRequierd
};