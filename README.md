# AWS SAA-C03 Study Lab

A dependency-free study workspace for **AWS Certified Solutions Architect – Associate (SAA-C03)**. The course and exam workspaces are separate, and every course section opens on its own beginner-friendly page.

## Links

- **Live site:** https://tuongphantrue.github.io/aws-study-lab/
- **Repository:** https://github.com/tuongphantrue/aws-study-lab

## What changed

### Study

- 33 separate course-section pages under `course/`
- Each page follows the approved simple lesson layout:
  - one short explanation
  - one hover/tap interactive figure
  - one analogy
  - one real example
  - one exam clue
  - one memory rule
  - one short question
- Previous/next navigation and browser-local progress
- Optional labs only after the basic idea

### Exam

- Clear exam-format guide in `exam-guide.html`
- Separate question-reading method in `exam-strategy.html`
- Untimed scenario practice
- 120 original questions in the mock bank
- 10-question warm-up
- 20-question readiness diagnostic
- three 65-question timed mock exams
- four 15-question domain drills
- answer review, flags, saved attempts, history, and domain scores

All practice questions are original. They are not copied, leaked, or recalled AWS exam questions.

## Project structure

```text
aws-study-lab/
├── index.html
├── study.html
├── study-guide.html
├── exam.html
├── exam-guide.html
├── exam-strategy.html
├── mock-exams.html
├── architecture-practice.html
├── course/
│   ├── section-01.html
│   ├── section-02.html
│   └── ... section-33.html
├── css/
│   ├── app.css
│   ├── course-pages.css
│   ├── exam-info.css
│   ├── lab-core.css
│   ├── lesson-page.css
│   ├── rework-ui.css
│   └── saa.css
├── js/
│   ├── app-shell.js
│   ├── course-overview.js
│   ├── interactive-diagrams.js
│   ├── lesson-page.js
│   ├── mock-exams.js
│   └── mock-question-bank.js
├── *.html
├── .nojekyll
├── LICENSE
└── README.md
```

## Upload to GitHub

1. Extract the ZIP.
2. Delete the old files in the root of the GitHub repository.
3. Upload **everything inside the extracted folder**, including the `course`, `css`, and `js` folders.
4. Commit the changes.
5. In **Settings → Pages**, select **Deploy from a branch → main / root**.
6. Wait for deployment and hard-refresh with `Ctrl + F5`.

Do not upload the extracted parent folder as an extra nested directory. `index.html` must stay at the repository root.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Official references

- AWS SAA-C03 exam guide: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html
- AWS certification preparation: https://aws.amazon.com/certification/certification-prep/

This project is not affiliated with or endorsed by AWS, Udemy, or any course instructor.

## License

MIT.
