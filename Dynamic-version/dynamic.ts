
interface ResumeData {
  name: string;
  email: string;
  profilePic: string;
  education: string;
  work: string;
  skills: string[];
}

document.getElementById('resume-form')?.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target as HTMLFormElement);
  const resumeData: ResumeData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      profilePic: formData.get('profile-pic') as string,
      education: formData.get('education') as string,
      work: formData.get('work') as string,
      skills: (formData.get('skills') as string).split(',').map(skill => skill.trim())
  };

  generateResume(resumeData);
});

function generateResume(data: ResumeData) {
  const resumeElement = document.getElementById('resume');
  if (resumeElement) {
      resumeElement.innerHTML = `
          <section id="personal-info">
              <h1>${data.name}</h1>
              <p>Contact: ${data.email}</p>
              <img src="${data.profilePic}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">
          </section>
          <section id="education">
              <h2>Education</h2>
              <p>${data.education}</p>
          </section>
          <section id="skills">
              <h2>Skills</h2>
              <ul>
                  ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
              </ul>
          </section>
          <section id="work-experience">
              <h2>Work Experience</h2>
              <p>${data.work}</p>
          </section>
      `;
  }
}
