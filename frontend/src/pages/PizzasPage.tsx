import { Pizzas } from "../components/Pizzas";
import { PizzaCreate } from "../components/PizzaCreate";

const PizzasPage = () => {
    return (
        <div>
            <PizzaCreate/>
            <hr/>
            <Pizzas/>
        </div>
    );
};

export {PizzasPage};