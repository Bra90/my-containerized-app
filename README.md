# my-containerized-app
The goal of this exercise is to automate the deployment process of a containerized application. Every push to the repository triggers a GitHub Actions workflow that builds the Docker image and deploys the updated application to the configured cloud service.


# DevOps with Docker Exercise 3.2

Repository for Exercise 3.2: Deployment pipeline to a cloud service  
**University of Helsinki MOOC 2025**

## Live Application
http://YOUR_SERVER_IP:3000

![image](https://github.com/user-attachments/assets/dcf9d705-7ea3-451f-ad51-c5d393842721)


## Features
- Automatic deployment on Git push
- Uses public Docker image [brando90/express-demo](https://hub.docker.com/r/brando90/express-demo)
- Minimal Express.js server
- Zero-downtime deployments

## How It Works
1. Push to GitHub ➔ 
2. GitHub Actions connects to server via SSH ➔ 
3. Docker pulls latest image ➔ 
4. New container starts automatically
