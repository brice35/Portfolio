import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import addressIcon from "../assets/address.png";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center font-inter px-4">
      <div className="bg-white/40 backdrop-blur-md rounded-2xl p-10 text-center max-w-4xl w-full shadow-lg">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1e1e1e] font-satoshi">
          Donnez vie à vos idées 
        </h1>
        <p className="mb-10 text-lg md:text-xl text-[#1e1e1e] font-satoshi">
          Vous souhaitez collaborer ou simplement en savoir plus ? 
          N’hésitez pas à me contacter avec les informations ci-dessous.
        </p>

        {/* Infos de contact */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* Téléphone */}
          <div className="flex flex-col items-center hover:scale-105 transition">
            <img src={phoneIcon} alt="Téléphone" className="w-12 h-12 mb-3" />
            <h1 className="text-lg font-semibold font-satoshi text-[#1e1e1e]">Mobile</h1>
            <p className="text-[#1e1e1e]">+33 7 49 29 66 53</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center hover:scale-105 transition">
            <img src={emailIcon} alt="Email" className="w-12 h-12 mb-3" />
            <h1 className="text-lg font-semibold font-satoshi text-[#1e1e1e]">Email</h1>
            <p className="text-[#1e1e1e]">bricebouaregis@gmail.com</p>
          </div>

          {/* Adresse */}
          <div className="flex flex-col items-center hover:scale-105 transition">
            <img src={addressIcon} alt="Adresse" className="w-12 h-12 mb-3" />
            <h1 className="text-lg font-semibold font-satoshi text-[#1e1e1e]">Adresse</h1>
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
