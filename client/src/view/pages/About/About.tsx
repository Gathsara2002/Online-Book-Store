import aboutImg from '../../../assests/images/about.jpg';
export const About = () => {
    return (
        <section className={"container mt-20"}>
            <div className={"w-1/2 h-auto border border-black flex justify-center"}>
                <img src={aboutImg} alt="aboutImage" className={"w-2/3 mt-20"}/>
            </div>
        </section>
    );
};