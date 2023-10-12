# AWS Serverless Photo Album

A cloud-based photo album built using Amazon Web Services (AWS). The project demonstrates the utilization of various AWS services such as S3, Lambda, and API Gateway to architect a serverless solution. The photo album allows users to view a collection of photos stored in an S3 bucket.

## Features

- **Serverless Architecture**: The application relies on AWS Lambda for its backend processing, making the infrastructure scalable and cost-effective.
  
- **AWS Integration**: Uses S3 for static web hosting and storing images, and API Gateway to expose the Lambda functions as HTTP endpoints.

- **Static Web Hosting**: The frontend is hosted as a static website on AWS S3, ensuring high availability and resilience.

## Technical Overview

1. **AWS S3**: Used for two primary purposes:
    - Hosting the static HTML, CSS, and JavaScript files.
    - Storing the photos that are displayed in the album.
    
2. **AWS Lambda**: A serverless function is triggered via the API Gateway to fetch the list of photos from the S3 bucket.

3. **AWS API Gateway**: Exposes the Lambda function as an HTTP endpoint, enabling the frontend to fetch the list of photos.

4. **Bootstrap**: For styling the frontend, making it responsive and user-friendly.

## Known Issues

**CORS Conundrum:** I've encountered a hurdle with Cross-Origin Resource Sharing (CORS) when trying to fetch the images. Despite my rigorous efforts, this remains a challenge. However, I am committed to addressing this in future updates.

## Live Demo

Experience the application in action: [Live Demo](http://clyde-serverless-photo-album-2023.s3-website-us-east-1.amazonaws.com/)

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](http://clyde-serverless-photo-album-2023.s3-website-us-east-1.amazonaws.com/)

## Future Improvements

- **Enhanced User Interface**: Integrate a gallery view for showcasing the photos.
  
- **Upload Feature**: Allow users to upload their photos to the album.

- **Authentication and Authorization**: Implement user login to make the album private.

## Conclusion

This project serves as a testament to the power and scalability of AWS and serverless architectures. It showcases the ability to seamlessly integrate various AWS services to build a robust and scalable application.
