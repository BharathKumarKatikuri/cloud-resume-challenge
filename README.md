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
aws s3 mb s3://my-1st-cloud-project
```
This command creates a new S3 bucket that will be used to store the static website files.

# Step 5: Upload Website Files to S3

Upload project files to the S3 bucket.

### Command

```bash
aws s3 sync . s3://my-1st-cloud-project
```

Verify uploaded files:

```bash
aws s3 ls s3://my-1st-cloud-project
```

---

# Step 6: Enable Static Website Hosting

Configured the S3 bucket to serve the website.

### Command

```bash
aws s3 website s3://my-1st-cloud-project --index-document index.html
```

Verify configuration:

```bash
aws s3api get-bucket-website --bucket my-1st-cloud-project
```
# Step 7: Make Website Public

Disabled Block Public Access and attached a bucket policy to allow public read access.

### Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-1st-cloud-project/*"
    }
  ]
}
```

---

# Step 7: Access Website

Website Endpoint:

```text
http://my-1st-cloud-project.s3-website.ap-south-1.amazonaws.com
```

Successfully hosted the portfolio website using Amazon S3.

## Website Preview

![Cloud Resume Homepage](screenshots/homepage.png)

---

# Step 8: Create a CloudFront Distribution

Create a CloudFront distribution to improve website performance and provide HTTPS support.

## Origin Domain

```
my-1st-cloud-project.s3-website.ap-south-1.amazonaws.com
```

## Origin Protocol Policy

```
HTTP Only
```

## Default Root Object

```
index.html
```

CloudFront caches content closer to users, reducing latency and improving website performance.

## CloudFront URL

```
https://d1pcge31tolz8s.cloudfront.net
```

The website is now served securely over HTTPS through Amazon CloudFront.

### Website Preview

![CloudFront Website](screenshots/cloudfront-homepage.png)
