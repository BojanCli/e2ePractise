import ComputersInfo from "./ComputersInfo";

describe (' add computers ', () => {
    
    before(() => {
        ComputersInfo.visitWebPage();
    });
    
    it(' add 3 new comupters ', () => {
        ComputersInfo.addNew3Computers();
    });
});