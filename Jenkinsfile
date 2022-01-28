pipeline{
        agent any
        stages{
            stage('Build'){
                steps{
                    dir('~/.jenkins/workspace/TestPipeline') {
                        sh "npm install"
                        sh "npm run start"
                    }
                }
            }
            stage('Completion') {
                steps {
                    echo "Completed build"
                }
            }
        }
}