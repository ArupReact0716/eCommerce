import { useRoutes } from "react-router-dom"
import RouterConfig from "./RouterConfig"
// create route using useRoutes hook
const Router = () => {
    const routes = useRoutes([
        ...RouterConfig
    ])
    return routes
}
export default Router