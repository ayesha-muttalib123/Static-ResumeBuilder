var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        profilePic: formData.get('profile-pic'),
        education: formData.get('education'),
        work: formData.get('work'),
        skills: formData.get('skills').split(',').map(function (skill) { return skill.trim(); })
    };
    generateResume(resumeData);
});
function generateResume(data) {
    var resumeElement = document.getElementById('resume');
    if (resumeElement) {
        resumeElement.innerHTML = "\n          <section id=\"personal-info\">\n              <h1>".concat(data.name, "</h1>\n              <p>Contact: ").concat(data.email, "</p>\n              <img src=\"").concat(data.profilePic, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">\n          </section>\n          <section id=\"education\">\n              <h2>Education</h2>\n              <p>").concat(data.education, "</p>\n          </section>\n          <section id=\"skills\">\n              <h2>Skills</h2>\n              <ul>\n                  ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n              </ul>\n          </section>\n          <section id=\"work-experience\">\n              <h2>Work Experience</h2>\n              <p>").concat(data.work, "</p>\n          </section>\n      ");
    }
}
