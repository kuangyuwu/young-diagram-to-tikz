export default function Preview({ tikzCode }: { tikzCode: string }) {
  const srcDoc = getSrcDoc(tikzCode);
  return (
    <div className="w-full p-1.5 md:w-1/2">    
      <div className="bg-white w-auto h-96 flex justify-center items-center p-3 rounded-3xl">
        <div className="w-5/6 h-5/6">
          <iframe className="bg-white w-full h-full" sandbox="allow-same-origin allow-scripts" srcDoc={srcDoc}></iframe>
        </div>
      </div>
    </div>
  );
}

function getSrcDoc(tikzCode: string) : string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://tikzjax.com/v1/tikzjax.js"></script>
    <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
  </head>
  <body>
    <script type="text/tikz">${tikzCode}</script>
  </body>
</html>`;
}