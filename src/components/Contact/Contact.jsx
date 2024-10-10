import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const handelReload=(e)=>{
     
    }
  return (
   <div>
    <h2 id='contact' className="relative text-center text-3xl py-2 font-semibold">
  Contact <span className="text-green-500">Us</span>
  <span className="block w-10 h-1 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
</h2>
     <div className="flex flex-col lg:flex-row items-center justify-center p-6 bg-white rounded-lg shadow-md space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Side */}
      <div className="flex items-center flex-col text-center text-gray-700 space-y-2 lg:space-y-0 lg:space-x-2">
        <FaEnvelope className="h-6 w-[100px] text-green-500" />
        <div>
          <p className="text-lg">Name: Habiba Jannat Ritu</p>
          <p className="text-xl font-semibold">jritu5820@gmail.com</p>
         
        </div>
      </div>
      
      {/* Right Side */}
      <form action="https://formsubmit.co/jritu5820@gmail.com" onSubmit={handelReload} method="POST" className="flex flex-col w-full lg:w-2/3 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered p-3 rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered p-3 rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered h-24 p-3 rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary flex items-center justify-center p-3 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-200"
        >
          <FaPaperPlane className="h-5 w-5 mr-2" />
          Send Message
        </button>
      </form>
    </div>
   </div>
  );
};

export default Contact;


