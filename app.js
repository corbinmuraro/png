import React from "react";
const fetch = require("node-fetch");
const Dropbox = require("dropbox").Dropbox;
const path = require("path");

function App() {
  // let dbx = new Dropbox({
  //   accessToken:
  //     "sl.Aj4zG_xkxxApzheUhK3-tqGkyBD33JRMi0mCemDzqRB_9xb4ewuP-uMV7mCz86pdSxMjnPEUcIWnEmHaGA2N8qOw_mtS0GJi_pe-10KNH-380NmAM-B7yv9AqmNS2rIb8semBXfO",
  //   fetch: fetch,
  // });

  // dbx.filesListFolder({ path: "" }).then((response) => {
  //   const images = response.result.entries;

  //   images.forEach((image) => {
  //     dbx
  //       .filesDownload({ path: image.path_lower })
  //       .then(function (response) {
  //         const result = response.result;
  //         if (result.fileBinary !== undefined) {
  //           var filepath = path.join(__dirname, "images", result.name);
  //           console.log(filepath);
  //           // fs.writeFile(filepath, result.fileBinary, "binary", function (err) {
  //           //   if (err) {
  //           //     throw err;
  //           //   }
  //           //   console.log("Dropbox File '" + result.name + "' saved");
  //           // });
  //         }
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   });
  // });

  return <div>hello wrold</div>;
}
export default App;
