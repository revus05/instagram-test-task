const numsFormatter = (posts: number): string => {
	const postsStr: string = String(posts).split('').reverse().join('')

	let formattedStr: string = ''

	for (let i = 0; i < postsStr.length; i++) {
		if (i > 0 && i % 3 === 0) {
			formattedStr += ','
		}
		formattedStr += postsStr[i]
	}

	return formattedStr.split('').reverse().join('')
}

export default numsFormatter
