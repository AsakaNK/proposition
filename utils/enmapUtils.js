/**
 * @author Lothaire Guée
 * @description
 *      Contains the function linked to the database.
 */


/* ----------------------------------------------- */
/* DATABASES INITILIZATION                         */
/* ----------------------------------------------- */
const Enmap = require("enmap");


// SETUP
const setupProposition = new Enmap({ name: "setup_proposition" });


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */

/**
 * Commentaires
 * @returns {String} Channel ID by passing the Guild ID and the type of
 * the channel you want to search.
 * Example : getSetupData(GUILD_ID, "presentation") but it can be : "proposition" or "discussion"
 */
async function getSetupData(id, type) {

    switch (type) {
        case "proposition":
            // Here id is the channel
            return await getResultsKey(setupProposition, id)

    }

}

async function getResultsKey(db, id) {
    let result;
    db.fetchEverything()?.forEach(async(value, key) => {
        if (key === id)
            result = key;
    })
    return result;
}


/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
    getSetupData, 
    setupProposition,
}