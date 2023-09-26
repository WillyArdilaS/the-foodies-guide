import RowsContainer from "../components/categories/RowsContainer"
import { restaurants } from "./restaurants.json"
export const routes=[
    {
        component: RowsContainer,
        path:"/HamburgerCategory",
        data: restaurants,
        name: "HAMBURGUESAS"
    },
    {
        component: RowsContainer,
        path:"/PizzaCategory",
        data: restaurants,
        name: "PIZZAS"
    },
    {
        component: RowsContainer,
        path:"/BarsCategory",
        data: restaurants,
        name: "BARES"
    },
    {
        component: RowsContainer,
        path:"/VegetarianCategory",
        data: restaurants,
        name: "RESTAURANTES VEGETARIANOS"
    },
    {
        component: RowsContainer,
        path:"/ColombianCategory",
        data: restaurants,
        name: "RESTAURANTES COLOMBIANOS"
    }  
]