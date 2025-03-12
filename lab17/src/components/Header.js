
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';

const Header = props =>{
    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
            {props.mybrand}
        </a>
    <div className='collapse navbar-collapse' id='nabbarNav'>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Leads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Courses</a>
        </li>
      </ul>
      </div>
</nav>
    )
};

Header.defaultProps = {
    mybrand: 'My App'
};

Header.prototype = {
    mybrand: PropTypes.string.isRequired
};

export default Header;