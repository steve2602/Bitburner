/** @param {NS} ns **/
export async function main(ns) {
	var target = ns.args[0];
	var sTime = ns.args[1];

	if (sTime > 0) {
		await ns.sleep(sTime);
	}

	await ns.grow(target);
}
