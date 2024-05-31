import Beam from "../assets/beam.png";
import Installation from "../assets/installation.png";
import Aluminum from "../assets/metal.png";
import aluminumWorks from "../assets/metalworking.png";
import Roof from "../assets/roof.png";
import Rails from "../assets/footsteps.png";

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-amber-200 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Aluminum} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
              Aluminum Solutions
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              we offer a wide array of aluminum services designed to meet the
              needs of various industries.
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Beam} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
              Aluminum Accessories
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              We provide a variety of aluminum accessories such as fittings,
              brackets, fasteners, and other components.
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Rails} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">Hand Rails</h6>
            <p className="mb-3 text-sm text-gray-900">
              Our aluminum hand rails are perfect for both residential and
              commercial properties. They combine strength and style, providing
              safety and support without compromising on aesthetics.
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Roof} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
              Composite and Panel Solutions
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              We offer innovative composite and panel solutions, including
              aluminum composite panels. These panels are ideal for building
              facades, interior cladding, and more.
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Installation} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
              Supply and Installation
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Our comprehensive supply and installation services ensure that
              your aluminum products are delivered and installed with precision
              and care.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={aluminumWorks} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
              Aluminum Works
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Our state-of-the-art facilities and skilled technicians can create
              bespoke aluminum solutions that match your specifications
              perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
