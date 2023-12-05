import app from "./main";

import { PORT } from "./config/config";

app
  .listen(PORT, () => {
    console.log(`Server listening at the port http://127.0.0.1:${PORT}`);
  })
  .on("error", (e: any) => console.log(e));
