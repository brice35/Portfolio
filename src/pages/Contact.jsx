function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center font-inter px-4">
      {/* Fond translucide + flou */}
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-10 text-center max-w-4xl w-full shadow-lg">
        <p className="mb-10 text-xl text-black">
          Get in touch for collaborations, inquiries, and more!
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Téléphone */}
          <div className="flex flex-col items-center">
            <img src="/phone.png" alt="Phone" className="w-10 h-10 mb-2" />
            <h1>Mobile</h1>
            <p className="text-black">+33 7 49 29 66 53</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <img src="/email.png" alt="Email" className="w-10 h-10 mb-2" />
            <h1>Email</h1>
            <p className="text-black">bricebouaregis@gmail.com</p>
          </div>

          {/* Adresse postale */}
          <div className="flex flex-col items-center">
            <img src="/address.png" alt="Address" className="w-10 h-10 mb-2" />
            <h1>Address</h1>
            <p className="text-black text-center">...<br />69003 Lyon, France</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
