# aws://study-lab

Nine small, dependency-free, interactive AWS visualizers. The project follows the same single-file approach as [`study-lab`](https://github.com/tuongphantrue/study-lab): each topic is a standalone HTML file with its CSS and JavaScript inline.

## Labs

| Page | Covers |
|---|---|
| `iam.html` | IAM implicit deny, Allow, explicit Deny, boundaries, and SCP guardrails |
| `vpc.html` | IPv4 CIDR splitting, subnet count, total and usable addresses |
| `autoscaling.html` | Target tracking, min/max capacity, scale out/in, warmup |
| `load-balancing.html` | Request routing, outstanding load, target health |
| `s3-lifecycle.html` | Storage classes, lifecycle transitions, expiration |
| `lambda-concurrency.html` | Concurrency estimation, provisioned concurrency, throttling |
| `sqs.html` | Visibility timeout, deletion, retry, redrive to DLQ |
| `cloudwatch.html` | M-out-of-N alarm evaluation and state transitions |
| `dynamodb.html` | Partition-key cardinality, distribution, hot keys, write sharding |

## Run locally

Open `index.html` in a browser. There is no build step, package install, backend, AWS account, or credentials.

For a local web server (optional):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new GitHub repository, for example `aws-study-lab`.
2. Add these files and push to the `main` branch.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, then `main` and `/ (root)`.
5. Open `https://<username>.github.io/aws-study-lab/`.

## Accuracy and scope

These are learning simulators, not production calculators. Each page links to the relevant official AWS documentation. AWS behavior includes additional service-specific rules, quotas, pricing, regional availability, and edge cases that the visualizers intentionally omit.

## Attribution

Inspired by and designed to sit alongside [`tuongphantrue/study-lab`](https://github.com/tuongphantrue/study-lab).

## License

MIT. See `LICENSE`.
