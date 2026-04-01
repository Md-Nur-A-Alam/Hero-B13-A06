import { CiPlay1 } from 'react-icons/ci';
import heroIMG from '../../assets/banner.png';
import liveIMG from '../../assets/live.png';

const HeroSection = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-20">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img
                        src={heroIMG}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <p className='bg-[#E1E7FF] p-1  rounded-full flex gap-1 items-center w-fit'><div><img src={liveIMG} alt="" /></div> New: AI-Powered Tools Available</p>
                        <h1 className="text-5xl font-bold">Supercharge Your<br></br>Digital Workflow</h1>
                        <p className="py-6 text-neutral/50">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today. Explore Products.
                        </p>
                        <div className="flex gap-3">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                            <button className="btn btn-primary btn-outline hover:bg-linear-to-r hover:from-[#4F39F6] to-[#9514FA] rounded-full "><CiPlay1></CiPlay1> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;