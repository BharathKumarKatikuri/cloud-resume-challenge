# AWS Cloud Resume Challenge
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

Create a local Git repository and connected it to GitHub.

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

# Step 3: Configure AWS CLI Environment Variables

Configure your AWS credentials

### Commands

## Configure AWS CLI

Configure the AWS CLI by running:

```bash
aws configure
```

Enter the following information when prompted:

```text
AWS Access Key ID [None]: AKIA****************
AWS Secret Access Key [None]: ****************************************
Default region name [None]: us-east-1
Default output format [None]: json
```

This configuration allows the AWS CLI to authenticate and interact with AWS services.

# Step 4: Create S3 Bucket

Create an S3 bucket to host the portfolio website.

### Command

```bash
aws s3 mb s3://<bucket-name>
```
This command creates a new S3 bucket that will be used to store the static website files.
