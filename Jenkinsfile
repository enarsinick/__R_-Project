pipeline{
        agent any
        stages{
            stage('Build'){
                steps{
                    sh "mkdir ~/jenkins-tutorial-test "
                }
            }
            stage('Make files') {
                steps {
                    sh "touch ~/jenkins-tutorial-test/file1.txt"
                }
            }
        }
}