pipeline {
    agent any

    stages {
        stage('Update') {
            steps {
		sh 'npm i'
            }
        }
        stage('Build') {
            steps {
		sh 'npm run deploy'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
