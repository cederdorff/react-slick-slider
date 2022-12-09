import SimpleSlider from "./components/SimpleSlider";

function App() {
    return (
        <div className="App">
            <SimpleSlider
                options={{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                }}
            />
        </div>
    );
}

export default App;
