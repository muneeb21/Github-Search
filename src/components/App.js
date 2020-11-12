
// import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import GithubCard from './GithubCard';
import RepoList from './RepoList';
function App() {
  return (
    <div className="App">
       <div>
       <Navbar/>
       </div>
       <div>
       <Search/>
       </div>
       <div>
       <GithubCard/>
       </div>
       <div>
       <RepoList/>
       </div>
    </div>
  );
}

export default App;
