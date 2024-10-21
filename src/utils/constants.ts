import { IUser } from "@/app/components/carrousel";

interface IMenu {
  url: string;
  label: string;
}

export class Constants {
  static readonly SOLLER = "Soller";
  static readonly MENU: IMenu[] = [
    { url: "", label: "Products" },
    { url: "", label: "Solutions" },
    { url: "", label: "Services" },
    { url: "", label: "Configure" },
  ];
  static readonly PHONE = "555 818 282";
  static readonly REQUEST = "Request a Quote";

  static readonly GET_SUN = "Get the Sun to Power Your Home";
  static readonly GET_SUN_BREAKED = "Get the Sun to\n Power Your Home";
  static readonly GET_SUN_SUBTITLE =
    "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.";
  static readonly GET_SUN_SUBTITLE_BREAKED =
    "Viverra viverra nibh enim et aliquam, enim. Tempor, sit\n mus viverra orci dui consequat turpis scelerisque.";

  static readonly COMMENT =
    "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”";
  static readonly COMMENT_BREAKED =
    "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui\n consequat turpis scelerisque faucibus.”";

  static readonly NO_MORE_WASTE = "No more waste";
  static readonly NO_MORE_WASTE_TITLE = "Pick the sun";
  static readonly NO_MORE_WASTE_TEXT =
    "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.";

  static readonly SERVICES = "Services";
  static readonly PERSONALIZED_SERVICES = "Personalized services";
  static readonly PERSONALIZED_TEXT =
    "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.";

  static readonly SERVICES_1 = "Et mauris";
  static readonly SERVICES_1_TEXT =
    "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.";

  static readonly SERVICES_2 = "Eget sit";
  static readonly SERVICES_2_TEXT =
    "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.";

  static readonly SERVICES_3 = "Imperdiet pellentesque";
  static readonly SERVICES_3_TEXT =
    "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.";

  static readonly SERVICES_4 = "Non libero";
  static readonly SERVICES_4_TEXT =
    "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.";

  static readonly FEATURES = "System features";
  static readonly FEATURES_TITLE = "Powerful features";
  static readonly FEATURES_TEXT =
    "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.";

  static readonly FEATURES_1 = "Erat sit";
  static readonly FEATURES_1_TEXT =
    "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.";

  static readonly FEATURES_2 = "Ullamcorper arcu";
  static readonly FEATURES_2_TEXT =
    "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.";

  static readonly FEATURES_3 = "Et pellentesque";
  static readonly FEATURES_3_TEXT =
    "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.";

  static readonly FEATURES_4 = "Amet egestas";
  static readonly FEATURES_4_TEXT =
    "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ";

  static readonly COMMENT2 =
    "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.";

  static readonly JOIN = "Join other Sun harvesters";
  static readonly JOIN_TITLE = "Make something awesome";
  static readonly JOIN_TEXT =
    "Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.";

  static readonly GET = "Get the Sun to power your home";
  static readonly GET_TITLE =
    "All the power that you need for your house is now available";
  static readonly GET_TEXT2 = "Egestas fringilla aliquam leo";
  static readonly FOOTER_INFO = "Soller, Inc. All rights reserved.";

  static readonly COMMENTS: IUser[] = [
    {
      comment:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "/users/jane.png",
      label: "10KWh",
      name: "Jane Cooper",
    },

    {
      comment:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      image: "/users/ralph.png",
      label: "32KWh",
      name: "Ralph Edwards",
    },

    {
      comment:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      image: "/users/rwanda.png",
      label: "6KWh",
      name: "Courtney Henry",
    },

    {
      comment:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "/users/cameron.png",
      label: "12KWh",
      name: "Cameron Williamson",
    },
    {
      comment:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "/users/cameron.png",
      label: "12KWh",
      name: "Cameron Williamson",
    },
  ];
}
