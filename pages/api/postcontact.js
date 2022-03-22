import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    //Process a POST request here
    // console.log(req.body);
    let data = await fs.promises.readdir("contactdata"); //reads the data from directory
    // console.log(data);
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(req);
  } else {
    // Handle any other HTTP method
    res.status(200).json(["Alishetty"]);
  }
}
