import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import MealsTable from './MealsTable';
import { Button } from 'reactstrap';
import "./FoodJournal.css";
import image from "../Image/empty-cart (2).png";

function FoodJournal() {

    const { getMeals } = useContext(UserContext);
    const [userMeals, setUsersMeals] = useState('');

    useEffect(() => {
        async function getUserMeals() {
            let m = await getMeals();
            setUsersMeals(m);
        }
        getUserMeals();
    }, [getMeals])

    return (
        <>
            {userMeals ?
                userMeals.meals.length
                    ? <MealsTable meals={userMeals.meals} />
                    : <div className='conatainer FoodJournalTitle'>
                        <img src={image} className='image' />
                        <h6>Looks like you haven't added anything to your Food Journal yet.  </h6>
                        <div>
                            <Link to='/meals'>
                                <Button size="md"
                                    color="success">
                                    Click here to add
                                </Button>
                            </Link>
                        </div>

                    </div>
                : null}
        </>
    )

}

export default FoodJournal;