const staticData = {
	phone: "0981 966 144",
	email: "info@cidit.com",
	facebook: "https://www.facebook.com/CIDITpy",
	x: "https://x.com/ciditpy",
	instagram: "https://www.instagram.com/ciditpy/",
	youtube: "https://www.youtube.com/@ciditpy",
} as { [key: string]: string | number };

/**
 *
 *
 *
 * @param key
 * @returns The value at `key` in `staticData`, or an empty string if `key` is not found.
 */
export const data = (key: string) => {
	if (!key) return "";
	return staticData[key] || "";
};
