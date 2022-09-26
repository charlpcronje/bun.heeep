async function writeHttpResponse(url:string,filePath:string):string {
    await Bun.write("index.html", await fetch("https://example.com"));
}
