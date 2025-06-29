pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/aasthakanaujia06/fleetsync.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install --prefix backend'
                sh 'npm install --prefix frontend'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test --prefix backend || true'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t fleetsync .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy logic goes here'
                // Can be docker run, ssh, or k8s deploy
            }
        }
    }
}
