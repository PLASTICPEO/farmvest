import { Link } from "react-router-dom";
import CustomButton from "../../components/button";
import me from "../../assets/photos/aboutme.jpeg";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex">
            <div>
              <img src={me} alt="me" className="rounded-full h-40 w-40" />
            </div>

            <div className="m-4">
              <p>What I used in the project</p>
              <div>
                <div className="flex space-x-4">
                  <p>React.</p>
                  <p>TypeScript.</p>
                  <p>Tailwind.</p>
                  <p>antd.</p>
                  <p>zod.</p>
                  <p>Frame motion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="flex items-center justify-center">
          <CustomButton title="Back to home" border />
        </Link>
      </div>
    </div>
  );
};
export default About;
