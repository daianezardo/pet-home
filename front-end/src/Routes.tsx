import { Route, Routes as RDRoutes } from "react-router-dom";
import { PublicOnlyRoute } from "./components/PublicOnlyRoute";
import { HomeView } from "./Views/Home";
import { LoginView } from "./Views/Home/Login";
import { NewOrderView } from "./Views/NewOrder";
import { NotFoundView } from "./Views/NotFoundView";
import { RegisterView } from "./Views/Register";

export function Routes () {
    return (
        <RDRoutes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cadastro" element={
            <PublicOnlyRoute>
            <RegisterView />
            </PublicOnlyRoute> }
            />
            <Route path="/login" element={
            <PublicOnlyRoute>
            <LoginView />
            </PublicOnlyRoute> }
            />
            <Route path="/novo-pedido" element={<NewOrderView />} />
            <Route path="*" element={<NotFoundView />} />
        </RDRoutes>
    )
}