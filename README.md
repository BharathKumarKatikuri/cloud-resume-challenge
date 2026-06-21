# AWS Cloud Resume Challenge With (Zero-Cost Architecture)
Cloud Resume Challenge built using AWS serverless services. Features a portfolio website, visitor counter, and infrastructure automation.
## Architecture
![Architecture Diagram](architecture-diagram.png)

## Technologies Used

- Amazon Route 53
- Amazon CloudFront
- Amazon S3
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- Git & GitHub

## Project Progress
# Step 1: Build the Portfolio Website

Designed and developed a responsive portfolio website using HTML, CSS, and JavaScript.

### Features

- Resume download
- Certificates section
- Projects section
- Responsive design

---

# Step 2: Initialize Git Repository

Created a local Git repository and connected it to GitHub.

### Commands Used

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repository-url>
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

# Step 3: Design the Architecture

Created the architecture diagram for the project.

![Architecture Diagram](architecture-diagram.png)

---

# Step 4: Set Up FloCI

Started FloCI locally to simulate AWS services.

### Command

```bash
floci start
```

---

# Step 5: Configure AWS CLI Environment Variables

Configured credentials and endpoint for FloCI.

### Commands

```powershell
$env:AWS_ENDPOINT_URL="http://localhost:4566"
$env:AWS_ACCESS_KEY_ID="test"
$env:AWS_SECRET_ACCESS_KEY="test"
$env:AWS_DEFAULT_REGION="us-east-1"
```

---

# Step 6: Create S3 Bucket

Created an S3 bucket to host the portfolio website.

### Command

```bash
aws s3 mb s3://<bucket-name> --endpoint-url=http://localhost:4566
```
