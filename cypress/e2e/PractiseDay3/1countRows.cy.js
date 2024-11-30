import ComputersInfo from "../PractiseDay1/ComputersInfo";
import searchAndVerifyTheCount from "./helpers/1searchAndVerifyTheCount";

describe (' count rows ', () => {
    
    before(() => {
        ComputersInfo.visitWebPage();
    });
    
    it(' search and verify the count ', () => {
        searchAndVerifyTheCount.search('ACE');
        searchAndVerifyTheCount.verifyTheCountFromSearchResults();
    });
});