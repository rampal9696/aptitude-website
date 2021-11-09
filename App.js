import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArithmeticAptitude from './pages/ArithmeticAptitude';
import Contest from './pages/Contest';
import Home from './pages/Home';

 
import NavCard from './Component/Navbar/NavCard';
import  Company_test from './pages/Company_test';
import  LanguageTest from './pages/LanguageTest';

import LogicalReasoning from './pages/LogicalReasoning';
import Puzzles from './pages/Puzzles';
import VerbalAbility from './pages/VerbalAbility';
import CurrentAffairsGK from './pages/CurrentAffairsGK';
import TrainProblem from './Arithmetic/TrainProblems';

 

  
function App() { 
  return (
    <Router>
      <NavCard />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/company-test' component={Company_test} />
        <Route path='/arithmetic-aptitude' component={ArithmeticAptitude} />
        <Route path='/trains-problems' component={TrainProblem} />
        <Route path='/logical-reasoning' component={LogicalReasoning} />
        <Route path='/puzzles' component={Puzzles} />
        <Route path='/verbal-ability' component={VerbalAbility} />
        <Route path='/general-knowledge' component={CurrentAffairsGK} />
        <Route path='/contest' component={Contest} />
        <Route path='/programming-language' component={LanguageTest} />
         
        
      </Switch>
    </Router>
  );
}
  
export default App;



