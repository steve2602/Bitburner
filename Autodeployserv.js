/** @param {NS} ns **/
export async function main(ns) {
	const args = ns.flags([["help", false]]);
	if (args.help || args._.length < 1) {
		ns.tprint(`1 aug the target`);
		return;
	}
	//const hosts = ['n00dles', 'foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'the-hub', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni','rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'lexo-corp', 'global-pharm', 'unitalife', 'univ-energy', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne','helios', 'omnia','omnitek', 'blade', 'fulcrumtech', 'powerhouse-fitness', 'CSEC', 'avmnite-02h', 'I.I.I.I', 'run4theh111z' ]
	const hosts = ns.getPurchasedServers();
	ns.tprint(hosts);
for (var i=0; i<=hosts.length; i++) 					{
	 
	let host = hosts[i];
	const script = 'Hack.js'
	const script_args = args._.slice(0);

	if (!ns.serverExists(host)) {
		ns.tprint(`Server '${host}' does not exist. Aborting.`);
		return;
	}
	if (!ns.ls(ns.getHostname()).find(f => f === script)) {
		ns.tprint(`Script '${script}' does not exist. Aborting.`);
		return;
	}

	const threads = Math.floor((ns.getServerMaxRam(host) - ns.getServerUsedRam(host)) / ns.getScriptRam(script));
	ns.tprint(`Launching script '${script}' on server '${host}' with ${threads} threads and the following arguments: ${script_args}`);
	await ns.scp(script, ns.getHostname(), host);
	ns.exec(script, host, threads, ...script_args);
	
 console.log(i);
}
}
