export function getLatexHeader() {
    return `\\documentclass[letterpaper,11pt]{article}
  
  \\usepackage{latexsym}
  \\usepackage[empty]{fullpage}
  \\usepackage{titlesec}
  \\usepackage{marvosym}
  \\usepackage[usenames,dvipsnames]{color}
  \\usepackage{verbatim}
  \\usepackage{enumitem}
  \\usepackage[hidelinks]{hyperref}
  \\usepackage{fancyhdr}
  \\usepackage[english]{babel}
  \\usepackage{tabularx}
  \\input{glyphtounicode}
  
  \\pagestyle{fancy}
  \\fancyhf{}
  \\fancyfoot{}
  \\renewcommand{\\headrulewidth}{0pt}
  \\renewcommand{\\footrulewidth}{0pt}
  
  \\addtolength{\\oddsidemargin}{-0.5in}
  \\addtolength{\\evensidemargin}{-0.5in}
  \\addtolength{\\textwidth}{1in}
  \\addtolength{\\topmargin}{-.5in}
  \\addtolength{\\textheight}{1.0in}
  
  \\urlstyle{same}
  \\raggedbottom
  \\raggedright
  \\setlength{\\tabcolsep}{0in}
  
  \\titleformat{\\section}{
    \\vspace{-4pt}\\scshape\\raggedright\\large
  }{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]
  
  \\pdfgentounicode=1
  
  \\newcommand{\\resumeItem}[1]{
    \\item\\small{
      {#1 \\vspace{-2pt}}
    }
  }
  
  \\newcommand{\\resumeSubheading}[4]{
    \\vspace{-2pt}\item
      \\begin{tabular*}{0.97\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & #2 \\
        \\textit{\small#3} & \\textit{\\small #4} \\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeSubSubheading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\fill}}r}
        \\textit{\\small#1} & \\textit{\\small #2} \\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeProjectHeading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\small#1 & #2 \\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}
  
  \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
  
  \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
  \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
  \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
  \\newcommand{\\resumeItemListEnd}{\\end{itemize}\vspace{-5pt}}
  `;
}
export function getResumeHeading(personalInfo) {
    return `\\begin{center}
      \\textbf{\\Huge \\scshape ${personalInfo.name}} \\ \\vspace{1pt}
      \\small ${personalInfo.mobile} 
      ${personalInfo.links
        .map((link) => {
        return `$|$ \\href{${link.href}} {\\underline{${link.heading}}}`;
    })
        .join(" ")}
  \\end{center}`;
}
export function getResumeEducation(education) {
    return `\\section{Education}
    \\resumeSubHeadingListStart
      \\resumeSubheading
        {${education.uniname}}{${education.unilocation}}
        {${education.course}}{${education.duration}}
    \\resumeSubHeadingListEnd`;
}
export function getExperience(experiences) {
    let latexContent = `\\section{Experience}
  \\resumeSubHeadingListStart
  
  ${experiences.map((experience) => {
        return `\\resumeSubheading
  {${experience.title}}{${experience.period}}
      {${experience.company}}{${experience.location}}
      \\resumeItemListStart
      ${experience.workdone.map((work) => (`\\resumeItem{${work}}`))}
      \\resumeItemListEnd`;
    })}
  
  
  \\resumeSubHeadingListEnd`;
    return latexContent;
}
export function getProjects(projects) {
    let latexContent = `\\section{Projects}
        \\resumeSubHeadingListStart`;
    projects.map((project) => {
        latexContent += `\\resumeProjectHeading
            {\\textbf{${project.name}} $|$ \\emph{${project.technologies.join(",")}}}
            \\resumeItemListStart
              ${project.features
            .map((feature) => {
            return `\\resumeItem{${feature}}`;
        })
            .join("\n")}
            \\resumeItemListEnd\n`;
    });
    latexContent += `\\resumeSubHeadingListEnd`;
    return latexContent;
}
export function getTechnicalSkills(skills) {
    return `\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
 \\small{\\item{
 \\textbf{Languages}{: ${skills.languages.join(",")}} \\
 \\textbf{Frameworks}{: ${skills.frameworks.join(",")}} \\
 \\textbf{Developer Tools}{: ${skills.developerTools.join(",")}} \\
 \\textbf{Libraries}{: ${skills.libraries.join(",")}}
}}
 \\end{itemize}`;
}
