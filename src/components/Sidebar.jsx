import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/pfp.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabriel Trajano" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Download Cv
      </a>
    </aside>
  );
};

export default Sidebar;
