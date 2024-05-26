import MainPage from "../components/pages/MainPage/MainPage";
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import Form from "../components/pages/Form/Form";
import DarkSoulsPage from "../components/pages/DarkSoulsPage/DarkSoulsPage";
import EldenRingPage from "../components/pages/EldenRingPage/EldenRingPage";
import BloodBornePage from "../components/pages/BloodBornPage/BloodBornePage";
import SekiroPage from "../components/pages/SekiroPage/SekiroPage";


export const publicRoutes = [
    {path: '/', element: <MainPage />, exact: true},
    {path: '/form', element: <Form />, exact: true},
    {path: '/darksouls', element: <DarkSoulsPage />, exact: true},
    {path: '/eldenring', element: <EldenRingPage />, exact: true},
    {path: '/bloodborne', element: <BloodBornePage />, exact: true},
    {path: '/sekiro', element: <SekiroPage />, exact: true},
    {path: '*', element: <NotFoundPage />}
]

export const privateRoutes = [
    ...publicRoutes
]
