import React,{useState,Fragment,useEffect} from 'react'
import FoodList from '../components/foods/FoodList'
import styles from './AllFoods.module.css';
import axios from 'axios';

const AllFoods = () => {

    const [foods,setFoods]=useState([]);
    
    useEffect(()=>
    {
        async function getFoods()
        {
            try{
                  const res= await axios.get('https://myfood-app-server.herokuapp.com/allfoods');
                //   console.log(res);
                  setFoods(res.data);
            } 
            catch(e)
            {
                    console.log(e.message);
            }
        }
        getFoods();
    },[])

    return (
        <Fragment>
             <section className={styles.poster}>
                <img src={"https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8NDQ2NjQwNnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"} alt="table full of meals"/>
            </section>
            <FoodList foods={foods} />
        </Fragment>
    )
}

export default AllFoods
