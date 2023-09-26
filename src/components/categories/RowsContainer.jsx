import TableRow from "./TableRow"

const RowsContainer = ({restaurants}) => {
    return (
        <div className="w-full py-4">
            {
                restaurants.map((restaurant, index) =>(
                    <TableRow key={index} restaurantInfo={restaurant} />
                ))
            }
        </div>
    );
}

export default RowsContainer