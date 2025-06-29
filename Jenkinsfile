pipeline {
    agent {
        docker {
            image 'node:18-slim'
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket for Docker commands
        }
    }

    tools {
        nodejs "node18"
    }

    environment {
        DOCKER_COMPOSE_VERSION = '2.29.2' // Specify a compatible Docker Compose version
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs() // Clean workspace to avoid stale files
                git url: 'https://github.com/aasthakanaujia06/fleetsync.git', credentialsId: 'github-credentials-id'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --prefix backend'
                sh 'npm install --prefix frontend'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test --prefix backend'
            }
        }

        stage('Docker Build') {
            steps {
                // Install Docker Compose if not already present
                sh '''
                    if ! command -v docker-compose &> /dev/null; then
                        curl -L "https://github.com/docker/compose/releases/download/v${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                        chmod +x /usr/local/bin/docker-compose
                    fi
                    docker-compose --version
                '''
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            sh 'docker-compose down || true' // Clean up containers after build
        }
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed. Check logs for details.'
        }
    }
}
