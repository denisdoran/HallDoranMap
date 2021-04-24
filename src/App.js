import React, { useState } from "react";

import SelectableList from "./components/SelectableList/SelectableList";
import SelectableMap from "./components/SelectableMap/SelectableMap";

/* images */
import base from "./mapImages/base.png";
import background from "./mapImages/map-bg.png";
import beaches from "./mapImages/beaches.png";
import coronado from "./mapImages/coronado.png";
import downtown from "./mapImages/downtown.png";
import eastcounty from "./mapImages/eastcounty.png";
import northcentral from "./mapImages/northcentral.png";
import northcoastal from "./mapImages/northcoastal.png";
import northinland from "./mapImages/northinland.png";
import southbay from "./mapImages/southbay.png";
import uptown from "./mapImages/uptown.png";

import "./styles.css";

export default function App() {
  /* communities array contains everything necessary to create the components */
  const communities = [
    {
      communityName: "BEACHES",
      communityImage: beaches,
      url: "https://en.wikipedia.org/wiki/List_of_beaches_in_San_Diego_County",
      area:
        "228,425,218,426,218,435,224,454,221,466,216,473,208,474,203,478,151,480,149,495,207,498,216,507,221,541,217,564,225,598,234,593,233,574,243,550,255,549,258,544,253,538,252,534,258,524,260,520,262,516,254,511,247,512,233,488,233,474,241,450,233,446,230,439,298,638,290,644,286,656,202,652,200,668,288,668,287,671,294,689,299,685,299,671,303,672,308,664,306,651,304,648,299,649,299,640"
    },
    {
      communityName: "CORONADO",
      communityImage: coronado,
      url: "https://en.wikipedia.org/wiki/Coronado,_California",
      area:
        "222,622,159,620,162,606,220,607,224,608,252,584,246,583,242,588,237,584,237,574,262,569,269,573,270,580,275,581,275,588,276,592,291,613,295,624,296,637,288,640,280,613,267,595,254,586,224,611"
    },
    {
      communityName: "DOWNTOWN",
      communityImage: downtown,
      url: "https://en.wikipedia.org/wiki/Downtown_San_Diego",
      area:
        "198,582,139,581,140,598,201,597,208,588,264,567,268,571,279,577,283,574,283,568,286,560,290,562,294,553,291,547,280,547,277,552,250,551,246,556,246,563,252,566,205,584"
    },
    {
      communityName: "EAST COUNTY",
      communityImage: eastcounty,
      url: "https://en.wikipedia.org/wiki/East_County,_San_Diego",
      area:
        "743,589,449,645,443,640,444,637,449,630,454,608,443,589,430,586,428,578,418,577,415,570,390,572,367,573,334,571,334,560,341,550,351,536,347,528,351,520,337,514,324,512,317,509,312,479,318,469,347,470,359,474,364,465,368,456,375,437,374,419,383,409,391,409,395,417,404,426,413,422,413,408,417,400,426,397,433,395,443,389,458,386,467,387,473,389,479,402,489,408,511,401,548,405,562,401,572,397,573,413,587,431,595,423,602,417,613,419,705,526,705,552,743,553"
    },
    {
      communityName: "NORTH CENTRAL",
      communityImage: northcentral,
      url: "https://en.wikipedia.org/wiki/North_County_(San_Diego_area)",
      area:
        "282,391,281,397,274,405,274,414,299,420,299,439,304,451,304,464,307,466,302,475,299,480,302,511,308,512,306,518,267,536,267,529,270,518,265,509,259,511,247,496,245,482,246,464,252,449,244,449,237,397,241,393,255,389,262,392"
    },
    {
      communityName: "NORTH COASTAL",
      communityImage: northcoastal,
      url:
        "https://www.sandiego.org/campaigns/creative-communities/north-coastal.aspx",
      area:
        "37,109,52,62,77,62,94,56,94,33,112,33,112,58,123,57,150,71,160,76,188,95,199,102,213,102,229,115,232,125,232,146,232,160,225,187,238,193,242,212,235,220,237,233,238,246,252,271,247,308,264,318,267,337,274,339,286,325,297,324,297,332,291,337,299,340,298,348,284,353,277,365,276,384,233,390,239,422,232,426,226,422,189,302,172,269,136,217,84,145,38,111"
    },
    {
      communityName: "NORTH INLAND",
      communityImage: northinland,
      url: "https://en.wikipedia.org/wiki/North_County_(San_Diego_area)",
      area:
        "118,41,130,32,180,37,180,46,246,81,247,92,752,141,757,333,747,338,745,544,708,544,705,521,651,462,614,411,600,409,598,419,588,422,578,409,574,398,579,389,571,389,559,398,535,399,514,395,499,404,483,399,480,392,475,383,463,383,442,387,431,392,424,389,414,393,411,400,411,422,404,420,396,411,391,394,378,394,379,409,372,417,373,432,363,460,355,469,345,464,314,466,312,462,315,446,309,433,311,413,285,413,283,408,282,400,291,389,283,387,280,381,280,364,291,351,303,346,302,335,299,317,289,318,271,331,267,311,253,305,251,290,258,262,243,243,242,214,246,206,247,188,242,174,242,149,238,136,239,108,229,106,214,98,199,97,129,50,117,53"
    },
    {
      communityName: "SOUTH BAY",
      communityImage: southbay,
      url: "https://en.wikipedia.org/wiki/South_Bay_(San_Diego_County)",
      area:
        "430,662,307,686,307,674,310,668,314,661,312,648,309,648,302,601,311,600,311,595,319,588,325,584,344,583,352,578,366,580,376,582,404,582,415,590,420,599,430,598,443,620,437,645,427,652"
    },
    {
      communityName: "UPTOWN URBAN",
      communityImage: uptown,
      url: "https://en.wikipedia.org/wiki/Hillcrest,_San_Diego",
      area:
        "334,517,343,528,337,530,343,537,327,562,323,575,315,584,312,590,288,584,289,573,288,567,275,549,274,545,276,534,322,519"
    }
  ];

  /* handle feedback from the components  */
  const [hoveredCommunity, setHoveredCommunity] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const handleCommunityComponentAction = (act) => {
    console.log("handleCommunityListAction act:", act);
    switch (act.type) {
      case "ITEM_MOUSE_IN":
        setHoveredCommunity(act.payload);
        break;
      case "ITEM_MOUSE_OUT":
        setHoveredCommunity("");
        break;
      case "ITEM_SELECTED":
        setSelectedCommunity(act.payload);
        break;
      case "ITEM_URL":
        setSelectedCommunity(act.payload);
        console.log("url:", act.payload);
        window.location.assign(act.payload);
        break;
      default:
        console.log("Unknown Community Component Action!");
        break;
    }
  };

  /* display the components  */
  return (
    <div className="bg_image" style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <SelectableList
          name="comm-list"
          items={communities}
          hoveredItems={hoveredCommunity}
          selectedItems={selectedCommunity}
          action={handleCommunityComponentAction}
        />

        <SelectableMap
          name="comm-map"
          items={communities}
          hoveredItems={hoveredCommunity}
          selectedItems={selectedCommunity}
          baseMapImage={base}
          action={handleCommunityComponentAction}
        />
      </div>
    </div>
  );
}
