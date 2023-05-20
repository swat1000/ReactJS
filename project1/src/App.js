import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="navbar">
        <img src="linked-logo.png" alt="LinkedIn Logo"></img>
    </div>
    
    <div className="container">
        <h1>Sign In</h1>
        <p>Stay Updated in your professional world</p>
        <form>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <div className="form-group">
                <input type="submit" value="Sign In"></input>
            </div>
        </form>
    </div>
    <div class="footer">
    <a href="#"><img src="linked-logo.png" alt="LinkedIn Logo"></img></a>
    &copy; 2023 . All rights reserved.
    
    <a href="#">Copyright</a>
    <a href="#">User Agreement</a>
    <a href="#">Privacy Policy</a>
  </div>
    </>
  );
}

export default App;
