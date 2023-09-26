import RowsContainer from "../components/categories/RowsContainer"
import { restaurants } from "./restaurants.json"
export const routes=[
    {
        component: RowsContainer,
        path:"/HamburgerCategory",
        data: restaurants
    },
    {
        component: RowsContainer,
        path:"/PizzaCategory",
        data: restaurants
    },
    {
        component: RowsContainer,
        path:"/BarsCategory",
        data: restaurants
    },
    {
        component: RowsContainer,
        path:"/VegetarianCategory",
        data: restaurants
    },
    {
        component: RowsContainer,
        path:"/ColombianCategory",
        data: restaurants
    }  
]