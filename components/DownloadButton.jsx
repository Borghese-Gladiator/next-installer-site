
export default function DownloadButton({ apiRoute, filename }) {
  const fetchFiles = () => {
    return fetch(apiRoute, { 
      method: "POST",
      headers: { "Content-Type": "application/json", }
    })
  }

  const downloadTxtFile = () => {
    fetchFiles()
      .then(response => response.blob())
      .then(fileBlob => {
        // code for download
        const element = document.createElement("a");
        element.href = URL.createObjectURL(fileBlob);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
      })
    // EXAMPLE FILE BLOB
    // const file = new Blob([localStorage.getItem('listSongLists')], { type: 'text/plain;charset=utf-8' });
  }

  return (
    <button onClick={downloadTxtFile} className="import-button">Download</button>
  );
}