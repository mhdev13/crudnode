import dns from "dns/promises";

// Setting options for dnsPromises.lookup()
// method, all as true
const options = {
	all:true,
};

// Asynchronous function
(async function() {
	
	// Address from lookup function
	const addresses = await dns.lookup(
					'geeksforgeeks.org', options);
	
	// Printing addressescl
	console.log("from async: ");
	console.log(addresses);
})();
