# AWS SAA-C03 Study Lab

A dependency-free study workspace for **AWS Certified Solutions Architect – Associate (SAA-C03)**. It separates beginner learning from exam practice and includes original visual diagrams, lessons, labs, quizzes, and mock exams.

## Links

- **Live site:** https://tuongphantrue.github.io/aws-study-lab/
- **Repository:** https://github.com/tuongphantrue/aws-study-lab

## Project structure

```text
aws-study-lab/
├── index.html
├── study.html
├── study-guide.html
├── exam.html
├── *.html                  # Interactive labs and exams
├── css/
│   ├── app.css
│   ├── lab-core.css
│   ├── rework-ui.css
│   ├── saa.css
│   └── study-guide.css
├── js/
│   ├── app-shell.js
│   ├── beginner-course-data.js
│   └── study-guide.js
├── images/
│   └── diagrams/           # Directly embedded SVG study figures
├── .nojekyll
├── LICENSE
└── README.md
```

The diagrams are embedded directly in the HTML lab pages, so they do not depend on JavaScript injection.

## Upload the complete site to GitHub

1. Extract this ZIP.
2. Open the extracted `aws-study-lab-github-ready` folder.
3. Delete the old files in the root of your GitHub repository.
4. Upload **everything inside the extracted folder**, including the `css`, `js`, and `images` folders.
5. Commit the changes.
6. In **Settings → Pages**, use **Deploy from a branch → main / root**.
7. Wait for deployment, then hard-refresh the live site with `Ctrl + F5`.

Do not upload the parent folder as a nested folder inside the repository. `index.html` must remain at the repository root.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Course content

The Study workspace follows the publicly visible high-level order of a popular SAA-C03 course, while all explanations, diagrams, examples, quizzes, labs, and mock questions in this repository are original. It is not affiliated with or endorsed by the instructor, Udemy, or AWS.

## License

MIT.
