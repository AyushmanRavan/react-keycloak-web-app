import { useLocation, useNavigate, useParams } from 'react-router-dom';

function WithRouter(Component) {
  
    function HOC(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
  }

  return HOC;
}

export default WithRouter