import pageLoad from "./Pages/PageLoad";
import homeLoad from "./Pages/Home";

app.use(express.static("dist"))


pageLoad();
homeLoad();