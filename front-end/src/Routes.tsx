import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Views/Home";
import { NotFoundView } from "./Views/NotFoundView";

export function Routes () {
    return (
        <RDRoutes>
            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<NotFoundView />} />
        </RDRoutes>
    )
}