import React from 'react'
import Pizzas from '../components/Pizzas'
import pizzas from '../pizzasdata'
function HomeScreen() {
    return (
        <div>
            <div className='row'>
                {pizzas.map(pizza => {
                    return <div className='col-md-4'>
                        <div>
                            <Pizzas pizza={pizza} />
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}

export default HomeScreen
