pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'node-app:latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YOUR_USERNAME/node-ci-cd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm $DOCKER_IMAGE npm test'
            }
        }

        stage('Deploy Locally') {
            steps {
                sh """
                    docker stop node-app || true
                    docker rm node-app || true
                    docker run -d -p 3000:3000 --name node-app $DOCKER_IMAGE
                """
            }
        }
    }
}
