/*Initialize variable to store html ref and sorted object once and avoid dom access and object sorting on every click*/
let sortedCards,cardRef;

/*This function performs cards shuffling*/
shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		[cards[i],cards[j]] = [cards[j],cards[i]]
	}
	return cards; 
} 

/*This function performs shuffling and sorting of Cards
  desc: This function check and use Card objects if present in memory, else access/create new object(only first time when function called)
*/
sortAndShuffle  = (sort = false) => {
	cardRef 	= (!Boolean(cardRef)) ? document.getElementById("Cards") : cardRef;  
	sortedCards = (!Boolean(sortedCards)) ? [...cardRef.children] : sortedCards;
	let cards 	= (sort) ? sortedCards : shuffleCards(cardRef.children);
	for(let i = 0; i < cards.length; i++) {
        cardRef.appendChild(cards[i]);
    }
} 

/* If want to create Card blocks dynamically we can call this function on body onload event*/

/* createUlNodes = () => {
	for(let i = 1; i<=9;i++) {
		let x = document.createElement("div");
		let t = document.createTextNode(i);
		x.appendChild(t);
		x.setAttribute("class","card card"+i);
		document.getElementById("Cards").appendChild(x);
 }
}  */
