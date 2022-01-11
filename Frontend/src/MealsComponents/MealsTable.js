
import Table from 'react-bootstrap/Table'
function MealsTable({ meals }) {
    console.log(`MEALS ${meals}`)
    return (
        <div className="contanier">
            <Table striped bordered hover variant='dark' responsive="md" className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Meals</th>
                        <th>Calories</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                {meals.map((m) => <tbody>
                    <tr>
                        <td>{m.id}</td>
                        <td>{m.meal_name}</td>
                        <td>{m.calories}</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
                )}
            </Table>
        </div>
    )
}



export default MealsTable;