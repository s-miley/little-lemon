import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder=(id)=> {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "You're on your way to something delicious!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order is in progress!",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This week's specials!</h2>
                <button>Order Menu</button>
            </div>

            {/*menu cards*/}
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={()=>handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;