function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center font-inter px-4 ">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-10 text-center max-w-4xl w-full shadow-lg ">
        <h1 className="text-4xl font-bold mb-6 text-[#1e1e1e] font-satoshi text-xl">
          Want to bring your imagination to life? Let's create something together!
        </h1>
        <p className="mb-10 text-xl text-[#1e1e1e] font-satoshi">
          Use my contact details for more information.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <img src="/phone.png" alt="Phone" className="w-10 h-10 mb-2" />
            <h1 className="text-lg font-semibold font-satoshi text-[#1e1e1e]">Mobile</h1>
            <p className="text-[#1e1e1e]">+33 7 49 29 66 53</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <img src="/email.png" alt="Email" className="w-10 h-10 mb-2" />
            <h1 className="text-lg font-semibold font-satoshi text-[#1e1e1e]">Email</h1>
            <p className="text-[#1e1e1e]">bricebouaregis@gmail.com</p>
          </div>

          {/* Postal Address */}
          <div className="flex flex-col items-center">
            <img src="/address.png" alt="Address" className="w-10 h-10 mb-2" />
            <h1 className="text-lg font-semibold font-satoshi text-[#1e1e1e]">Address</h1>
            <p className="text-[#1e1e1e] text-center">
              123 Creative Street <br />
              69003 Lyon, France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

