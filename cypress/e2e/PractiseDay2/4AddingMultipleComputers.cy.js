import ComputersInfo from "./helpers/4ComputersInfo";

describe (' add computers ', () => {
    
    before(() => {
        ComputersInfo.visitWebPage();
    });
    
    it(' add 3 new comupters ', () => {
        ComputersInfo.addNew3Computers();
    });
});