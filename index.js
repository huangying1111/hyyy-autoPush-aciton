const { getInput } = require('@actions/core')
const { Octokit } = require('@octokit/core')
const { exec } = require('child_process')
const path = require('path')

// class App {
//   _github

//   _token
//   _commitMessage
//   _branch = 'master'
//   _tree

//   _headers = {
//     'X-GitHub-Api-Version': '2022-11-28',
//   }
//   constructor() {
//     // 在 GitHub Actions 工作流程中使用
//     this._token = getInput('token')
//     this._commitMessage = getInput('commitMessage')

//     this._github = new Octokit({
//       auth: this._token,
//     })
//     this.init()
//   }
//   async init() {
//     const data = await this._github.request(
//       'GET /repos/{owner}/{repo}/commits',
//       {
//         owner: this._owner,
//         repo: this._repo,
//         headers: this._headers,
//       }
//     )
//     const currentContent = data.data[0]
//     // console.log(currentContent)
//     try {
//       this.execFn('git diff --stat')
//         .then((res) => {
//           console.log(res)
//           if (!!res) return this.execFn('git pull origin master')
//         })
//         .then((res) => {
//           console.log(res)
//           if (res == '已经是最新的。') return this.execFn('git add .')
//         })
//         .then((res) => {
//           console.log(res)
//           return this.execFn(`git commit -m ${this._commitMessage}`)
//         })
//         .then((res) => {
//           console.log(res)
//           return this.execFn(`git push -u origin master`)
//         })
//         .catch((error) => {
//           console.log('error', error)
//         })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   execFn(text) {
//     return new Promise((resolve, reject) => {
//       exec(text, async (err, stdout, stderr) => {
//         if (!!err) return reject(err)
//         return resolve(stdout, stderr)
//       })
//     })
//   }
// }

// new App()

const main = async () => {
  await exec('bash', [path.join(__dirname, './entrypoint.sh')])
}
main()
