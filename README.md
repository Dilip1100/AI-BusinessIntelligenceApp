# Enterprise AI BI Website

Production-ready static website for the AI Business Intelligence consulting/demo portfolio.

## New in this version

- “Why choose this AI BI framework” section
- Visual SVG illustration for every positioning point
- Business / Steel Intelligence demo
- Real Estate Revenue Intelligence demo
- Medical Analytics demo
- Automotive Retail Analytics demo
- AI Copilot and Forecasting showcase
- GPT-6 Luna AI business adviser and Amazon S3 data storage
- Client-to-client and industry-to-industry customisation messaging

## Required Files

Upload these files to the repository root:

```text
index.html
styles.css
script.js
README.md
assets/
```

## Required Assets

Business screenshots:

```text
Financial-Analysis-Feature.jpg
Cash-Flow_Analysis-Feature.jpg
GST-Feature.jpg
GST-B-Feature.jpg
AI-Summary & Copilot - Feature.jpg
AI-Conversational-Analytics-Feature.jpg
AI-Forecasting-Feature.jpg
```

Demo screenshots:

```text
medical-demo-screenshot.png
automotive-retail-demo-screenshot.png
```

Branding:

The website displays the official Powered by AWS logo from https://d0.awsstatic.com/logos/powered-by-aws.png and links to AWS. AI and data integration cards describe GPT-6 Luna and Amazon S3.

Framework illustrations:

```text
framework-operating-system.svg
framework-tailored-solution.svg
framework-platform.svg
framework-erp-layer.svg
framework-ownership.svg
framework-custom.svg
framework-meaning.svg
framework-intelligent-erp.svg
framework-plain-english.svg
framework-management.svg
```

## Live Demo Links

- Business / Steel Demo: https://d2ms0uuvtltgjl.cloudfront.net/
- Real Estate Demo: https://d2isowwetwjwte.cloudfront.net/
- Medical Demo: https://d1phv88yjex4ar.cloudfront.net/
- Automotive Retail Demo: https://d373yfw2mwiyge.cloudfront.net/

## AWS Demo Hosting

The four demo applications run on Amazon EC2 behind Amazon CloudFront. The links above are the enabled CloudFront distributions verified in the AWS console. The portfolio website is maintained separately in this repository.

## Portfolio Website Deployment (GitHub Pages)

1. Upload all files to the `website` branch.
2. Go to GitHub repository settings.
3. Open Pages.
4. Select:
   - Source: Deploy from a branch
   - Branch: website
   - Folder: /root
5. Save.

## Enquiry Form

The form uses a mailto fallback to:

```text
dilip1100@gmail.com
```

To use Formspree, open `script.js` and set:

```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourFormId";
```


## Real Estate Demo Assets

```text
real-estate-dashboard-overview.jpg
real-estate-dashboard-forecast.jpg
real-estate-dashboard-ai-analyst.jpg
```

## Real Estate Demo Summary

Adds an AWS-hosted Real Estate Revenue Intelligence demo covering project inventory, buyer leads, payment plans, sales funnel, collections, overdue risk, handover readiness, six-month forecast planning and GPT-6 Luna-powered aggregate AI analysis.


## Current AI and Data Stack

- AI adviser: GPT-6 Luna
- Source data storage: Amazon S3
- Demo delivery: Amazon CloudFront and Amazon EC2
- Sign-in: Amazon Cognito
- Website branding: Powered by AWS with the official AWS logo

