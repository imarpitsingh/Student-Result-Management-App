const db = require("../models");

const Students = db.studentrecords;
const Teachers = db.teacherslogin;

const addStudent = async (req, res) => {
  try{
  console.log(req.body);
  let info = {
    Rollnumber: req.body.Rollnumber,
    Name: req.body.Name,
    DOB: req.body.DOB,
    Score: req.body.Score,
  };

  const student = await Students.create(info);
  const updatedStudents = await Students.findAll();
    let alert = require('alert');
    alert("Student record added Successfully");
    res.render("viewall",{std:updatedStudents});
  // res.status(200).send(student);
  }
  catch (error) {
    console.error('Error:', error);
    let alert = require('alert');
    alert("Duplicate Data not allowed !!");
    res.render("errorpage");

  }
};

const viewall = async (req, res) => {
  let students = await Students.findAll();
  res.render("viewall",{std:students});
};

const editstudent = async (req, res) => {
  let id = req.body.Rollnumber;
  let student = await Students.update(req.body, { where: { Rollnumber: id } });
  if (student===0){
    res.render("errorpage")
  }
  const updatedStudent = await Students.findOne({ where: { RollNumber: id } });
  let students = await Students.findAll()
  res.render("viewall", { std: students })
};

const deletedata = async (req, res) => {
  let id = req.params.id;
  await Students.destroy({ where: { Rollnumber: id } });
  const updatedStudents = await Students.findAll();
  res.render("viewall",{std:updatedStudents});
};

const teacherlogin = async (req, res) => {
  const { Name, Password } = req.body;
  try {
    // Check if a teacher with the provided username and password exists
    const teacher = await Teachers.findOne({
      where: { Name: Name, Password: Password },
    })
    console.log(teacher);
    if (teacher) {
      // Teacher found, login successful
      console.log("Teacher logged in successfully");
      let students = await Students.findAll()
      res.render("viewall", { std: students });
      // res.status(200).send('Teacher login successfull');
    }
    else {
      // Teacher not found, login failed
      let alert = require('alert');
      alert("Wrong Credentials !! Please enter valid details");
      res.render("teacherLogin");
    }
  }
  catch (error) {
    console.error('Error:', error);
    res.render("errorpage")
  }
};

const teacher_login = (req, res) => {
  res.render("teacherLogin");
};

const teacher_add = (req, res) => {
  res.render("addStudent");
};

const updateStudent_call = async (req, res) => {
  let id = req.params.id
  // updateStudent()
  let updatedStudent = await Students.findOne({ where: { Rollnumber: id } });
  res.render("editStudent",{std:updatedStudent});
};




module.exports = {
  addStudent,
  viewall,
  editstudent,
  deletedata,
  teacherlogin,
  updateStudent_call,
  teacher_add,
  teacher_login
};
