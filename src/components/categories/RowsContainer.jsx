
import TableRow from "./TableRow"

const RowsContainer = ({restaurants}) => {
    
    return (
        <div className="flex flex-col items-center content-center h-screen w-full overflow-y-auto border-x-2 border-red-600">
            {
                restaurants.map((restaurant,index) =>(
                    <TableRow key={index} restaurantInfo={restaurant} />
                ))
            }
            
        </div>
    );
}

export default RowsContainer