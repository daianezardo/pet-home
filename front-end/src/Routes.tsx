import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Views/Home";
import { NotFoundView } from "./Views/NotFoundView";
import { RegisterView } from "./Views/Register";

export function Routes () {
    return (
        <RDRoutes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cadastro" element={<RegisterView />} />
            <Route path="*" element={<NotFoundView />} />
        </RDRoutes>
    )
}