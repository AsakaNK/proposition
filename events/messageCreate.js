/**
 * @author Lothaire Guée
 * @description
 *		This event is used to store the memes in the database and add their initial reactions.
 */

 const { proposition } = require("../modules/proposition.js");
 
 /* ----------------------------------------------- */
 /* FUNCTIONS                                       */
 /* ----------------------------------------------- */
 
 /**
  * Function called when the event 'messageCreate' is emitted.
  * @param {Message} message The message created.
  * @param {Client} client The client that emitted the event.
  */
 async function execute(message, client) {
     
    proposition(message);
}
 
 
 /* ----------------------------------------------- */
 /* MODULE EXPORTS                                  */
 /* ----------------------------------------------- */
 module.exports = {
     name: "messageCreate",
     execute,
 };