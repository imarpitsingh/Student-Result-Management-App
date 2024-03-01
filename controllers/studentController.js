const db = require("../models");

const Students = db.studentrecords;
const Teachers = db.teacherslogin;

const studentlogin = async (req, res) => {
    console.log(req.body);

    const { Rollnumber, DOB } = req.body;

    try {
        // Check if a student with the provided rollNum and dob exists

        const student = await Students.findOne({
            where: { Rollnumber: Rollnumber, DOB:DOB  },
        });

        if (student) {
            // student found, login successful

            console.log("Student logged in successfully");

            res.render("viewResult", { std: student });

            // res.status(200).send('Student login successfully');
        } else {
            // student not found, login failed

            let alert = require("alert");

            alert("Wrong Credentials !! Please enter valid details");

            // res.status(401).send('Student login failed');

            res.render("studentLogin");
        }
    } catch (error) {
        console.error("Error:", error);

        res.render("errorpage")
    }
};

const student_login = (req, res) => {
    res.render("studentLogin");
};

module.exports = {
    studentlogin,
    student_login,
};
