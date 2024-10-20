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
  static readonly GET_SUN_SUBTITLE =
    "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.";

  static readonly COMMENT =
    "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”";

  static readonly NO_MORE_WASTE = "No more waste";
  static readonly PICK_SUN = "Pick the sun";
  static readonly PICK_SUN_TEXT =
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
    "SPlatea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.";

  static readonly SERVICES_4 = "Non libero";
  static readonly SERVICES_4_TEXT =
    "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.";

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
}
