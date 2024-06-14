import { makeInstaller } from "@dui/utils";
import components from "./components";
import "@dui/theme/index.css";

const installer = makeInstaller(components);
export * from "@dui/components";
export default installer;
