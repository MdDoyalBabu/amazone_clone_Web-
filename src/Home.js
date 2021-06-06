import React from 'react'
import './style/Home.css'
import imageHome from './Images/homeBackImage.jpg'
import imageCard from './Products/image2.jpg'
import Product from './Product'



function Home() {
    return (
        <div className="home">
            
            <div className="home_contianer">
                <img className="home_img" src={imageHome} />

                <div className="home__row">
                    <Product
                                                
                        id="902800"
                        title=' proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        price={30.20}
                        image={imageCard}
                        rating={6}
                    
                    />
                    <Product
                    
                                            
                        id="902801"
                        title='proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        price={30.20}
                        image={imageCard}
                        rating={1}
                    
                    />
                
                   
                </div>
                
                <div className="home__row">

                    <Product
                        id="902802"
                        title='The Learn StartUp'
                        price={30.20}
                        image={imageCard}
                        rating={3}

                    />
                    <Product
                        id="902803"
                        title='Dolor vero lorem est justo dolores at, et amet magna ut justo. Ut sea no lorem ut sanctus sit, diam.'
                        price={3023.20}
                        image={imageCard}
                        rating={4}

                    
                    
                    />
                    <Product
                    
                        id="902804"
                        title='cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
                        price={30.20}
                        image={imageCard}
                        rating={2}

                    
                    />
                  
                </div>
                <div className="home__row">
                    <Product
                        
                        id="902805"
                        title='    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        price={30.20}
                        image={imageCard}
                        rating={4}
                    
                    />
            
                </div>
                
                


            </div>


        </div>
    )
} 

export default Home;
