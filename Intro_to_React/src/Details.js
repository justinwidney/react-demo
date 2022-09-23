import { useParams } from "react-router-dom";
import { Component, useContext } from "react";
import Carousel from "./Carousel";
import ErrorBoudnary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();
    //this.setState(Object.assign({ loading: false }, json.pets[0]));
    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    console.log(this.context);
    let [theme] = this.context;

    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }
    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1> {name} </h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button style={{ backgroundColor: theme }}>Adopt {name}</button>;
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);
  Details.contextType = ThemeContext;

  return (
    <ErrorBoudnary>
      <Details theme={theme} params={params} />;
    </ErrorBoudnary>
  );
};

export default WrappedDetails;
