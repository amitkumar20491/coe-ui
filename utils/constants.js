module.exports =  Object.freeze({
    SCHOOL_HOST : process.env.SCHOOL_HOST || "127.0.0.1",
    SCHOOL_PORT : process.env.SCHOOL_PORT || "9098",
    PATH_ALL_SCHOOL : "/api/school/all",
    PATH_ADD_SCHOOL : "/api/school/create",
    PATH_SEARCH_SCHOOL_BY_NAME : "/api/school?schoolname=",
    STUDENT_HOST : process.env.STUDENT_HOST || "127.0.0.1",
    STUDENT_PORT : process.env.STUDENT_PORT || "8098",
    PROTOCOL: process.env.PROTOCOL || "http",
    PATH_ALL_STUDENTS : "/api/student/all",
    PATH_ADD_STUDENT : "/api/student/createstudent",
    PATH_SEARCH_STUDENTS_BY_SCHOOL : "/api/school/getStudentsBySchool/"
  });