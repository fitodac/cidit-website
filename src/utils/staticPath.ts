const baseUrl = import.meta.env.BASE_URL ?? "/";

const externalPattern = /^(https?:)?\/\//;

/**
 *
 * @param url
 * @returns The normalized base URL without a trailing slash.
 */
function normalizeBase(url: string): string {
	if (!url) {
		return "";
	}
	return url.endsWith("/") ? url.slice(0, -1) : url;
}

/**
 *
 * @param path
 * @returns The normalized path without a leading slash.
 */
function normalizePath(path: string): string {
	if (!path) {
		return "";
	}
	return path.startsWith("/") ? path.slice(1) : path;
}

/**
 *
 * @param path
 * @returns The normalized path with a leading slash.
 */
export function staticPath(path: string): string {
	if (!path) {
		return baseUrl;
	}

	if (externalPattern.test(path)) {
		return path;
	}

	const normalizedBase = normalizeBase(baseUrl);
	const normalizedPath = normalizePath(path);

	if (!normalizedBase) {
		return `/${normalizedPath}`;
	}

	if (!normalizedPath) {
		return normalizedBase || "/";
	}

	return `${normalizedBase}/${normalizedPath}`;
}
