import Sock from "./Sock";
import ProductFeatures from "./ProductFeatures";
import features from "../assets/promo.json"

const Home = (props) => {
    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <ProductFeatures features={features} />
            {
                props.data.map((sock) => (
                    <Sock key={sock._id} data={sock} handleDelete={props.handleDelete} />
                ))
            }
        </div>
    );
};

export default Home;