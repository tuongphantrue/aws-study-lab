# AWS SAA-C03 Study Lab

A dependency-free, Rework-inspired study workspace for **AWS Certified Solutions Architect – Associate (SAA-C03)**.

The site maps interactive learning modules to the current official exam domains:

| Domain | Weight |
|---|---:|
| Design Secure Architectures | 30% |
| Design Resilient Architectures | 26% |
| Design High-Performing Architectures | 24% |
| Design Cost-Optimized Architectures | 20% |

## Included

- 14 interactive architecture labs
- Randomized 15-question scenario practice sessions from an original 20-question bank
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

Push the folder to a repository and enable **Settings → Pages → Deploy from a branch → main / root**.

## Exam note

The dashboard currently reflects SAA-C03: 65 questions, 130 minutes, a scaled passing score of 720, and four weighted domains. AWS can update exam details; verify the official guide before booking.

Official guide: `https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html`

## Scope

The simulators teach architectural mental models. They intentionally simplify service quotas, pricing, regional availability, policy exceptions, and production edge cases. Always verify implementation details in official AWS documentation.

## License

MIT.
