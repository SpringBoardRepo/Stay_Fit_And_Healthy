import { useContext, useEffect, useState } from 'react';

import UserContext from '../UserContext';
import MealsTable from './MealsTable';

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
                    : "Nothing is Added"
                : null}
        </>
    )

}

export default FoodJournal;