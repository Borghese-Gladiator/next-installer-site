import Head from 'next/head'
import styles from '../styles/Download.module.css'

export default function Download() {
  const downloadList = [
    { filename: 'big_brain.png', text: 'Notepad++ 7.9.5 Release' },
    { filename: 'big_brain.png', text: 'Notepad++ 7.9.5 Release' },
    { filename: 'big_brain.png', text: 'Notepad++ 7.9.5 Release' },
    { filename: 'big_brain.png', text: 'Notepad++ 7.9.5 Release' },
    { filename: 'big_brain.png', text: 'Notepad++ 7.9.5 Release' },
  ]
  return (
    <div>
      <Head>
        <title>Download | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Downloads
        </h1>
        
        <div className={styles.downloadList}>
          {downloadList.map((val, idx) => {
            // idx at 0 === falsy, so every element afterwards gets a <hr> element - https://stackoverflow.com/questions/47881767/how-to-add-a-comma-in-array-map-after-every-element-except-last-element-in-react
            const { text, filename } = val;
            return (
              <div>
                {idx ? <hr /> : '' }
                <a href={`/${filename}`}><h3>{text}</h3></a>
              </div>
            )
          })}
        </div>
      </main>

    </div>
  )
}
