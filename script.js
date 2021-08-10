$(document).ready(function(){
         
    $.getJSON("data.json",
    function(data){

        var text = "";
        let TYPE2_LIST = data["VARIANTS"]["TYPE2_LIST"];

        for (const key in TYPE2_LIST) {
            if (Object.hasOwnProperty.call(TYPE2_LIST, key)) {
                text += `
                ID: ${TYPE2_LIST[key]["ID"]} 
                LIST_NO: ${TYPE2_LIST[key]["LIST_NO"]} 
                COLOR_CODE: ${TYPE2_LIST[key]["COLOR_CODE"]}
                IMAGE: ${TYPE2_LIST[key]["IMAGE"]}
                COUNT: ${TYPE2_LIST[key]["COUNT"]}
                SELECTED: ${TYPE2_LIST[key]["SELECTED"]}
                NAME: ${TYPE2_LIST[key]["NAME"]}<br><hr>`;
        }
    }  

        var text2 = "";
        let BRANDS=data['BRANDS'];                   

        for (const key in BRANDS) {
            if (Object.hasOwnProperty.call(BRANDS, key)) {
                    text2 += `
                    COUNT: ${BRANDS[key]["COUNT"]}
                    ID: ${BRANDS[key]["ID"]}
                    NAME: ${BRANDS[key]["NAME"]}
                    URL: ${BRANDS[key]["URL"]}
                    SELECTED: ${BRANDS[key]["SELECTED"]}<br><hr>`;
            }   
        }

        var text3 = "";
        let CATEGORIES = data["CATEGORIES"];
        
        for (const key in CATEGORIES) {
            if (Object.hasOwnProperty.call(CATEGORIES, key)) {
                text3 += `
                ID: ${CATEGORIES[key]["ID"]}
                NAME: ${CATEGORIES[key]["NAME"]}
                URL: ${CATEGORIES[key]["URL"]}
                COUNT: ${CATEGORIES[key]["COUNT"]}
                SELECTED: ${CATEGORIES[key]["SELECTED"]}
                ROW_NUMBER: ${CATEGORIES[key]["ROW_NUMBER"]}`;
                
                
            }
        }

        var text4 = "";
        let CATEGORIES_2 = data["CATEGORIES"][0]["CHILDREN"];

        for (const key in CATEGORIES_2) {
            if (Object.hasOwnProperty.call(CATEGORIES_2, key)) {
                text4 += `
                ID: ${CATEGORIES_2[key]["ID"]}
                NAME: ${CATEGORIES_2[key]["NAME"]}
                URL: ${CATEGORIES_2[key]["URL"]}
                COUNT: ${CATEGORIES_2[key]["COUNT"]}
                SELECTED: ${CATEGORIES_2[key]["SELECTED"]}<br><hr>`;
            }
        }
        
        var text5 = "";
        let PRICE = data["PRICE"];

        for (const key in PRICE) {
            if (Object.hasOwnProperty.call(PRICE, key)) {
                text5 = `
                MIN: ${PRICE["MIN"]} 
                MAX: ${PRICE["MAX"]} 
                MIN_SELECTED: ${PRICE["MIN_SELECTED"]}  
                MAX_SELECTED: ${PRICE["MAX_SELECTED"]} <br><hr>`;
            }
        }

        var text6 = "";
        let SETTINGS = data["SETTINGS"];
        
        for (const key in SETTINGS) {
            if (Object.hasOwnProperty.call(SETTINGS, key)) {
                text6 = `
                LANGUAGE: ${SETTINGS["LANGUAGE"]} 
                SHOW_COUNT: ${SETTINGS["SHOW_COUNT"]}`;
            }
        }

        document.getElementById("test").innerHTML  = text;
        document.getElementById("test2").innerHTML = text2;
        document.getElementById("test3").innerHTML = text3;
        document.getElementById("test4").innerHTML = text4;
        document.getElementById("test5").innerHTML = text5;
        document.getElementById("test6").innerHTML = text6;
    });
});