import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Views/Home";
import { NewOrderView } from "./Views/NewOrder";
import { NotFoundView } from "./Views/NotFoundView";
import { RegisterView } from "./Views/Register";

export function Routes () {
    return (
        <RDRoutes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cadastro" element={<RegisterView />} />
            <Route path="/novo-pedido" element={<NewOrderView />} />
            <Route path="*" element={<NotFoundView />} />
        </RDRoutes>
    )
}