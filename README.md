# AWS SAA-C03 Study Lab

A dependency-free, Rework-inspired study workspace for **AWS Certified Solutions Architect – Associate (SAA-C03)**.

## Links

- **Live study lab:** [https://tuongphantrue.github.io/aws-study-lab/](https://tuongphantrue.github.io/aws-study-lab/)
- **GitHub repository:** [https://github.com/tuongphantrue/aws-study-lab](https://github.com/tuongphantrue/aws-study-lab)

The site maps interactive learning modules to the current official exam domains:

| Domain | Weight |
|---|---:|
| Design Secure Architectures | 30% |
| Design Resilient Architectures | 26% |
| Design High-Performing Architectures | 24% |
| Design Cost-Optimized Architectures | 20% |

## Included

- 14 interactive architecture labs
- Randomized 15-question scenario practice sessions
- Two timed 65-question mock exams plus a 20-question diagnostic from an original 80-question bank
- Flag-for-review navigation, autosave/resume, domain scoring, attempt history, and full explanations
- Browser-local completion tracking and domain progress
- Rework-style dashboard, sidebar, search, and responsive layout
- No AWS account, credentials, backend, dependencies, or build step

## Run

Open `index.html`, or start a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

This repository is intended to be published at:

[https://tuongphantrue.github.io/aws-study-lab/](https://tuongphantrue.github.io/aws-study-lab/)

In GitHub, open **Settings → Pages**, select **Deploy from a branch**, and choose **main / root**.

## Exam note

The dashboard currently reflects SAA-C03: 65 questions, 130 minutes, 50 scored questions plus 15 unscored questions, a scaled passing score of 720, and four weighted domains. Mock-exam percentages are study metrics and are not conversions to AWS scaled scores. AWS can update exam details; verify the official guide before booking.

Official guide: `https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html`

## Scope

The simulators teach architectural mental models. They intentionally simplify service quotas, pricing, regional availability, policy exceptions, and production edge cases. Always verify implementation details in official AWS documentation.

## License

MIT.

## Course-style study guide

Open `study-guide.html` for a structured original curriculum with 27 sections, short lessons, key architecture rules, common exam traps, one checkpoint per section, local progress tracking, and links to the interactive labs. The curriculum is inspired by the logical topic-by-topic flow common in popular SAA courses, but all lesson text and questions in this repository are original.

## Rework-style interface

The current interface follows Rework's product conventions: a narrow dark platform rail, a light contextual sidebar, a compact toolbar, flat list/detail workspaces, thin dividers, and restrained status/action colors.


## Workspace structure

- `index.html` — choose Study or Exam.
- `study.html` — course and interactive labs only.
- `exam.html` — scenario practice and timed mock exams only.
