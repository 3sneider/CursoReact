import React from "react";
import { Switch, Routes, Route} from 'react-router-dom'
import Series from "../../containers/series";

const Main = props => {
    <Routes>        
        <Route path='/' element={<Series/>} />
    </Routes>
}

export default Main;