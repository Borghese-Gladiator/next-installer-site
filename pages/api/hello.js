// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function blah(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
export default function downloadFile(req, res) {
  const { readFileSync } = require('fs')
  const { join } = require('path')
  // const fileAttemptOne = readFileSync(join(__dirname, '_files', 'ci.yml'), 'utf8')
  // console.log(fileAttemptOne)
  
  // const fileAttemptTwo = readFileSync(join(__dirname, '..', '..', '_files', 'blah.txt'), 'utf8')
  // console.log(fileAttemptTwo)
  const fileAttemptThree = readFileSync(join('_files', 'blah.txt'), 'utf8')
  console.log(fileAttemptThree)
  console.log("END");
  res.status(200).json({
    message: "END",
    fileAttemptThree: fileAttemptThree
  })
}