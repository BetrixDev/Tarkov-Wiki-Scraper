export interface Locales {
  interface: { [key: string]: string };
  enum: any[];
  error: Error;
  mail: { [key: string]: string };
  quest: Quest;
  preset: { [key: string]: Preset };
  handbook: { [key: string]: string };
  season: Season;
  customization: { [key: string]: Customization };
  repeatableQuest: { [key: string]: string };
  templates: { [key: string]: Template };
  locations: Locations;
  banners: Banners;
  trading: { [key: string]: Trading };
}

interface Banners {
  "5464e0404bdc2d2a708b4567": The5464_E0404Bdc2D2A708B4567;
  "5464e0454bdc2d06708b4567": The5464_E0404Bdc2D2A708B4567;
  "5803a58524597710ca36fcb2": The5464_E0404Bdc2D2A708B4567;
  "5805f617245977100b2c1f41": The5464_E0404Bdc2D2A708B4567;
  "5807be8924597742c603fa19": The5464_E0404Bdc2D2A708B4567;
  "5807bfe124597742a92e0a4c": The5464_E0404Bdc2D2A708B4567;
  "5807c3f124597746bf2db2ce": The5464_E0404Bdc2D2A708B4567;
  "5c1b857086f77465f465faa4": The5C1B857086F77465F465Faa4;
}

interface The5464_E0404Bdc2D2A708B4567 {
  name: string;
  description: string;
}

interface The5C1B857086F77465F465Faa4 {
  Name: string;
  ShortName: string;
  Description: string;
  description: string;
  name: string;
}

interface Customization {
  Name: string;
  ShortName: null | string;
  Description: string;
}

interface Error {
  "Offer not found": string;
  "The item is already sold": string;
  "The trader is out of stock": string;
  "Unknown error": string;
  "The trader is out of cash": string;
  "Transaction error. The cost of goods has already changed.": string;
  "Attempted transaction with items missing from the stash": string;
  "Not enough space in stash": string;
  "Trader does not deal in this type of items": string;
  "You have already bought the maximum amount of this item in the current restock": string;
  "Bad user loyalty level": string;
  "230 - MAX LOGIN COUNT": string;
  "1514 - Transaction error. The cost of goods has already changed.": string;
  "201 - Client not authorized or not selected game profile": string;
  "Backend error: Unknown Error": string;
  BackendErrorHeader: string;
  BackendErrorMessage: string;
  "257 - ItemsMoving[OpenRandomLoot]: can't open random loot container": string;
}

interface Locations {
  "55f2d3fd4bdc2d5f408b4567": The55_F2D3Fd4Bdc2D5F408B4567;
  "56db0b3bd2720bb0678b4567": The55_F2D3Fd4Bdc2D5F408B4567;
  "56f40101d2720b2a4d8b45d6": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e3c2d2720bac5b8b4567": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e47ed2720bb35b8b4568": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e4dad2720bb55b8b4567": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e554d2720bac5b8b456e": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e5a4d2720bb45b8b4567": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e5fad2720bc05b8b4567": The55_F2D3Fd4Bdc2D5F408B4567;
  "5704e64ad2720bb55b8b456e": The55_F2D3Fd4Bdc2D5F408B4567;
  "5714dbc024597771384a510d": The55_F2D3Fd4Bdc2D5F408B4567;
  "5714dc342459777137212e0b": The55_F2D3Fd4Bdc2D5F408B4567;
  "5714dc692459777137212e12": The55_F2D3Fd4Bdc2D5F408B4567;
  "599319c986f7740dca3070a6": The55_F2D3Fd4Bdc2D5F408B4567;
  "59fc81d786f774390775787e": The55_F2D3Fd4Bdc2D5F408B4567;
  "5b0fc42d86f7744a585f9105": Customization;
}

interface The55_F2D3Fd4Bdc2D5F408B4567 {
  Name: string;
  Description: string;
}

interface Preset {
  Name: null | string;
}

interface Quest {
  "596b36c586f77450d6045ad2": The596B36C586F77450D6045Ad2;
  "5936d90786f7742b1420ba5b": The5936D90786F7742B1420Ba5B;
  "5936da9e86f7742d65037edf": The5936Da9E86F7742D65037Edf;
  "59674cd986f7744ab26e32f2": The59674Cd986F7744Ab26E32F2;
  "59674eb386f774539f14813a": The59674Eb386F774539F14813A;
  "5967530a86f77462ba22226b": The5967530A86F77462Ba22226B;
  "59675d6c86f7740a842fc482": The59675D6C86F7740A842Fc482;
  "59675ea386f77414b32bded2": The59675Ea386F77414B32Bded2;
  "596760e186f7741e11214d58": The596760E186F7741E11214D58;
  "5967725e86f774601a446662": The5967725E86F774601A446662;
  "5967733e86f774602332fc84": The5967733E86F774602332Fc84;
  "59689ee586f7740d1570bbd5": The59689Ee586F7740D1570Bbd5;
  "59689fbd86f7740d137ebfc4": The59689Fbd86F7740D137Ebfc4;
  "5968eb3186f7741dde183a4d": The5968Eb3186F7741Dde183A4D;
  "5969f90786f77420d2328015": The5969F90786F77420D2328015;
  "5969f9e986f7741dde183a50": The5969F9E986F7741Dde183A50;
  "596a0e1686f7741ddf17dbee": The596A0E1686F7741Ddf17Dbee;
  "596a101f86f7741ddb481582": The596A101F86F7741Ddb481582;
  "596a1e6c86f7741ddc2d3206": The596A1E6C86F7741Ddc2D3206;
  "596a204686f774576d4c95de": The596A204686F774576D4C95De;
  "596a218586f77420d232807c": The596A218586F77420D232807C;
  "5a27bb8386f7741c770d2d0a": The5A27Bb8386F7741C770D2D0A;
  "596b43fb86f77457ca186186": The596B43Fb86F77457Ca186186;
  "596b455186f77457cb50eccb": The596B455186F77457Cb50Eccb;
  "5979ed3886f77431307dc512": The5979Ed3886F77431307Dc512;
  "5979eee086f774311955e614": The5979Eee086F774311955E614;
  "5979f8bb86f7743ec214c7a6": The5979F8Bb86F7743Ec214C7A6;
  "5979f9ba86f7740f6c3fe9f2": The5979F9Ba86F7740F6C3Fe9F2;
  "597a0b2986f77426d66c0633": The597A0B2986F77426D66C0633;
  "597a0e5786f77426d66c0636": The597A0E5786F77426D66C0636;
  "597a0f5686f774273b74f676": The597A0F5686F774273B74F676;
  "597a160786f77477531d39d2": The597A160786F77477531D39D2;
  "597a171586f77405ba6887d3": The597A171586F77405Ba6887D3;
  "59c124d686f774189b3c843f": The59C124D686F774189B3C843F;
  "59c50a9e86f7745fef66f4ff": The59C50A9E86F7745Fef66F4Ff;
  "59c50c8886f7745fed3193bf": The59C50C8886F7745Fed3193Bf;
  "59c512ad86f7741f0d09de9b": The59C512Ad86F7741F0D09De9B;
  "59c9392986f7742f6923add2": The59C9392986F7742F6923Add2;
  "59c93e8e86f7742a406989c4": The59C93E8E86F7742A406989C4;
  "59ca1a6286f774509a270942": The59Ca1A6286F774509A270942;
  "59ca264786f77445a80ed044": The59Ca264786F77445A80Ed044;
  "59ca29fb86f77445ab465c87": The59Ca29Fb86F77445Ab465C87;
  "59ca2eb686f77445a80ed049": The59Ca2Eb686F77445A80Ed049;
  "59f9da6786f774714230d751": The59F9Da6786F774714230D751;
  "5a03153686f77442d90e2171": The5A03153686F77442D90E2171;
  "5a03173786f77451cb427172": The5A03173786F77451Cb427172;
  "5a0327ba86f77456b9154236": The5A0327Ba86F77456B9154236;
  "5a03296886f774569778596a": The5A03296886F774569778596A;
  "5a0449d586f77474e66227b7": The5A0449D586F77474E66227B7;
  "5a27b75b86f7742e97191958": The5A27B75B86F7742E97191958;
  "5a27b7a786f774579c3eb376": The5A27B7A786F774579C3Eb376;
  "5a27b7d686f77460d847e6a6": The5A27B7D686F77460D847E6A6;
  "5a27b80086f774429a5d7e20": The5A27B80086F774429A5D7E20;
  "5a27b87686f77460de0252a8": The5A27B87686F77460De0252A8;
  "5a27b9de86f77464e5044585": The5A27B9De86F77464E5044585;
  "5a27ba1c86f77461ea5a3c56": The5A27Ba1C86F77461Ea5A3C56;
  "5a27ba9586f7741b543d8e85": The5A27Ba9586F7741B543D8E85;
  "5a27bafb86f7741c73584017": The5A27Bafb86F7741C73584017;
  "5a27bb1e86f7741f27621b7e": The5A27Bb1E86F7741F27621B7E;
  "5a27bb3d86f77411ea361a21": The5A27Bb3D86F77411Ea361A21;
  "5a27bb5986f7741dfb660900": The5A27Bb5986F7741Dfb660900;
  "5a27bbf886f774333a418eeb": The5A27Bbf886F774333A418Eeb;
  "5a27bc1586f7741f6d40fa2f": The5A27Bc1586F7741F6D40Fa2F;
  "5a27bc3686f7741c73584026": The5A27Bc3686F7741C73584026;
  "5a27bc6986f7741c7358402b": The5A27Bc6986F7741C7358402B;
  "5a27bc8586f7741b543d8ea4": The5A27Bc8586F7741B543D8Ea4;
  "5a27c99a86f7747d2c6bdd8e": The5A27C99A86F7747D2C6Bdd8E;
  "5a27d2af86f7744e1115b323": The5A27D2Af86F7744E1115B323;
  "5a5642ce86f77445c63c3419": The5A5642Ce86F77445C63C3419;
  "5a68661a86f774500f48afb0": The5A68661A86F774500F48Afb0;
  "5a68663e86f774501078f78a": The5A68663E86F774501078F78A;
  "5a68665c86f774255929b4c7": The5A68665C86F774255929B4C7;
  "5a68667486f7742607157d28": The5A68667486F7742607157D28;
  "5a68669a86f774255929b4d4": The5A68669A86F774255929B4D4;
  "5ac23c6186f7741247042bad": The5Ac23C6186F7741247042Bad;
  "5ac2426c86f774138762edfe": The5Ac2426C86F774138762Edfe;
  "5ac2428686f77412450b42bf": The5Ac2428686F77412450B42Bf;
  "5ac242ab86f77412464f68b4": The5Ac242Ab86F77412464F68B4;
  "5ac244c486f77413e12cf945": The5Ac244C486F77413E12Cf945;
  "5ac244eb86f7741356335af1": The5Ac244Eb86F7741356335Af1;
  "5ac345dc86f774288030817f": The5Ac345Dc86F774288030817F;
  "5ac3460c86f7742880308185": The5Ac3460C86F7742880308185;
  "5ac3462b86f7741d6118b983": The5Ac3462B86F7741D6118B983;
  "5ac3464c86f7741d651d6877": The5Ac3464C86F7741D651D6877;
  "5ac3467986f7741d6224abc2": The5Ac3467986F7741D6224Abc2;
  "5ac346a886f7744e1b083d67": The5Ac346A886F7744E1B083D67;
  "5ac346cf86f7741d63233a02": The5Ac346Cf86F7741D63233A02;
  "5ac346e886f7741d6118b99b": The5Ac346E886F7741D6118B99B;
  "5ac3475486f7741d6224abd3": The5Ac3475486F7741D6224Abd3;
  "5ac3477486f7741d651d6885": The5Ac3477486F7741D651D6885;
  "5ac3479086f7742880308199": The5Ac3479086F7742880308199;
  "5ae3267986f7742a413592fe": The5Ae3267986F7742A413592Fe;
  "5ae3270f86f77445ba41d4dd": The5Ae3270F86F77445Ba41D4DD;
  "5ae3277186f7745973054106": The5Ae3277186F7745973054106;
  "5ae327c886f7745c7b3f2f3f": The5Ae327C886F7745C7B3F2F3F;
  "5ae3280386f7742a41359364": The5Ae3280386F7742A41359364;
  "5ae448a386f7744d3730fff0": The5Ae448A386F7744D3730Fff0;
  "5ae448bf86f7744d733e55ee": The5Ae448Bf86F7744D733E55Ee;
  "5ae448e586f7744dcf0c2a67": The5Ae448E586F7744Dcf0C2A67;
  "5ae448f286f77448d73c0131": The5Ae448F286F77448D73C0131;
  "5ae4490786f7744ca822adcc": The5Ae4490786F7744Ca822Adcc;
  "5ae4495086f77443c122bc40": The5Ae4495086F77443C122Bc40;
  "5ae4495c86f7744e87761355": The5Ae4495C86F7744E87761355;
  "5ae4497b86f7744cf402ed00": The5Ae4497B86F7744Cf402Ed00;
  "5ae4493486f7744efa289417": The5Ae4493486F7744Efa289417;
  "5ae4493d86f7744b8e15aa8f": The5Ae4493D86F7744B8E15Aa8F;
  "5ae4496986f774459e77beb6": The5Ae4496986F774459E77Beb6;
  "5ae4498786f7744bde357695": The5Ae4498786F7744Bde357695;
  "5ae4499a86f77449783815db": The5Ae4499A86F77449783815DB;
  "5ae449a586f7744bde357696": The5Ae449A586F7744Bde357696;
  "5ae449b386f77446d8741719": The5Ae449B386F77446D8741719;
  "5ae449c386f7744bde357697": The5Ae449C386F7744Bde357697;
  "5ae449d986f774453a54a7e1": The5Ae449D986F774453A54A7E1;
  "5b47749f86f7746c5d6a5fd4": The5B47749F86F7746C5D6A5Fd4;
  "5b47799d86f7746c5d6a5fd8": The5B47799D86F7746C5D6A5Fd8;
  "5b477b6f86f7747290681823": The5B477B6F86F7747290681823;
  "5b477f7686f7744d1b23c4d2": The5B477F7686F7744D1B23C4D2;
  "5b47825886f77468074618d3": The5B47825886F77468074618D3;
  "5b47876e86f7744d1c353205": The5B47876E86F7744D1C353205;
  "5b47891f86f7744d1b23c571": The5B47891F86F7744D1B23C571;
  "5b478b1886f7744d1b23c57d": The5B478B1886F7744D1B23C57D;
  "5b478d0f86f7744d190d91b5": The5B478D0F86F7744D190D91B5;
  "5b478eca86f7744642012254": The5B478Eca86F7744642012254;
  "5b478ff486f7744d184ecbbf": The5B478Ff486F7744D184Ecbbf;
  "5b47926a86f7747ccc057c15": The5B47926A86F7747Ccc057C15;
  "5b4794cb86f774598100d5d4": The5B4794Cb86F774598100D5D4;
  "5b4795fb86f7745876267770": The5B4795Fb86F7745876267770;
  "5bc4776586f774512d07cf05": The5Bc4776586F774512D07Cf05;
  "5bc479e586f7747f376c7da3": The5Bc479E586F7747F376C7Da3;
  "5bc47dbf86f7741ee74e93b9": The5Bc47Dbf86F7741Ee74E93B9;
  "5bc480a686f7741af0342e29": The5Bc480A686F7741Af0342E29;
  "5bc4826c86f774106d22d88b": The5Bc4826C86F774106D22D88B;
  "5bc4836986f7740c0152911c": The5Bc4836986F7740C0152911C;
  "5bc4856986f77454c317bea7": The5Bc4856986F77454C317Bea7;
  "5bc4893c86f774626f5ebf3e": The5Bc4893C86F774626F5Ebf3E;
  "5c0bbaa886f7746941031d82": The5C0Bbaa886F7746941031D82;
  "5c0bc91486f7746ab41857a2": The5C0Bc91486F7746Ab41857A2;
  "5c0bd01e86f7747cdd799e56": The5C0Bd01E86F7747Cdd799E56;
  "5c0bd94186f7747a727f09b2": The5C0Bd94186F7747A727F09B2;
  "5c0bdb5286f774166e38eed4": The5C0Bdb5286F774166E38Eed4;
  "5c0bde0986f77479cf22c2f8": The5C0Bde0986F77479Cf22C2F8;
  "5c0be13186f7746f016734aa": The5C0Be13186F7746F016734Aa;
  "5c0be5fc86f774467a116593": The5C0Be5Fc86F774467A116593;
  "5c0d0d5086f774363760aef2": The5C0D0D5086F774363760Aef2;
  "5c0d0f1886f77457b8210226": The5C0D0F1886F77457B8210226;
  "5c10f94386f774227172c572": The5C10F94386F774227172C572;
  "5c1128e386f7746565181106": The5C1128E386F7746565181106;
  "5c112d7e86f7740d6f647486": The5C112D7E86F7740D6F647486;
  "5c1141f386f77430ff393792": The5C1141F386F77430Ff393792;
  "5c1234c286f77406fa13baeb": The5C1234C286F77406Fa13Baeb;
  "5c0d190cd09282029f5390d8": The5C0D190Cd09282029F5390D8;
  "5c12452c86f7744b83469073": The5C12452C86F7744B83469073;
  "5c0d1c4cd0928202a02a6f5c": The5C0D1C4Cd0928202A02A6F5C;
  "5c0d4c12d09282029f539173": The5C0D4C12D09282029F539173;
  "5c0d4e61d09282029f53920e": The5C0D4E61D09282029F53920E;
  "5c139eb686f7747878361a6f": The5C139Eb686F7747878361A6F;
  "5c51aac186f77432ea65c552": The5C51Aac186F77432Ea65C552;
  "5d24b81486f77439c92d6ba8": The5D24B81486F77439C92D6Ba8;
  "5d2495a886f77425cd51e403": The5D2495A886F77425Cd51E403;
  "5d25aed386f77442734d25d2": The5D25Aed386F77442734D25D2;
  "5d25b6be86f77444001e1b89": The5D25B6Be86F77444001E1B89;
  "5d25bfd086f77442734d3007": The5D25Bfd086F77442734D3007;
  "5d25c81b86f77443e625dd71": The5D25C81B86F77443E625Dd71;
  "5d25cf2686f77443e75488d4": The5D25Cf2686F77443E75488D4;
  "5d25d2c186f77443e35162e5": The5D25D2C186F77443E35162E5;
  "5d25dae186f77443e55d2f78": The5D25Dae186F77443E55D2F78;
  "5d25e29d86f7740a22516326": The5D25E29D86F7740A22516326;
  "5d25e2a986f77409dd5cdf2a": The5D25E2A986F77409Dd5Cdf2A;
  "5d25e2b486f77409de05bba0": The5D25E2B486F77409De05Bba0;
  "5d25e2c386f77443e7549029": The5D25E2C386F77443E7549029;
  "5d25e2cc86f77443e47ae019": The5D25E2Cc86F77443E47Ae019;
  "5d25e2d886f77442734d335e": The5D25E2D886F77442734D335E;
  "5d25e2e286f77444001e2e48": The5D25E2E286F77444001E2E48;
  "5d25e2ee86f77443e35162ea": The5D25E2Ee86F77443E35162Ea;
  "5d25e43786f7740a212217fa": The5D25E43786F7740A212217Fa;
  "5d25e44386f77409453bce7b": The5D25E44386F77409453Bce7B;
  "5d25e44f86f77443e625e385": The5D25E44F86F77443E625E385;
  "5d25e45e86f77408251c4bfa": The5D25E45E86F77408251C4Bfa;
  "5d25e46e86f77409453bce7c": The5D25E46E86F77409453Bce7C;
  "5d25e48d86f77408251c4bfb": The5D25E48D86F77408251C4Bfb;
  "5d25e4ad86f77443e625e387": The5D25E4Ad86F77443E625E387;
  "5d25e4b786f77408251c4bfc": The5D25E4B786F77408251C4Bfc;
  "5d25e48186f77443e625e386": The5D25E48186F77443E625E386;
  "5d4bec3486f7743cac246665": The5D4Bec3486F7743Cac246665;
  "5d25e4ca86f77409dd5cdf2c": The5D25E4Ca86F77409Dd5Cdf2C;
  "5d25e4d586f77443e625e388": The5D25E4D586F77443E625E388;
  "5d6fb2c086f77449da599c24": The5D6Fb2C086F77449Da599C24;
  "5d6fbc2886f77449d825f9d3": The5D6Fbc2886F77449D825F9D3;
  "5dc53acb86f77469c740c893": The5Dc53Acb86F77469C740C893;
  "5e381b0286f77420e3417a74": The5E381B0286F77420E3417A74;
  "5e383a6386f77465910ce1f3": The5E383A6386F77465910Ce1F3;
  "5e4d4ac186f774264f758336": The5E4D4Ac186F774264F758336;
  "5e4d515e86f77438b2195244": The5E4D515E86F77438B2195244;
  "5e73519b0b997b5e887e59b3": The5E73519B0B997B5E887E59B3;
  "5e748327dbe23170e05094f4": The5E748327Dbe23170E05094F4;
  "5e748d226725d419a47e2101": The5E748D226725D419A47E2101;
  "5e748d9fc73f9622610abb37": The5E748D9Fc73F9622610Abb37;
  "5e748df9c73f9622610abb38": The5E748Df9C73F9622610Abb38;
  "5e748e8fa848081e986a58a2": The5E748E8Fa848081E986A58A2;
  "5e74921dc73f9622610abb3e": The5E74921Dc73F9622610Abb3E;
  "5e7492c2cdcce040bf508424": The5E7492C2Cdcce040Bf508424;
  "5e7493d5c377f60fe17d6ec8": The5E7493D5C377F60Fe17D6Ec8;
  "5e749741dec1852497081e69": The5E749741Dec1852497081E69;
  "5e7498198f3a2f53cc477e99": The5E7498198F3A2F53Cc477E99;
  "5e7498cc2eb35c76f5087a47": The5E7498Cc2Eb35C76F5087A47;
  "5e74990c647a0846684a1db4": The5E74990C647A0846684A1Db4;
  "5e749800e80d6c7ea20e93de": The5E749800E80D6C7Ea20E93De;
  "5e74a68870d454700576d1fe": The5E74A68870D454700576D1Fe;
  "5e74a765c377f60fe17d6edb": The5E74A765C377F60Fe17D6Edb;
  "5e74a8a9dfc5fc63e27a781a": The5E74A8A9Dfc5Fc63E27A781A;
  "5e74aafac377f60fe17d6ede": The5E74Aafac377F60Fe17D6Ede;
  "5e74ac3f70d454700576d200": The5E74Ac3F70D454700576D200;
  "5e74ad13647a0846684a1dc8": The5E74Ad13647A0846684A1Dc8;
  "5e74b1b201e03f5a8d48aff9": The5E74B1B201E03F5A8D48Aff9;
  "5e74be7b258b0422556b70d7": The5E74Be7B258B0422556B70D7;
  "5e74be4c24c2c642fa612776": The5E74Be4C24C2C642Fa612776;
  "5e74a9be70d454700576d1ff": The5E74A9Be70D454700576D1Ff;
  "5e85e1d15549dd01fe748b5a": The5E85E1D15549Dd01Fe748B5A;
  "5e85e2fa5549dd01fe748b5b": The5E85E2Fa5549Dd01Fe748B5B;
  "5e85e40d5549dd10225137b9": The5E85E40D5549Dd10225137B9;
  "5e85e5025549dda42377fa7b": The5E85E5025549Dda42377Fa7B;
  "5e85e77e5549ddf8e2131c0b": The5E85E77E5549Ddf8E2131C0B;
  "5eaaaa7c93afa0558f3b5a1c": The5Eaaaa7C93Afa0558F3B5A1C;
  "5eda19f0edce541157209cee": The5Eda19F0Edce541157209Cee;
  "5edab4b1218d181e29451435": The5Edab4B1218D181E29451435;
  "5edab736cc183c769d778bc2": The5Edab736Cc183C769D778Bc2;
  "5edaba7c0c502106f869bc02": The5Edaba7C0C502106F869Bc02;
  "5edabd13218d181e29451442": The5Edabd13218D181E29451442;
  "5edac020218d181e29451446": The5Edac020218D181E29451446;
  "5edac34d0bb72a50635c2bfa": The5Edac34D0Bb72A50635C2Bfa;
  "5edac63b930f5454f51e128b": The5Edac63B930F5454F51E128B;
  "5ede55112c95834b583f052a": The5Ede55112C95834B583F052A;
  "5ede567cfa6dc072ce15d6e3": The5Ede567Cfa6Dc072Ce15D6E3;
  "5f04886a3937dc337a6b8238": The5F04886A3937Dc337A6B8238;
  "5f75c578dfacb47e146a0062": The5F75C578Dfacb47E146A0062;
  "5f75fddbd24e8b7a9c508f3a": The5F75Fddbd24E8B7A9C508F3A;
  "5f70e2a5dcfde927745eb1d0": The5F70E2A5Dcfde927745Eb1D0;
  "5f79c7621f644f1eb53bdaf2": The5F79C7621F644F1Eb53Bdaf2;
  "5f710f7ce9f14826bf7c1c72": The5F710F7Ce9F14826Bf7C1C72;
  "5f75fb988fb5c37ce1766e98": The5F75Fb988Fb5C37Ce1766E98;
  "5f75c5078fb5c37ce1766e95": The5F75C5078Fb5C37Ce1766E95;
  "5f70abfae9f14826bf7c1c65": The5F70Abfae9F14826Bf7C1C65;
  "5f70acb63a7ec37e73013427": The5F70Acb63A7Ec37E73013427;
  "5f75fd4450914c5fcc425279": The5F75Fd4450914C5Fcc425279;
  "5f70b9cfe9f14826bf7c1c67": The5F70B9Cfe9F14826Bf7C1C67;
  "5fd9fad9c1ce6b1a3b486d00": The5Fd9Fad9C1Ce6B1A3B486D00;
  "600302d73b897b11364cd161": The600302D73B897B11364Cd161;
  "608a768d82e40b3c727fd17d": The608A768D82E40B3C727Fd17D;
  "6086c852c945025d41566124": The6086C852C945025D41566124;
  "6089736efa70fc097863b8f6": The6089736Efa70Fc097863B8F6;
  "6089743983426423753cd58a": The6089743983426423753Cd58A;
  "608974af4b05530f55550c21": The608974Af4B05530F55550C21;
  "608974d01a66564e74191fc0": The608974D01A66564E74191Fc0;
  "60896bca6ee58f38c417d4f2": The60896Bca6Ee58F38C417D4F2;
  "60896e28e4a85c72ef3fa301": The60896E28E4A85C72Ef3Fa301;
  "60896b7bfa70fc097863b8f5": The60896B7Bfa70Fc097863B8F5;
  "6089732b59b92115597ad789": The6089732B59B92115597Ad789;
  "60896888e4a85c72ef3fa300": The60896888E4A85C72Ef3Fa300;
  "60c0c018f7afb4354815096a": The60C0C018F7Afb4354815096A;
  "60e71e8ed54b755a3b53eb67": The60E71E8Ed54B755A3B53Eb67;
  "60e729cf5698ee7b05057439": The60E729Cf5698Ee7B05057439;
  "60e71dc67fcf9c556f325056": The60E71Dc67Fcf9C556F325056;
  "60e71dc0a94be721b065bbfc": The60E71Dc0A94Be721B065Bbfc;
  "60e71d23c1bfa3050473b8e6": The60E71D23C1Bfa3050473B8E6;
  "60e71ce009d7c801eb0c0ec6": The60E71Ce009D7C801Eb0C0Ec6;
  "60e71c9ad54b755a3b53eb66": The60E71C9Ad54B755A3B53Eb66;
  "60e71ccb5688f6424c7bfec4": The60E71Ccb5688F6424C7Bfec4;
  "60e71c11d54b755a3b53eb65": The60E71C11D54B755A3B53Eb65;
  "60e71d6d7fcf9c556f325055": The60E71D6D7Fcf9C556F325055;
  "60e71bb4e456d449cd47ca75": The60E71Bb4E456D449Cd47Ca75;
  "60e71c48c1bfa3050473b8e5": The60E71C48C1Bfa3050473B8E5;
  "60e71b62a0beca400d69efc4": The60E71B62A0Beca400D69Efc4;
  "60e71b9bbd90872cb85440f3": The60E71B9Bbd90872Cb85440F3;
  "60effd818b669d08a35bfad5": The60Effd818B669D08A35Bfad5;
  "613708a7f8333a5d15594368": The613708A7F8333A5D15594368;
  "6179ac7511973d018217d0b9": The6179Ac7511973D018217D0B9;
  "6179acbdc760af5ad2053585": The6179Acbdc760Af5Ad2053585;
  "6179ad56c760af5ad2053587": The6179Ad56C760Af5Ad2053587;
  "6179ad74bca27a099552e03a": The6179Ad74Bca27A099552E03A;
  "6179afd0bca27a099552e040": The6179Afd0Bca27A099552E040;
  "6179aff8f57fb279792c60a1": The6179Aff8F57Fb279792C60A1;
  "6179b3a12153c15e937d52bc": The6179B3A12153C15E937D52Bc;
  "6179b3bdc7560e13d23eeb8d": The6179B3Bdc7560E13D23Eeb8D;
  "6179b5eabca27a099552e052": The6179B5Eabca27A099552E052;
  "6179ad0a6e9dd54ac275e3f2": The6179Ad0A6E9Dd54Ac275E3F2;
  "6179b4d1bca27a099552e04e": The6179B4D1Bca27A099552E04E;
  "6179b4f16e9dd54ac275e407": The6179B4F16E9Dd54Ac275E407;
  "6179b5b06e9dd54ac275e409": The6179B5B06E9Dd54Ac275E409;
  "61904daa7d0d857927447b9c": The61904Daa7D0D857927447B9C;
  "6193850f60b34236ee0483de": The6193850F60B34236Ee0483De;
  "61958c366726521dd96828ec": The61958C366726521Dd96828Ec;
  "61bb475467f83663e155e26a": The61Bb475467F83663E155E26A;
  "61bfa784f4378605ca5598e1": The61Bfa784F4378605Ca5598E1;
  "61bb468b8d7cac1532300ccc": The61Bb468B8D7Cac1532300Ccc;
  "61bb47481908c67d4249a205": The61Bb47481908C67D4249A205;
  "61bb474b1ab5304c3817a53a": The61Bb474B1Ab5304C3817A53A;
  "61bb474dce7374453b45dfd2": The61Bb474Dce7374453B45Dfd2;
  "61bb474f8b8d2a79d012cd6e": The61Bb474F8B8D2A79D012Cd6E;
  "61bb47516b70332c062ca7b9": The61Bb47516B70332C062Ca7B9;
  "61bb4756883b2c16a163870a": The61Bb4756883B2C16A163870A;
  "61bb47578d7cac1532300ccd": The61Bb47578D7Cac1532300Ccd;
  "61e6e5e0f5b9633f6719ed95": The61E6E5E0F5B9633F6719Ed95;
  "61e6e60223374d168a4576a6": The61E6E60223374D168A4576A6;
  "61e6e60c5ca3b3783662be27": The61E6E60C5Ca3B3783662Be27;
  "61e6e615eea2935bc018a2c5": The61E6E615Eea2935Bc018A2C5;
  "61e6e621bfeab00251576265": The61E6E621Bfeab00251576265;
  "626bd75b05f287031503c7f6": The626Bd75B05F287031503C7F6;
  "626bd75c71bd851e971b82a5": The626Bd75C71Bd851E971B82A5;
  "626bd75d5bef5d7d590bd415": The626Bd75D5Bef5D7D590Bd415;
  "626bd75e47ea7f506e5493c5": The626Bd75E47Ea7F506E5493C5;
  "626bdcc3a371ee3a7a3514c5": The626Bdcc3A371Ee3A7A3514C5;
}

interface The5936D90786F7742B1420Ba5B {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5936D90786F7742B1420Ba5BConditions;
  location: string;
}

interface The5936D90786F7742B1420Ba5BConditions {
  "5967379186f77463860dadd6": string;
  "596737cb86f77463a8115efd": string;
}

interface The5936Da9E86F7742D65037Edf {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5936Da9E86F7742D65037EdfConditions;
  location: string;
}

interface The5936Da9E86F7742D65037EdfConditions {
  "5967920f86f77468d219d632": string;
  "5968ec9986f7741ddd6c1012": string;
  "5975de1f86f7744ca53b7c82": string;
}

interface The59674Cd986F7744Ab26E32F2 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59674Cd986F7744Ab26E32F2Conditions;
  location: string;
}

interface The59674Cd986F7744Ab26E32F2Conditions {
  "5cb31b6188a450159d330a18": string;
}

interface The59674Eb386F774539F14813A {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59674Eb386F774539F14813AConditions;
  location: string;
}

interface The59674Eb386F774539F14813AConditions {
  "59674fe586f7744f4e358aa2": string;
  "5968929e86f7740d121082d3": string;
  "5977784486f774285402cf52": string;
  "5978b48b86f7746ef62ef859": string;
}

interface The5967530A86F77462Ba22226B {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5967530A86F77462Ba22226BConditions;
  location: string;
}

interface The5967530A86F77462Ba22226BConditions {
  "596762ec86f77426d3687a87": string;
  "5968941f86f7740d1570bbd2": string;
  "5968943f86f7740d137ebfc2": string;
  "5968948986f7740d121082d4": string;
  "5a3fbdb086f7745a554f0c31": string;
}

interface The59675D6C86F7740A842Fc482 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59675D6C86F7740A842Fc482Conditions;
  location: string;
}

interface The59675D6C86F7740A842Fc482Conditions {
  "59675e1d86f77414b07f137d": string;
  "5967938c86f77468cf5f9f54": string;
  "5968ed3186f77420d2328013": string;
  "5a3fbe3a86f77414422e0d9b": string;
}

interface The59675Ea386F77414B32Bded2 {
  conditions: The59675Ea386F77414B32Bded2Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The59675Ea386F77414B32Bded2Conditions {
  "596895f986f7740d14064722": string;
  "5968962686f7740e7266d973": string;
  "596896c386f7740d1570bbd4": string;
}

interface The596760E186F7741E11214D58 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596760E186F7741E11214D58Conditions;
  location: string;
}

interface The596760E186F7741E11214D58Conditions {
  "5968975586f7740e7266d974": string;
}

interface The5967725E86F774601A446662 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5967725E86F774601A446662Conditions;
  location: string;
}

interface The5967725E86F774601A446662Conditions {
  "5968981986f7740d1648df42": string;
  "5968988286f7740d14064724": string;
  "5a3fc03286f77414d64f9941": string;
  "59a9287986f77478ad7028d8": string;
}

interface The5967733E86F774602332Fc84 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5967733E86F774602332Fc84Conditions;
  location: string;
}

interface The5967733E86F774602332Fc84Conditions {
  "59689eb886f7740d137ebfc3": string;
  "5968edc086f77420d2328014": string;
}

interface The59689Ee586F7740D1570Bbd5 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59689Ee586F7740D1570Bbd5Conditions;
  location: string;
}

interface The59689Ee586F7740D1570Bbd5Conditions {
  "59689f7586f7740d14064726": string;
  "5a3fc0ff86f7744d9c2eff86": string;
  "5ca6026286f77446d87abec3": string;
  "5cb6f32986f7746ef55e17a0": string;
}

interface The59689Fbd86F7740D137Ebfc4 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59689Fbd86F7740D137Ebfc4Conditions;
  location: string;
}

interface The59689Fbd86F7740D137Ebfc4Conditions {
  "5968a06486f7740d14064728": string;
  "5a3fb73b86f77458e0324376": string;
}

interface The5968Eb3186F7741Dde183A4D {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5968Eb3186F7741Dde183A4DConditions;
  location: string;
}

interface The5968Eb3186F7741Dde183A4DConditions {
  "5968eb9b86f7741ddb481543": string;
}

interface The5969F90786F77420D2328015 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5969F90786F77420D2328015Conditions;
  location: string;
}

interface The5969F90786F77420D2328015Conditions {
  "5969f98286f774576d4c9542": string;
  "5969f99286f77456630ea442": string;
  "596a212e86f774576d4c95df": string;
}

interface The5969F9E986F7741Dde183A50 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5969F9E986F7741Dde183A50Conditions;
  location: string;
}

interface The5969F9E986F7741Dde183A50Conditions {
  "5969fa4886f7741ddb481544": string;
  "5969fa8986f7741ddc2d3154": string;
  "5a3fb8f686f7742384533f10": string;
  "5a3fb92286f77422b46cdb18": string;
}

interface The596A0E1686F7741Ddf17Dbee {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596A0E1686F7741Ddf17DbeeConditions;
  location: string;
}

interface The596A0E1686F7741Ddf17DbeeConditions {
  "596a0e7086f7741ddf17dbef": string;
  "596a0e8086f7741ddd6c104c": string;
  "596a0eaf86f774576d4c957f": string;
  "596a113d86f7741ddd6c104d": string;
}

interface The596A101F86F7741Ddb481582 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596A101F86F7741Ddb481582Conditions;
  location: string;
}

interface The596A101F86F7741Ddb481582Conditions {
  "596a10d886f7741ddf17dbf0": string;
  "596a117386f7741ddf17dbf1": string;
}

interface The596A1E6C86F7741Ddc2D3206 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596A1E6C86F7741Ddc2D3206Conditions;
  location: string;
}

interface The596A1E6C86F7741Ddc2D3206Conditions {
  "596a1f0486f77456630ea4d2": string;
  "596a1f1586f77420d2328077": string;
}

interface The596A204686F774576D4C95De {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596A204686F774576D4C95DeConditions;
  location: string;
}

interface The596A204686F774576D4C95DeConditions {
  "596a20ac86f7741ddf17dbf4": string;
  "5ec1398886f7561e047757a5": string;
}

interface The596A218586F77420D232807C {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596A218586F77420D232807CConditions;
  location: string;
}

interface The596A218586F77420D232807CConditions {
  "596b46d886f77457ca186189": string;
  "596b46ec86f77457c7006f89": string;
  "596b470c86f77457ca18618a": string;
  "596b472686f77457c7006f8a": string;
  "5979e7a386f7743ec214c7a3": string;
}

interface The596B36C586F77450D6045Ad2 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596B36C586F77450D6045Ad2Conditions;
  location: string;
}

interface The596B36C586F77450D6045Ad2Conditions {
  "597867e986f7741b265c6bd3": string;
  "5ab8d44c86f7745b2325bd0c": string;
}

interface The596B43Fb86F77457Ca186186 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596B43Fb86F77457Ca186186Conditions;
  location: string;
}

interface The596B43Fb86F77457Ca186186Conditions {
  "596b44b686f77457cb50ecca": string;
  "596b450986f7745a7e510b54": string;
  "5a3fbab086f77421593d9bf0": string;
  "5a3fbabc86f774231d75afbe": string;
}

interface The596B455186F77457Cb50Eccb {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The596B455186F77457Cb50EccbConditions;
  location: string;
}

interface The596B455186F77457Cb50EccbConditions {
  "5c9b5e3f86f7744aab7329b5": string;
}

interface The5979Ed3886F77431307Dc512 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5979Ed3886F77431307Dc512Conditions;
  location: string;
}

interface The5979Ed3886F77431307Dc512Conditions {
  "5979ee2986f7743ec214c7a4": string;
  "5979ee4586f7743ec214c7a5": string;
  "59819f0986f7744e6d0b7520": string;
}

interface The5979Eee086F774311955E614 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5979Eee086F774311955E614Conditions;
  location: string;
}

interface The5979Eee086F774311955E614Conditions {
  "5979ef4586f77431307dc513": string;
  "5979ef7986f77431307dc514": string;
}

interface The5979F8Bb86F7743Ec214C7A6 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5979F8Bb86F7743Ec214C7A6Conditions;
  location: string;
}

interface The5979F8Bb86F7743Ec214C7A6Conditions {
  "598f0c6386f7746c837802cc": string;
  "5b0e766b86f7746bfa618964": string;
}

interface The5979F9Ba86F7740F6C3Fe9F2 {
  conditions: The5979F9Ba86F7740F6C3Fe9F2Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5979F9Ba86F7740F6C3Fe9F2Conditions {
  "5979fc2686f77426d702a0f2": string;
  "5979fc5386f77426d702a0f3": string;
  "5979fc7e86f77426d702a0f4": string;
  "5979fc9286f77426d702a0f5": string;
  "5a3fbbfd86f77459d52a16a8": string;
}

interface The597A0B2986F77426D66C0633 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The597A0B2986F77426D66C0633Conditions;
  location: string;
}

interface The597A0B2986F77426D66C0633Conditions {
  "597a0bb486f77426d66c0634": string;
  "597a0bdb86f7742717106d12": string;
  "597a0be986f774273b74f673": string;
  "597a0bf886f7742717106d13": string;
}

interface The597A0E5786F77426D66C0636 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The597A0E5786F77426D66C0636Conditions;
  location: string;
}

interface The597A0E5786F77426D66C0636Conditions {
  "597a15b386f774799e5cd152": string;
  "597a15c386f77405ba6887d2": string;
}

interface The597A0F5686F774273B74F676 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The597A0F5686F774273B74F676Conditions;
  location: string;
}

interface The597A0F5686F774273B74F676Conditions {
  "59b242ea86f7741e6e0e7a86": string;
  "59b95de686f77418457056ef": string;
  "5a3fbc9586f77459d52a16c4": string;
}

interface The597A160786F77477531D39D2 {
  conditions: The597A160786F77477531D39D2Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The597A160786F77477531D39D2Conditions {
  "597a166d86f774779c70e8a4": string;
  "5998366886f77455853b2d9f": string;
  "5a3fc1f286f7744ccc15d643": string;
}

interface The597A171586F77405Ba6887D3 {
  conditions: The597A171586F77405Ba6887D3Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The597A171586F77405Ba6887D3Conditions {
  "597a178786f774799e5cd155": string;
  "5998360886f77456936817f3": string;
  "5a3fbec386f77413bd5fc20a": string;
}

interface The59C124D686F774189B3C843F {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59C124D686F774189B3C843FConditions;
  location: string;
}

interface The59C124D686F774189B3C843FConditions {
  "59c128b986f77415037680df": string;
  "59c128cc86f774189b3c84b5": string;
  "59c128d886f77414fe7f1a64": string;
  "59c128f386f774189b3c84bb": string;
  "5c92184386f7746afa2e7840": string;
  "60a6486cc15b714d7b0a83d4": string;
}

interface The59C50A9E86F7745Fef66F4Ff {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59C50A9E86F7745Fef66F4FfConditions;
  location: string;
}

interface The59C50A9E86F7745Fef66F4FfConditions {
  "59674d5186f00443b872d5f7": string;
}

interface The59C50C8886F7745Fed3193Bf {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59C50C8886F7745Fed3193BfConditions;
  location: string;
}

interface The59C50C8886F7745Fed3193BfConditions {
  "59c50f1686f77412ef2c01e7": string;
  "59624d5386f77446b872d5f7": string;
  "5ca5e54186f774456930b9a3": string;
  "5cb5e2ff86f7746ef64c979b": string;
}

interface The59C512Ad86F7741F0D09De9B {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59C512Ad86F7741F0D09De9BConditions;
  location: string;
}

interface The59C512Ad86F7741F0D09De9BConditions {
  "59674d5186f77446b852d5f7": string;
}

interface The59C9392986F7742F6923Add2 {
  conditions: The59C9392986F7742F6923Add2Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The59C9392986F7742F6923Add2Conditions {
  "59c93bdb86f7742a19140434": string;
  "59c93c1986f7742a424eaa33": string;
  "59c93cbb86f7742a19140435": string;
  "59c93cea86f7742a08623162": string;
  "59c93d4e86f774496b698953": string;
  "59c93d8086f7742a19140436": string;
  "59c93d9c86f7742f6923add3": string;
  "59c93dbf86f7742a424eaa34": string;
}

interface The59C93E8E86F7742A406989C4 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59C93E8E86F7742A406989C4Conditions;
  location: string;
}

interface The59C93E8E86F7742A406989C4Conditions {
  "596a10d886f7741ddf11dbf0": string;
}

interface The59Ca1A6286F774509A270942 {
  conditions: The59Ca1A6286F774509A270942Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The59Ca1A6286F774509A270942Conditions {
  "59ca1b1b86f7741b067dba42": string;
  "59ca1b4f86f774509a270943": string;
}

interface The59Ca264786F77445A80Ed044 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59Ca264786F77445A80Ed044Conditions;
  location: string;
}

interface The59Ca264786F77445A80Ed044Conditions {
  "59ca27f786f77445aa0ddc14": string;
  "59674d5986f77446b872d5f7": string;
  "59ca293c86f91445a80ed047": string;
  "59ca29ab86f77445ab431c86": string;
}

interface The59Ca29Fb86F77445Ab465C87 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59Ca29Fb86F77445Ab465C87Conditions;
  location: string;
}

interface The59Ca29Fb86F77445Ab465C87Conditions {
  "59ca2c3086f77445aa0ddc15": string;
  "59ca2cbe86f7740fe95c3e52": string;
  "59ca293c86f77445a80ed147": string;
  "59ca29ab86f77445ab133c86": string;
  "59ca2bdc86f77445a80ed148": string;
  "59ca2c9e86f77428ea721232": string;
  "5c922dde86f77438500a0fec": string;
}

interface The59Ca2Eb686F77445A80Ed049 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The59Ca2Eb686F77445A80Ed049Conditions;
  location: string;
}

interface The59Ca2Eb686F77445A80Ed049Conditions {
  "59ca2fba86f77445e4732b25": string;
  "5b05468f86f774030379eb74": string;
  "5b0548e686f7740306753506": string;
  "5cb3393888a4505d02042061": string;
  "5cb3397c88a450159a723d79": string;
}

interface The59F9Da6786F774714230D751 {
  conditions: The59F9Da6786F774714230D751Conditions;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  description: string;
  location: string;
  name: string;
}

interface The59F9Da6786F774714230D751Conditions {}

interface The5A03153686F77442D90E2171 {
  conditions: The5A03153686F77442D90E2171Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A03153686F77442D90E2171Conditions {
  "5c9a17c686f7747dbe2da3c1": string;
}

interface The5A03173786F77451Cb427172 {
  conditions: The5A03173786F77451Cb427172Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A03173786F77451Cb427172Conditions {
  "5a0317da86f77451cb427295": string;
  "5a0325f286f7744384509230": string;
  "5a37d80986f774245c063b69": string;
}

interface The5A0327Ba86F77456B9154236 {
  conditions: The5A0327Ba86F77456B9154236Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A0327Ba86F77456B9154236Conditions {
  "5a03282286f77456b91542ef": string;
  "5a03289686f7745dbc6c5063": string;
  "5a0328b086f77457a7099ea5": string;
  "5a0328cb86f77456b91543b8": string;
  "5a0328f586f774580168ced4": string;
  "5a03290586f774584d1594c4": string;
  "5a280b3c86f7741b16366337": string;
  "5a280b5486f7741f751bfeea": string;
}

interface The5A03296886F774569778596A {
  conditions: The5A03296886F774569778596AConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A03296886F774569778596AConditions {
  "5a3ba62786f7742c9d4f5ee9": string;
  "5a3ba65f86f7743af1475f11": string;
  "5c94f65286f77455185027ee": string;
}

interface The5A0449D586F77474E66227B7 {
  conditions: The5A0449D586F77474E66227B7Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A0449D586F77474E66227B7Conditions {
  "5a044a6c86f7747370402d91": string;
  "5a280f8d86f774141b501756": string;
}

interface The5A27B75B86F7742E97191958 {
  conditions: The5A27B75B86F7742E97191958Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27B75B86F7742E97191958Conditions {
  "5a27d81a86f774472a6e0456": string;
  "5a27d85286f77448d82084e7": string;
  "5a3ba11786f7742c9d4f5d29": string;
  "5bcf241486f7746a4959344a": string;
  "5be40b2a88a45079e30e92b5": string;
  "5c93794086f7740a13567867": string;
}

interface The5A27B7A786F774579C3Eb376 {
  conditions: The5A27B7A786F774579C3Eb376Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27B7A786F774579C3Eb376Conditions {
  "5a27e73f86f7740fb275c94b": string;
  "5a27e75886f7740aef4a9157": string;
  "5a29653986f77406a3435b26": string;
  "5c9394a986f7741228714be3": string;
}

interface The5A27B7D686F77460D847E6A6 {
  conditions: The5A27B7D686F77460D847E6A6Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27B7D686F77460D847E6A6Conditions {
  "5a27fc8186f7746371546243": string;
  "5a27fc9686f774675744bb60": string;
  "5a37e8ae86f77415076b401d": string;
  "5c939d0e86f774185203c4c3": string;
}

interface The5A27B80086F774429A5D7E20 {
  conditions: The5A27B80086F774429A5D7E20Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27B80086F774429A5D7E20Conditions {
  "5a27ffb186f774192932b3d5": string;
  "5a27ffc786f77415ca58ae47": string;
  "5a294f1686f774340c7b7e4a": string;
  "5a294f3386f77433e923f9cd": string;
  "5a3ba34286f7744eb240406a": string;
  "5a3ba3b086f7745ab1081101": string;
}

interface The5A27B87686F77460De0252A8 {
  conditions: The5A27B87686F77460De0252A8Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27B87686F77460De0252A8Conditions {
  "5a28017786f77452f6318b1b": string;
  "5a2801f986f774531b679875": string;
  "5a28023f86f774528903dd1e": string;
  "5a3ba47986f7744df8667505": string;
  "5a3ba4ba86f7744df759b1e5": string;
  "5c939f2186f774122b6e7854": string;
  "5c9a170386f77438c80164eb": string;
  "5cb5fd3d86f7746ef64ca33c": string;
}

interface The5A27B9De86F77464E5044585 {
  conditions: The5A27B9De86F77464E5044585Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27B9De86F77464E5044585Conditions {
  "5a28051286f7740eb10bac04": string;
  "5a3ba51d86f7743af1475c3a": string;
}

interface The5A27Ba1C86F77461Ea5A3C56 {
  conditions: The5A27Ba1C86F77461Ea5A3C56Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Ba1C86F77461Ea5A3C56Conditions {
  "5a2806b386f77420062f0fbd": string;
  "5a2806e086f774291b084041": string;
  "5a2806f886f774513d3e69f5": string;
  "5fe0e9ed3f3a7d4169035e8e": string;
}

interface The5A27Ba9586F7741B543D8E85 {
  conditions: The5A27Ba9586F7741B543D8E85Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Ba9586F7741B543D8E85Conditions {
  "5a28127b86f7743808504ecc": string;
}

interface The5A27Bafb86F7741C73584017 {
  conditions: The5A27Bafb86F7741C73584017Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bafb86F7741C73584017Conditions {
  "5a28151986f77466837984c9": string;
  "5a28152b86f7740ab40845fb": string;
  "5a28157486f77405822f36c1": string;
  "5a28159686f77405710b1e65": string;
  "5a2815c186f77405822f36ce": string;
  "5a2815d786f774725a5893a6": string;
  "5a28163686f7740ab4084611": string;
  "5a28164786f77405822f36d9": string;
}

interface The5A27Bb1E86F7741F27621B7E {
  conditions: The5A27Bb1E86F7741F27621B7EConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bb1E86F7741F27621B7EConditions {
  "5a28183186f774398675d127": string;
  "5a28184c86f774376e43772a": string;
}

interface The5A27Bb3D86F77411Ea361A21 {
  conditions: The5A27Bb3D86F77411Ea361A21Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bb3D86F77411Ea361A21Conditions {
  "5a2819c886f77460ba564f38": string;
  "5a2e966286f7742f6c4f27a6": string;
  "5a3ba76486f7744d39436da2": string;
}

interface The5A27Bb5986F7741Dfb660900 {
  conditions: The5A27Bb5986F7741Dfb660900Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bb5986F7741Dfb660900Conditions {
  "5a37de5486f7741535394d69": string;
  "5a3ba7db86f7744f0e568c9c": string;
}

interface The5A27Bb8386F7741C770D2D0A {
  conditions: The5A27Bb8386F7741C770D2D0AConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bb8386F7741C770D2D0AConditions {
  "5c9de99286f7741ced54c902": string;
}

interface The5A27Bbf886F774333A418Eeb {
  conditions: The5A27Bbf886F774333A418EebConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bbf886F774333A418EebConditions {
  "5a281efe86f7745bc42005cc": string;
  "5a37dc0c86f77469da071ef2": string;
  "5a3ba97386f77459df27d10e": string;
}

interface The5A27Bc1586F7741F6D40Fa2F {
  conditions: The5A27Bc1586F7741F6D40Fa2FConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bc1586F7741F6D40Fa2FConditions {
  "5a37db0c86f7745b8f4be68a": string;
  "5a3baa2586f7745b791b72fa": string;
}

interface The5A27Bc3686F7741C73584026 {
  conditions: The5A27Bc3686F7741C73584026Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bc3686F7741C73584026Conditions {
  "5a28221e86f7741d5b719624": string;
  "5a28223786f7741c7a0b5401": string;
}

interface The5A27Bc6986F7741C7358402B {
  conditions: The5A27Bc6986F7741C7358402BConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bc6986F7741C7358402BConditions {
  "5a2822de86f7740a245249ce": string;
  "5a2e958d86f77416be092111": string;
}

interface The5A27Bc8586F7741B543D8Ea4 {
  conditions: The5A27Bc8586F7741B543D8Ea4Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27Bc8586F7741B543D8Ea4Conditions {
  "5a28235e86f7741da250b438": string;
}

interface The5A27C99A86F7747D2C6Bdd8E {
  conditions: The5A27C99A86F7747D2C6Bdd8EConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27C99A86F7747D2C6Bdd8EConditions {
  "5be0198686f774595412d9c4": string;
  "5ec137962d5b8510d548aef1": string;
  "5ec137dcc367fc6781104613": string;
}

interface The5A27D2Af86F7744E1115B323 {
  conditions: The5A27D2Af86F7744E1115B323Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A27D2Af86F7744E1115B323Conditions {
  "5a27d34586f7744e1115b327": string;
}

interface The5A5642Ce86F77445C63C3419 {
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  conditions: The5A5642Ce86F77445C63C3419Conditions;
  location: string;
}

interface The5A5642Ce86F77445C63C3419Conditions {
  "5a56489d86f7740cfe70eba2": string;
  "5db9e0bf60635026b067afa6": string;
  "5db9e0d3b1325a429a5d7d55": string;
  "5db9e0e0c5624a3ce7239a88": string;
}

interface The5A68661A86F774500F48Afb0 {
  conditions: The5A68661A86F774500F48Afb0Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A68661A86F774500F48Afb0Conditions {
  "5a6873bc86f7741f8d4589a3": string;
  "5a6873d786f7743ad1151d6e": string;
  "5a6873ec86f7743cc55d8622": string;
  "5a6874a186f77474f43809fd": string;
}

interface The5A68663E86F774501078F78A {
  conditions: The5A68663E86F774501078F78AConditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A68663E86F774501078F78AConditions {
  "5a68760f86f7743cc55d8709": string;
  "5a68763786f77474c33a40a1": string;
  "5a68764c86f77474c4269f3c": string;
}

interface The5A68665C86F774255929B4C7 {
  conditions: The5A68665C86F774255929B4C7Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A68665C86F774255929B4C7Conditions {
  "5a68770f86f774747d4b0d8b": string;
  "5a68776786f774759f1f55f6": string;
  "5a68777586f774747d4b0d9e": string;
  "5a68778c86f77423391f38f0": string;
}

interface The5A68667486F7742607157D28 {
  conditions: The5A68667486F7742607157D28Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A68667486F7742607157D28Conditions {
  "5a6878e886f7745e65687985": string;
}

interface The5A68669A86F774255929B4D4 {
  conditions: The5A68669A86F774255929B4D4Conditions;
  name: string;
  description: string;
  note: string;
  failMessageText: string;
  startedMessageText: string;
  successMessageText: string;
  location: string;
}

interface The5A68669A86F774255929B4D4Conditions {
  "5a6879be86f774284429b1bb": string;
  "5a687a1c86f7745f2152168c": string;
}

interface The5Ac23C6186F7741247042Bad {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac23C6186F7741247042BadConditions;
  location: string;
}

interface The5Ac23C6186F7741247042BadConditions {
  "5accd5e386f77463027e9397": string;
  "5acf375f86f7741bb8377ff7": string;
}

interface The5Ac2426C86F774138762Edfe {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac2426C86F774138762EdfeConditions;
  location: string;
}

interface The5Ac2426C86F774138762EdfeConditions {
  "5accd9b686f774112d7173d1": string;
  "5acf37a186f7741843346d0c": string;
  "5acf37ad86f77418420befe6": string;
}

interface The5Ac2428686F77412450B42Bf {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac2428686F77412450B42BfConditions;
  location: string;
}

interface The5Ac2428686F77412450B42BfConditions {
  "5accde3686f7740cea1b7ec2": string;
  "5acf37d486f7741841752ffc": string;
  "5acf37df86f7741bb8377ffc": string;
}

interface The5Ac242Ab86F77412464F68B4 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac242Ab86F77412464F68B4Conditions;
  location: string;
}

interface The5Ac242Ab86F77412464F68B4Conditions {
  "5acce08b86f7745f8521fa64": string;
  "5acf381a86f7741ce21f9aee": string;
  "5acf382686f7741cdb2f7ef6": string;
}

interface The5Ac244C486F77413E12Cf945 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac244C486F77413E12Cf945Conditions;
  location: string;
}

interface The5Ac244C486F77413E12Cf945Conditions {
  "5acce11786f77411ed6fa6eb": string;
  "5acf383686f7741bb8377fff": string;
  "5acf383d86f7741bb8378000": string;
}

interface The5Ac244Eb86F7741356335Af1 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac244Eb86F7741356335Af1Conditions;
  location: string;
}

interface The5Ac244Eb86F7741356335Af1Conditions {
  "5accdfdb86f77412265cbfc9": string;
  "5acf37fa86f7741844039008": string;
  "5acf380186f7741844039009": string;
}

interface The5Ac345Dc86F774288030817F {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac345Dc86F774288030817FConditions;
  location: string;
}

interface The5Ac345Dc86F774288030817FConditions {
  "5ac7a4ba86f77409f3423628": string;
  "5ac7a51a86f774738a4ffc96": string;
  "5ac7a5d586f774383111ee63": string;
  "5acf388786f7741cdb2f7ef9": string;
  "5acf390d86f774184403900f": string;
}

interface The5Ac3460C86F7742880308185 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac3460C86F7742880308185Conditions;
  location: string;
}

interface The5Ac3460C86F7742880308185Conditions {
  "5ac502a786f7740bde1b000c": string;
  "5ac5055a86f7745cae22b582": string;
  "5ac505c386f7740be0424d19": string;
  "5ac505e186f7740bdf2ceabe": string;
  "5ac5061386f77417e429ce7a": string;
  "5ac5062586f774587c327395": string;
  "5acf3b0986f7741bb8378499": string;
  "5acf3b1286f77418420bf36b": string;
}

interface The5Ac3462B86F7741D6118B983 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac3462B86F7741D6118B983Conditions;
  location: string;
}

interface The5Ac3462B86F7741D6118B983Conditions {
  "5ac6240786f77417204ca2b9": string;
  "5ac6248586f77416781dd3a3": string;
  "5ac624b286f77416781dd3ac": string;
  "5acf3b2586f7741cdb2f7f8b": string;
  "5acf3b2a86f7741cdb2f7f8c": string;
}

interface The5Ac3464C86F7741D651D6877 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac3464C86F7741D651D6877Conditions;
  location: string;
}

interface The5Ac3464C86F7741D651D6877Conditions {
  "5ac5081086f7740bde1b002f": string;
  "5ac5082586f77418804f7d4c": string;
  "5ac5083d86f7740be2744eed": string;
  "5ac5084d86f7740bde1b0031": string;
  "5acf3b3486f7741ce21f9b06": string;
  "5acf3b3b86f7741ce21f9b08": string;
}

interface The5Ac3467986F7741D6224Abc2 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac3467986F7741D6224Abc2Conditions;
  location: string;
}

interface The5Ac3467986F7741D6224Abc2Conditions {
  "5ac5e0fa86f77431c305d243": string;
  "5ac5e13586f7746074388f93": string;
  "5ac5e18c86f7743ebd6c9575": string;
  "5acf3b6186f7741cdb2f7f8e": string;
  "5acf3b6986f77418440390b4": string;
}

interface The5Ac346A886F7744E1B083D67 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac346A886F7744E1B083D67Conditions;
  location: string;
}

interface The5Ac346A886F7744E1B083D67Conditions {
  "5ac5e79986f7747398341847": string;
  "5ac5e88e86f7741c5804f9db": string;
  "5ac5e98886f77479bc6ca201": string;
  "5ac5ea0586f774609f36280c": string;
  "5acf3b7186f774184175301d": string;
  "5acf3b7886f77418420bf36f": string;
  "5cb6f81d86f7740e9d452683": string;
  "5cb6f88d86f7747d215f09c1": string;
  "5cb6f8de86f7740e9d452685": string;
  "5cb6f9c586f7740ace254c44": string;
}

interface The5Ac346Cf86F7741D63233A02 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac346Cf86F7741D63233A02Conditions;
  location: string;
}

interface The5Ac346Cf86F7741D63233A02Conditions {
  "5ac7a7bf86f774132252a524": string;
  "5ac7a83b86f774665012340b": string;
  "5ac7a8d386f7741321499e3c": string;
  "5ac7a93286f774664f4cbd8c": string;
}

interface The5Ac346E886F7741D6118B99B {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac346E886F7741D6118B99BConditions;
  location: string;
}

interface The5Ac346E886F7741D6118B99BConditions {
  "5ac5eb3286f7746e7a509a09": string;
  "5acf3b9986f77418403493b5": string;
  "5acf3ba186f7741ce21f9b0c": string;
}

interface The5Ac3475486F7741D6224Abd3 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac3475486F7741D6224Abd3Conditions;
  location: string;
}

interface The5Ac3475486F7741D6224Abd3Conditions {
  "5ac5ee9986f7746e7a509a26": string;
  "5ac5eee986f77401fd341c9e": string;
  "5ac5ef2a86f7741c5804f9f5": string;
  "5ac5ef5686f77416ca60f644": string;
  "5ac5ef9886f7746e7a509a2d": string;
  "5ac5eff886f7740f43322559": string;
  "5acf3c3086f77418d851688f": string;
  "5acf3c3d86f7741ce21f9b1a": string;
}

interface The5Ac3477486F7741D651D6885 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5Ac3477486F7741D651D6885Conditions;
  location: string;
}

interface The5Ac3477486F7741D651D6885Conditions {
  "5ac61a8a86f7743a8d663c77": string;
  "5ac61ab986f7746e352cec8c": string;
  "5ac61adf86f774741c1bf096": string;
  "5ac61b1486f7743a8f30fc84": string;
  "5acf3bcb86f77418403493b7": string;
  "5acf3bd286f7741bb83784a3": string;
}

interface The5Ac3479086F7742880308199 {
  conditions: The5Ac3479086F7742880308199Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ac3479086F7742880308199Conditions {
  "5acf3dd886f77418d85168f2": string;
  "5acf3ddd86f77418420bf391": string;
  "5acf3df186f7741ce21f9b2b": string;
  "5dbadfd186f77449467d1482": string;
}

interface The5Ae3267986F7742A413592Fe {
  conditions: The5Ae3267986F7742A413592FeConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae3267986F7742A413592FeConditions {
  "5ae34b8b86f7741e5b1e5d48": string;
  "5af4132686f774174a49af96": string;
  "5af4134a86f7742574673cc5": string;
}

interface The5Ae3270F86F77445Ba41D4DD {
  conditions: The5Ae3270F86F77445Ba41D4DDConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae3270F86F77445Ba41D4DDConditions {
  "5ae3550b86f7741cf44fc799": string;
  "5af4136586f774551341dc75": string;
  "5af4139286f774522e34389b": string;
}

interface The5Ae3277186F7745973054106 {
  conditions: The5Ae3277186F7745973054106Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae3277186F7745973054106Conditions {
  "5ae3570b86f7746efa6b4494": string;
  "5af413ae86f774522e3438a5": string;
  "5af413b686f774522c7a6791": string;
}

interface The5Ae327C886F7745C7B3F2F3F {
  conditions: The5Ae327C886F7745C7B3F2F3FConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae327C886F7745C7B3F2F3FConditions {
  "5ae445f386f7744e87761331": string;
  "5af413ce86f774522e3438ae": string;
  "5af413e486f774522e3438df": string;
}

interface The5Ae3280386F7742A41359364 {
  conditions: The5Ae3280386F7742A41359364Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae3280386F7742A41359364Conditions {
  "5ae4479686f7744f6c79b7b3": string;
  "5af413fa86f77407184494f3": string;
  "5af4140186f774522d460775": string;
}

interface The5Ae448A386F7744D3730Fff0 {
  conditions: The5Ae448A386F7744D3730Fff0Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae448A386F7744D3730Fff0Conditions {
  "5ae44c6886f7744f1a7eb2b8": string;
  "5af414f286f774522f59b0d7": string;
}

interface The5Ae448Bf86F7744D733E55Ee {
  conditions: The5Ae448Bf86F7744D733E55EeConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae448Bf86F7744D733E55EeConditions {
  "5ae44ecd86f77414a13c970e": string;
  "5af4154186f7745c2674236d": string;
}

interface The5Ae448E586F7744Dcf0C2A67 {
  conditions: The5Ae448E586F7744Dcf0C2A67Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae448E586F7744Dcf0C2A67Conditions {
  "5ae4508386f7741250488337": string;
  "5ae450db86f7741250488359": string;
  "5ae450ee86f7740f9307859d": string;
  "5ae4510786f7740fa614399f": string;
  "5ae4511d86f7740ffc31ccb5": string;
  "5ae4514986f7740e915d218c": string;
  "5af4155d86f7745b5e2aba63": string;
}

interface The5Ae448F286F77448D73C0131 {
  conditions: The5Ae448F286F77448D73C0131Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae448F286F77448D73C0131Conditions {
  "5ae452c086f774336a397578": string;
  "5ae452de86f77450595c4333": string;
  "5ae452fa86f774336a39758e": string;
  "5ae4531986f774177033c3e6": string;
  "5b50761b88a4507f45121125": string;
}

interface The5Ae4490786F7744Ca822Adcc {
  conditions: The5Ae4490786F7744Ca822AdccConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4490786F7744Ca822AdccConditions {
  "5ae4543686f7742dc043c903": string;
  "5ae454a086f7742be909a81a": string;
  "5af4157f86f7745f696ebd3d": string;
  "5fd89729a8c881276c560433": string;
  "5fd89799c54dc00f463272d3": string;
}

interface The5Ae4493486F7744Efa289417 {
  conditions: The5Ae4493486F7744Efa289417Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4493486F7744Efa289417Conditions {
  "5ae9b32486f7745bbc72275a": string;
  "5ae9b34686f7743129512ccf": string;
  "5ae9b36c86f774307c29df04": string;
  "5ae9b38a86f77432c81e2ce3": string;
  "5ae9b3b186f7745bbc722762": string;
  "5ae9b3c986f77432c81e2ce6": string;
  "5af415b286f77407184495dd": string;
}

interface The5Ae4493D86F7744B8E15Aa8F {
  conditions: The5Ae4493D86F7744B8E15Aa8FConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4493D86F7744B8E15Aa8FConditions {
  "5ae9b5bd86f774307c29df37": string;
  "5ae9b63286f774229110402d": string;
  "5af415c386f7745c267423a7": string;
}

interface The5Ae4495086F77443C122Bc40 {
  conditions: The5Ae4495086F77443C122Bc40Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4495086F77443C122Bc40Conditions {
  "5ae4559386f7742dc043c95e": string;
  "5ae455be86f7742dc043c969": string;
  "5ae455fb86f7744dd8242380": string;
  "5ae4562086f774498b05e0dc": string;
  "5af415f486f7745bf73dad59": string;
  "5af4201386f774267375038c": string;
}

interface The5Ae4495C86F7744E87761355 {
  conditions: The5Ae4495C86F7744E87761355Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4495C86F7744E87761355Conditions {
  "5ae9b77f86f77432c81e3074": string;
  "5ae9b7c886f774307c29df56": string;
  "5ae9b91386f77415a869b3f3": string;
  "5ae9b93b86f7746e0026221a": string;
  "5af4165d86f7745bf73dad72": string;
}

interface The5Ae4496986F774459E77Beb6 {
  conditions: The5Ae4496986F774459E77Beb6Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4496986F774459E77Beb6Conditions {
  "5ae9bb6986f77415a869b40b": string;
  "5ae9bc6e86f7746e0026222c": string;
  "5ae9be7f86f7746c6337153d": string;
  "5ae9bea886f77468ab400e64": string;
}

interface The5Ae4497B86F7744Cf402Ed00 {
  conditions: The5Ae4497B86F7744Cf402Ed00Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4497B86F7744Cf402Ed00Conditions {
  "5ae45d7786f774178f237745": string;
  "5ae45d9386f774178f23774a": string;
  "5af079e486f77434693ad7f8": string;
  "5af07a0286f7747dba10d8ac": string;
  "5af4168d86f7745c267423dc": string;
}

interface The5Ae4498786F7744Bde357695 {
  conditions: The5Ae4498786F7744Bde357695Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4498786F7744Bde357695Conditions {
  "5ae9c0a686f774703201f143": string;
  "5ae9c0c986f77468ab400f88": string;
  "5ae9c0e186f7746419683c5e": string;
  "5ae9c10686f774703201f146": string;
  "5af416f086f7745c524a375f": string;
  "5af4192c86f774297e641027": string;
}

interface The5Ae4499A86F77449783815DB {
  conditions: The5Ae4499A86F77449783815DBConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae4499A86F77449783815DBConditions {
  "5ae9c29386f77427153c7fb0": string;
  "5af4170e86f7745c267423e9": string;
  "5af4171686f7741c8f21cb9e": string;
}

interface The5Ae449A586F7744Bde357696 {
  conditions: The5Ae449A586F7744Bde357696Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae449A586F7744Bde357696Conditions {
  "5ae9c38e86f7743515398707": string;
  "5af4172f86f774059056f692": string;
}

interface The5Ae449B386F77446D8741719 {
  conditions: The5Ae449B386F77446D8741719Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae449B386F77446D8741719Conditions {
  "5ae9e0dd86f77443f2500fd4": string;
  "5ae9e17c86f77440d37ce03c": string;
  "5ae9e1c786f77403fb3f9674": string;
  "5ae9e2a286f7740de4152a0a": string;
  "5ae9e2e386f7740de4152a0d": string;
  "5af4177686f77406f92eee62": string;
  "5af4178e86f77426757cb152": string;
}

interface The5Ae449C386F7744Bde357697 {
  conditions: The5Ae449C386F7744Bde357697Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae449C386F7744Bde357697Conditions {
  "5af417c086f7742a2712c3c2": string;
  "5af4196886f7742a2627a4be": string;
  "5bb60cbc88a45011a8235cc5": string;
}

interface The5Ae449D986F774453A54A7E1 {
  conditions: The5Ae449D986F774453A54A7E1Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ae449D986F774453A54A7E1Conditions {
  "5ae9e55886f77445315f662a": string;
  "5ae9e58886f77423572433f5": string;
  "5af417e386f77428ae313af3": string;
  "5af4181286f77428bb55edd9": string;
  "5af4186c86f77428ae313afa": string;
}

interface The5B47749F86F7746C5D6A5Fd4 {
  conditions: The5B47749F86F7746C5D6A5Fd4Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B47749F86F7746C5D6A5Fd4Conditions {
  "5b47796686f774374f4a8bb1": string;
  "5b4f082f86f7747a284dd609": string;
  "5b4f0cc186f7744def7f3389": string;
}

interface The5B47799D86F7746C5D6A5Fd8 {
  conditions: The5B47799D86F7746C5D6A5Fd8Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B47799D86F7746C5D6A5Fd8Conditions {
  "5b477b3b86f77401da02e6c4": string;
  "5b4f085586f7747a2910a9b2": string;
  "5b4f0d6086f7742c1f5a3c4d": string;
}

interface The5B477B6F86F7747290681823 {
  conditions: The5B477B6F86F7747290681823Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B477B6F86F7747290681823Conditions {
  "5b477f1486f7743009493232": string;
  "5b4f087886f77479806f2c61": string;
  "5b4f0cce86f774287331639a": string;
}

interface The5B477F7686F7744D1B23C4D2 {
  conditions: The5B477F7686F7744D1B23C4D2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B477F7686F7744D1B23C4D2Conditions {
  "5b47824386f7744d190d8dd1": string;
  "5b4f094886f7747b127d9d7f": string;
  "5b4f0d7186f77412bc326997": string;
}

interface The5B47825886F77468074618D3 {
  conditions: The5B47825886F77468074618D3Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B47825886F77468074618D3Conditions {
  "5b4783ba86f7744d1c353185": string;
  "5b4f095b86f7747a2637c3f9": string;
  "5b4f0ce686f77429c16dcb63": string;
}

interface The5B47876E86F7744D1C353205 {
  conditions: The5B47876E86F7744D1C353205Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B47876E86F7744D1C353205Conditions {
  "5b47884886f7744d1c35327d": string;
  "5b47886986f7744d1a393e65": string;
  "5b4f09c786f77479806f2cf3": string;
  "5b4f09f586f7744fba15b2dc": string;
  "5b4f0c7b86f77479ee584ab0": string;
}

interface The5B47891F86F7744D1B23C571 {
  conditions: The5B47891F86F7744D1B23C571Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B47891F86F7744D1B23C571Conditions {
  "5b47899386f77470315db7f3": string;
  "5b4789b586f7744d190d8f43": string;
  "5b4789df86f77468074619d7": string;
  "5b478a0986f7744d190d8f46": string;
  "5b478a2186f77468074619da": string;
  "5b478a3786f77470315db7fa": string;
  "5b478a6c86f7744d190d8f4d": string;
  "5b478a8486f7744d1c35328b": string;
  "5b4f0a4386f7744e1155e1ed": string;
  "5b4f0a5086f7744e3a6b328a": string;
  "5b4f0c8786f77479806f3028": string;
  "62a7004c1c307729c3264f9a": string;
  "62a70058ec21e50cad3b6709": string;
}

interface The5B478B1886F7744D1B23C57D {
  conditions: The5B478B1886F7744D1B23C57DConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B478B1886F7744D1B23C57DConditions {
  "5b478c4c86f7744d1a393fac": string;
  "5b478c7386f7744d1a393fb1": string;
  "5b478cb586f7744d1a393fb5": string;
  "5b4f0a8086f7744e3a6b3290": string;
  "5b4f0c9086f77453572f5538": string;
}

interface The5B478D0F86F7744D190D91B5 {
  conditions: The5B478D0F86F7744D190D91B5Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B478D0F86F7744D190D91B5Conditions {
  "5b478d8986f774563c7a4809": string;
  "5b478daf86f7744d1c35339b": string;
  "5b478dca86f7744d190d91c2": string;
  "5b478de086f7744d1c3533a1": string;
  "5b4f0ac386f7747a2637c4c0": string;
  "5b4f0c9d86f7744def7f3385": string;
}

interface The5B478Eca86F7744642012254 {
  conditions: The5B478Eca86F7744642012254Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B478Eca86F7744642012254Conditions {
  "5b478f6886f774464201225a": string;
  "5b478f8886f7744d1b23c622": string;
  "5b4c826b86f7743cc87bcee4": string;
  "5b4c82cd86f774170c6e4169": string;
  "5b4c832686f77419603eb8f0": string;
  "5b4c836486f77417063a09dc": string;
  "5b4f0b8b86f7747a2910aaa4": string;
  "5b4f0c1486f7747a2637c513": string;
}

interface The5B478Ff486F7744D184Ecbbf {
  conditions: The5B478Ff486F7744D184EcbbfConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B478Ff486F7744D184EcbbfConditions {
  "5b47905886f7746807461fe2": string;
  "5b4790a886f774563c7a489f": string;
  "5b4f0b1f86f7746c9e27e9ea": string;
  "5cb5ffd986f7746ef55de2c7": string;
  "5ec1388d83b69d213d3c2ee0": string;
}

interface The5B47926A86F7747Ccc057C15 {
  conditions: The5B47926A86F7747Ccc057C15Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B47926A86F7747Ccc057C15Conditions {
  "5b47932586f7747cc908b5dd": string;
  "5b47936686f77427fd044025": string;
  "5b47938086f7747ccc057c22": string;
  "5b4f0b6686f77479ee584a74": string;
  "5b4f0c0986f77453572f54e0": string;
}

interface The5B4794Cb86F774598100D5D4 {
  conditions: The5B4794Cb86F774598100D5D4Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B4794Cb86F774598100D5D4Conditions {
  "5b47952c86f774598100d5dc": string;
  "5b47958e86f774598100d5e2": string;
  "5b4795a586f774587a39506d": string;
  "5b4c742886f7745cef1d02f5": string;
  "5b4c75a786f7747332534b52": string;
  "5b4c764786f7746f3b494ee0": string;
  "5b4c769686f7746e535a5c0e": string;
  "5b4c76d886f77471d31735a3": string;
  "5b4c7aec86f77459732b4b08": string;
  "5b4c8e6586f77474396a5400": string;
  "5b4f0bca86f7744a6c2b8164": string;
  "5b4f0bfa86f77453572f54dc": string;
}

interface The5B4795Fb86F7745876267770 {
  conditions: The5B4795Fb86F7745876267770Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5B4795Fb86F7745876267770Conditions {
  "5b47968e86f7745877352c28": string;
  "5b4796c086f7745877352c2c": string;
  "5b47971086f774587877ad34": string;
  "5b4f0ba486f7747a2637c4fb": string;
  "5b4f0c5886f7747a2910aacd": string;
  "5c923d3d86f774556e08d7a5": string;
}

interface The5Bc4776586F774512D07Cf05 {
  conditions: The5Bc4776586F774512D07Cf05Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc4776586F774512D07Cf05Conditions {
  "5bc850d186f7747213700892": string;
  "5bdac2f186f7743e152e8695": string;
}

interface The5Bc479E586F7747F376C7Da3 {
  conditions: The5Bc479E586F7747F376C7Da3Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc479E586F7747F376C7Da3Conditions {
  "5bd983d886f7747ba73fc246": string;
  "5bd9842e86f7747baa07aba7": string;
  "5bd9944f86f774035c4877f3": string;
  "5bdabf0586f7743e1809c555": string;
}

interface The5Bc47Dbf86F7741Ee74E93B9 {
  conditions: The5Bc47Dbf86F7741Ee74E93B9Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc47Dbf86F7741Ee74E93B9Conditions {
  "5bc47e3e86f7741e6b2f3332": string;
  "5bdabf1f86f7743e1809c556": string;
}

interface The5Bc480A686F7741Af0342E29 {
  conditions: The5Bc480A686F7741Af0342E29Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc480A686F7741Af0342E29Conditions {
  "5bc4813886f774226045cb9a": string;
  "5bdabf3386f7743e171249ae": string;
}

interface The5Bc4826C86F774106D22D88B {
  conditions: The5Bc4826C86F774106D22D88BConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc4826C86F774106D22D88BConditions {
  "5bc84f7a86f774294c2f6862": string;
  "5bdabf4486f7743e1665df6d": string;
}

interface The5Bc4836986F7740C0152911C {
  conditions: The5Bc4836986F7740C0152911CConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc4836986F7740C0152911CConditions {
  "5bc483ba86f77415034ba8d0": string;
  "5bdabf5386f7743e152e867c": string;
}

interface The5Bc4856986F77454C317Bea7 {
  conditions: The5Bc4856986F77454C317Bea7Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc4856986F77454C317Bea7Conditions {
  "5bc485b586f774726473a858": string;
  "5bdabf6286f7743e171249af": string;
}

interface The5Bc4893C86F774626F5Ebf3E {
  conditions: The5Bc4893C86F774626F5Ebf3EConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Bc4893C86F774626F5Ebf3EConditions {
  "5bc48aed86f77452c947ce67": string;
  "5bdabf7186f7743e152e867d": string;
}

interface The5C0Bbaa886F7746941031D82 {
  conditions: The5C0Bbaa886F7746941031D82Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Bbaa886F7746941031D82Conditions {
  "5c0bc32986f7743e4d1002d2": string;
  "5c0bc43e86f7744794440ba5": string;
  "5c12320586f77437e44bcb15": string;
  "5c1233ac86f77406fa13baea": string;
  "5c17b96486f774331c793f28": string;
  "5c1fa91586f7740de474cb36": string;
  "5c50481c86f77410650e0521": string;
}

interface The5C0Bc91486F7746Ab41857A2 {
  conditions: The5C0Bc91486F7746Ab41857A2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Bc91486F7746Ab41857A2Conditions {
  "5c0bc95086f7746e784f39ec": string;
  "5c0bcc9c86f7746fe16dbba9": string;
  "5c1ea18b86f77461d75caa21": string;
  "5c1fa99086f77407e903a5fa": string;
}

interface The5C0Bd01E86F7747Cdd799E56 {
  conditions: The5C0Bd01E86F7747Cdd799E56Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Bd01E86F7747Cdd799E56Conditions {
  "5c1242fa86f7742aa04fed52": string;
  "5c17d05e86f77430a64c6c66": string;
  "5c20cd8f86f774337d77b7ef": string;
}

interface The5C0Bd94186F7747A727F09B2 {
  conditions: The5C0Bd94186F7747A727F09B2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Bd94186F7747A727F09B2Conditions {
  "5c1b765d86f77413193fa4f2": string;
  "5c1fabb986f77431f74f0de6": string;
  "5c1fabd686f77410894b63f8": string;
}

interface The5C0Bdb5286F774166E38Eed4 {
  conditions: The5C0Bdb5286F774166E38Eed4Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Bdb5286F774166E38Eed4Conditions {
  "5c0bdbb586f774166e38eed5": string;
  "5c1faac086f7740ebd348c76": string;
  "5c1faac986f77410894b63f5": string;
}

interface The5C0Bde0986F77479Cf22C2F8 {
  conditions: The5C0Bde0986F77479Cf22C2F8Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Bde0986F77479Cf22C2F8Conditions {
  "5c0bdf2c86f7746f016734a8": string;
  "5c137b8886f7747ae3220ff4": string;
  "5c137ef386f7747ae10a821e": string;
  "5c137f5286f7747ae267d8a3": string;
  "5c20007986f7743c7b263515": string;
  "5c20009b86f7742b3c0a8fd9": string;
  "629f10b114061f3074380298": string;
}

interface The5C0Be13186F7746F016734Aa {
  conditions: The5C0Be13186F7746F016734AaConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Be13186F7746F016734AaConditions {
  "5c0be2b486f7747bcb347d58": string;
  "5c1fb5f086f7744a184fb3c5": string;
  "5c1fb5f986f7744a1929a527": string;
}

interface The5C0Be5Fc86F774467A116593 {
  conditions: The5C0Be5Fc86F774467A116593Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0Be5Fc86F774467A116593Conditions {
  "5c0be66c86f7744523489ab2": string;
  "5c0be69086f7743c9c1ecf43": string;
  "5c1fd1ae86f7742b3b47f064": string;
  "5c1fd1b586f7742b3a651f74": string;
  "5fd892bc37b6e511a4734969": string;
  "5fd8935b7dd32f724e0fe7ee": string;
}

interface The5C0D0D5086F774363760Aef2 {
  conditions: The5C0D0D5086F774363760Aef2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0D0D5086F774363760Aef2Conditions {
  "5c0d0dfd86f7747f482a89a5": string;
  "5c1fd5e586f7743c7b261f79": string;
  "5c1fd5f586f7742b391bf138": string;
}

interface The5C0D0F1886F77457B8210226 {
  conditions: The5C0D0F1886F77457B8210226Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0D0F1886F77457B8210226Conditions {
  "5c138c4486f7743b056e2943": string;
  "5c138d4286f774276a6504aa": string;
  "5c1fd61486f7742b391bf139": string;
  "5c1fd61e86f7742b38529146": string;
  "5ec13d45a1032866196c939b": string;
  "5ec13da983b69d213d3c2ee4": string;
}

interface The5C0D190Cd09282029F5390D8 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5C0D190Cd09282029F5390D8Conditions;
  location: string;
}

interface The5C0D190Cd09282029F5390D8Conditions {
  "5c1b760686f77412780211a3": string;
  "5c1fab3986f7740ebd348c7a": string;
  "5c1fab4186f77431f74f0de5": string;
}

interface The5C0D1C4Cd0928202A02A6F5C {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5C0D1C4Cd0928202A02A6F5CConditions;
  location: string;
}

interface The5C0D1C4Cd0928202A02A6F5CConditions {
  "5c1b778286f774294438b536": string;
  "5c1fd52e86f7742b391bf099": string;
  "5c1fd53a86f7742b3c0a7b7a": string;
}

interface The5C0D4C12D09282029F539173 {
  conditions: The5C0D4C12D09282029F539173Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0D4C12D09282029F539173Conditions {
  "5c1b713486f77413bc250406": string;
  "5c1b713986f77470d8650910": string;
  "5c1b713f86f774719c22e8a0": string;
  "5c1fd66286f7743c7b261f7b": string;
  "5c20ce1786f77453c56d6397": string;
  "5c20ce2c86f774337f427599": string;
}

interface The5C0D4E61D09282029F53920E {
  conditions: The5C0D4E61D09282029F53920EConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C0D4E61D09282029F53920EConditions {
  "5c13979886f774251443c1a6": string;
  "5c13982286f774365a69cc4d": string;
  "5c13989886f7747878361a50": string;
  "5c0d4f46d09282029f539216": string;
  "5c1931e686f7747ce71bcbea": string;
  "5c0e6876d09282029e2fffe0": string;
  "5c0e687ad0928202b25db840": string;
  "5d0a0e2286f7743a1a74d63b": string;
  "5d0a111586f7743a1b0d87b1": string;
  "5dc984ae4b68b15f4825cea5": string;
  "629f08e7d285f377953b2af1": string;
}

interface The5C10F94386F774227172C572 {
  conditions: The5C10F94386F774227172C572Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C10F94386F774227172C572Conditions {
  "5c10f94386f774227172c574": string;
  "5c10f94386f774227172c575": string;
  "5c10f94386f774227172c576": string;
  "5c10f94386f774227172c577": string;
  "5c1fb27e86f7744a160dda8c": string;
  "5c1fcf9486f7742b3b47e370": string;
}

interface The5C1128E386F7746565181106 {
  conditions: The5C1128E386F7746565181106Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C1128E386F7746565181106Conditions {
  "5c1129ed86f7746569440e88": string;
  "5c112a1b86f774656777d1ae": string;
  "5c1fb45b86f7744a1a275659": string;
  "5c1fb46386f7744a184fb3c2": string;
  "5ca719ef86f7740a78020783": string;
  "5ca71a1e86f7740f5a5b88a2": string;
}

interface The5C112D7E86F7740D6F647486 {
  conditions: The5C112D7E86F7740D6F647486Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C112D7E86F7740D6F647486Conditions {
  "5c112dc486f77465686bff38": string;
  "5c1fd15f86f7742b3c0a7b78": string;
  "5c1fd17786f7742b3b47f063": string;
}

interface The5C1141F386F77430Ff393792 {
  conditions: The5C1141F386F77430Ff393792Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C1141F386F77430Ff393792Conditions {
  "5c11427386f77430ff393793": string;
  "5c122c5f86f77437e44bcb0e": string;
  "5c1fd03686f7742b3c0a6a9f": string;
  "5c1fd04886f7742b3b47e8a2": string;
  "5ca7254e86f7740d424a2043": string;
  "5ca7258986f7740d424a2044": string;
  "62a700893e015d7ce1151d90": string;
  "62a700a37230237f257cac2d": string;
  "62a70094ec21e50cad3b670b": string;
  "62a700c2ec21e50cad3b670c": string;
}

interface The5C1234C286F77406Fa13Baeb {
  conditions: The5C1234C286F77406Fa13BaebConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C1234C286F77406Fa13BaebConditions {
  "5c1fa9c986f7740de474cb3d": string;
  "5c1faa0d86f77410894b63ef": string;
  "5c1faa1986f7740ebd348c71": string;
}

interface The5C12452C86F7744B83469073 {
  conditions: The5C12452C86F7744B83469073Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C12452C86F7744B83469073Conditions {
  "5c12470d86f77465ae27a8c0": string;
  "5c1247f386f77452db1d2b03": string;
  "5c12484586f7744b83469074": string;
  "5c12487386f7742a60324299": string;
  "5c12489886f77452db1d2b05": string;
  "5c1248ef86f77428266184c2": string;
  "5c1fab8686f77410894b63f7": string;
  "5c1fab9286f77407e903a60d": string;
}

interface The5C139Eb686F7747878361A6F {
  conditions: The5C139Eb686F7747878361A6FConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5C139Eb686F7747878361A6FConditions {
  "5c139eb686f7747878361a72": string;
  "5c139eb686f7747878361a73": string;
  "5c1fcf3786f7742b3b47e36f": string;
  "5c1fcf4086f7742b38527bde": string;
  "5ec14003e16f6c41ee73525f": string;
  "5ec14080c9ffe55cca300867": string;
}

interface The5C51Aac186F77432Ea65C552 {
  conditions: { [key: string]: string };
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D2495A886F77425Cd51E403 {
  conditions: The5D2495A886F77425Cd51E403Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D2495A886F77425Cd51E403Conditions {
  "5d2496fb86f77425ce7f1254": string;
  "5d249a6e86f774791546e952": string;
  "5d249aa286f77475e8376399": string;
  "5d7fc0f386f77440373c4d78": string;
  "5d7fc0fb86f77440351becb3": string;
}

interface The5D24B81486F77439C92D6Ba8 {
  conditions: The5D24B81486F77439C92D6Ba8Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D24B81486F77439C92D6Ba8Conditions {
  "5d24ba7886f77439c92d6baa": string;
  "5d24bb4886f77439c92d6bad": string;
  "5d24bb7286f7741f7956be74": string;
  "5d76276186f774454c5360bc": string;
  "5d77d51c86f7742fa65b6608": string;
}

interface The5D25Aed386F77442734D25D2 {
  conditions: The5D25Aed386F77442734D25D2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25Aed386F77442734D25D2Conditions {
  "5d25af3c86f77443ff46b9e7": string;
  "5d76302d86f774454d58840e": string;
  "5d77d4a386f7745041358b56": string;
}

interface The5D25B6Be86F77444001E1B89 {
  conditions: The5D25B6Be86F77444001E1B89Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25B6Be86F77444001E1B89Conditions {
  "5d25beca86f77409dd5cdbb3": string;
  "5d25beeb86f77443fe45765f": string;
  "5d2deedc86f77459121c3118": string;
  "5d2defc586f774591510e6b9": string;
  "5d76307886f774454c5360c1": string;
  "5d77d13e86f77461b27a237a": string;
}

interface The5D25Bfd086F77442734D3007 {
  conditions: The5D25Bfd086F77442734D3007Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25Bfd086F77442734D3007Conditions {
  "5d25c5a186f77443fe457661": string;
  "5d9f035086f7741cac4a9713": string;
  "5dadc98786f7744b0c681e8e": string;
  "5dadc99686f7744b0f1b1d2a": string;
}

interface The5D25C81B86F77443E625Dd71 {
  conditions: The5D25C81B86F77443E625Dd71Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25C81B86F77443E625Dd71Conditions {
  "5d25c8c986f77443e47ad47a": string;
  "5d7630e286f774452173421a": string;
  "5d77d0f286f7742fa65b6604": string;
}

interface The5D25Cf2686F77443E75488D4 {
  conditions: The5D25Cf2686F77443E75488D4Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25Cf2686F77443E75488D4Conditions {
  "5d25d09286f77444001e284c": string;
  "5d25d0d186f7740a22515975": string;
  "5d9c940886f7742cd41c59c0": string;
  "5d9c941f86f7743554286958": string;
}

interface The5D25D2C186F77443E35162E5 {
  conditions: The5D25D2C186F77443E35162E5Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25D2C186F77443E35162E5Conditions {
  "5d25d4e786f77442734d335d": string;
  "5d76322786f774454e50d062": string;
  "5d84afb986f77414e20063ea": string;
}

interface The5D25Dae186F77443E55D2F78 {
  conditions: The5D25Dae186F77443E55D2F78Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25Dae186F77443E55D2F78Conditions {
  "5d25dc2286f77443e7549028": string;
  "5d76332c86f774454e50d063": string;
  "5d77cdc286f7742fa65b6603": string;
}

interface The5D25E29D86F7740A22516326 {
  conditions: The5D25E29D86F7740A22516326Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E29D86F7740A22516326Conditions {
  "5d25fd8386f77443fe457cae": string;
  "5d77cd9d86f7742fa857dd73": string;
  "5d77cda786f774319c488837": string;
}

interface The5D25E2A986F77409Dd5Cdf2A {
  conditions: The5D25E2A986F77409Dd5Cdf2AConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E2A986F77409Dd5Cdf2AConditions {
  "5d2605ef86f77469ef0f7622": string;
  "5d76336486f7744527181847": string;
  "5d77cd3d86f7742fa732bf15": string;
}

interface The5D25E2B486F77409De05Bba0 {
  conditions: The5D25E2B486F77409De05Bba0Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E2B486F77409De05Bba0Conditions {
  "5d26143c86f77469ef0f894c": string;
  "5d763d7c86f774452073df77": string;
  "5d77cc4886f7742fa732bf14": string;
}

interface The5D25E2C386F77443E7549029 {
  conditions: The5D25E2C386F77443E7549029Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E2C386F77443E7549029Conditions {
  "5d26fd8886f77469f0445745": string;
  "5d2710e686f7742e9019a6b2": string;
  "5d66741c86f7744a2e70f039": string;
  "5d77689686f7742fa857dd34": string;
  "5d77c96386f7742fa901bcc7": string;
}

interface The5D25E2Cc86F77443E47Ae019 {
  conditions: The5D25E2Cc86F77443E47Ae019Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E2Cc86F77443E47Ae019Conditions {
  "5d2701b586f77469f1599fe2": string;
  "5d7768bf86f774319c488824": string;
  "5d77c8df86f7742fa65b6602": string;
}

interface The5D25E2D886F77442734D335E {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5D25E2D886F77442734D335EConditions;
  location: string;
}

interface The5D25E2D886F77442734D335EConditions {
  "5d307fc886f77447f15f5b23": string;
  "5d77695b86f7742fa901bc75": string;
  "5d77c84d86f7742fa901bcc6": string;
}

interface The5D25E2E286F77444001E2E48 {
  conditions: The5D25E2E286F77444001E2E48Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E2E286F77444001E2E48Conditions {
  "5d2719b186f7740701348573": string;
  "5d271a3486f774483c7bdb12": string;
  "5d667a8e86f774131e206b46": string;
  "5d776b1986f77461b27a2354": string;
  "5d77c80b86f7742fa65b6601": string;
}

interface The5D25E2Ee86F77443E35162Ea {
  conditions: The5D25E2Ee86F77443E35162EaConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E2Ee86F77443E35162EaConditions {
  "5d27276886f7740701348578": string;
  "5d272a0b86f7745ba2701532": string;
  "5d2f464e498f71c8886f7656": string;
  "5d77c65786f7742fa901bcc5": string;
  "5d77c66586f7742fa732bf13": string;
}

interface The5D25E43786F7740A212217Fa {
  conditions: The5D25E43786F7740A212217FaConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E43786F7740A212217FaConditions {
  "5d272bd386f77446085fa4f9": string;
  "5d776ef786f7742fa5005cb5": string;
  "5d77a48286f77461b27a236b": string;
}

interface The5D25E44386F77409453Bce7B {
  conditions: The5D25E44386F77409453Bce7BConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E44386F77409453Bce7BConditions {
  "5d2733c586f7741dea4f3072": string;
  "5d77710186f774319c488825": string;
  "5d77a45386f774319c488836": string;
}

interface The5D25E44F86F77443E625E385 {
  conditions: The5D25E44F86F77443E625E385Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E44F86F77443E625E385Conditions {
  "5d27369586f774457411b264": string;
  "5d777e3a86f7742fa857dd36": string;
  "5d777eb086f7742fa732bf05": string;
}

interface The5D25E45E86F77408251C4Bfa {
  conditions: The5D25E45E86F77408251C4BfaConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E45E86F77408251C4BfaConditions {
  "5d273a4d86f774457411b266": string;
  "5d777f5d86f7742fa901bc77": string;
  "5d777ffd86f774319c488827": string;
  "5d77a3b286f7745041358b44": string;
}

interface The5D25E46E86F77409453Bce7C {
  conditions: The5D25E46E86F77409453Bce7CConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E46E86F77409453Bce7CConditions {
  "5d27446f86f77475a86565a3": string;
  "5d7782c686f7742fa732bf07": string;
  "5d7782f886f7742fa65b65f5": string;
  "5d77830086f7745041358b35": string;
  "5d77a38e86f7745041358b43": string;
  "5ec1504183b69d213d3c2ee8": string;
  "5ec1538a92e95f77ac7a2529": string;
}

interface The5D25E48186F77443E625E386 {
  conditions: The5D25E48186F77443E625E386Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E48186F77443E625E386Conditions {
  "5d357b6c86f774588d4d7e25": string;
  "5d357b9586f7745b422d653f": string;
  "5d357bb786f774588d4d7e27": string;
  "5d7784cc86f7742fa5005cba": string;
  "5d77854786f7745041358b36": string;
  "5d77a36086f77461b27a236a": string;
  "629f4f080f57046e362e6e9e": string;
}

interface The5D25E48D86F77408251C4Bfb {
  conditions: The5D25E48D86F77408251C4BfbConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E48D86F77408251C4BfbConditions {
  "5d27491686f77475aa5cf5b9": string;
  "5d6949e786f774238a38d9e0": string;
  "5d77a27d86f774319c488835": string;
  "5d77a29b86f7742fa65b6600": string;
}

interface The5D25E4Ad86F77443E625E387 {
  conditions: The5D25E4Ad86F77443E625E387Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E4Ad86F77443E625E387Conditions {
  "5d27522686f774304e316405": string;
  "5d357e0e86f7745b3f307c56": string;
  "5d357e8786f7745b5e66a51a": string;
  "5d778e6c86f77461b27a235d": string;
  "5d778e7c86f7742fa901bc7c": string;
  "5d77a24986f7742fa65b65ff": string;
}

interface The5D25E4B786F77408251C4Bfc {
  conditions: The5D25E4B786F77408251C4BfcConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E4B786F77408251C4BfcConditions {
  "5d2f375186f7745916404955": string;
  "5d778ebb86f7742fa732bf09": string;
  "5d778ec586f7745041358b37": string;
  "5d778f7d86f7742fa65b65f9": string;
  "5d8a09d386f77410b4225d13": string;
}

interface The5D25E4Ca86F77409Dd5Cdf2C {
  conditions: The5D25E4Ca86F77409Dd5Cdf2CConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D25E4Ca86F77409Dd5Cdf2CConditions {
  "5d7793fa86f7742fa901bc80": string;
  "5d77940986f7742fa732bf0a": string;
  "5fd8aa3206fb3a6b8154a2c3": string;
}

interface The5D25E4D586F77443E625E388 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5D25E4D586F77443E625E388Conditions;
  location: string;
}

interface The5D25E4D586F77443E625E388Conditions {
  "5d77a16486f77461b27a2369": string;
  "5d77a17386f7742fa901bcc2": string;
  "5d8a05d086f77410b4225d10": string;
  "629f1259422dff20ff234b4d": string;
}

interface The5D4Bec3486F7743Cac246665 {
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  conditions: The5D4Bec3486F7743Cac246665Conditions;
  location: string;
}

interface The5D4Bec3486F7743Cac246665Conditions {
  "5d4bfe4b86f7744a9d4fe032": string;
  "5d4bfe7c86f7744a9c66b316": string;
  "5d4c020a86f77449c463ced6": string;
  "5d4c028c86f774389001e027": string;
  "5d761f6886f7744521734218": string;
  "5d77db2186f7745041358b57": string;
}

interface The5D6Fb2C086F77449Da599C24 {
  conditions: The5D6Fb2C086F77449Da599C24Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D6Fb2C086F77449Da599C24Conditions {
  "5d6fb8a886f77449db3db8b6": string;
  "5d77c61786f7742fa732bf12": string;
}

interface The5D6Fbc2886F77449D825F9D3 {
  conditions: The5D6Fbc2886F77449D825F9D3Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5D6Fbc2886F77449D825F9D3Conditions {
  "5d6fbf0f86f77449d97f738e": string;
  "5d77c55886f7742fa901bcc4": string;
}

interface The5Dc53Acb86F77469C740C893 {
  conditions: The5Dc53Acb86F77469C740C893Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Dc53Acb86F77469C740C893Conditions {
  "5dc53fd386f77469c87589a3": string;
  "5dc541ad86f7741416111d02": string;
  "5dc541c386f77469c87589a6": string;
}

interface The5E381B0286F77420E3417A74 {
  conditions: The5E381B0286F77420E3417A74Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5E381B0286F77420E3417A74Conditions {
  "5e38261886f77429853af26c": string;
  "5e382b6986f7741b72695045": string;
  "5e382d6386f77429a01f82fb": string;
  "5e382fef86f7741e53790d40": string;
  "5e38356d86f7742993306cac": string;
  "5e3835e886f77429910d4465": string;
  "5e58d9f286f7747c295d2892": string;
  "5e58daaa86f7747c25656a53": string;
  "5e58dabd86f7747c27218702": string;
  "5e58dace86f7747c295d2893": string;
}

interface The5E383A6386F77465910Ce1F3 {
  conditions: The5E383A6386F77465910Ce1F3Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5E383A6386F77465910Ce1F3Conditions {
  "5e383a6386f77465910ce1f4": string;
  "5e383a6386f77465910ce1f5": string;
  "5e383a6386f77465910ce1f6": string;
  "5e383a6386f77465910ce1f7": string;
  "5e383a6386f77465910ce1f8": string;
  "5e383a6386f77465910ce1f9": string;
  "5e58dd0a86f7747c27218709": string;
  "5e58dd1286f774170f538d62": string;
  "5e58dd1f86f7747c25656a55": string;
  "5e58dd2a86f7747c28220304": string;
}

interface The5E4D4Ac186F774264F758336 {
  conditions: The5E4D4Ac186F774264F758336Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5E4D4Ac186F774264F758336Conditions {
  "5e4d4ac186f774264f758339": string;
  "5e4d4ac186f774264f75833a": string;
  "5e4d4ac186f774264f75833c": string;
  "5e4d4ac186f774264f75833b": string;
  "5e4d4ac186f774264f758338": string;
  "5e4d4ac186f774264f758337": string;
  "5e58db0986f7740bef574f02": string;
  "5e58db2386f7747c28220302": string;
}

interface The5E4D515E86F77438B2195244 {
  conditions: The5E4D515E86F77438B2195244Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5E4D515E86F77438B2195244Conditions {
  "5e4d515e86f77438b2195245": string;
  "5e4d515e86f77438b2195246": string;
  "5e4d515e86f77438b2195247": string;
  "5e4d515e86f77438b2195248": string;
  "5e4d515e86f77438b2195249": string;
  "5e4d515e86f77438b219524a": string;
  "5e58dbf386f7747c25656a54": string;
  "5e58dd9086f7747c2639ee43": string;
}

interface The5E73519B0B997B5E887E59B3 {
  conditions: The5E73519B0B997B5E887E59B3Conditions;
  location: string;
  name: string;
}

interface The5E73519B0B997B5E887E59B3Conditions {
  "5e7a0773838c444eb02dd0c4": string;
  "5e7b30e574986d20835c2185": string;
}

interface The5E748327Dbe23170E05094F4 {
  conditions: The5E748327Dbe23170E05094F4Conditions;
  location: string;
  name: string;
}

interface The5E748327Dbe23170E05094F4Conditions {
  "5e74833f0b1f9954c86ee49c": string;
}

interface The5E748D226725D419A47E2101 {
  conditions: The5E748D226725D419A47E2101Conditions;
  location: string;
  name: string;
}

interface The5E748D226725D419A47E2101Conditions {
  "5e748d406725d419a47e2104": string;
}

interface The5E748D9Fc73F9622610Abb37 {
  conditions: The5E748D9Fc73F9622610Abb37Conditions;
  location: string;
  name: string;
}

interface The5E748D9Fc73F9622610Abb37Conditions {
  "5e748dc9391f136a9201292e": string;
}

interface The5E748Df9C73F9622610Abb38 {
  conditions: The5E748Df9C73F9622610Abb38Conditions;
  location: string;
  name: string;
}

interface The5E748Df9C73F9622610Abb38Conditions {
  "5e748e12c73f9622610abb3b": string;
}

interface The5E748E8Fa848081E986A58A2 {
  conditions: The5E748E8Fa848081E986A58A2Conditions;
  location: string;
  name: string;
}

interface The5E748E8Fa848081E986A58A2Conditions {
  "5e7b805f0bc7e118403c847d": string;
}

interface The5E74921Dc73F9622610Abb3E {
  conditions: The5E74921Dc73F9622610Abb3EConditions;
  location: string;
  name: string;
}

interface The5E74921Dc73F9622610Abb3EConditions {
  "5e74922b35e14d4fb162de6d": string;
}

interface The5E7492C2Cdcce040Bf508424 {
  conditions: The5E7492C2Cdcce040Bf508424Conditions;
  location: string;
  name: string;
}

interface The5E7492C2Cdcce040Bf508424Conditions {
  "5e749308a848081e986a58a6": string;
}

interface The5E7493D5C377F60Fe17D6Ec8 {
  conditions: The5E7493D5C377F60Fe17D6Ec8Conditions;
  location: string;
  name: string;
}

interface The5E7493D5C377F60Fe17D6Ec8Conditions {
  "5e7493e9c377f60fe17d6ecb": string;
}

interface The5E749741Dec1852497081E69 {
  conditions: The5E749741Dec1852497081E69Conditions;
  location: string;
  name: string;
}

interface The5E749741Dec1852497081E69Conditions {
  "5e74a5f2647a0846684a1dc4": string;
}

interface The5E749800E80D6C7Ea20E93De {
  conditions: The5E749800E80D6C7Ea20E93DeConditions;
  location: string;
  name: string;
}

interface The5E749800E80D6C7Ea20E93DeConditions {
  "5e789b80d7dc7108e2674cce": string;
  "5e7a14d6e77ff7644b69fec4": string;
}

interface The5E7498198F3A2F53Cc477E99 {
  conditions: The5E7498198F3A2F53Cc477E99Conditions;
  location: string;
  name: string;
}

interface The5E7498198F3A2F53Cc477E99Conditions {
  "5e74983470d454700576d1fb": string;
}

interface The5E7498Cc2Eb35C76F5087A47 {
  conditions: The5E7498Cc2Eb35C76F5087A47Conditions;
  location: string;
  name: string;
}

interface The5E7498Cc2Eb35C76F5087A47Conditions {
  "5e7498d9c377f60fe17d6ed4": string;
}

interface The5E74990C647A0846684A1Db4 {
  conditions: The5E74990C647A0846684A1Db4Conditions;
  location: string;
  name: string;
}

interface The5E74990C647A0846684A1Db4Conditions {
  "5e749921dec1852497081e6d": string;
}

interface The5E74A68870D454700576D1Fe {
  conditions: The5E74A68870D454700576D1FeConditions;
  location: string;
  name: string;
}

interface The5E74A68870D454700576D1FeConditions {
  "5e74a6a4d9d3481b8e64369e": string;
}

interface The5E74A765C377F60Fe17D6Edb {
  conditions: The5E74A765C377F60Fe17D6EdbConditions;
  location: string;
  name: string;
}

interface The5E74A765C377F60Fe17D6EdbConditions {
  "5e74a798763a4645365a6186": string;
}

interface The5E74A8A9Dfc5Fc63E27A781A {
  conditions: The5E74A8A9Dfc5Fc63E27A781AConditions;
  location: string;
  name: string;
}

interface The5E74A8A9Dfc5Fc63E27A781AConditions {
  "5e74a8e914847d2f305bfb94": string;
  "5e7b6333b4c9b140be78c134": string;
}

interface The5E74A9Be70D454700576D1Ff {
  conditions: The5E74A9Be70D454700576D1FfConditions;
  location: string;
  name: string;
}

interface The5E74A9Be70D454700576D1FfConditions {
  "5e7a0c8ee77ff7644b69febe": string;
}

interface The5E74Aafac377F60Fe17D6Ede {
  conditions: The5E74Aafac377F60Fe17D6EdeConditions;
  location: string;
  name: string;
}

interface The5E74Aafac377F60Fe17D6EdeConditions {
  "5e7b2993f60dc341415906fb": string;
}

interface The5E74Ac3F70D454700576D200 {
  conditions: The5E74Ac3F70D454700576D200Conditions;
  location: string;
  name: string;
}

interface The5E74Ac3F70D454700576D200Conditions {
  "5e74ac57763a4645365a618b": string;
}

interface The5E74Ad13647A0846684A1Dc8 {
  conditions: The5E74Ad13647A0846684A1Dc8Conditions;
  location: string;
  name: string;
}

interface The5E74Ad13647A0846684A1Dc8Conditions {
  "5e74ad1b5b887d725349f618": string;
  "5e74afbf763a4645365a6193": string;
  "5e74afccdfc5fc63e27a7821": string;
  "5e79feeb3db8ef255a7c6550": string;
  "5e7a13f5aabec26b11417296": string;
  "5e7a13facfd9c45fdf382af4": string;
  "5e7a13ffb9cbe86fb360bb74": string;
}

interface The5E74B1B201E03F5A8D48Aff9 {
  conditions: The5E74B1B201E03F5A8D48Aff9Conditions;
  location: string;
  name: string;
}

interface The5E74B1B201E03F5A8D48Aff9Conditions {
  "5e74b1c4c16d705f775de1db": string;
}

interface The5E74Be4C24C2C642Fa612776 {
  conditions: The5E74Be4C24C2C642Fa612776Conditions;
  location: string;
  name: string;
}

interface The5E74Be4C24C2C642Fa612776Conditions {
  "5e7a012228b2fd48f6591c8f": string;
}

interface The5E74Be7B258B0422556B70D7 {
  conditions: The5E74Be7B258B0422556B70D7Conditions;
  location: string;
  name: string;
}

interface The5E74Be7B258B0422556B70D7Conditions {
  "5e79ffc73db8ef255a7c6554": string;
  "5e7a13c35b8bd347797f4fe5": string;
}

interface The5E85E1D15549Dd01Fe748B5A {
  conditions: The5E85E1D15549Dd01Fe748B5AConditions;
  location: string;
  name: string;
}

interface The5E85E1D15549Dd01Fe748B5AConditions {
  "5e85e22e5549dda42377fa77": string;
}

interface The5E85E2Fa5549Dd01Fe748B5B {
  conditions: The5E85E2Fa5549Dd01Fe748B5BConditions;
  location: string;
  name: string;
}

interface The5E85E2Fa5549Dd01Fe748B5BConditions {
  "5e85e32a5549ddfb4a0cdb3a": string;
}

interface The5E85E40D5549Dd10225137B9 {
  conditions: The5E85E40D5549Dd10225137B9Conditions;
  location: string;
  name: string;
}

interface The5E85E40D5549Dd10225137B9Conditions {
  "5e872a5a5549ddc49d49a643": string;
}

interface The5E85E5025549Dda42377Fa7B {
  conditions: The5E85E5025549Dda42377Fa7BConditions;
  location: string;
  name: string;
}

interface The5E85E5025549Dda42377Fa7BConditions {
  "5e85e5405549ddb56f1cf0d9": string;
}

interface The5E85E77E5549Ddf8E2131C0B {
  conditions: The5E85E77E5549Ddf8E2131C0BConditions;
  location: string;
  name: string;
}

interface The5E85E77E5549Ddf8E2131C0BConditions {
  "5e85e7b45549dd422605cc1d": string;
}

interface The5Eaaaa7C93Afa0558F3B5A1C {
  conditions: The5Eaaaa7C93Afa0558F3B5A1CConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Eaaaa7C93Afa0558F3B5A1CConditions {
  "5eaaaa7c93afa0558f3b5a1f": string;
}

interface The5Eda19F0Edce541157209Cee {
  conditions: The5Eda19F0Edce541157209CeeConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Eda19F0Edce541157209CeeConditions {
  "5eda1a67ef0ad2643e73af31": string;
  "5eda1d6ec586607c09662d54": string;
  "5eda1da9a58a4c49c74165ee": string;
  "5eda1dd3317f6066993c1744": string;
  "5f0389268580cc37797e0026": string;
  "5f1049d7aa82db0e8f75cb7b": string;
  "5f1049fe6e4dc7329756c9e8": string;
}

interface The5Edab4B1218D181E29451435 {
  conditions: The5Edab4B1218D181E29451435Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edab4B1218D181E29451435Conditions {
  "5edab5a6cecc0069284c0ec2": string;
  "5edac4fb16d985118871ba2d": string;
}

interface The5Edab736Cc183C769D778Bc2 {
  conditions: The5Edab736Cc183C769D778Bc2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edab736Cc183C769D778Bc2Conditions {
  "5edab7d3cc183c769d778bc5": string;
  "5edab8890880da21347b3826": string;
  "5edab8e216d985118871ba18": string;
  "5edababacecc0069284c0ec7": string;
  "5f03969a51823847c253afa0": string;
  "5f104ae158bd417a8a3e9d8f": string;
  "5f104af087fa885f9d696bed": string;
}

interface The5Edaba7C0C502106F869Bc02 {
  conditions: The5Edaba7C0C502106F869Bc02Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edaba7C0C502106F869Bc02Conditions {
  "5edabacabcf60e4a143cb29f": string;
  "5edabb0b0c502106f869bc03": string;
  "5edabb950c502106f869bc04": string;
  "5edabbff0880da21347b382b": string;
  "5edabc2ca0055865214cb5a6": string;
}

interface The5Edabd13218D181E29451442 {
  conditions: The5Edabd13218D181E29451442Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edabd13218D181E29451442Conditions {
  "5edabdea60bdcc7ff3558119": string;
  "5edabe120880da21347b382d": string;
  "5edabed50880da21347b382e": string;
  "5edabf0fcc183c769d778bcc": string;
  "5f039da057a46716b610b577": string;
  "5f071b2a8ca6db7f3b41215f": string;
  "5f071ae396d1ae55e476abc4": string;
  "5f071a9727cec53d5d24fe3b": string;
}

interface The5Edac020218D181E29451446 {
  conditions: The5Edac020218D181E29451446Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edac020218D181E29451446Conditions {
  "5edac0e02ddc9e4c802cd969": string;
  "5edac1040880da21347b3845": string;
  "5edac13760bdcc7ff355811f": string;
  "5edac1530880da21347b3846": string;
  "5edac190cecc0069284c0ed2": string;
  "5edac1b2930f5454f51dcac4": string;
  "5edac1e116d985118871ba24": string;
  "5edac1fccc183c769d778bd3": string;
  "5edac22860bdcc7ff3558124": string;
  "5edac2582ddc9e4c802cd970": string;
  "5edac2897869412e9c669c32": string;
  "5edac2a260bdcc7ff3558127": string;
  "5edac2cc16d985118871ba29": string;
  "5edac2e10bb72a50635c2bf9": string;
}

interface The5Edac34D0Bb72A50635C2Bfa {
  conditions: The5Edac34D0Bb72A50635C2BfaConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edac34D0Bb72A50635C2BfaConditions {
  "5edac37c218d181e29451453": string;
  "5edac3dfd143ed1d6378d13d": string;
  "5edac3f60880da21347b384e": string;
  "5edac465a0055865214cb5b6": string;
  "5f046f9825b2ad51bd275800": string;
  "5f07025e27cec53d5d24fe25": string;
  "5f04935cde3b9e0ecf03d864": string;
  "5f0702c3d9d49120185e6323": string;
  "5f04944b69ef785df740a8c9": string;
  "5f070323d57aeb6e09253785": string;
  "5f0495458654d20be3564f4c": string;
  "5f070350f6b5847ad975ceac": string;
  "5f0495b8efefac7f7227de63": string;
}

interface The5Edac63B930F5454F51E128B {
  conditions: The5Edac63B930F5454F51E128BConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Edac63B930F5454F51E128BConditions {
  "5edac657cc183c769d778bdc": string;
  "5edac6db0bb72a50635c73b7": string;
  "5edac79da0055865214cb5be": string;
  "5edac7f4cc183c769d778bdf": string;
  "5edac8483c809a44ef12b4d2": string;
  "5eec9d054110547f1f545c99": string;
  "5eff5674befb6436ce3bbaf7": string;
}

interface The5Ede55112C95834B583F052A {
  conditions: The5Ede55112C95834B583F052AConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ede55112C95834B583F052AConditions {
  "5ede5528bc2ff1141a199367": string;
  "5ee0e5a8c321a77fc55084d2": string;
  "5ee8eea538ca5b3b4f3c4647": string;
  "5ee8eecc0b4ef7326256c660": string;
  "5ef094ac32e6cc3234361a30": string;
}

interface The5Ede567Cfa6Dc072Ce15D6E3 {
  conditions: The5Ede567Cfa6Dc072Ce15D6E3Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Ede567Cfa6Dc072Ce15D6E3Conditions {
  "5ede56b7fe4acc3830718650": string;
  "5edea1ed61c2534c4f043d80": string;
  "5edea20f29445733cb4c29cd": string;
  "5ee0d988c321a77fc55084cf": string;
  "5ee0e722c321a77fc55084d5": string;
  "5ee8ec5ed72d953f5d2aabd1": string;
  "5ee8ecd75eb3205dae135d17": string;
  "5ee8ed18d72d953f5d2aabd4": string;
  "5ee8eddde932d53763761b2c": string;
  "5ee8edf1500391756d7498a7": string;
}

interface The5F04886A3937Dc337A6B8238 {
  conditions: The5F04886A3937Dc337A6B8238Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5F04886A3937Dc337A6B8238Conditions {
  "5f04983ffbed7a08077b4367": string;
  "5f0da368ee0d8b5aa14a625f": string;
  "5f0488c590eea473df674002": string;
}

interface The5F70Abfae9F14826Bf7C1C65 {
  conditions: The5F70Abfae9F14826Bf7C1C65Conditions;
  location: string;
  name: string;
}

interface The5F70Abfae9F14826Bf7C1C65Conditions {
  "5f970525cfe8173d12189403": string;
}

interface The5F70Acb63A7Ec37E73013427 {
  conditions: The5F70Acb63A7Ec37E73013427Conditions;
  location: string;
  name: string;
}

interface The5F70Acb63A7Ec37E73013427Conditions {
  "5f75c801ce26be0d620b7ff4": string;
  "5f995e4959c80875e62a667d": string;
}

interface The5F70B9Cfe9F14826Bf7C1C67 {
  conditions: The5F70B9Cfe9F14826Bf7C1C67Conditions;
  location: string;
  name: string;
}

interface The5F70B9Cfe9F14826Bf7C1C67Conditions {
  "5f71d67f413b7a71bb3d4883": string;
}

interface The5F70E2A5Dcfde927745Eb1D0 {
  conditions: The5F70E2A5Dcfde927745Eb1D0Conditions;
  location: string;
  name: string;
}

interface The5F70E2A5Dcfde927745Eb1D0Conditions {
  "5f8d63247b5bb8669b67ed4a": string;
}

interface The5F710F7Ce9F14826Bf7C1C72 {
  conditions: The5F710F7Ce9F14826Bf7C1C72Conditions;
  location: string;
  name: string;
}

interface The5F710F7Ce9F14826Bf7C1C72Conditions {
  "5f968586f4b9f84879321a41": string;
  "5f96875445904e5b11508ba4": string;
}

interface The5F75C5078Fb5C37Ce1766E95 {
  conditions: The5F75C5078Fb5C37Ce1766E95Conditions;
  location: string;
  name: string;
}

interface The5F75C5078Fb5C37Ce1766E95Conditions {
  "5f9701bc261b2c7e0322947b": string;
}

interface The5F75C578Dfacb47E146A0062 {
  conditions: The5F75C578Dfacb47E146A0062Conditions;
  location: string;
  name: string;
}

interface The5F75C578Dfacb47E146A0062Conditions {
  "5f75c578dfacb47e146a0063": string;
}

interface The5F75Fb988Fb5C37Ce1766E98 {
  conditions: The5F75Fb988Fb5C37Ce1766E98Conditions;
  location: string;
  name: string;
}

interface The5F75Fb988Fb5C37Ce1766E98Conditions {
  "5f97010ace3c6452e951c536": string;
  "5f75fb988fb5c37ce1766e99": string;
}

interface The5F75Fd4450914C5Fcc425279 {
  conditions: The5F75Fd4450914C5Fcc425279Conditions;
  location: string;
  name: string;
}

interface The5F75Fd4450914C5Fcc425279Conditions {
  "5f75fd4450914c5fcc42527a": string;
}

interface The5F75Fddbd24E8B7A9C508F3A {
  conditions: The5F75Fddbd24E8B7A9C508F3AConditions;
  location: string;
  name: string;
}

interface The5F75Fddbd24E8B7A9C508F3AConditions {
  "5f8f1423d613404c430b7895": string;
}

interface The5F79C7621F644F1Eb53Bdaf2 {
  conditions: The5F79C7621F644F1Eb53Bdaf2Conditions;
  location: string;
  name: string;
}

interface The5F79C7621F644F1Eb53Bdaf2Conditions {
  "5f9683f05d04e220425a7c5b": string;
  "5f9684e4d8069972a173dd75": string;
}

interface The5Fd9Fad9C1Ce6B1A3B486D00 {
  conditions: The5Fd9Fad9C1Ce6B1A3B486D00Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The5Fd9Fad9C1Ce6B1A3B486D00Conditions {
  "5fd9fad9c1ce6b1a3b486d05": string;
  "5fd9fad9c1ce6b1a3b486d03": string;
  "5fd9fad9c1ce6b1a3b486d0d": string;
  "5fd9fad9c1ce6b1a3b486d02": string;
  "5fdc862eaf5a054cc9333005": string;
}

interface The600302D73B897B11364Cd161 {
  conditions: The600302D73B897B11364Cd161Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The600302D73B897B11364Cd161Conditions {
  "600303250b79c6604058ce30": string;
  "600304b78dfec348e767018c": string;
  "600304c38dfec348e767018e": string;
}

interface The6086C852C945025D41566124 {
  conditions: The6086C852C945025D41566124Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The6086C852C945025D41566124Conditions {
  "6086c8ed1b0bb8063d5babb7": string;
  "6087d553d79a2b4e943482bf": string;
  "60882695949eb1096c454fcd": string;
  "608826d0a3994358a0751cfc": string;
  "608826f3949eb1096c454fd0": string;
  "60882714c18cfa2a4e2afe59": string;
  "6088274a82e40b3c727fd164": string;
  "60882779d241f77b8a49785d": string;
  "60892585b90d6f39cb74b114": string;
  "60892590fa70fc097863b8e5": string;
  "608925d455f4ac386d7e7fc4": string;
  "608930aa1124f748c94b801e": string;
  "60bf751fdb5461623517069f": string;
  "60bf75229903f107aa251f3b": string;
}

interface The60896888E4A85C72Ef3Fa300 {
  conditions: The60896888E4A85C72Ef3Fa300Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60896888E4A85C72Ef3Fa300Conditions {
  "60929ad46342771d851b827a": string;
  "60929afc35915c62b44fd05c": string;
  "60bf74f481c6e80e702ccc0f": string;
  "60bf75058bb401472c1a37f7": string;
}

interface The60896B7Bfa70Fc097863B8F5 {
  conditions: The60896B7Bfa70Fc097863B8F5Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60896B7Bfa70Fc097863B8F5Conditions {
  "60916aeac49cf53e4772cc3c": string;
  "60916b41b89a3c264d7296f9": string;
  "60ae0dfe2d6a8320983d19ba": string;
  "60ae0e2c79e83a2cf96f35ce": string;
  "60ae0f0586046842a754e21e": string;
  "60ae0f17b809a4748759078c": string;
  "60bf74bb2837926f405dd793": string;
  "60bf74c1d4526a054d42e11f": string;
}

interface The60896Bca6Ee58F38C417D4F2 {
  conditions: The60896Bca6Ee58F38C417D4F2Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60896Bca6Ee58F38C417D4F2Conditions {
  "608bffeee0cc9c2d4d2ccb29": string;
  "60bf748cbf90bf6b431e8965": string;
  "60bf7490db5461623517069e": string;
  "60c1d5a4fdcc6e06456a963b": string;
}

interface The60896E28E4A85C72Ef3Fa301 {
  conditions: The60896E28E4A85C72Ef3Fa301Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60896E28E4A85C72Ef3Fa301Conditions {
  "6091698a30bb620b3239874c": string;
  "609169cfeca522371e5725c5": string;
  "60ae12ffb809a474875907aa": string;
  "60ae134cabb9675f0062cf6e": string;
  "60bf738b4c8a3800da06e717": string;
  "60bf738e81c6e80e702ccc0e": string;
}

interface The6089732B59B92115597Ad789 {
  conditions: The6089732B59B92115597Ad789Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The6089732B59B92115597Ad789Conditions {
  "6092942fb0f07c6ea1246e3a": string;
  "6092947635915c62b44fd05b": string;
  "60bf7364c53a5709996b40bf": string;
  "60bf73682837926f405dd792": string;
}

interface The6089736Efa70Fc097863B8F6 {
  conditions: The6089736Efa70Fc097863B8F6Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The6089736Efa70Fc097863B8F6Conditions {
  "608a94101a66564e74191fc3": string;
  "608a94ae1a66564e74191fc6": string;
  "60bf734bb73d016d6838ad86": string;
  "60bf7353bf90bf6b431e8964": string;
}

interface The6089743983426423753Cd58A {
  conditions: The6089743983426423753Cd58AConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The6089743983426423753Cd58AConditions {
  "608ab22755f4ac386d7e7fdc": string;
  "60bf72dda2ae0728ec716f32": string;
  "60bf72e04c8a3800da06e716": string;
}

interface The608974Af4B05530F55550C21 {
  conditions: The608974Af4B05530F55550C21Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The608974Af4B05530F55550C21Conditions {
  "608bd0a053b9dd01a116f474": string;
  "608bd0c20637f21f9934b6e4": string;
  "608bd136c61c4b541b381da3": string;
  "608bd149f597ad0a33574d74": string;
  "608bd2465e0ef91ab810f98a": string;
  "608c187853b9dd01a116f480": string;
  "60bf72b7960b6d5d274caaf1": string;
  "60bf72bcc53a5709996b40be": string;
}

interface The608974D01A66564E74191Fc0 {
  conditions: The608974D01A66564E74191Fc0Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The608974D01A66564E74191Fc0Conditions {
  "608bfe32c61c4b541b381da9": string;
  "60a4dc7e4e734e57d07fb335": string;
  "60b90232ec7c6f5eb510c195": string;
  "60bf7284fd95cb3dfc36841f": string;
  "60bf7293b73d016d6838ad85": string;
}

interface The608A768D82E40B3C727Fd17D {
  conditions: The608A768D82E40B3C727Fd17DConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The608A768D82E40B3C727Fd17DConditions {
  "608a8356fa70fc097863b8f8": string;
  "60bf72112837926f405dd791": string;
  "60bf7557a2ae0728ec716f33": string;
}

interface The60C0C018F7Afb4354815096A {
  conditions: The60C0C018F7Afb4354815096AConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60C0C018F7Afb4354815096AConditions {
  "60c0d187938d68438757cda2": string;
  "60cfa4cd646f74055e276545": string;
  "60cfa4ee1bdece56c249cbf5": string;
  "60cfa590f81cc57f471718cc": string;
  "60cfa5a85f9e6175514de2e3": string;
}

interface The60E71B62A0Beca400D69Efc4 {
  conditions: The60E71B62A0Beca400D69Efc4Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71B62A0Beca400D69Efc4Conditions {
  "60ec07bcd7b7cb55e94c1760": string;
  "60ec08fafd1bf4491c4e4550": string;
  "60ec09f05d67b234af3d392f": string;
  "60ec0a9571035f300c301acb": string;
  "60ec0ad2ad25e3185465bbd0": string;
  "60ec0af8a664b027ab1441af": string;
  "60ec0b1871035f300c301acd": string;
  "60ec2b04bc9a8b34cd453b81": string;
  "610144955a0e3804617cd69d": string;
  "6101449a50bb44526c34c81d": string;
}

interface The60E71B9Bbd90872Cb85440F3 {
  conditions: The60E71B9Bbd90872Cb85440F3Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71B9Bbd90872Cb85440F3Conditions {
  "60ec18b73b5f7d790a7ad034": string;
  "60ec1e72d7b7cb55e94c1764": string;
  "60ec2229fd1bf4491c4e4552": string;
  "6101458b43d55d251d68e4fa": string;
  "6101458f0631930ce97dea77": string;
}

interface The60E71Bb4E456D449Cd47Ca75 {
  conditions: The60E71Bb4E456D449Cd47Ca75Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71Bb4E456D449Cd47Ca75Conditions {
  "60e8650e5d67b234af3d3926": string;
  "610145de61801e6c2626a1b3": string;
  "610145e14a065318776a1e75": string;
}

interface The60E71C11D54B755A3B53Eb65 {
  conditions: The60E71C11D54B755A3B53Eb65Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71C11D54B755A3B53Eb65Conditions {
  "60e82c12fd1bf4491c4e4547": string;
  "60e82c5926b88043510e0ad7": string;
  "6101464accda1c5f7b1dd08f": string;
  "6101464fe5b13723fc7609ae": string;
}

interface The60E71C48C1Bfa3050473B8E5 {
  conditions: The60E71C48C1Bfa3050473B8E5Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71C48C1Bfa3050473B8E5Conditions {
  "60e8658571035f300c301ac6": string;
  "60e865a60cef122b414a156a": string;
  "60e866175d67b234af3d392a": string;
  "60e866c50cef122b414a156c": string;
  "60e866f926b88043510e0adf": string;
  "60e867265d67b234af3d392c": string;
  "60f028ca86abc00cdc03ab89": string;
  "60f028f85caf08029e0d6277": string;
  "610146bcccda1c5f7b1dd090": string;
  "610146ea70fd3f687c1a747e": string;
  "62a701587230237f257cac30": string;
  "62a70168eb3cb46d9a0bba7a": string;
}

interface The60E71C9Ad54B755A3B53Eb66 {
  conditions: The60E71C9Ad54B755A3B53Eb66Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71C9Ad54B755A3B53Eb66Conditions {
  "60e745d6479eef59b01b0bdc": string;
  "610147ac43d55d251d68e4fb": string;
  "610147b0683d6b506f258f96": string;
}

interface The60E71Ccb5688F6424C7Bfec4 {
  conditions: The60E71Ccb5688F6424C7Bfec4Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71Ccb5688F6424C7Bfec4Conditions {
  "60e8174d0367e10a450f7818": string;
  "60e81795479eef59b01b0bdf": string;
  "610148054a065318776a1e76": string;
  "6101480ee5b13723fc7609af": string;
}

interface The60E71Ce009D7C801Eb0C0Ec6 {
  conditions: The60E71Ce009D7C801Eb0C0Ec6Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71Ce009D7C801Eb0C0Ec6Conditions {
  "60e74302d1a062318d3d225f": string;
  "60e7432875131b4e61703b7a": string;
  "60e7434ed1a062318d3d2260": string;
  "60e7436675131b4e61703b7b": string;
  "60e7439975131b4e61703b7c": string;
  "60e743cd0367e10a450f780e": string;
  "60e7449875131b4e61703b7e": string;
  "60e744c9d1a062318d3d2262": string;
  "61014852683d6b506f258f97": string;
  "6101485ce5b13723fc7609b0": string;
  "62a70191a9a0ea77981b57d9": string;
  "62a7019ea9a0ea77981b57da": string;
}

interface The60E71D23C1Bfa3050473B8E6 {
  conditions: The60E71D23C1Bfa3050473B8E6Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71D23C1Bfa3050473B8E6Conditions {
  "60e740b8b567ff641b129573": string;
  "610148dc4a065318776a1e77": string;
  "610148e775d59d19bb7329f2": string;
}

interface The60E71D6D7Fcf9C556F325055 {
  conditions: The60E71D6D7Fcf9C556F325055Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71D6D7Fcf9C556F325055Conditions {
  "60e84ba726b88043510e0ad8": string;
  "60e85b2a26b88043510e0ada": string;
  "6101491e6c85b961071d75fd": string;
  "6101492343d55d251d68e4fc": string;
}

interface The60E71Dc0A94Be721B065Bbfc {
  conditions: The60E71Dc0A94Be721B065BbfcConditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71Dc0A94Be721B065BbfcConditions {
  "60e73ee8b567ff641b129570": string;
  "6101498dccda1c5f7b1dd091": string;
  "61014992e5b13723fc7609b1": string;
}

interface The60E71Dc67Fcf9C556F325056 {
  conditions: The60E71Dc67Fcf9C556F325056Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71Dc67Fcf9C556F325056Conditions {
  "60e73333465ea8368012cc5b": string;
  "60e733590367e10a450f7805": string;
  "60e73397479eef59b01b0bd5": string;
  "60e733b80367e10a450f7807": string;
  "60f028268b669d08a35bfad8": string;
  "60f0284e8b669d08a35bfada": string;
  "610149ce61801e6c2626a1b4": string;
  "610149d34a065318776a1e78": string;
  "62a700fb7230237f257cac2e": string;
  "62a70110eb3cb46d9a0bba78": string;
}

interface The60E71E8Ed54B755A3B53Eb67 {
  conditions: The60E71E8Ed54B755A3B53Eb67Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E71E8Ed54B755A3B53Eb67Conditions {
  "60e7249bd1a062318d3d2244": string;
  "60e7259e465ea8368012cc45": string;
  "60e725d8b567ff641b129555": string;
  "60e72604a6e322250215f066": string;
  "60e7261382576b5f4f21c495": string;
  "60e7261eb567ff641b129557": string;
  "60e72629465ea8368012cc47": string;
  "61014a2d6c85b961071d75fe": string;
  "61014a3143d55d251d68e4fd": string;
}

interface The60E729Cf5698Ee7B05057439 {
  conditions: The60E729Cf5698Ee7B05057439Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60E729Cf5698Ee7B05057439Conditions {
  "60e729cf5698ee7b0505743c": string;
  "61014a600631930ce97dea78": string;
  "61014a6570fd3f687c1a747f": string;
}

interface The60Effd818B669D08A35Bfad5 {
  conditions: The60Effd818B669D08A35Bfad5Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The60Effd818B669D08A35Bfad5Conditions {
  "60effdac12fec20321367038": string;
  "61014aa1e10c48364e47a913": string;
  "610152752b0c65522065ea3b": string;
}

interface The613708A7F8333A5D15594368 {
  conditions: The613708A7F8333A5D15594368Conditions;
  name: string;
  note: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  description: string;
  location: string;
}

interface The613708A7F8333A5D15594368Conditions {
  "613708c98cf26538cd20d59e": string;
  "6137090327da62585838d495": string;
}

interface The6179Ac7511973D018217D0B9 {
  conditions: The6179Ac7511973D018217D0B9Conditions;
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  location: string;
}

interface The6179Ac7511973D018217D0B9Conditions {
  "6179b71211973d018217d0d9": string;
  "6179b804bca27a099552e057": string;
  "61abcc6379c3a477d0122457": string;
}

interface The6179Acbdc760Af5Ad2053585 {
  conditions: The6179Acbdc760Af5Ad2053585Conditions;
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  location: string;
}

interface The6179Acbdc760Af5Ad2053585Conditions {
  "617bd94c5a52d2390a2630c7": string;
}

interface The6179Ad0A6E9Dd54Ac275E3F2 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179Ad0A6E9Dd54Ac275E3F2Conditions;
  location: string;
}

interface The6179Ad0A6E9Dd54Ac275E3F2Conditions {
  "617bf1e1d93d977d2452051f": string;
}

interface The6179Ad56C760Af5Ad2053587 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179Ad56C760Af5Ad2053587Conditions;
  location: string;
}

interface The6179Ad56C760Af5Ad2053587Conditions {
  "617bf2a6f8e6c97ec70878b7": string;
  "617bf29a52e86c73d372a917": string;
}

interface The6179Ad74Bca27A099552E03A {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179Ad74Bca27A099552E03AConditions;
  location: string;
}

interface The6179Ad74Bca27A099552E03AConditions {
  "617bf3499202af497d1ccf79": string;
  "619040aa7d0d857927447b7b": string;
}

interface The6179Afd0Bca27A099552E040 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179Afd0Bca27A099552E040Conditions;
  location: string;
}

interface The6179Afd0Bca27A099552E040Conditions {
  "617bf439ea3cfc329331243f": string;
  "6190464d74169a76c90aa230": string;
}

interface The6179Aff8F57Fb279792C60A1 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179Aff8F57Fb279792C60A1Conditions;
  location: string;
}

interface The6179Aff8F57Fb279792C60A1Conditions {
  "617bf4e152e86c73d372a95d": string;
}

interface The6179B3A12153C15E937D52Bc {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179B3A12153C15E937D52BcConditions;
  location: string;
}

interface The6179B3A12153C15E937D52BcConditions {
  "617bf5860cf4a041de5b396b": string;
  "61926522b0295324b5484459": string;
  "6192653d80c326298126aee1": string;
  "61926544bb0c712ed42d583c": string;
}

interface The6179B3Bdc7560E13D23Eeb8D {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179B3Bdc7560E13D23Eeb8DConditions;
  location: string;
}

interface The6179B3Bdc7560E13D23Eeb8DConditions {
  "617bf6c70cf4a041de5b3972": string;
  "617bf77a3de8a6689b533a2a": string;
  "61951c3e2e2805073c2d29db": string;
  "61951c30aa0f643f9a0ae1b7": string;
}

interface The6179B4D1Bca27A099552E04E {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179B4D1Bca27A099552E04EConditions;
  location: string;
}

interface The6179B4D1Bca27A099552E04EConditions {
  "61952308aa0f643f9a0ae20f": string;
  "6195231dd07bdc6de57b40a5": string;
  "61952325aa0f643f9a0ae212": string;
  "6195232a1e972a652931edb6": string;
}

interface The6179B4F16E9Dd54Ac275E407 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179B4F16E9Dd54Ac275E407Conditions;
  location: string;
}

interface The6179B4F16E9Dd54Ac275E407Conditions {
  "6195289bea774d183b6c93aa": string;
  "61a00eff2d708d41a34f19b4": string;
  "61a00f3f177fb945751bbe92": string;
}

interface The6179B5B06E9Dd54Ac275E409 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179B5B06E9Dd54Ac275E409Conditions;
  location: string;
}

interface The6179B5B06E9Dd54Ac275E409Conditions {
  "6193dc1e6623e330c82e0be9": string;
  "6194fbf785a6d62c481a7aee": string;
}

interface The6179B5Eabca27A099552E052 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The6179B5Eabca27A099552E052Conditions;
  location: string;
}

interface The6179B5Eabca27A099552E052Conditions {
  "617fc08b30ccff6c7c37fcd3": string;
  "61a61c085d06a344766f3a29": string;
}

interface The61904Daa7D0D857927447B9C {
  conditions: The61904Daa7D0D857927447B9CConditions;
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  location: string;
}

interface The61904Daa7D0D857927447B9CConditions {
  "61904e76f62c89219a56e04c": string;
  "61904dda7845ea557e7bb808": string;
  "61904ebb22e6d82ee97ccbbe": string;
}

interface The6193850F60B34236Ee0483De {
  conditions: The6193850F60B34236Ee0483DeConditions;
  name: string;
  note: string;
  successMessageText: string;
  description: string;
  failMessageText: string;
  startedMessageText: string;
  location: string;
}

interface The6193850F60B34236Ee0483DeConditions {
  "6193dabd5f6468204470571f": string;
}

interface The61958C366726521Dd96828Ec {
  conditions: The61958C366726521Dd96828EcConditions;
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  location: string;
}

interface The61958C366726521Dd96828EcConditions {
  "61958d69d14ece31007e2df4": string;
  "61958d54aa0f643f9a0aed73": string;
}

interface The61Bb468B8D7Cac1532300Ccc {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The61Bb468B8D7Cac1532300CccConditions;
  location: string;
}

interface The61Bb468B8D7Cac1532300CccConditions {
  "61bb68ba67f83663e155e26e": string;
  "61bb68bf87a5b8528761e4e7": string;
  "61bb68df1908c67d4249a20a": string;
}

interface The61Bb47481908C67D4249A205 {
  name: string;
  note: string;
  startedMessageText: string;
  failMessageText: string;
  description: string;
  successMessageText: string;
  conditions: The61Bb47481908C67D4249A205Conditions;
  location: string;
}

interface The61Bb47481908C67D4249A205Conditions {
  "61bc887f4dbcdb6107410c97": string;
}

interface The61Bb474B1Ab5304C3817A53A {
  name: string;
  note: string;
  description: string;
  startedMessageText: string;
  failMessageText: string;
  successMessageText: string;
  conditions: The61Bb474B1Ab5304C3817A53AConditions;
  location: string;
}

interface The61Bb474B1Ab5304C3817A53AConditions {
  "61c0c89765c79a55d81cbb9a": string;
  "61c0c89a4515393de754f445": string;
  "61c0c89d71e163401b193442": string;
  "61c0c8a00f7c43015d4f6c0a": string;
}

interface The61Bb474Dce7374453B45Dfd2 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  conditions: The61Bb474Dce7374453B45Dfd2Conditions;
  location: string;
}

interface The61Bb474Dce7374453B45Dfd2Conditions {
  "61bb69e23177025bdd356695": string;
}

interface The61Bb474F8B8D2A79D012Cd6E {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  conditions: The61Bb474F8B8D2A79D012Cd6EConditions;
  location: string;
}

interface The61Bb474F8B8D2A79D012Cd6EConditions {
  "61bb6c0c6b70332c062ca7bb": string;
}

interface The61Bb47516B70332C062Ca7B9 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  conditions: The61Bb47516B70332C062Ca7B9Conditions;
  location: string;
}

interface The61Bb47516B70332C062Ca7B9Conditions {
  "61bb6d65d511a47f501702f0": string;
}

interface The61Bb475467F83663E155E26A {
  name: string;
  note: string;
  description: string;
  startedMessageText: string;
  successMessageText: string;
  failMessageText: string;
  conditions: The61Bb475467F83663E155E26AConditions;
  location: string;
}

interface The61Bb475467F83663E155E26AConditions {
  "61bca61c4366cd516008c042": string;
  "61c0ceb8609f562952454d27": string;
  "61c0ced1dffe706aba5218aa": string;
  "61c0cee0e654fb584452b96e": string;
  "61c0ceea4515393de754f44d": string;
  "61c19a737578f770c5341e9b": string;
}

interface The61Bb4756883B2C16A163870A {
  name: string;
  note: string;
  successMessageText: string;
  description: string;
  startedMessageText: string;
  failMessageText: string;
  conditions: The61Bb4756883B2C16A163870AConditions;
  location: string;
}

interface The61Bb4756883B2C16A163870AConditions {
  "61bc8d823bda6405d659484a": string;
  "61bc8d96ef0f505f0c6cd0da": string;
  "61bc8da05d27fc7c3265d68c": string;
}

interface The61Bb47578D7Cac1532300Ccd {
  name: string;
  note: string;
  description: string;
  startedMessageText: string;
  successMessageText: string;
  failMessageText: string;
  conditions: The61Bb47578D7Cac1532300CcdConditions;
  location: string;
}

interface The61Bb47578D7Cac1532300CcdConditions {
  "61bca728a0eae612383adf51": string;
  "61bca90cef0f505f0c6cd0e4": string;
  "61bcac49c5e5fb33866806c3": string;
  "61bcad27e74cdb13a01bef85": string;
  "61bcb55bc5e5fb33866806cd": string;
  "61bcb5717113f767765c801f": string;
  "61bcb586ef0f505f0c6cd0fa": string;
  "61bcb59c54ba0f00d3551eb4": string;
}

interface The61Bfa784F4378605Ca5598E1 {
  name: string;
  note: string;
  failMessageText: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  conditions: The61Bfa784F4378605Ca5598E1Conditions;
  location: string;
}

interface The61Bfa784F4378605Ca5598E1Conditions {
  "61c1944a7578f770c5341e99": string;
  "61c194d98077ed53c5195a43": string;
  "61c194f657ba1629dd052a01": string;
  "61c1952c2ecf5e52b12f9446": string;
  "61c19511fada4f6ce32e2cb4": string;
  "61c196fb8077ed53c5195a45": string;
}

interface The61E6E5E0F5B9633F6719Ed95 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The61E6E5E0F5B9633F6719Ed95Conditions;
  location: string;
}

interface The61E6E5E0F5B9633F6719Ed95Conditions {
  "61e6e679b350e406c823a205": string;
  "61e6e68db2728a406f4ad009": string;
}

interface The61E6E60223374D168A4576A6 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  conditions: The61E6E60223374D168A4576A6Conditions;
  location: string;
}

interface The61E6E60223374D168A4576A6Conditions {
  "61e6ed30d007ca50d54baae5": string;
}

interface The61E6E60C5Ca3B3783662Be27 {
  conditions: The61E6E60C5Ca3B3783662Be27Conditions;
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  startedMessageText: string;
  failMessageText: string;
  location: string;
}

interface The61E6E60C5Ca3B3783662Be27Conditions {
  "61e6f5a1eea2935bc018a2c7": string;
}

interface The61E6E615Eea2935Bc018A2C5 {
  conditions: The61E6E615Eea2935Bc018A2C5Conditions;
  name: string;
  note: string;
  successMessageText: string;
  description: string;
  failMessageText: string;
  startedMessageText: string;
  location: string;
}

interface The61E6E615Eea2935Bc018A2C5Conditions {
  "61e703205ca3b3783662be2b": string;
  "61e7034b95a8910716185486": string;
}

interface The61E6E621Bfeab00251576265 {
  conditions: The61E6E621Bfeab00251576265Conditions;
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  location: string;
}

interface The61E6E621Bfeab00251576265Conditions {
  "61e704a123374d168a4576a8": string;
}

interface The626Bd75B05F287031503C7F6 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The626Bd75B05F287031503C7F6Conditions;
  location: string;
}

interface The626Bd75B05F287031503C7F6Conditions {
  "626c2fdfbbb2011b8952b9f5": string;
  "626c3010a371ee3a7a3514cb": string;
}

interface The626Bd75C71Bd851E971B82A5 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The626Bd75C71Bd851E971B82A5Conditions;
  location: string;
}

interface The626Bd75C71Bd851E971B82A5Conditions {
  "626c305d05f287031503c7fc": string;
  "626c306147ea7f506e5493c6": string;
  "626c3064af14a41d9a1f4ea5": string;
  "62987d43b7bd956bd62a09b3": string;
}

interface The626Bd75D5Bef5D7D590Bd415 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The626Bd75D5Bef5D7D590Bd415Conditions;
  location: string;
}

interface The626Bd75D5Bef5D7D590Bd415Conditions {
  "626c30aa71bd851e971b82a6": string;
  "626c30c55bef5d7d590bd41b": string;
  "628625b64bd0065f293ed77d": string;
  "62863b9ae5b4f5010e0d30c8": string;
}

interface The626Bd75E47Ea7F506E5493C5 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The626Bd75E47Ea7F506E5493C5Conditions;
  location: string;
}

interface The626Bd75E47Ea7F506E5493C5Conditions {
  "626c3115cca1461ed63c4f9a": string;
  "626c3158a371ee3a7a3514cc": string;
}

interface The626Bdcc3A371Ee3A7A3514C5 {
  name: string;
  note: string;
  description: string;
  successMessageText: string;
  failMessageText: string;
  startedMessageText: string;
  conditions: The626Bdcc3A371Ee3A7A3514C5Conditions;
  location: string;
}

interface The626Bdcc3A371Ee3A7A3514C5Conditions {
  "626c317e05f287031503c7fd": string;
  "626c318147ea7f506e5493c7": string;
  "626c3183af14a41d9a1f4ea7": string;
}

interface Season {
  "5be3dd9c88a4504fbc1670a5": string;
  "5c0559d388a450481c1f62b8": string;
  "5c5171df88a4505c2d656cd9": string;
  "5ce3ff7d88a4501de86aa707": string;
  "5fe8c7b76c0ea413171b4271": string;
}

interface Template {
  Name: string;
  ShortName: number | string;
  Description: string;
  casingName?: string;
  RigLayoutName?: string;
  FoldedSlot?: string;
}

interface Trading {
  FullName: string;
  FirstName: string;
  Nickname: string;
  Location: string;
  Description: string;
}
