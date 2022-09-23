import fs, { write } from "fs"

fs.readFile('./blog1.txt', (err, data) => {
    if (err) return console.log(err);
    console.log(data.toString())
})

// Ändere den Inhalt (Text) in der Datei blog1.txt

fs.writeFile('./blog1.txt', 'lets go World', (err) => {
    if (err) console.log(err)
})


// Erstelle eine neue Datei „blog2.txt“ und schreibe etwas in sie hinein    
fs.writeFile('./blog2.txt', 'Perfektionisten', (err) => {
    if (err) console.log(err)
})

// Erstelle einen neuen Ordner „assets“
fs.mkdir('./assets', (err) => {
    if (err) console.log(err);
})

// Existiert der Ordner „assets“ bereits? Dann lasse ihn wieder löschen. 
fs.rmdir('./assets', (err) => {
    if (err) console.log(err);
})

// Erstelle eine Datei namens „delete.txt“.
fs.writeFile('./delete.txt', 'hallo',(err) => {
    if(err) console.log(err)
})

// Lösche die Datei „delete.txt“, wenn sie bereits existiert. 
fs.unlink('./delete.txt', (err) => {
    if (err) console.log(err);
})

// Erstelle eine Datei namens „Hello.txt“ und füge ihr Text hinzu. Benenne sie dann in „HelloWorld.txt“ um.

fs.writeFile('./Hello.txt', 'lorem Ipsum',(err) =>{
    if(err) console.log(err)
})

fs.rename('./Hello.txt','./HelloWorld.txt',(err) => {
    if (err) console.log(err)
})