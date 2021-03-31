/**
 * Format Date().toISOString() to MySQL Datetime
 *
 * return format YYYY-MM-DDTHH:mm:ssZ
 */
export function dateFormat(dateString) {
	const date = new Date(dateString)
	return date.toISOString().split('.')[0] + 'Z'
}

export function formatCloudinaryUrl(url) {
	return url.replace(
		'https://res.cloudinary.com/williamspacefire/image/upload/',
		''
	)
}
