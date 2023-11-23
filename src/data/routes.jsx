import RowsContainer from "../components/categories/RowsContainer"

export const routes=[
    {
        component: RowsContainer,
        path:"/HamburgerCategory",
        name: "HAMBURGUESAS",
        bdurl: "hamburguesa"
    },
    {
        component: RowsContainer,
        path:"/PizzaCategory",
        name: "PIZZAS",
        bdurl: "pizza"
    },
    {
        component: RowsContainer,
        path:"/BarsCategory",
        name: "BARES",
        bdurl: "cerveza"
    },
    {
        component: RowsContainer,
        path:"/VegetarianCategory",
        name: "RESTAURANTES VEGETARIANOS",
        bdurl: "vegetariana"
    },
    {
        component: RowsContainer,
        path:"/ColombianCategory",
        name: "RESTAURANTES COLOMBIANOS",
        bdurl: "colombiana"
    }  
]