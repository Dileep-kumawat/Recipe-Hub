import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import Story from '../Pages/Story'
import Favourites from '../Pages/Favourites'
import SingleRecipe from '../Pages/SingleRecipe'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/about' element={<About />} />
            <Route path='/story' element={<Story />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/recipe/:id' element={<SingleRecipe />} />
        </Routes>
    )
}

export default AppRouter
